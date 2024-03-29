import { EntityRepository, Repository } from 'typeorm';
import Costumers from '../entities/Customer';

@EntityRepository(Costumers)
export class CustomersRepository extends Repository<Costumers> {
  public async findByName(name: string): Promise<Costumers | undefined> {
    const costumer = await this.findOne({
      where: { name },
    });

    return costumer;
  }

  public async findById(id: string): Promise<Costumers | undefined> {
    const costumer = await this.findOne({
      where: { id },
    });

    return costumer;
  }

  public async findByEmail(email: string): Promise<Costumers | undefined> {
    const costumer = await this.findOne({
      where: { email },
    });

    return costumer;
  }
}
