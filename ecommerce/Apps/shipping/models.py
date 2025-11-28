from django.db import models
from django.contrib.auth.models import User
from django.conf import settings

class ShippingAddress(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name="shipping_addresses")
    full_name = models.CharField(max_length=150)
    phone = models.CharField(max_length=20)
    country = models.CharField(max_length=100)
    city = models.CharField(max_length=100)
    sub_city = models.CharField(max_length=100, blank=True, null=True)
    street_address = models.CharField(max_length=255)
    postal_code = models.CharField(max_length=20, blank=True, null=True)

    is_default = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name = "Shipping Address"
        verbose_name_plural = "Shipping Addresses"

    def __str__(self):
        return f"{self.full_name} - {self.city}"
