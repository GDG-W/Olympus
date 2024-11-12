document
  .getElementById("checkInButton")
  .addEventListener("click", async function () {
    const userId = document.getElementById("userId").value;
    const day = document.getElementById("checkInDay").value;
    const gender = document.getElementById("gender").value;

    if (userId && day && gender) {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          throw new Error("No token found in localStorage");
        }

        if (!response.ok) throw new Error("Check-in failed");

        currentRow.querySelector("td:last-child").innerHTML =
          '<span class="text-success">Checked in</span>';
        checkInModal.hide();
        document.getElementById("checkInForm").reset();
        showToast("Check-in successful", "success");
      } catch (error) {
        console.error("Error during check-in:", error);
        showToast("Check-in failed. Please try again.", "error");
      }
    } else {
      showToast(
        "Please fill in all fields: User ID, Day, and Gender.",
        "error"
      );
    }
  });
