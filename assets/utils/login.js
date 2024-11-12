const loginForm = document.querySelector("#login");

loginForm.onsubmit = async function (e) {
  e.preventDefault();

  const email = e.target.elements["email"].value;
  const id = e.target.elements["id"].value;

  fetch("https://asgard.devfestlagos.com/hirers/sessions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email_address: email,
      id: id,
    }),
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        return response.json().then((errorData) => {
          throw new Error(errorData.message || "Login failed");
        });
      }
    })
    .then((data) => {
      if (data && data.token) {
        console.log(data);
        // Store the token in localStorage
        // setUser(data);
        setTokenKey(data.token);
        // Redirect to the dashboard without exposing data in URL
        window.location.replace("/");
      } else {
        throw new Error("No token received from server");
      }
    })
    .catch((error) => {
      console.error("Login error:", error);
      document.getElementById("errorMessage").textContent =
        error.message || "Login failed. Please check your credentials.";
      document.getElementById("errorMessage").style.display = "block";
    });
};
