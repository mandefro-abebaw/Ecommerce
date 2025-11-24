from rest_framework import generics, permissions, status
from rest_framework.response import Response
from .models import Payment
from .serializers import PaymentSerializer
from .services import create_payment_intent
from orders.models import Order

class CreatePaymentAPIView(generics.CreateAPIView):
    serializer_class = PaymentSerializer
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request, *args, **kwargs):
        order_id = request.data.get('order_id')
        order = Order.objects.get(id=order_id, user=request.user)

        # Create PaymentIntent via Stripe
        intent = create_payment_intent(amount=order.total_price, metadata={'order_id': order.id})

        payment = Payment.objects.create(
            user=request.user,
            order=order,
            amount=order.total_price,
            stripe_payment_intent=intent.id,
            status='pending'
        )

        return Response({
            'payment_id': payment.id,
            'client_secret': intent.client_secret
        }, status=201)


class UserPaymentsAPIView(generics.ListAPIView):
    serializer_class = PaymentSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return Payment.objects.filter(user=self.request.user).order_by('-created_at')
