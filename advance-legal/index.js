const form = document["form"];

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const firstName = localStorage.setItem("First Name", form.firstName.value);
  const lastName = localStorage.setItem("Last Name", form.lastName.value);
  const salutation = localStorage.setItem("Salutation", form.salutation.value);
  const address = localStorage.setItem("Address", form.address.value);
  const city = localStorage.setItem("City", form.city.value);
  const state = localStorage.setItem("State", form.state.value);
  const zip = localStorage.setItem("Zip Code", form.zip.value);
  const phone = localStorage.setItem("Phone Number", form.phone.value);
  const email = localStorage.setItem("Email", form.email.value);

  const who = localStorage.setItem("Who?", form.who.value);
  const what = localStorage.setItem("What?", form.what.value);
  const where = localStorage.setItem(
    "Where?",
    form.whereCity.value + ", " + form.whereState.value
  );
  const when = localStorage.setItem("When?", form.when.value);

  const witness = localStorage.setItem("Witness?", form.witness.value);
  const attorney = localStorage.setItem("Attorney?", form.attorney.value);
});
