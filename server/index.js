import express from "express";
import cors from "cors";
import 'dotenv/config'
import { clerkMiddleware, requireAuth } from "@clerk/express";

import connectDB from "./lib/connectDB.js";

// import userRouter from "./routes/user.route.js";
import postRouter from "./routes/post.route.js";
// import commentRouter from "./routes/comment.route.js";
import webhookRouter from "./routes/webhook.route.js";

const app = express();

app.use(cors(process.env.CLIENT_URL));
app.use(clerkMiddleware());

//Webhook, above express.json to prevent collision with body-parser
app.use("/webhooks", webhookRouter);
app.use(express.json());

//CORS
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// ROUTES
// app.use("/users", userRouter);
app.use("/posts", postRouter);
// app.use("/comments", commentRouter);

//Errors
app.use((error, req, res, next) => {
  res.status(error.status || 500);

  res.json({
    message: error.message || "Something went wrong!",
    status: error.status,
    stack: error.stack,
  });
});


app.listen(8080, () => {
  connectDB();
  console.log("Server is running!");
});