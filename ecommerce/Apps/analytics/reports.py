from .services import generate_sales_report, generate_product_report, generate_user_report
from .models import AnalyticsReport
from django.contrib.auth import get_user_model

User = get_user_model()

def create_sales_report(user=None):
    data = generate_sales_report()
    report = AnalyticsReport.objects.create(
        name="Sales Report",
        report_type="sales",
        data=data,
        generated_by=user
    )
    return report

def create_product_report(user=None):
    data = generate_product_report()
    report = AnalyticsReport.objects.create(
        name="Product Report",
        report_type="products",
        data=data,
        generated_by=user
    )
    return report

def create_user_report(user=None):
    data = generate_user_report()
    report = AnalyticsReport.objects.create(
        name="User Report",
        report_type="users",
        data=data,
        generated_by=user
    )
    return report
