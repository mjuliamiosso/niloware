import { NextApiRequest, NextApiResponse } from 'next';
import yaml from 'js-yaml';
import fs from 'fs';
import path from 'path';

const swaggerPath = path.join(process.cwd(), 'swagger/swagger.yaml');
const swaggerDocument = yaml.load(fs.readFileSync(swaggerPath, 'utf8')) as Record<string, any>;

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    res.status(200).json(swaggerDocument);
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}