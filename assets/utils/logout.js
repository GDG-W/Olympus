document
  .getElementById("logoutBtn")
  .addEventListener("click", async function (e) {
    e.preventDefault();
    try {
      const token = getTokenKey();
      if (!token) {
        throw new Error("No token found in localStorage");
      }

      const response = await fetch(
        "https://asgard.devfest.notkruse.dev/volunteers/sessions",
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) throw new Error("Logout failed");

      deleteTokenKey();
      deleteUser();
      window.location.replace("/login");
    } catch (error) {
      console.error("Error during logout:", error);
      showToast("Logout failed. Please try again.", "error");
    }
  });
