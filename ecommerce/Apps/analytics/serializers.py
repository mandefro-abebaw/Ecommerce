from rest_framework import serializers
from apps.analytics.models import AnalyticsReport

class AnalyticsReportSerializer(serializers.ModelSerializer):
    class Meta:
        model = AnalyticsReport
        fields = "__all__"
