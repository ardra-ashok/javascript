from telethon import TelegramClient

# Replace these with your own values
api_id = '22862011'
api_hash = '6233ee21b9120bf14f3bc07572e24b48'
phone_number = '+15712944731'  # Format: +1234567890

client = TelegramClient('session_name', api_id, api_hash)

async def main():
    await client.start()
    try:
        user = await client.get_entity(phone_number)
        print(f'The number {phone_number} is registered on Telegram.')
    except ValueError:
        print(f'The number {phone_number} is not registered on Telegram.')

with client:
    client.loop.run_until_complete(main())
