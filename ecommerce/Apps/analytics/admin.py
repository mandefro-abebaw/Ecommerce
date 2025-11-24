from django.contrib import admin
from .models import AnalyticsReport

@admin.register(AnalyticsReport)
class AnalyticsReportAdmin(admin.ModelAdmin):
    list_display = ["name", "report_type", "created_at", "generated_by"]
    list_filter = ["report_type", "created_at"]
    search_fields = ["name", "generated_by__email"]
