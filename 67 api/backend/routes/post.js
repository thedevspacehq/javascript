import { Router } from "express";
import postController from "../backend/controllers/postController.js";

const postRouter = Router();

postRouter.route("/create").post(postController.create);
postRouter.route("/read/:id").get(postController.read);
postRouter.route("/update/:id").put(postController.update);
postRouter.route("/delete/:id").delete(postController.delete);

export default postRouter;
