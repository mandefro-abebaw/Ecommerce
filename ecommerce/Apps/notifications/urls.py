from django.urls import path
from apps.notifications.views import (
    UserNotificationsAPIView,
    MarkNotificationReadAPIView,
    MarkAllReadAPIView
)

urlpatterns = [
    path("", UserNotificationsAPIView.as_view(), name="user-notifications"),
    path("<int:pk>/read/", MarkNotificationReadAPIView.as_view(), name="mark-notification-read"),
    path("read-all/", MarkAllReadAPIView.as_view(), name="mark-all-read"),
]
