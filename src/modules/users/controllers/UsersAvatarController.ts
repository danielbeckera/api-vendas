import { Request, Response } from 'express';
import UpdateUserAvatarService from '../services/UpdateUserAvatarService';

class UsersAvatarController {
  public async update(req: Request, res: Response): Promise<Response> {
    const updateAvatar = new UpdateUserAvatarService();

    const avatar = await updateAvatar.execute({
      user_id: req.user.id,
      avatarFileName: req.file?.filename as string,
    });

    return res.json(avatar);
  }
}

export default UsersAvatarController;
