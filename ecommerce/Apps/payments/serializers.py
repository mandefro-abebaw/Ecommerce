from rest_framework import serializers
from .models import Payment

class PaymentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Payment
        fields = ['id', 'user', 'order', 'amount', 'status', 'stripe_payment_intent', 'created_at']
        read_only_fields = ['status', 'stripe_payment_intent', 'created_at']
