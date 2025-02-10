import jwt from "jsonwebtoken";

export function verifyToken(req) {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    throw new Error("Токен не надано!");
  }

  const token = authHeader.split(" ")[1];
  try {
    return jwt.verify(token, "your_secret_key");
  } catch (error) {
    throw new Error("Токен недійсний!");
  }
}
