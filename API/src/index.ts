import minecraftData from 'minecraft-data';
import express, { Request, Response, NextFunction } from 'express';

const mcData = minecraftData('1.21')

export const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use((req: Request, _res: Response, next : NextFunction) => {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] Requête reçue : ${req.method}:${req.url}`);
  next();
});

export const server = app.listen(port, () => {
  console.log(`Mon serveur démarre sur le port ${port}`);
});

export function stopServer() {
  server.close();
}