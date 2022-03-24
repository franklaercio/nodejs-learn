import { CategoriesRepository } from "../../respositories/implementation/CategoriesRepository";
import { ListCategoriesController } from "./ListCategoriesController";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

export default (): ListCategoriesController => {
  const categoriesRespository = new CategoriesRepository();
  const listCategoriesUseCase = new ListCategoriesUseCase(
    categoriesRespository
  );
  const listCategoriesController = new ListCategoriesController(
    listCategoriesUseCase
  );

  return listCategoriesController;
};
