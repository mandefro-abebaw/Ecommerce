from django.urls import path
from apps.reviews.views import (
    CreateReviewAPIView,
    ProductReviewsAPIView,
    UserReviewsAPIView,
    ReviewDetailAPIView,
)

urlpatterns = [
    path("create/", CreateReviewAPIView.as_view(), name="review-create"),
    path("product/<int:product_id>/", ProductReviewsAPIView.as_view(), name="product-reviews"),
    path("my-reviews/", UserReviewsAPIView.as_view(), name="user-reviews"),
    path("<int:pk>/", ReviewDetailAPIView.as_view(), name="review-detail"),
]
