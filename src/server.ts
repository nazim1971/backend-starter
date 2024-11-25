import { Application } from './app';

class Server {
  private app: Application;
  private port: number;

  constructor(port: number) {
    this.port = port;
    this.app = new Application();  // Initialize the Application class
  }

  // Method to start the server
  public start() {
    this.app.getApp().listen(this.port, () => {
      console.log(`Server is running on Port: ${this.port}`);
    });
  }
}

// Define the port
const port = 5000;

// Create a new Server instance with the port
const server = new Server(port);

// Start the server
server.start();
