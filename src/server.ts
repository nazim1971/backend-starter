import { Application } from './app';
import config from './config';  // Importing config to access the port and DB methods

class Server {
  private app: Application;
  private port: number;

  constructor() {
    this.app = new Application();  // Initialize the Application class
    this.port = config.getPort();  // Get the port directly from the environment
  }

  // Async method to start the server
  public async start() {
    try {
      await config.connectDB();  // Wait for MongoDB connection
      this.app.getApp().listen(this.port, () => {
        console.log(`Server is running on Port: ${this.port}`);
      });
    } catch (error) {
      console.error('Error starting the server:', error);
    }
  }
}

// Create a new Server instance and start it
const server = new Server();
server.start();
