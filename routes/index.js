const express = require("express");
const path = require("path");
const router = express.Router();
const colombiablocker = require("./colombiablocker");
const stripe = require('stripe')('sk_test_51IS0pXH1H6WEySTm6YCRXNmPSK8kxKLpVDqaVwGgl2PP8NDlLsI270fym8cFqrZg2sMaE4DI6esWqi5tF4pYpdpx00lgQhKnl3');

const saleDB = {
  "bootcamp":{
    title:"Miami Bootcamp Deposit",
    image:"https://austensummers.com/assets/media/bootcamp8.png",
    price:50000,
  },
 "academy":{
    title:"Austen Summers Academy Deposit",
    image:"https://austensummers.com/assets/media/academy2.jpg",
    price:50000,
  },
  "immersion":{
    title:"Miami Immersion Deposit",
    image:"https://austensummers.com/assets/media/immersion_pane.jpeg",
    price:100000,
  }  
}

/*
router.get("/.well-known/acme-challenge/Mi6cv3k8yXVZTmrWfJFVlTTupOiuWPKRroCeu1QJ1mk", function (req, res, next) {
  res.send("Mi6cv3k8yXVZTmrWfJFVlTTupOiuWPKRroCeu1QJ1mk.3Luu3iycHojEMnXuYlPpDZlywOShzGIvtre3S1yQHfo");
});

router.get("/.well-known/acme-challenge/ab7mULAPx9Uj5vmEavpCaDxD7C5AbwzHRpsfekYqZh4", function (req, res, next) {
  res.send("ab7mULAPx9Uj5vmEavpCaDxD7C5AbwzHRpsfekYqZh4.3Luu3iycHojEMnXuYlPpDZlywOShzGIvtre3S1yQHfo");
});
*/

/* GET home page. */
router.get("/", function (req, res, next) {
  res.sendFile(path.join(__dirname + "/index.html"));
});

/* GET academy page. */
router.get("/academy", function (req, res, next) {
  res.sendFile(path.join(__dirname + "/academy.html"));
});

/* GET bootcamp page. */
router.get("/bootcamp", function (req, res, next) {
  res.sendFile(path.join(__dirname + "/bootcamp.html"));
});

/* GET immersion page. Colombia Blocker Middleware */
router.get("/immersion", colombiablocker, function (req, res, next) {
  res.sendFile(path.join(__dirname + "/immersion.html"));
});

/* GET clientresults page. */
router.get("/clientresults", function (req, res, next) {
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


router.post('/bill/bootcamp', async (req, res) => {
const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: saleDB["bootcamp"].title,
            images: [saleDB["bootcamp"].image],
          },
          unit_amount: saleDB["bootcamp"].price,
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `https://www.austensummers.com/success`,
    cancel_url: `http://www.austensummers.com/fail`,
  });
  res.json({ id: session.id });
});

router.post('/bill/academy', async (req, res) => {
const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: saleDB["academy"].title,
            images: [saleDB["academy"].image],
          },
          unit_amount: saleDB["academy"].price,
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `https://www.austensummers.com/success`,
    cancel_url: `https://www.austensummers.com/fail`,
  });
  res.json({ id: session.id });
});

router.post('/bill/immersion', async (req, res) => {
const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: saleDB["immersion"].title,
            images: [saleDB["immersion"].image],
          },
          unit_amount: saleDB["immersion"].price,
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `https://www.austensummers.com/success`,
    cancel_url: `https://www.austensummers.com/fail`,
  });
  res.json({ id: session.id });
});

router.get("*", function (req, res) {
  res.redirect("/");
});


module.exports = router;