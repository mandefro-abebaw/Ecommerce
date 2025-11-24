from django.urls import path
from .views import (
    PlaceOrderAPIView,
    UserOrdersAPIView,
    OrderDetailAPIView,
    AdminUpdateOrderStatusAPIView
)

urlpatterns = [
    path("place-order/", PlaceOrderAPIView.as_view(), name="place-order"),
    path("my-orders/", UserOrdersAPIView.as_view(), name="user-orders"),
    path("order/<int:pk>/", OrderDetailAPIView.as_view(), name="order-detail"),
    path("admin/order-status/<int:pk>/", AdminUpdateOrderStatusAPIView.as_view(), name="admin-update-order-status"),
]
