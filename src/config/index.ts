import dotenv from 'dotenv';
import mongoose from 'mongoose';
import path from 'path';

dotenv.config({ path: path.join(process.cwd(), '.env') });

class Config {
  private uri: string;

  constructor() {
    this.uri = process.env.DATABASE_URI as string;

    // Ensure required variables are present
    if (!this.uri) {
      throw new Error('DATABASE_URI is required in .env file');
    }

    if (!process.env.PORT) {
      throw new Error('PORT is required in .env file');
    }
    if (!process.env.BCRYPT_SALT_ROUNDS) {
      throw new Error('BCRYPT_SALT_ROUNDS is required in .env file');
    }
  }

  // MongoDB connection method
  public async connectDB() {
    try {
      await mongoose.connect(this.uri);
      console.log('Connected to MongoDB Successfully');
    } catch (error) {
      console.error(
        'Error connecting to MongoDB:',
        error instanceof Error ? error.stack : error,
      );
    }
  }

  // Getter for the port from the environment variable
  public get port(): number {
    return Number(process.env.PORT);
  }
  public get slat(): number {
    return Number(process.env.BCRYPT_SALT_ROUNDS)
  }
}

export default new Config();
