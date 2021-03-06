const express = require("express");
const stripe = require('stripe')('sk_test_51IS0pXH1H6WEySTm6YCRXNmPSK8kxKLpVDqaVwGgl2PP8NDlLsI270fym8cFqrZg2sMaE4DI6esWqi5tF4pYpdpx00lgQhKnl3');

const saleDB = {
  "bootcamp":{
    title:"Miami Bootcamp Deposit",
    image:"https://",
    price:50000,
  },
 "academy":{
    title:"Austen Summers Academy Deposit",
    image:"https://",
    price:50000,
  },
  "immersion":{
    title:"Miami Immersion Deposit",
    image:"https://",
    price:100000,
  }  
}

function processPayment(type, req, res) {
const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: saleDB[type].title,
            images: [saleDB[type].image],
          },
          unit_amount: saleDB[type].price,
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `http://localhost:3000/success`,
    cancel_url: `http://localhost:3000/fail`,
  });
  res.json({ id: session.id });
}

module.exports = processPayment;