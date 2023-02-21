import { Request, Response } from 'express';
import ShowProfileService from '../services/ShowProfileService';
import UpdateProfileService from '../services/UpdateProfileService';

class ProfileController {
  public async show(req: Request, res: Response): Promise<Response> {
    const showProfile = new ShowProfileService();
    const user_id = req.user.id;

    const profile = await showProfile.execute({ user_id });

    return res.json(profile);
  }

  public async update(req: Request, res: Response): Promise<Response> {
    const user_id = req.user.id;
    const { name, email, password, old_password } = req.body;

    const updateProfile = new UpdateProfileService();

    const profile = await updateProfile.execute({
      user_id,
      name,
      email,
      password,
      old_password,
    });

    return res.json(profile);
  }
}

export default ProfileController;
