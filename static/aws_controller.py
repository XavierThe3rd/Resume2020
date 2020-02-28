import boto3

dynamo_client = boto3.client('dynamodb', 
region_name='us-east-2', 
aws_secret_access_key = 'ZkzxsCUjKDqkZ7LBr8JZqMHDQIcOOgYwcGh+PkpI',
aws_access_key_id = 'AKIAJWKJKWHTQIZ6K2GA'
)

def get_items():
    return dynamo_client.scan(
        TableName='ResumeData'
    )
    