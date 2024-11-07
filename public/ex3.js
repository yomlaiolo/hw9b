function submitForm(event) {
  event.preventDefault();

  const form = event.target;
  const formData = {
    title: form.title.value,
    content: form.content.value,
  };

  fetch("http://localhost:3000/api/articles", {
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
