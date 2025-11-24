from django.db import models
from django.contrib.auth import get_user_model
from django.utils import timezone

User = get_user_model()

class Notification(models.Model):
    NOTIFICATION_TYPES = (
        ("order", "Order Update"),
        ("shipping", "Shipping Update"),
        ("general", "General Notification"),
    )

    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="notifications")
    message = models.TextField()
    notification_type = models.CharField(max_length=20, choices=NOTIFICATION_TYPES, default="general")
    is_read = models.BooleanField(default=False)
    created_at = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return f"{self.user.username} - {self.notification_type} - {self.message[:40]}"

    class Meta:
        ordering = ["-created_at"]
