from rest_framework import serializers
from .models import ShippingAddress

class ShippingAddressSerializer(serializers.ModelSerializer):
    class Meta:
        model = ShippingAddress
        fields = "__all__"
        read_only_fields = ("user", "created_at")

    def create(self, validated_data):
        user = self.context["request"].user
        validated_data["user"] = user

        # If setting as default, remove other defaults
        if validated_data.get("is_default", False):
            ShippingAddress.objects.filter(user=user).update(is_default=False)

        return super().create(validated_data)

    def update(self, instance, validated_data):
        user = self.context["request"].user

        if validated_data.get("is_default", False):
            ShippingAddress.objects.filter(user=user).update(is_default=False)

        return super().update(instance, validated_data)
