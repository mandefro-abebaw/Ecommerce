from rest_framework import serializers
from .models import Order, OrderItem
from products.serializers import ProductSerializer  # Adjust path
from shipping.models import ShippingAddress

class OrderItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = OrderItem
        fields = ["product", "quantity", "price"]


class OrderSerializer(serializers.ModelSerializer):
    items = OrderItemSerializer(many=True, read_only=True)
    shipping_address = serializers.StringRelatedField()

    class Meta:
        model = Order
        fields = ["id", "user", "shipping_address", "total_price", "status", "items", "created_at"]
class CheckoutSerializer(serializers.Serializer):
    shipping_address_id = serializers.IntegerField()

    def validate_shipping_address_id(self, value):
        user = self.context["request"].user
        try:
            return ShippingAddress.objects.get(id=value, user=user)
        except ShippingAddress.DoesNotExist:
            raise serializers.ValidationError("Invalid shipping address.")

    def create(self, validated_data):
        user = self.context["request"].user
        shipping_address = validated_data["shipping_address_id"]

        # Get cart items
        cart = user.cart.items.all()
        if not cart.exists():
            raise serializers.ValidationError("Cart is empty.")

        # Create order
        order = Order.objects.create(
            user=user,
            shipping_address=shipping_address,
            total_price=sum(item.product.price * item.quantity for item in cart)
        )

        # Create order items
        for item in cart:
            OrderItem.objects.create(
                order=order,
                product=item.product,
                quantity=item.quantity,
                price=item.product.price,
            )

        # Clear cart
        cart.delete()

        return order
