"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_js_1 = __importDefault(require("../auth/auth.js"));
const user_js_1 = __importDefault(require("../models/user.js"));
const router = express_1.Router();
router.post("/user", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = new user_js_1.default(req.body);
    try {
        yield user.save();
        const token = yield user.generateAuthToken();
        res.status(201).send({ user, token });
    }
    catch (error) {
        res.status(400).send(error);
    }
}));
router.post("/user/login", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield user_js_1.default.findByCredentials(req.body.email.toString(), req.body.password.toString());
        const token = yield user.generateAuthToken();
        res.status(200).send({ user, token });
    }
    catch (error) {
        res.status(404).send(error.message);
    }
}));
router.get("/user/me", auth_js_1.default, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send(req.user);
}));
router.post("/user/logout", auth_js_1.default, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        req.user.tokens = req.user.tokens.filter((token) => token.token != req.token);
        yield req.user.save();
        res.send();
    }
    catch (e) {
        res.status(500).send();
    }
}));
router.post("/user/logoutAll", auth_js_1.default, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        req.user.tokens = [];
        yield req.user.save();
        res.send();
    }
    catch (e) {
        res.status(500).send();
    }
}));
exports.default = router;
