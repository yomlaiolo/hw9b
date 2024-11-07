const data = {
  name: "Tom",
  countries: [
    {
      name: "USA",
      year: 2024,
    },
    {
      name: "France",
      year: 2024,
    },
    {
      name: "Spain",
      year: 2024,
    },
    {
      name: "Germany",
      year: 2019,
    },
    {
      name: "Portugal",
      year: 2022,
    },
  ],
};

document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("call");
  button.addEventListener("click", () => {
    fetch("http://localhost:3000/api/countries", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.text())
      .then((html) => {
        document.getElementById("output").innerHTML = html;
      });
  });
});
