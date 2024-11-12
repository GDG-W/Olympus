const tokenKey = btoa("gdg__wakanda__volunteer__id");

const user = btoa("gdg__wakanda__volunteer");

function getTokenKey() {
  return window.localStorage.getItem(tokenKey);
}

function getUser() {
  let savedUser = window.localStorage.getItem(user);
  return JSON.parse(savedUser);
}

function setTokenKey(token) {
  window.localStorage.setItem(tokenKey, token);

  if (getTokenKey()) return true;

  return false;
}

function setUser(userObj) {
  window.localStorage.setItem(user, JSON.stringify(userObj));

  if (getUser()) return true;

  return false;
}

function deleteTokenKey() {
  window.localStorage.removeItem(tokenKey);

  if (!getTokenKey()) true;

  return false;
}

function deleteUser() {
  window.localStorage.removeItem(user);

  if (!getUser()) true;

  return false;
}
