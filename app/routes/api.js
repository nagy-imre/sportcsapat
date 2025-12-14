import { Router } from 'express';
import teamsRouter from './teams.js';
import playersRouter from './players.js';

const router = Router();

router.use('/teams', teamsRouter);
router.use('/players', playersRouter);

export default router;
