import africastalking
from twilio.rest import Client
from django.conf import settings


# ---------------------------
# 1. Twilio SMS
# ---------------------------
def send_sms_twilio(phone_number, message):
    try:
        client = Client(settings.TWILIO_SID, settings.TWILIO_AUTH_TOKEN)

        client.messages.create(
            body=message,
            from_=settings.TWILIO_PHONE_NUMBER,
            to=phone_number
        )
        print("SMS sent via Twilio!")
    except Exception as e:
        print("Twilio SMS failed:", e)


# ---------------------------
# 2. Africa's Talking SMS
# ---------------------------
def send_sms_africastalking(phone_number, message):
    try:
        africastalking.initialize(
            settings.AT_USERNAME,
            settings.AT_API_KEY
        )

        sms = africastalking.SMS
        sms.send(message, [phone_number])
        print("SMS sent via Africa's Talking!")
    except Exception as e:
        print("Africa's Talking SMS failed:", e)


# ---------------------------
# Main function used by signals
# ---------------------------
def send_sms_notification(phone_number, message):
    """Try Africa’s Talking first → fallback to Twilio."""

    try:
        send_sms_africastalking(phone_number, message)
    except:
        send_sms_twilio(phone_number, message)
