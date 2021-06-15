import { Router, Request, Response } from "express";

import auth from "../auth/auth.js";
import User, { UserDocument, tokenObj } from "../models/user.js";

const router: Router = Router();

router.post("/user", async (req, res) => {
  const user: UserDocument = new User(req.body);
  try {
    await user.save();
    const token: string = await user.generateAuthToken();
    res.status(201).send({ user, token });
  } catch (error) {
    res.status(400).send(error);
  }
});

router.post("/user/login", async (req, res) => {
  try {
    const user: UserDocument = await User.findByCredentials(
      req.body.email.toString(),
      req.body.password.toString()
    );
    const token: string = await user.generateAuthToken();
    res.status(200).send({ user, token });
  } catch (error) {
    res.status(404).send(error.message);
  }
});

router.get("/user/me", auth, async (req, res) => {
  res.send(req.user);
});

router.post("/user/logout", auth, async (req: Request, res: Response) => {
  try {
    req.user.tokens = req.user.tokens.filter(
      (token) => token.token != req.token
    );
    await req.user.save();
    res.send();
  } catch (e) {
    res.status(500).send();
  }
});

router.post("/user/logoutAll", auth, async (req: Request, res: Response) => {
  try {
    req.user.tokens = [];
    await req.user.save();
    res.send();
  } catch (e) {
    res.status(500).send();
  }
});

export default router;
