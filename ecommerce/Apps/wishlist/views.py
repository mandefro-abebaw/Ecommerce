from rest_framework import generics, permissions, status
from rest_framework.response import Response
from apps.wishlist.models import Wishlist, WishlistItem
from apps.wishlist.serializers import WishlistSerializer, AddWishlistItemSerializer
from apps.products.models import Product


def get_user_wishlist(user):
    wishlist, created = Wishlist.objects.get_or_create(user=user)
    return wishlist


class WishlistDetailAPIView(generics.RetrieveAPIView):
    serializer_class = WishlistSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_object(self):
        return get_user_wishlist(self.request.user)


class AddToWishlistAPIView(generics.CreateAPIView):
    serializer_class = AddWishlistItemSerializer
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request, *args, **kwargs):
        wishlist = get_user_wishlist(request.user)
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        product_id = serializer.validated_data["product_id"]

        try:
            product = Product.objects.get(id=product_id)
        except Product.DoesNotExist:
            return Response({"error": "Product not found"}, status=404)

        # Avoid duplicates
        item, created = WishlistItem.objects.get_or_create(
            wishlist=wishlist,
            product=product
        )

        if not created:
            return Response({"message": "Already in wishlist"}, status=200)

        return Response({"message": "Added to wishlist"}, status=201)


class RemoveWishlistItemAPIView(generics.DestroyAPIView):
    permission_classes = [permissions.IsAuthenticated]

    def delete(self, request, *args, **kwargs):
        wishlist = get_user_wishlist(request.user)

        item = WishlistItem.objects.filter(
            wishlist=wishlist,
            id=kwargs["pk"]
        ).first()

        if not item:
            return Response({"error": "Item not found"}, status=404)

        item.delete()
        return Response({"message": "Removed from wishlist"}, status=200)
