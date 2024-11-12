function loadDataTable() {
  const script1 = document.createElement("script");
  const script2 = document.createElement("script");
  script1.src = "/assets/libs/simple-datatables/umd/simple-datatables.js";
  script2.src = "/assets/js/pages/datatable.init.js";
  document.body.appendChild(script1);
  document.body.appendChild(script2);
}
