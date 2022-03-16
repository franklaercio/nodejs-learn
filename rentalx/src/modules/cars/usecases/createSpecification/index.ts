import { SpecificationRepository } from "../../respositories/implementation/SpecificationRepository";
import { CreateSpecificationController } from "./CreateSpecificationController";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

const specificationRepository = SpecificationRepository.getInstance();
const createCategoryUseCase = new CreateSpecificationUseCase(
  specificationRepository
);
const createSpecificationController = new CreateSpecificationController(
  createCategoryUseCase
);

export { createSpecificationController };
