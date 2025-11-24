from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/accounts/', include('apps.accounts.urls')),   # Account endpoints
    path('api/products/', include('apps.products.urls')),  

    # Add other apps
    path('api/cart/', include('apps.cart.urls')),           # Cart endpoints
    path('api/orders/', include('apps.orders.urls')),       # Orders endpoints
    path('api/shipping/', include('apps.shipping.urls')),   # Shipping endpoints
    path('api/payments/', include('apps.payments.urls')),   # Payments endpoints
    path('api/wishlist/', include('apps.wishlist.urls')),   # Wishlist endpoints
    path('api/reviews/', include('apps.reviews.urls')),     # Reviews endpoints
    path('api/notifications/', include('apps.notifications.urls')),  # Notifications endpoints
    path('api/analytics/', include('apps.analytics.urls')),          # Analytics endpoints
]
