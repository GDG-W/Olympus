function loadDataTable() {
  // Create first script and append it
  const script1 = document.createElement("script");
  script1.src = "/assets/libs/simple-datatables/umd/simple-datatables.js";
  script1.onload = () => {
    // Create second script only after the first one has loaded
    const script2 = document.createElement("script");
    script2.src = "/assets/js/pages/datatable.init.js";
    document.body.appendChild(script2);
  };

  document.body.appendChild(script1);
}
