from django.db import models
from django.contrib.auth import get_user_model
from apps.products.models import Product
from apps.orders.models import Order, OrderItem

User = get_user_model()

class AnalyticsReport(models.Model):
    REPORT_TYPES = (
        ("sales", "Sales"),
        ("products", "Products"),
        ("users", "Users"),
    )

    name = models.CharField(max_length=100)
    report_type = models.CharField(max_length=50, choices=REPORT_TYPES)
    created_at = models.DateTimeField(auto_now_add=True)
    data = models.JSONField()  # store aggregated analytics as JSON
    generated_by = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)

    def __str__(self):
        return f"{self.name} ({self.report_type})"
