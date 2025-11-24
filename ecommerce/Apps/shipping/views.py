from rest_framework import viewsets, permissions
from .models import ShippingAddress
from .serializers import ShippingAddressSerializer

class IsOwnerOnly(permissions.BasePermission):
    def has_object_permission(self, request, view, obj):
        return obj.user == request.user or request.user.is_superuser

class ShippingAddressViewSet(viewsets.ModelViewSet):
    serializer_class = ShippingAddressSerializer
    permission_classes = [permissions.IsAuthenticated, IsOwnerOnly]

    def get_queryset(self):
        user = self.request.user
        if user.is_superuser:
            return ShippingAddress.objects.all()
        return ShippingAddress.objects.filter(user=user)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
