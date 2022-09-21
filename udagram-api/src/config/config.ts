export const config = {
  'username': process.env.POSTGRES_USERNAME,
  // 'username': "mimidb",
  'password': process.env.POSTGRES_PASSWORD,
  // 'password': "Mimigrace11",
  'database': process.env.POSTGRES_DB,
  // 'database': "postgres",
  'host': process.env.POSTGRES_HOST,
  // 'host': "database-1.cw5o7xtjdbye.us-east-1.rds.amazonaws.com",
  'dialect': 'postgres',
  'aws_region': process.env.AWS_REGION,
  // 'aws_region': 'us-east-1',
  'aws_profile': process.env.AWS_PROFILE,
  // 'aws_profile': 'alxlab',
  'aws_media_bucket': process.env.AWS_BUCKET,
  // 'aws_media_bucket': 'microbucket1996',
  'url': process.env.URL,
  // 'url': 'http://localhost:8100',
  'jwt': {
    'secret': process.env.JWT_SECRET,
    // 'secret': 'testing', X 
  },
};