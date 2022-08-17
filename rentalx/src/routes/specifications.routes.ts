import { Router } from "express";

import { ensureAtheticated } from "../middlewares/EnsureAtheticated";
import { CreateSpecificationController } from "../modules/cars/usecases/createSpecification/CreateSpecificationController";

const specificationRoutes = Router();

const createSpecificationController = new CreateSpecificationController();

specificationRoutes.use(ensureAtheticated);

specificationRoutes.post("/", createSpecificationController.handle);

export { specificationRoutes };
