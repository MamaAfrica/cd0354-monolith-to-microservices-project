export const config = {
  // 'username': 'mimidb',
  // 'password': 'Mimigrace123',
  // 'database': 'postgres',
  // 'host': 'database-1.cmstuwkj3dhx.us-east-2.rds.amazonaws.com',
  // 'dialect': 'postgres',
  // 'aws_region': 'us-east-2',
  // 'aws_profile': 'default',
  // 'aws_media_bucket': 'mymicrobucket',
  // 'url': 'locahost:8100',
  // 'jwt': {
  //   'secret': 'testing',
  'username': process.env.POSTGRES_USERNAME,
  'password': process.env.POSTGRES_PASSWORD,
  'database': process.env.POSTGRES_DB,
  'host': process.env.POSTGRES_HOST,
  'dialect': 'postgres',
  'aws_region': process.env.AWS_REGION,
  'aws_profile': process.env.AWS_PROFILE,
  'aws_media_bucket': process.env.AWS_BUCKET,
  'url': process.env.URL,
  'jwt': {
    'secret': process.env.JWT_SECRET,
  },
};

