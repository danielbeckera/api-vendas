import { getCustomRepository } from 'typeorm';
import Costumer from '../typeorm/entities/Customer';
import { CustomersRepository } from '../typeorm/repositories/CustomerRepository';

class ListCustomerService {
  public async execute(): Promise<Costumer[]> {
    const customersRepository = getCustomRepository(CustomersRepository);

    const costumers = await customersRepository.find();

    return costumers;
  }
}

export default ListCustomerService;
