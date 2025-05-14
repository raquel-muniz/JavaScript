document.addEventListener("DOMContentLoaded", () => {

  const inputs = document.querySelectorAll("input");
  inputs.forEach(input => {
    input.style.borderRadius = "5px";
    input.style.border = "none";
    input.style.padding = "5px";
    input.style.margin = "5px 0";
  });

  const submitButton = document.getElementById("submit-cad", "submit-log");
  if (submitButton) {
    submitButton.classList.remove("btn-success");
    submitButton.classList.add("submit-form", "submit-login");
    submitButton.style.border = "none";
    submitButton.style.color = "white";
    submitButton.style.padding = "10px 30px";
    submitButton.style.cursor = "pointer";
    submitButton.style.backgroundColor = "#234B7F";
    submitButton.style.borderRadius = "10px"

    submitButton.addEventListener("mouseover", () => {
      submitButton.style.backgroundColor = "#116EB0";
    });

    submitButton.addEventListener("mouseout", () =>{
      submitButton.style.backgroundColor = "#234B7F";
    });

    submitButton.classList.add("btn-animate");
  };
});