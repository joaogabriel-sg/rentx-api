import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListCategoriesUseCase } from './ListCategoriesUseCase';

class ListCategoriesController {
  async handle(_: Request, res: Response) {
    const listCategoriesUseCase = container.resolve(ListCategoriesUseCase);
    const allCategories = await listCategoriesUseCase.execute();

    return res.json(allCategories);
  }
}

export { ListCategoriesController };
