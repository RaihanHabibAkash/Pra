import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
    res.send("Songs routes using get method");
});

export default router;