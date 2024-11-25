import express, { Request, Response } from 'express';
import cors from 'cors';

export class Application {
  private app: express.Application;

  constructor() {
    this.app = express();

    // Middleware
    this.middleware();

    // Routes
    this.routes();
  }

  private middleware() {
    this.app.use(express.json());
    this.app.use(cors());
  }

  private routes() {
    this.app.get('/', (req: Request, res: Response) => {
      res.status(200).json({
        success: true,
        message: 'Backend Starter on Fire 🔥🔥🔥',
      });
    });
  }
  public getApp() {
    return this.app;
  }

}


