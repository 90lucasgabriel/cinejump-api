import IUserFavoriteDTO from '@modules/users/dtos/IUserFavoriteDTO';
import UsersFavorites from '@modules/users/infra/typeorm/entities/UsersFavorites';

export default interface IFavoritesRepository {
  findByUser(user_id: string): Promise<UsersFavorites[] | undefined>;
  find(data: IUserFavoriteDTO): Promise<UsersFavorites | undefined>;
  create(data: IUserFavoriteDTO): Promise<UsersFavorites>;
  save(data: UsersFavorites): Promise<UsersFavorites>;
  delete(id: string): Promise<void>;
}
