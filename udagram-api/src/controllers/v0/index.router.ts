import {Router, Request, Response} from 'express';
import {FeedRouter} from './feed/routes/feed.router';
import {UserRouter} from './users/routes/user.router';

const router: Router = Router();

router.use('/feed', FeedRouter);
router.use('/users', UserRouter);

router.get('/', async (req: Request, res: Response) => {
  res.send(`V0_Mina`);
});

export const IndexRouter: Router = router;
