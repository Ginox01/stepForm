function validator(e, App) {
  switch (App.currentPage) {
    case 0:
      stepValidatorOne(App);
      break;
    case 1:
      stepValidatorTwo(App);
      break;
  }
}

function displayMessage(App, msg) {
  App.dom.errorMessage.innerHTML = msg;
}

function resetErrorMessage(App) {
  App.dom.errorMessage.innerHTML = "";
}

function stepValidatorOne(App) {
  resetErrorMessage(App);
  if (
    App.dom.form["name"].value.length > 2 &&
    App.dom.form["surname"].value.length > 2
  ) {
    return (App.isValid = true);
  }

  displayMessage(App, "Nome e Cognome non corretti");
}

function stepValidatorTwo(App) {
  resetErrorMessage(App);
  const res =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (
    App.dom.form["mail"].value.length > 2 &&
    res.test(App.dom.form["mail"].value)
  ) {
    return (App.isValid = true);
  }
  displayMessage(App, "Indirizzo maill non valido!");
}

export default validator;
