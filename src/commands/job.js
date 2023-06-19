import dotenv from 'dotenv';
import program from 'commander';

dotenv.config();

program
  .version('0.0.1')
  .command('my', 'run my job').alias('m')
  .parse(process.argv);
