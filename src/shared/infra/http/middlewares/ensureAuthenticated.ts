import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

import auth from '@config/auth';
import { UsersTokensRepository } from '@modules/accounts/infra/typeorm/repositories/UsersTokensRepository';
import { AppError } from '@shared/errors/AppError';

interface IPayload {
  sub: string;
}

export async function ensureAuthenticated(
  req: Request,
  _res: Response,
  next: NextFunction
) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    throw new AppError('Token missing', 401);
  }

  const [, token] = authHeader.split(' ');

  try {
    const { sub: user_id } = verify(
      token,
      auth.secret_refresh_token
    ) as IPayload;

    const userTokensRepository = new UsersTokensRepository();
    const user = await userTokensRepository.findByUserIdAndRefreshToken(
      user_id,
      token
    );

    if (!user) {
      throw new AppError('User does not exists', 401);
    }

    req.user = { id: user_id };

    next();
  } catch {
    throw new AppError('Invalid token', 401);
  }
}
