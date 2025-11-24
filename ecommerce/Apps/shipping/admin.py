from django.contrib import admin
from .models import ShippingAddress

class ShippingAddressAdmin(admin.ModelAdmin):
    list_display = ("full_name", "user", "city", "country", "is_default", "created_at")
    search_fields = ("full_name", "city", "country", "user__username")
    list_filter = ("country", "is_default", "created_at")

    # Only show addresses belonging to logged-in user
    def get_queryset(self, request):
        qs = super().get_queryset(request)
        if request.user.is_superuser:
            return qs
        return qs.filter(user=request.user)

    # Auto-set user if a staff member adds an address
    def save_model(self, request, obj, form, change):
        if not obj.pk:  # on create
            obj.user = request.user
        obj.save()

    # Prevent staff from editing/deleting other users' addresses
    def has_change_permission(self, request, obj=None):
        if obj is not None and not request.user.is_superuser:
            return obj.user == request.user
        return True

    def has_delete_permission(self, request, obj=None):
        if obj is not None and not request.user.is_superuser:
            return obj.user == request.user
        return True

admin.site.register(ShippingAddress, ShippingAddressAdmin)
