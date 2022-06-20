import { container } from "tsyringe";

import { ICategoriesRepository } from "../../modules/cars/respositories/ICategoriesRepository";
import { CategoriesRepository } from "../../modules/cars/respositories/implementation/CategoriesRepository";

container.registerSingleton<ICategoriesRepository>(
  "CategoriesRepository",
  CategoriesRepository
);

export default container;
