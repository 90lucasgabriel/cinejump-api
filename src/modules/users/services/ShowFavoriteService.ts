import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';
import UsersFavorites from '@modules/users/infra/typeorm/entities/UsersFavorites';
import IFavoritesRepository from '@modules/users/repositories/IFavoritesRepository';

interface IRequest {
  user_id: string;
  entity_id: string;
  type_id: number;
}

@injectable()
class ShowFavoriteService {
  constructor(
    @inject('FavoritesRepository')
    private favoritesRepository: IFavoritesRepository,
  ) {}

  public async execute({
    user_id,
    entity_id,
    type_id,
  }: IRequest): Promise<UsersFavorites> {
    const favorite = await this.favoritesRepository.find({
      user_id,
      entity_id,
      type_id,
    });
    if (!favorite) {
      throw new AppError('Favorite not found.');
    }

    return favorite;
  }
}

export default ShowFavoriteService;
