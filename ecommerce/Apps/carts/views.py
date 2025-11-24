from rest_framework import generics, permissions, status
from rest_framework.response import Response
from .models import Cart, CartItem
from .serializers import CartSerializer, AddCartItemSerializer
from products.models import Product


def get_user_cart(user):
    cart, created = Cart.objects.get_or_create(user=user)
    return cart


class CartDetailAPIView(generics.RetrieveAPIView):
    serializer_class = CartSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_object(self):
        return get_user_cart(self.request.user)


class AddToCartAPIView(generics.CreateAPIView):
    serializer_class = AddCartItemSerializer
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request, *args, **kwargs):
        cart = get_user_cart(request.user)
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        product_id = serializer.validated_data["product_id"]
        quantity = serializer.validated_data["quantity"]

        try:
            product = Product.objects.get(id=product_id)
        except Product.DoesNotExist:
            return Response({"error": "Product not found"}, status=404)

        cart_item, created = CartItem.objects.get_or_create(
            cart=cart,
            product=product
        )

        if not created:
            cart_item.quantity += quantity

        cart_item.save()

        return Response({"message": "Item added to cart"}, status=201)


class UpdateCartItemAPIView(generics.UpdateAPIView):
    queryset = CartItem.objects.all()
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = AddCartItemSerializer

    def patch(self, request, *args, **kwargs):
        cart_item = self.get_queryset().filter(
            cart__user=request.user,
            id=kwargs["pk"]
        ).first()

        if not cart_item:
            return Response({"error": "Item not found"}, status=404)

        quantity = request.data.get("quantity")
        if int(quantity) <= 0:
            cart_item.delete()
            return Response({"message": "Item removed"}, status=200)

        cart_item.quantity = quantity
        cart_item.save()

        return Response({"message": "Quantity updated"}, status=200)


class RemoveCartItemAPIView(generics.DestroyAPIView):
    permission_classes = [permissions.IsAuthenticated]

    def delete(self, request, *args, **kwargs):
        cart_item = CartItem.objects.filter(
            cart__user=request.user,
            id=kwargs["pk"]
        ).first()

        if not cart_item:
            return Response({"error": "Item not found"}, status=404)

        cart_item.delete()
        return Response({"message": "Item removed"}, status=200)
