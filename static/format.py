from PIL import Image

oldimage = Image.open("./input/BeerCover.png")
palettedata = [0, 0, 0, 102, 102, 102, 176, 176, 176, 255, 255, 255]
newimage = Image.new('P', oldimage.size)
newimage.putpalette(palettedata * 64)
newimage.paste(oldimage, (0, 0) + oldimage.size)
newimage.save('./BeerCover.png')



def killData(lis, form): 
    for i in lis:
        client.delete_object(
            Bucket = 'txgthe3rd',
            Key = "imageData/images/"+i+form,
        )

def decrypt(ls, form, tim ):
    for i in ls :    
        enc_file = client.get_object(
            Bucket = 'txgthe3rd',
            Key = "imageData/encrypted/"+i+".enc"
        )
        enc_data = enc_file['Body'].read()
        cfb_decipher = AES.new(key, AES.MODE_CFB, iv)
        plain_data = cfb_decipher.decrypt(enc_data)
        client.put_object(
            Bucket = 'txgthe3rd',
            Key = "imageData/images/"+i+form,
            Body = plain_data
        )
    t = Timer(tim, killData, [ls, form])
    t.start()

def getPiece():
    data = request.get_json(force=True)
    inner = data[0]
    decrypt(inner, '.png', 60)

def decryptHome(): 
    decrypt(homeData, '.png', 60)