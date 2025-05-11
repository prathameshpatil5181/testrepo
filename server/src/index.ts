import express, { Request } from "express";
import cors from "cors";
const app = express();

app.use(cors({
    origin:"*"
}));



app.get("/", (req:Request, res) => {
  res.json({
    stauts: 200,
    msg:"Hello from the backend!"
});
});

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});

