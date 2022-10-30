import { Router } from 'express';
import { getByFolio } from '../controllers/main.js'
const router = Router();

router.get('/', getByFolio);

export default router;