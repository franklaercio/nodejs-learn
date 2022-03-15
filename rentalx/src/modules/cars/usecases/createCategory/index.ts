import { CategoriesRespository } from "../../respositories/CategoriesRepository";
import { CreateCategoryController } from "./CreateCategoryController";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

const categoriesRespository = new CategoriesRespository();
const createCategoryUseCase = new CreateCategoryUseCase(categoriesRespository);
const createCategoryController = new CreateCategoryController(
  createCategoryUseCase
);

export { createCategoryController };
