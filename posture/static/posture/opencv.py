from django.conf import settings

import os

import numpy as np
import cv2

def get_eyes_height(img_stream):
    img = create_opencv_image_from_stringio(img_stream)

    url_face_cascade = os.path.join(settings.STATIC_ROOT, 'posture/haarcascade_frontalface_default.xml')
    url_eye_cascade = os.path.join(settings.STATIC_ROOT, 'posture/haarcascade_eye.xml')

    face_cascade = cv2.CascadeClassifier(url_face_cascade)
    eye_cascade = cv2.CascadeClassifier(url_eye_cascade)

    face = face_cascade.detectMultiScale(img, 1.3, 5)
    list_eyes_height = []
    for (x,y,w,h) in face:
        roi_color = img[y:y+h, x:x+w]
        eyes = eye_cascade.detectMultiScale(roi_color)
        for (ex,ey,ew,eh) in eyes:
            list_eyes_height.append(int(y+ey+eh/2))
    return (list_eyes_height[0] + list_eyes_height[1])/2

def create_opencv_image_from_stringio(img_stream, cv2_img_flag=0):
    img_stream.seek(0)
    img_array = np.asarray(bytearray(img_stream.read()), dtype=np.uint8)
    return cv2.imdecode(img_array, cv2_img_flag)
