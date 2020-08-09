import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';
import UsersFavorites from '@modules/users/infra/typeorm/entities/UsersFavorites';
import IFavoritesRepository from '@modules/users/repositories/IFavoritesRepository';

interface IRequest {
  user_id: string;
}

@injectable()
class ShowAllFavoriteService {
  constructor(
    @inject('FavoritesRepository')
    private favoritesRepository: IFavoritesRepository,
  ) {}

  public async execute({ user_id }: IRequest): Promise<UsersFavorites[]> {
    const favorites = await this.favoritesRepository.findByUser(user_id);
    if (!favorites) {
      throw new AppError('Favorites not found.');
    }

    return favorites;
  }
}

export default ShowAllFavoriteService;
