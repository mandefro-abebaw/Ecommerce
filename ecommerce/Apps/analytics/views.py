from django.shortcuts import render

# Create your views here.
from rest_framework import generics, permissions
from .models import AnalyticsReport
from apps.analytics.serializers import AnalyticsReportSerializer
from apps.analytics.reports import create_sales_report, create_product_report, create_user_report
from rest_framework.response import Response

class AnalyticsReportListAPIView(generics.ListAPIView):
    serializer_class = AnalyticsReportSerializer
    permission_classes = [permissions.IsAdminUser]

    def get_queryset(self):
        return AnalyticsReport.objects.all().order_by("-created_at")

class GenerateAnalyticsReportAPIView(generics.GenericAPIView):
    permission_classes = [permissions.IsAdminUser]

    def post(self, request, *args, **kwargs):
        report_type = request.data.get("report_type")
        if report_type == "sales":
            report = create_sales_report(user=request.user)
        elif report_type == "products":
            report = create_product_report(user=request.user)
        elif report_type == "users":
            report = create_user_report(user=request.user)
        else:
            return Response({"error": "Invalid report type"}, status=400)

        return Response(AnalyticsReportSerializer(report).data)
