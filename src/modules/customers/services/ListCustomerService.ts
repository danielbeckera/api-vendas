import { getCustomRepository } from 'typeorm';
import Costumers from '../typeorm/entities/Customer';
import { CostumersRepository } from '../typeorm/repositories/CustomerRepository';

class ListCustomerService {
  public async execute(): Promise<Costumers[]> {
    const costumersRepository = getCustomRepository(CostumersRepository);

    const costumers = await costumersRepository.find();

    return costumers;
  }
}

export default ListCustomerService;
