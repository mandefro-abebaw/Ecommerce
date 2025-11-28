from django.urls import path
from apps.payments.views import CreatePaymentAPIView, UserPaymentsAPIView
from apps.payments.webhooks import stripe_webhook

urlpatterns = [
    path('create/', CreatePaymentAPIView.as_view(), name='create-payment'),
    path('my-payments/', UserPaymentsAPIView.as_view(), name='user-payments'),
    path('webhook/stripe/', stripe_webhook, name='stripe-webhook'),
]
