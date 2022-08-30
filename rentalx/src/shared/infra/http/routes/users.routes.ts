import { Router } from "express";
import multer from "multer";

import uploadConfig from "../../../../config/Upload";
import { CreateUserController } from "../../../../modules/accounts/usecases/createUser/CreateUserController";
import { UpdateUserAvatarController } from "../../../../modules/accounts/usecases/updateUserAvatar/UpdateUserAvatarController";
import { ensureAtheticated } from "../middlewares/EnsureAtheticated";

const userRoutes = Router();

const uploadAvatar = multer(uploadConfig.upload("./tmp/avatar"));

const createUserController = new CreateUserController();
const updateUserAvatarController = new UpdateUserAvatarController();

userRoutes.post("/", createUserController.handle);

userRoutes.patch(
  "/avatar",
  ensureAtheticated,
  uploadAvatar.single("avatar"),
  updateUserAvatarController.handle
);

export { userRoutes };
