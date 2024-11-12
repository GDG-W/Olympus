const userListElem = document.querySelector("#userList");

function populateTable(allUsers) {
  // Create table rows
  allUsers.forEach((user) => {
    // if (!user.resume_url) return;
    const row = document.createElement("tr");
    row.style.cursor = "pointer";
    row.id = user.id;
    row[`data-gender`] = user.gender;

    row.innerHTML = `
      <td>${user.fullname}</td>
      <td>${user.email_address}</td>
      <td>${user.ticket_id}</td>
      <td>${user.role || "N/A"}</td>
      <td>
        ${
          user.checkins && currentDay > 0
            ? user.checkins.includes(currentDay)
              ? '<span class="text-success">Checked in</span>'
              : `<a href="#" class="check-in-link" data-id="${user.id}">Check In</a>`
            : '<span class="text" style="opacity: .5; cursor: not-allowed;">Unavailable</span>'
        }
      </td>
    `;

    userListElem.appendChild(row);
  });

  loadDataTable();
}

(async function () {
  try {
    const token = getTokenKey();
    if (!token) {
      throw new Error("No token found in localStorage");
    }

    const response = await fetch("https://asgard.devfest.notkruse.dev/users?", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok)
      throw new Error("Failed to fetch users. Redirecting to login.");
    const data = await response.json();
    allUsers = data.items;

    const filteredUser = allUsers.filter((user) => {
      if (currentDay === 1) {
        return user.ticket_tag === "day_one" || user.ticket_tag === "both_days";
      } else if (currentDay === 2) {
        return user.ticket_tag === "day_two" || user.ticket_tag === "both_days";
      }
      // If currentDay is not 1 or 2, return all users
      return true;
    });

    // console.log(filteredUser);
    populateTable(filteredUser);
  } catch (error) {
    // console.error("Error fetching users:", error);
    showToast("Failed to fetch users. Redirecting to login.", "error");

    setTimeout(function () {
      deleteTokenKey();
      deleteUser();
      window.location.replace("/login");
    }, 3000);
  }
})();
