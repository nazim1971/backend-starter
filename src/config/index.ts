import dotenv from 'dotenv';
import mongoose from 'mongoose';
import path from 'path';

dotenv.config({ path: path.join(process.cwd(), '.env') });

class Config {
  private uri: string;

  constructor() {
    this.uri = process.env.DATABASE_URI as string;
  }

  // MongoDB connection method
  public async connectDB() {
    try {
      if (!this.uri) {
        throw new Error(
          'MongoDB URI is not defined in the environment variables',
        );
      }
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
  public getPort(): number {
    return Number(process.env.PORT) ;
  }
}

export default new Config();
