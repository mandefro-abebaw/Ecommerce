from django.urls import path
from apps.carts.views import (
    CartDetailAPIView,
    AddToCartAPIView,
    UpdateCartItemAPIView,
    RemoveCartItemAPIView,
)

urlpatterns = [
    path("", CartDetailAPIView.as_view(), name="cart-detail"),
    path("add/", AddToCartAPIView.as_view(), name="cart-add"),
    path("update/<int:pk>/", UpdateCartItemAPIView.as_view(), name="cart-update"),
    path("remove/<int:pk>/", RemoveCartItemAPIView.as_view(), name="cart-remove"),
]
