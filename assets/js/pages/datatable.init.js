try {
  if (window.simpleDataTableInstance) {
    window.simpleDataTableInstance.destroy();
  }
  window.simpleDataTableInstance = new SimpleDataTable("#userList");
} catch (e) {}
try {
  new simpleDatatables.DataTable("#datatable_1", {
    searchable: !0,
    fixedHeight: !1,
  });
} catch (e) {}
try {
  const b = new simpleDatatables.DataTable("#datatable_2");
  document.querySelector("button.csv").addEventListener("click", () => {
    b.exportCSV({
      type: "csv",
      download: !0,
      lineDelimiter: "\n\n",
      columnDelimiter: ";",
    });
  }),
    document.querySelector("button.sql").addEventListener("click", () => {
      b.export({ type: "sql", download: !0, tableName: "export_table" });
    }),
    document.querySelector("button.txt").addEventListener("click", () => {
      b.export({ type: "txt", download: !0 });
    }),
    document.querySelector("button.json").addEventListener("click", () => {
      b.export({ type: "json", download: !0, escapeHTML: !0, space: 3 });
    });
} catch (e) {}
try {
  document.addEventListener("DOMContentLoaded", function () {
    var c = document.querySelector("[name='select-all']"),
      n = document.querySelectorAll("[name='check']"),
      e =
        (c?.addEventListener("change", function () {
          var t = c.checked;
          n.forEach(function (e) {
            e.checked = t;
          });
        }),
        n.forEach(function (e) {
          e.addEventListener("click", function () {
            var e = n.length,
              t = document.querySelectorAll("[name='check']:checked").length;
            t <= 0
              ? ((c.checked = !1), (c.indeterminate = !1))
              : e === t
              ? ((c.checked = !0), (c.indeterminate = !1))
              : ((c.checked = !0), (c.indeterminate = !0));
          });
        }),
        document.querySelectorAll("table > thead > tr > th"),
        th.querySelector("button:first-child"));
    e && e.classList.remove("datatable-sorter");
  }),
    document
      .querySelector(".checkbox-all thead tr th:first-child button")
      .classList.remove("datatable-sorter");
} catch (e) {}
try {
  const checkInModal = new bootstrap.Modal(
    document.getElementById("checkInModal")
  );
  let currentRow;
  const statusElem = document.getElementById("statusMessage");
  function showStatusMessage(type, message) {
    if (type == "error") {
      if (statusElem.classList.contains("text-success")) {
        statusElem.classList.replace("text-success", "text-danger");
      } else {
        statusElem.classList.add("text-danger");
      }

      statusElem.textContent = message;

      statusElem.style.display = "block";
      return true;
    } else if (type == "success") {
      if (statusElem.classList.contains("text-danger")) {
        statusElem.classList.replace("text-danger", "text-success");
      } else {
        statusElem.classList.add("text-success");
      }

      statusElem.textContent = message;

      statusElem.style.display = "block";
      return true;
    } else return false;
  }
  function hideStatusMessage() {
    statusElem.style.display = "none";
  }

  document.querySelector("tbody").addEventListener("click", function (e) {
    if (e.target.classList.contains("check-in-link")) {
      e.preventDefault();
      currentRow = e.target.closest("tr");
      const userId = e.target.dataset.id;
      document.getElementById("userId").value = userId;
      if (currentRow[`data-gender`]) {
        document.getElementById("gender").value = currentRow[`data-gender`];
      }
      hideStatusMessage();
      checkInModal.show();
    }
  });

  const dayElem = document.getElementById("checkInDay");
  if (currentDay > 0) {
    dayElem.disabled = true;
    dayElem.value = currentDay;
  }

  document
    .getElementById("checkInButton")
    .addEventListener("click", async function () {
      const userId = document.getElementById("userId").value;
      const day = document.getElementById("checkInDay").value;
      const gender = document.getElementById("gender").value;

      if (userId && day && gender) {
        try {
          const token = getTokenKey();
          if (!token) {
            throw new Error("No token found in localStorage");
          }

          const response = await fetch(
            "https://asgard.devfestlagos.com/volunteers/checkins",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
              },
              body: JSON.stringify({
                user_id: userId,
                day: day,
                gender: gender.toLowerCase(),
              }),
            }
          );
          // console.log(await response.json());

          if (response.status == 409)
            throw new Error("User has been checked in already.");
          if (!response.ok && response.status != 409)
            throw new Error("Check-in failed");

          currentRow.querySelector("td:last-child").innerHTML =
            '<span class="text-success">Checked in</span>';
          checkInModal.hide();

          document.getElementById("checkInForm").reset();

          showToast("Check-in successful", "success");
        } catch (error) {
          // console.error("Error during check-in:", error);
          showStatusMessage(
            "error",
            error.message || "Check-in failed. Please try again."
          );
        }
      } else {
        showStatusMessage(
          "error",
          "Please fill in all fields: User ID, Day, and Gender."
        );
      }
    });
} catch (e) {}
