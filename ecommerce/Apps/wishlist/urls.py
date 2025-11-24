from django.urls import path
from .views import (
    WishlistDetailAPIView,
    AddToWishlistAPIView,
    RemoveWishlistItemAPIView,
)

urlpatterns = [
    path("", WishlistDetailAPIView.as_view(), name="wishlist-detail"),
    path("add/", AddToWishlistAPIView.as_view(), name="wishlist-add"),
    path("remove/<int:pk>/", RemoveWishlistItemAPIView.as_view(), name="wishlist-remove"),
]
