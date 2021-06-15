const express = require("express");
const path = require("path");
const router = express.Router();
const colombiablocker = require("./colombiablocker");
const fs = require("fs");
const stripeSecretKey = fs
  .readFileSync(path.join(__dirname + "/key.txt"), "utf8")
  .split("\n")[0];
const stripe = require("stripe")(stripeSecretKey);

const saleDB = {
  bootcamp: {
    title: "Miami Bootcamp Deposit",
    image: "https://austensummers.com/assets/media/bootcamp8.png",
    price: 51500,
  },
  academy: {
    title: "Austen Summers Academy Deposit",
    image: "https://austensummers.com/assets/media/academy2.jpg",
    price: 51500,
  },
  immersion: {
    title: "Miami Immersion Deposit",
    image: "https://austensummers.com/assets/media/immersion_pane.jpeg",
    price: 103000,
  },
};

router.get(
  "/.well-known/acme-challenge/m4hHiYRv9fpoMZBoW3opJV--OTGCFQliuWtkjbB1zf0",
  function (req, res, next) {
    res.send(
      "m4hHiYRv9fpoMZBoW3opJV--OTGCFQliuWtkjbB1zf0.3Luu3iycHojEMnXuYlPpDZlywOShzGIvtre3S1yQHfo"
    );
  }
);

router.get(
  "/.well-known/acme-challenge/xYYVfDOFIKMSmrdhi1zxN0Ig6iRPZ8r1Miy3qKc6njs",
  function (req, res, next) {
    res.send(
      "xYYVfDOFIKMSmrdhi1zxN0Ig6iRPZ8r1Miy3qKc6njs.3Luu3iycHojEMnXuYlPpDZlywOShzGIvtre3S1yQHfo"
    );
  }
);

/* GET home page. */
router.get("/", function (req, res, next) {
  res.sendFile(path.join(__dirname + "/index.html"));
});

/* GET academy page. */
router.get("/academy", function (req, res, next) {
  res.sendFile(path.join(__dirname + "/academy.html"));
});

/* GET bootcamp page. */
router.get("/bootcamp", function (req, res) {
  res.redirect("/immersion");
});

/* GET immersion page. Colombia Blocker Middleware */
router.get("/immersion", colombiablocker, function (req, res, next) {
  res.sendFile(path.join(__dirname + "/immersion.html"));
});

/* GET clientresults page. */
router.get("/results", function (req, res, next) {
  res.sendFile(path.join(__dirname + "/clientresults.html"));
});

router.get("/terms", function (req, res, next) {
  res.sendFile(path.join(__dirname + "/terms.html"));
});

router.get("/collab", function (req, res, next) {
  res.sendFile(path.join(__dirname + "/collab.html"));
});

router.get("/disclaimer", function (req, res, next) {
  res.sendFile(path.join(__dirname + "/disclaimer.html"));
});

// NOTE: careers points to jobs.html not careers.html
router.get("/careers", function (req, res, next) {
  res.sendFile(path.join(__dirname + "/jobs.html"));
});

router.get("/contact", function (req, res, next) {
  res.sendFile(path.join(__dirname + "/contact.html"));
});

router.get("/pay", function (req, res, next) {
  res.sendFile(path.join(__dirname + "/payments.html"));
});

router.get("/success", function (req, res, next) {
  res.sendFile(path.join(__dirname + "/success.html"));
});

router.get("/fail", function (req, res, next) {
  res.sendFile(path.join(__dirname + "/fail.html"));
});

router.post("/bill/bootcamp", async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: saleDB["bootcamp"].title,
            images: [saleDB["bootcamp"].image],
          },
          unit_amount: saleDB["bootcamp"].price,
        },
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: `https://www.austensummers.com/success`,
    cancel_url: `https://www.austensummers.com/fail`,
  });
  res.json({ id: session.id });
});

router.post("/bill/academy", async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: saleDB["academy"].title,
            images: [saleDB["academy"].image],
          },
          unit_amount: saleDB["academy"].price,
        },
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: `https://www.austensummers.com/success`,
    cancel_url: `https://www.austensummers.com/fail`,
  });
  res.json({ id: session.id });
});

router.post("/bill/immersion", async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: saleDB["immersion"].title,
            images: [saleDB["immersion"].image],
          },
          unit_amount: saleDB["immersion"].price,
        },
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: `https://www.austensummers.com/success`,
    cancel_url: `https://www.austensummers.com/fail`,
  });
  res.json({ id: session.id });
});

router.get("*", function (req, res) {
  res.redirect("/");
});

module.exports = router;
