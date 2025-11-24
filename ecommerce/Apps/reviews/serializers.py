from rest_framework import serializers
from .models import Review

class ReviewSerializer(serializers.ModelSerializer):
    user = serializers.StringRelatedField(read_only=True)
    product_name = serializers.CharField(source="product.title", read_only=True)

    class Meta:
        model = Review
        fields = [
            "id",
            "user",
            "product",
            "product_name",
            "rating",
            "comment",
            "created_at",
            "updated_at",
        ]

    def validate_rating(self, value):
        if value < 1 or value > 5:
            raise serializers.ValidationError("Rating must be between 1 and 5.")
        return value

    def create(self, validated_data):
        validated_data["user"] = self.context["request"].user
        return super().create(validated_data)
