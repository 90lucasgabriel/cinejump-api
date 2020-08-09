import { Repository, getRepository } from 'typeorm';

import IFavoritesRepository from '@modules/users/repositories/IFavoritesRepository';
import UsersFavorites from '@modules/users/infra/typeorm/entities/UsersFavorites';
import IUserFavoriteDTO from '@modules/users/dtos/IUserFavoriteDTO';

class FavoritesRepository implements IFavoritesRepository {
  private ormRepository: Repository<UsersFavorites>;

  constructor() {
    this.ormRepository = getRepository(UsersFavorites);
  }

  public async findByUser(
    user_id: string,
  ): Promise<UsersFavorites[] | undefined> {
    const favorites = await this.ormRepository.find({ where: { user_id } });

    return favorites;
  }

  public async find({
    user_id,
    favorite_id,
  }: IUserFavoriteDTO): Promise<UsersFavorites | undefined> {
    const user = await this.ormRepository.findOne({ user_id, favorite_id });

    return user;
  }

  public async create({
    user_id,
    favorite_id,
  }: IUserFavoriteDTO): Promise<UsersFavorites> {
    const favorite = this.ormRepository.create({ user_id, favorite_id });
    await this.ormRepository.save(favorite);

    return favorite;
  }

  public async save(favorite: UsersFavorites): Promise<UsersFavorites> {
    return this.ormRepository.save(favorite);
  }

  public async delete(id: string): Promise<void> {
    this.ormRepository.delete(id);
  }
}

export default FavoritesRepository;
