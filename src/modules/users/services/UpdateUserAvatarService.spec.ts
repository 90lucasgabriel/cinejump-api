import AppError from '@shared/errors/AppError';

import FakeUsersRepository from '@modules/users/repositories/fakes/FakeUsersRepository';
import UpdateUserAvatarService from './UpdateUserAvatarService';

let fakeUsersRepository: FakeUsersRepository;
let updateUserAvatarService: UpdateUserAvatarService;
describe('UpdateUserAvatar', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    updateUserAvatarService = new UpdateUserAvatarService(fakeUsersRepository);
  });
  it('should be able to update avatar', async () => {
    // Arrange
    const userData = {
      name: 'John Doe',
      email: 'johndoe@email.com',
      password: '123456',
    };

    const user = await fakeUsersRepository.create(userData);

    const updateUserAvatarData = {
      user_id: user.id,
      avatarFilename: 'avatar.jpg',
    };

    // Act
    await updateUserAvatarService.execute(updateUserAvatarData);

    // Assert
    expect(user.avatar).toBe('avatar.jpg');
  });

  it('should not be able to update avatar from non existing user', async () => {
    // Arrange
    const updateUserAvatarData = {
      user_id: 'non-existing-user',
      avatarFilename: 'avatar.jpg',
    };

    // Act
    const nonExistingUser = updateUserAvatarService.execute(
      updateUserAvatarData,
    );

    // Assert
    expect(nonExistingUser).rejects.toBeInstanceOf(AppError);
  });
});
