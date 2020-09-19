import { injectable, inject } from 'tsyringe';

import UsersFavorites from '@modules/users/infra/typeorm/entities/UsersFavorites';
import IFavoritesRepository from '@modules/users/repositories/IFavoritesRepository';
import IHashProvider from '../providers/HashProvider/models/IHashProvider';

interface IRequest {
  user_id: string;
  movie_id: number;
}

@injectable()
class UpdateFavoritesService {
  constructor(
    @inject('FavoritesRepository')
    private favoritesRepository: IFavoritesRepository,

    @inject('HashProvider')
    private hashProvider: IHashProvider,
  ) {}

  public async execute({
    user_id,
    movie_id,
  }: IRequest): Promise<UsersFavorites | void> {
    const findFavorite = await this.favoritesRepository.find({
      user_id,
      movie_id,
    });

    if (findFavorite) {
      return this.favoritesRepository.delete(findFavorite.id);
    }

    const favorite = await this.favoritesRepository.create({
      user_id,
      movie_id,
    });

    return this.favoritesRepository.save(favorite);
  }
}

export default UpdateFavoritesService;
