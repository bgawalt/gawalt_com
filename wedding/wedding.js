$(document).ready(function() {
  if (Math.random() < 0.5) {
    $(".happy_couple").text("Brian & Isabelle");
    $(document).attr("title", "Brian & Isabelle Get Married");
  }
  else {
    $(".happy_couple").text("Isabelle & Brian");
    $(document).attr("title", "Isabelle & Brian Get Married");
  }
})
