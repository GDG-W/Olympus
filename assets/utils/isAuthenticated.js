if (!getTokenKey()) {
  if (window.location.pathname != "/login") {
    window.location.replace("/login");
  }
} else {
  if (window.location.pathname == "/login") {
    window.location.replace("/");
  }
}
