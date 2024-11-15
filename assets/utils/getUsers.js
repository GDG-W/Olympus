const userListElem = document.querySelector("#userList");

function populateTable(allUsers) {
  // Create table rows
  allUsers.forEach((user) => {
    // if (!user.resume_url) return;
    const row = document.createElement("tr");
    row.style.cursor = "pointer";
    row.id = user.id;

    row.innerHTML = `
      <td>${user.fullname}</td>
      <td>${user.email_address}</td>
      <td>${user.ticket_title}</td>
      <td>${user.role}</td>
      <td>${user.level_of_expertise}</td>
      <td><a href=${user.resume_url} target="_blank" onclick="event.stopPropagation()">View CV</a></td>
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

    const response = await fetch(
      "https://asgard.devfestlagos.com/users?limit=4000&reason=hiring",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (response.status == 401) {
      showToast("session timeout, redirecting to login.", "error");
      setTimeout(function () {
        deleteTokenKey();
        window.location.replace("/login");
      }, 3000);
    } else if (response.status == 500) {
      showToast("server error, please contact an admin.", "error");
    } else if (!response.ok) throw new Error("Failed to fetch users.");
    const data = await response.json();
    allUsers = data.items;
    populateTable(allUsers);
  } catch (error) {
    console.error("Error fetching users:", error);
    showToast("Failed to fetch users.", "error");
  }
})();
