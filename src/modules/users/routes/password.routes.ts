import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';
import ForgotPasswordController from '../controllers/ForgotPasswordController';
import ResetPasswordController from '../controllers/ResetPasswordController';

const passwordsRouter = Router();
const forgotPasswordController = new ForgotPasswordController();
const resetPasswordController = new ResetPasswordController();

passwordsRouter.post(
  '/forgot',
  celebrate({
    [Segments.BODY]: {
      email: Joi.string().email().required(),
    },
  }),
  forgotPasswordController.create,
);

passwordsRouter.post(
  '/reset',
  celebrate({
    [Segments.BODY]: {
      password: Joi.string().required().min(6),
      token: Joi.string().uuid().required(),
    },
  }),
  resetPasswordController.create,
);

export default passwordsRouter;
