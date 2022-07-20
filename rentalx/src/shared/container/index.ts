import { container } from "tsyringe";

import { UsersRepository } from "../../modules/accounts/repositories/implementations/UsersRepository";
import { IUsersRepository } from "../../modules/accounts/repositories/IUsersRepository";
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

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
);

export default container;
