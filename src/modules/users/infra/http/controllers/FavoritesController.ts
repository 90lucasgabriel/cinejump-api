import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';

import UpdateFavoritesService from '@modules/users/services/UpdateFavoritesService';
import ShowAllFavoriteService from '@modules/users/services/ShowAllFavoritesService';

export default class FavoritesController {
  public async show(request: Request, response: Response): Promise<Response> {
    const user_id = request.user.id;
    const showFavorites = container.resolve(ShowAllFavoriteService);

    const user = await showFavorites.execute({ user_id });

    return response.json(classToClass(user));
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const user_id = request.user.id;
    const { movie_id } = request.body;
    const updateFavoritesService = container.resolve(UpdateFavoritesService);

    const user = await updateFavoritesService.execute({
      user_id,
      movie_id,
    });

    return response.json(classToClass(user));
  }
}
