import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Serve the index.html for any route to support SPA client-side routing
  
  // Since this is a fake scam website for educational purposes,
  // we don't need any real API routes - all interactions are client-side only
  
  // Add a simple health check endpoint
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', message: 'This is a fake scam website for educational purposes only' });
  });
  
  // Add educational disclaimer API
  app.get('/api/disclaimer', (req, res) => {
    res.json({
      title: 'Educational Purpose Disclaimer',
      body: 'This website is a simulation created for educational purposes only. It demonstrates common tactics used in phishing and scam websites to help people recognize and avoid them in real situations.',
      note: 'No personal data is being collected. All buttons and forms are non-functional.'
    });
  });

  const httpServer = createServer(app);

  return httpServer;
}
