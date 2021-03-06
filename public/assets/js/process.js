$(document).ready(function () {
    var stripe = Stripe("pk_test_51IS0pXH1H6WEySTmSfFwNRckYGXJLt3e6rhyK6ymxdQsDJPSU1f8o98HsrYsx7i69xJyhs30Km7WNzhL54Nwr8lQ00pN2ZyK8I");
      
      $("#pay-bootcamp").click(function() {
          $(this).text("Redirecting...").prop("disabled", true);
          fetch("/bill/bootcamp", {
            method: "POST",
          })
          .then(function (response) {
            return response.json();
          })
          .then(function (session) {
            return stripe.redirectToCheckout({ sessionId: session.id });
          })
          .then(function (result) {
            if (result.error) {
              alert(result.error.message);
            }
          })
          .catch(function (error) {
            console.error("Error:", error);
          });
      });

      $("#pay-immersion").click(function() {
      $(this).text("Redirecting...").prop("disabled", true);
        fetch("/bill/immersion", {
          method: "POST",
        })
        .then(function (response) {
          return response.json();
        })
        .then(function (session) {
          return stripe.redirectToCheckout({ sessionId: session.id });
        })
        .then(function (result) {
          if (result.error) {
            alert(result.error.message);
          }
        })
        .catch(function (error) {
          console.error("Error:", error);
        });
      });

      $("#pay-academy").click(function() {
      $(this).text("Redirecting...").prop("disabled", true);
      fetch("/bill/academy", {
        method: "POST",
      })
        .then(function (response) {
          return response.json();
        })
        .then(function (session) {
          return stripe.redirectToCheckout({ sessionId: session.id });
        })
        .then(function (result) {
          if (result.error) {
            alert(result.error.message);
          }
        })
        .catch(function (error) {
          console.error("Error:", error);
        });
      });

    


});
