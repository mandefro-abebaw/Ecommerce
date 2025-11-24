from orders.models import Order, OrderItem
from products.models import Product
from django.contrib.auth import get_user_model
from datetime import datetime, timedelta

User = get_user_model()

def generate_sales_report():
    """Returns total sales per day for last 30 days"""
    end_date = datetime.now()
    start_date = end_date - timedelta(days=30)
    orders = Order.objects.filter(created_at__range=[start_date, end_date])
    
    sales_data = {}
    for order in orders:
        day = order.created_at.strftime("%Y-%m-%d")
        sales_data[day] = sales_data.get(day, 0) + order.total_price
    return sales_data

def generate_product_report():
    """Returns total quantity sold per product"""
    items = OrderItem.objects.all()
    product_data = {}
    for item in items:
        product_name = item.product.name
        product_data[product_name] = product_data.get(product_name, 0) + item.quantity
    return product_data

def generate_user_report():
    """Returns total orders per user"""
    users = User.objects.all()
    user_data = {}
    for user in users:
        count = user.orders.count()
        user_data[user.email] = count
    return user_data
