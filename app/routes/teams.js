import { Router } from 'express';
import * as TeamController from '../controllers/teamController.js';

const router = Router();

router.get('/', TeamController.index);
router.post('/', TeamController.store);
router.put('/:id', TeamController.update);
router.delete('/:id', TeamController.destroy);

export default router;
