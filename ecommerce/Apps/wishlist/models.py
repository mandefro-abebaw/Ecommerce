from django.db import models
from django.contrib.auth import get_user_model
from products.models import Product

User = get_user_model()

class Wishlist(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name="wishlist")
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.user.email}'s Wishlist"


class WishlistItem(models.Model):
    wishlist = models.ForeignKey(Wishlist, on_delete=models.CASCADE, related_name="items")
    product = models.ForeignKey(Product, on_delete=models.CASCADE)

    class Meta:
        unique_together = ("wishlist", "product")

    def __str__(self):
        return f"{self.product.name} in {self.wishlist.user.email}'s wishlist"
