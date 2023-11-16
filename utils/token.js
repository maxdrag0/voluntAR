import jwt from "jsonwebtoken";
import { SECRET } from "../config/config.js";

export const generateToken = (payload) => {
  const token = jwt.sign(payload, SECRET, {
    expiresIn: "2d",
  });
  return token;
};

export const verifyToken =(token) => {
  return jwt.verify(token, SECRET);
};