import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import FavoritesController from '@modules/users/infra/http/controllers/FavoritesController';

const favoritesRouter = Router();
const favoritesController = new FavoritesController();

favoritesRouter.use(ensureAuthenticated);

favoritesRouter.get('/', favoritesController.show);
favoritesRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      favorite_id: Joi.string().required(),
    },
  }),
  favoritesController.update,
);

export default favoritesRouter;