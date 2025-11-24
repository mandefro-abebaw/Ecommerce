from django.db import models
from django.contrib.auth import get_user_model
from django.utils import timezone
from products.models import Product

User = get_user_model()

class Review(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="reviews")
    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name="reviews")
    rating = models.PositiveSmallIntegerField()  # 1–5
    comment = models.TextField(blank=True)
    created_at = models.DateTimeField(default=timezone.now)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        unique_together = ("user", "product")  # user can review product only once
        ordering = ["-created_at"]

    def __str__(self):
        return f"{self.product.title} - {self.rating}⭐ by {self.user.username}"
