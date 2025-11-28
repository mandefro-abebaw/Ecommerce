from django.apps import AppConfig
# from apps.notifications.signals import *


class NotificationsConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'apps.notifications'
    # def ready(self):
    #     import apps.notifications.signals
