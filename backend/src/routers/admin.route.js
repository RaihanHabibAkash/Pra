import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
    res.send("admin routes using Get method");
});

export default router;