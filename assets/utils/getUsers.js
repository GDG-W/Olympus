const userListElem = document.querySelector("#userList");

async function createRows(allUsers) {
  const fragment = document.createDocumentFragment();

  allUsers.forEach((user) => {
    // if (!user.resume_url) return;
    const row = document.createElement("tr");
    row.style.cursor = "pointer";
    row.id = user.id;
    row[`data-gender`] = user.gender;

    row.innerHTML = `
    <td>${user.fullname}</td>
    <td>${user.email_address}</td>
    <td>${user.id}</td>
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

    fragment.appendChild(row);
  });

  return fragment;
}

async function populateTable(allUsers) {
  // Create table rows
  const fragment = await createRows(allUsers);

  userListElem.appendChild(fragment);

  loadDataTable();
}

(async function () {
  try {
    const token = getTokenKey();
    if (!token) {
      throw new Error("No token found in localStorage");
    }

    const queryDay =
      currentDay && (currentDay == 1 || currentDay == 2)
        ? `&day=${currentDay}`
        : "";

    const response = await fetch(
      `https://asgard.devfestlagos.com/users?limit=4000${
        queryDay ? queryDay : ""
      }`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (!response.ok)
      throw new Error("Failed to fetch users. Redirecting to login.");
    const data = await response.json();
    allUsers = data.items;

    //console.log(allUsers);
    // const filteredUser = allUsers.filter((user) => {
    //   return user.checkins.length > 0;
    // });

    // document.querySelector("#totalCheckIns").textContent = filteredUser.length;

    populateTable(allUsers);
    // console.log("populated");
  } catch (error) {
    // console.error("Error fetching users:", error);
    showToast("Failed to fetch users. Redirecting to login.", "error");

    // setTimeout(function () {
    //   deleteTokenKey();
    //   deleteUser();
    //   window.location.replace("/login");
    // }, 3000);
  }
})();
