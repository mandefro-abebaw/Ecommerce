from django.contrib import admin
from .models import Order, OrderItem

class OrderItemInline(admin.TabularInline):
    model = OrderItem
    readonly_fields = ("product", "quantity", "price")
    extra = 0

class OrderAdmin(admin.ModelAdmin):
    list_display = ("id", "user", "shipping_address", "total_price", "status", "created_at")
    list_filter = ("status", "created_at")
    search_fields = ("user__username",)
    inlines = [OrderItemInline]

    def get_queryset(self, request):
        qs = super().get_queryset(request)
        if request.user.is_superuser:
            return qs
        return qs.filter(user=request.user)

    def has_change_permission(self, request, obj=None):
        if obj and not request.user.is_superuser:
            return obj.user == request.user
        return True

    def has_delete_permission(self, request, obj=None):
        if obj and not request.user.is_superuser:
            return obj.user == request.user
        return True

admin.site.register(Order, OrderAdmin)
admin.site.register(OrderItem)
