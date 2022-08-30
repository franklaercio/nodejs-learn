import { Router } from "express";

import { CreateSpecificationController } from "../../../../modules/cars/usecases/createSpecification/CreateSpecificationController";
import { ensureAtheticated } from "../middlewares/EnsureAtheticated";

const specificationRoutes = Router();

const createSpecificationController = new CreateSpecificationController();

specificationRoutes.use(ensureAtheticated);

specificationRoutes.post("/", createSpecificationController.handle);

export { specificationRoutes };
