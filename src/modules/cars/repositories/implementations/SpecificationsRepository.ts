import { Specification } from '../../model/Specification';
import {
  ICreateSpecificationDTO,
  ISpecificationsRepository,
} from '../ISpecificationsRepository';

class SpecificationsRepository implements ISpecificationsRepository {
  private specification: Specification[];

  constructor() {
    this.specification = [];
  }

  create({ name, description }: ICreateSpecificationDTO) {
    const specification = new Specification();

    Object.assign(specification, { name, description, created_at: new Date() });

    this.specification.push(specification);
  }

  findByName(name: string) {
    return this.specification.find(
      (specification) => specification.name === name
    );
  }
}

export { SpecificationsRepository };
