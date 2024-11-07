function submitForm(event) {
  event.preventDefault();

  const form = event.target;
  const formData = {
    name: form.name.value,
    email: form.email.value,
    payment: form.payment.value,
    sign: form.sign.checked,
    location: form.location.value,
  };

  fetch("http://localhost:3000/api/form", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then((response) => response.text())
    .then((html) => {
      document.getElementById("output").innerHTML = html;
    });
}
