$(document).ready(function () {
    var stripe = Stripe("pk_live_pZQS2g6vMNadlR96KZKxWR3C");
      
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
