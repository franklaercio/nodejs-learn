import { container } from "tsyringe";

import { ICategoriesRepository } from "../../modules/cars/respositories/ICategoriesRepository";
import { CategoriesRepository } from "../../modules/cars/respositories/implementation/CategoriesRepository";
import { SpecificationRepository } from "../../modules/cars/respositories/implementation/SpecificationRepository";
import { ISpecificationRepository } from "../../modules/cars/respositories/ISpecificationRepository";

container.registerSingleton<ICategoriesRepository>(
  "CategoriesRepository",
  CategoriesRepository
);

container.registerSingleton<ISpecificationRepository>(
  "SpecificationRepository",
  SpecificationRepository
);

export default container;
