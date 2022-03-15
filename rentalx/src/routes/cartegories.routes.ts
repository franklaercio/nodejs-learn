import { Router } from "express";

import { CategoriesRespository } from "../modules/cars/respositories/CategoriesRepository";
import { createCategoryController } from "../modules/cars/usecases/createCategory";

const categoriesRoutes = Router();
const categoriesRespository = new CategoriesRespository();

categoriesRoutes.post("/", (request, response) => {
  return createCategoryController.handle(request, response);
});

categoriesRoutes.get("/", (request, response) => {
  const all = categoriesRespository.list();
  return response.json(all);
});

export { categoriesRoutes };
