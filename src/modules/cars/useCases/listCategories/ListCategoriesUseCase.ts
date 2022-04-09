import { ICategoriesRepository } from '../../repositories/ICategoriesRepository';

class ListCategoriesUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  execute() {
    return this.categoriesRepository.list();
  }
}

export { ListCategoriesUseCase };
