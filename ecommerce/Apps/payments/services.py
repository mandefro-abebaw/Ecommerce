import stripe
from django.conf import settings

stripe.api_key = settings.STRIPE_SECRET_KEY

def create_payment_intent(amount, currency='usd', metadata=None):
    """
    Creates a Stripe PaymentIntent for a given amount and currency.
    """
    intent = stripe.PaymentIntent.create(
        amount=int(amount * 100),  # Stripe expects cents
        currency=currency,
        metadata=metadata or {},
    )
    return intent

def retrieve_payment_intent(payment_intent_id):
    return stripe.PaymentIntent.retrieve(payment_intent_id)
