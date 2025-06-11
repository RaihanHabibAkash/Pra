import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
    res.send("auth route using Get method");
});

export default router;