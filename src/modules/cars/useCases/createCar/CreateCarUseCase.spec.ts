import { CarsRepositoryInMemory } from '@modules/cars/repositories/in-memory/CarsRepositoryInMemory';
import { AppError } from '@shared/errors/AppError';

import { CreateCarUseCase } from './CreateCarUseCase';

let createCarUseCase: CreateCarUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe('Create car', () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    createCarUseCase = new CreateCarUseCase(carsRepositoryInMemory);
  });

  it('should be able to create a new car', async () => {
    const car = await createCarUseCase.execute({
      brand: 'Brand car',
      category_id: 'category',
      daily_rate: 100,
      description: 'Description car',
      fine_amount: 60,
      license_plate: 'ABC-1234',
      name: 'Name car',
    });

    expect(car).toHaveProperty('id');
  });

  it('should NOT be able to create a car with existing license plate', async () => {
    expect(async () => {
      await createCarUseCase.execute({
        brand: 'Brand car',
        category_id: 'category',
        daily_rate: 100,
        description: 'Description car',
        fine_amount: 60,
        license_plate: 'ABC-1234',
        name: 'Name car',
      });

      await createCarUseCase.execute({
        brand: 'Brand car',
        category_id: 'category',
        daily_rate: 100,
        description: 'Description car',
        fine_amount: 60,
        license_plate: 'ABC-1234',
        name: 'Name car',
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it('should be able to create a car with available true by default', async () => {
    const car = await createCarUseCase.execute({
      brand: 'Brand car',
      category_id: 'category',
      daily_rate: 100,
      description: 'Description car',
      fine_amount: 60,
      license_plate: 'ABC-1234',
      name: 'Name car',
    });

    expect(car.available).toBe(true);
  });
});
