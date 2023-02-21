import { Router } from 'express';
import productsRouter from '@modules/products/routes/products.routes';
import usersRouter from '@modules/users/routes/users.routes';
import sessionsRouter from '@modules/users/routes/session.routes';
import passwordsRouter from '@modules/users/routes/password.routes';
import profilesRouter from '@modules/users/routes/profile.routes';

const routes = Router();

routes.use('/products', productsRouter);

routes.use('/users', usersRouter);

routes.use('/sessions', sessionsRouter);

routes.use('/password', passwordsRouter);

routes.use('/profile', profilesRouter);

export default routes;
