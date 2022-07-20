import { Router } from "express";

import { CreateSpecificationController } from "../modules/cars/usecases/createSpecification/CreateSpecificationController";

const specificationRoutes = Router();

const createSpecificationController = new CreateSpecificationController();

specificationRoutes.post("/", createSpecificationController.handle);

export { specificationRoutes };
