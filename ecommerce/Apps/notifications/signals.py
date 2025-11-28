from django.db.models.signals import post_save
from django.dispatch import receiver
from apps.orders.models import Order
from apps.notifications.models import Notification
from apps.notifications.email_services import send_notification_email
from apps.notifications.sms_service import send_sms_notification

@receiver(post_save, sender=Order)
def order_status_notification(sender, instance, created, **kwargs):
    user = instance.user

    if created:
        # New order placed
        message = f"Your order #{instance.id} has been placed successfully."
        Notification.objects.create(
            user=user,
            message=message,
            notification_type="order"
        )
        send_notification_email(user, message)

    else:
        # Order status updated
        message = f"Your order #{instance.id} status is now: {instance.status}."
        Notification.objects.create(
            user=user,
            message=message,
            notification_type="shipping"
        )
        send_notification_email(user, message)

        # Optional SMS  
        if hasattr(user, "phone_number") and user.phone_number:
            send_sms_notification(user.phone_number, message)
