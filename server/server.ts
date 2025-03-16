import express, { Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import users from "./MOCK_DATA.json";
import { connectDB } from "./connection";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

app.get("/api/users", (req: Request, res: Response) => {
  res.json(users);
});

app.get("/", (req: Request, res: Response) => {
  res.send("welcome to backend");
});

app.get("/users", (req: Request, res: Response) => {
  const html = `
  <ul>
  ${users.map((user) => `<li>${user.first_name}`).join("")}
  </ul>
  `;
  res.send(html);
});

app
  .route("/api/users/:id")
  .get((req: Request, res: Response) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    res.json(user);
  })
  .put((req: Request, res: Response) => {
    res.json({ status: "pending" });
  })
  .delete((req: Request, res: Response) => {
    res.json({ status: "pending" });
  });

app.post("/api/users", (req: Request, res: Response) => {
  const body = req.body;
  console.log("body", body);
  res.json({ status: "pending" });
});

app.post("/api/food", (req: Request, res: Response) => {});

console.log();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  connectDB();
  console.log(`Server running on port ${PORT}`);
});
