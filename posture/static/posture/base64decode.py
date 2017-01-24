import re
import base64
from django.core.files.base import ContentFile

def base64ToImg(user_photo_url):
    dataUrlPattern = re.compile('data:image/(png|jpeg);base64,(.*)$')
    user_photo_url = dataUrlPattern.match(user_photo_url).group(2)

    # If none or len 0, means illegal image data
    if (user_photo_url == None or len(user_photo_url) == 0):
        print("error, photo is invalid")

    # Decode the 64 bit string into 32 bit
    user_photo_url = base64.b64decode(user_photo_url)

    # Transform 32 bit string to png
    user_photo = ContentFile(user_photo_url, 'user_photo.png')

    return user_photo