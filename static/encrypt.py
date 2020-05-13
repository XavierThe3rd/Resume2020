from Crypto.Cipher import AES
from config import key, iv, pngData, pdfData



for i in pngData :
    input_file = open("./input/"+i+".png")
    input_data = input_file.read()
    input_file.close()

    cfb_cipher = AES.new(key, AES.MODE_CFB, iv)
    enc_data = cfb_cipher.encrypt(input_data)

    enc_file = open("./images/"+i+".png", "rb")
    enc_file.read(enc_data)
    enc_file.close()



