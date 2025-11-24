import base64
from email.mime.text import MIMEText
from google.oauth2.credentials import Credentials
from googleapiclient.discovery import build
from django.core.mail import send_mail
from django.conf import settings


def send_notification_email(user, message):
    """Try Gmail API first, fallback to SMTP if fails."""
    try:
        send_via_gmail_api(user.email, message)
    except Exception as e:
        print("Gmail API failed → using SMTP:", e)
        send_via_smtp(user.email, message)


# ---------------------------
# 1. Gmail API sending
# ---------------------------
def send_via_gmail_api(to_email, message):
    creds = Credentials.from_authorized_user_file(
        settings.GMAIL_TOKEN_JSON,
        ["https://www.googleapis.com/auth/gmail.send"]
    )

    service = build("gmail", "v1", credentials=creds)

    mime_message = MIMEText(message)
    mime_message["to"] = to_email
    mime_message["subject"] = "Notification From Your Store"

    raw_msg = base64.urlsafe_b64encode(mime_message.as_bytes()).decode()

    message_body = {"raw": raw_msg}

    service.users().messages().send(userId="me", body=message_body).execute()


# ---------------------------
# 2. SMTP fallback
# ---------------------------
def send_via_smtp(to_email, message):
    send_mail(
        subject="Notification From Your Store",
        message=message,
        from_email=settings.DEFAULT_FROM_EMAIL,
        recipient_list=[to_email],
        fail_silently=False,
    )
