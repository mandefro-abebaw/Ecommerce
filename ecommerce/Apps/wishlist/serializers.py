from rest_framework import serializers
from apps.wishlist.models import Wishlist, WishlistItem
from apps.products.serializers import ProductSerializer


class WishlistItemSerializer(serializers.ModelSerializer):
    product = ProductSerializer(read_only=True)

    class Meta:
        model = WishlistItem
        fields = ["id", "product"]


class AddWishlistItemSerializer(serializers.Serializer):
    product_id = serializers.IntegerField()


class WishlistSerializer(serializers.ModelSerializer):
    items = WishlistItemSerializer(many=True, read_only=True)

    class Meta:
        model = Wishlist
        fields = ["id", "items"]
