import { Router } from "express";
import {
  createPoke,
  getPoke,
} from "../controllers/poke.controller.js";
import { auth } from "../middlewares/auth.middleware.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { createPokeSchema } from "../schemas/poke.schema.js";

const router = Router();

router.get("/listaBD", auth, getPoke);

router.post("/lista", auth, validateSchema(createPokeSchema), createPoke);

router.get("/lista/:id", auth, getPoke);

/*router.put("/tasks/:id", auth, updateTask);

router.delete("/tasks/:id", auth, deleteTask);*/

export default router;