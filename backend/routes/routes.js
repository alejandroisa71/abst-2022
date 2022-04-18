import express from "express";
import {
  getAllClubes,
  getClub,
  createClub,
  updateClub,
  deleteClub,
} from "../controllers/ClubController.js";
const router = express.Router();

router.get("/", getAllClubes);
router.get("/:id", getClub);
router.post("/", createClub);
router.put("/:id", updateClub);
router.delete("/:id", deleteClub);

export default router;
