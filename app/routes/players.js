import { Router } from 'express';
import * as PlayerController from '../controllers/playerController.js';

const router = Router();

router.get('/', PlayerController.index);
router.post('/', PlayerController.store);
router.put('/:id', PlayerController.update);
router.delete('/:id', PlayerController.destroy);

export default router;
