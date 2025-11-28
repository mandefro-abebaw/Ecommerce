from django.urls import path
from apps.analytics.views import AnalyticsReportListAPIView, GenerateAnalyticsReportAPIView

urlpatterns = [
    path("reports/", AnalyticsReportListAPIView.as_view(), name="analytics-list"),
    path("reports/generate/", GenerateAnalyticsReportAPIView.as_view(), name="analytics-generate"),
]
