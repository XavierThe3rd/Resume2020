import os
from app import app
from flaskext.mysql import MySQL

mysql = MySQL()

app.config['MYSQL_DATABASE_USER']= 'bVyxXDjnEF'
app.config['MYSQL_DATABASE_PASSWORD']= 'APBtbRb2lw'
app.config['MYSQL_DATABASE_HOST']= 'remotemysql.com'
mysql.init_app(app)


#secure access key = 4V1TFN0nUESQe3YPc5avJoiKhAF2+lCfYZ1yjW0n
#access key id = AKIAQM7FA3WJWJWGAILQ
# serial number mfa key = arn:aws:iam::027860721043:mfa/root-account-mfa-device