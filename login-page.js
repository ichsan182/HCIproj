const form = document.getElementById("login-form");

document.querySelector("body").addEventListener("keypress", function (e) {
  if (e.key == "Enter") {
    form.submit();
    document.location.href = "verification-page.html";
  }
});
