import { NextApiRequest, NextApiResponse } from 'next';
import express from 'express';
import swaggerUi from 'swagger-ui-express';
import yaml from 'js-yaml';
import fs from 'fs';
import path from 'path';

const swaggerPath = path.join(process.cwd(), 'swagger/swagger.yaml');
const swaggerDocument = yaml.load(fs.readFileSync(swaggerPath, 'utf8')) as Record<string, any>;

const app = express();

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  app(req as any, res as any);
}
