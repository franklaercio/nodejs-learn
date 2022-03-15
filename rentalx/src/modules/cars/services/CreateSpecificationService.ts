import { SpecificationRepository } from "../respositories/SpecificationRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateSpecificationService {
  constructor(private specificationRepository: SpecificationRepository) {}

  execute({ name, description }: IRequest): void {
    const specificationAlreadyExists =
      this.specificationRepository.findByName(name);

    if (specificationAlreadyExists) {
      throw new Error(`Specification already exists: ${name}`);
    }

    this.specificationRepository.create({ name, description });
  }
}

export { CreateSpecificationService };
