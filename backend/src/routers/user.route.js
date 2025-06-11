import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
    res.send("USers route using get method");
});

export default router;