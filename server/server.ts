import express, { Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
// import users from "./MOCK_DATA.json";
import Food from "./models/food.model";
import { connectDB } from "./connection";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

// app.get("/api/users", (req: Request, res: Response) => {
//   res.json(users);
// });

// app.get("/", (req: Request, res: Response) => {
//   res.send("welcome to backend");
// });

// app.get("/users", (req: Request, res: Response) => {
//   const html = `
//   <ul>
//   ${users.map((user) => `<li>${user.first_name}`).join("")}
//   </ul>
//   `;
//   res.send(html);
// });

// app
//   .route("/api/users/:id")
//   .get((req: Request, res: Response) => {
//     const id = Number(req.params.id);
//     const user = users.find((user) => user.id === id);
//     res.json(user);
//   })
//   .put((req: Request, res: Response) => {
//     res.json({ status: "pending" });
//   })
//   .delete((req: Request, res: Response) => {
//     res.json({ status: "pending" });
//   });

// app.post("/api/users", (req: Request, res: Response) => {
//   const body = req.body;
//   console.log("body", body);
//   res.json({ status: "pending" });
// });

app.post("/api/food", (req: Request, res: Response) => {
  const food = req.body;
  if (!food.name || !food.price) {
    res
      .status(400)
      .json({ success: false, message: "provide all necessary data" });
  }

  const newFoodItems = new Food(food);

  try {
    newFoodItems.save();
    res.status(201).json({ sucess: true, data: newFoodItems });
  } catch (error) {
    console.error("error in item production");
  }
});

app.get("/api/food", async (req: Request, res: Response) => {
  try {
    const foodItems = await Food.find();
    res.json(foodItems);
  } catch (error) {
    console.log("error in fetching the foodItems");
    res.status(500).json({ sucess: false, message: "Server error" });
  }
});

console.log();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  connectDB();
  console.log(`Server running on port ${PORT}`);
});
