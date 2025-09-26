// import express from "express";
// import cors from "cors";
// import nodemailer from "nodemailer";
// import bodyParser from "body-parser";


const app = express();
// const app = express();
const PORT = 5001;

app.use(cors());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());

const transporter = nodemailer.createTransport({
  service: "gmail",

  auth: {
    user: "olhayakubovska2@gmail.com",
    pass: "sxfndltgtultbsgg",
  },
});

app.post("/api/form", (req, res) => {
  const { name, email, message } = req.body;
  console.log(req.body, "laalalal req.body");
  transporter.sendMail({
    from: "olhayakubovska2@gmail.com",
    to: "oyakubovska80@gmail.com",
    subject: `<h2>mail от:</h2>`,
    html: `<h2>name:${name}</h2> <div>email:${email}</div> <div>message:${message}</div>`,
  });

  res.json({ message: "Привет с сервера!" });
});

console.log("hello");
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
