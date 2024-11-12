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
      <td>${user.ticket_id}</td>
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

    const response = await fetch("https://asgard.devfest.notkruse.dev/users", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) throw new Error("Failed to fetch users");
    const data = await response.json();
    allUsers = data.items;
    populateTable(allUsers);
  } catch (error) {
    console.error("Error fetching users:", error);
    showToast("Failed to fetch users. Please try again.", "error");
  }
})();
