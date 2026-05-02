const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors()); // MUST BE HERE
app.use(express.json());

let notifications = [];

app.get("/notifications", (req, res) => {
  res.json(notifications);
});

app.post("/notifications", (req, res) => {
  const { message } = req.body;

  const newNotification = {
    id: Date.now(),
    message,
    read: false,
  };

  notifications.push(newNotification);

  res.json(newNotification);
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
app.put("/notifications/:id", (req, res) => {
  const id = Number(req.params.id);

  notifications = notifications.map((n) =>
    n.id === id ? { ...n, read: true } : n
  );

  res.json({ message: "Marked as read" });
});