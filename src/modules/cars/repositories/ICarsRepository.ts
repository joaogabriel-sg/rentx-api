import { ICreateCarDTO } from '../dtos/ICreateCarDTO';
import { Car } from '../infra/typeorm/entities/Car';

interface ICarsRepository {
  create: (data: ICreateCarDTO) => Promise<Car>;
  findByLicensePlate: (license_plate: string) => Promise<Car>;
  findAvailable: (
    brand: string | undefined,
    category_id: string | undefined,
    name: string | undefined
  ) => Promise<Car[]>;
}

export { ICarsRepository };
