import { CategoriesRepository } from "../../respositories/implementation/CategoriesRepository";
import { CreateCategoryController } from "./CreateCategoryController";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

const categoriesRespository = CategoriesRepository.getInstance();
const createCategoryUseCase = new CreateCategoryUseCase(categoriesRespository);
const createCategoryController = new CreateCategoryController(
  createCategoryUseCase
);

export { createCategoryController };