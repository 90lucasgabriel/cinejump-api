import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';
import UsersFavorites from '@modules/users/infra/typeorm/entities/UsersFavorites';
import IFavoritesRepository from '@modules/users/repositories/IFavoritesRepository';

interface IRequest {
  user_id: string;
  favorite_id: string;
}

@injectable()
class ShowFavoriteService {
  constructor(
    @inject('FavoritesRepository')
    private favoritesRepository: IFavoritesRepository,
  ) {}

  public async execute({
    user_id,
    favorite_id,
  }: IRequest): Promise<UsersFavorites> {
    const favorite = await this.favoritesRepository.find({
      user_id,
      favorite_id,
    });
    if (!favorite) {
      throw new AppError('Favorite not found.');
    }

    return favorite;
  }
}

export default ShowFavoriteService;
