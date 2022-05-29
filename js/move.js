function moveTheForm(e, App) {
  if (e.target.id == "btn-next" && App.isValid == true) {
    App.currentPage++;
    moveTo(App, App.currentPage);
    App.isValid = false;
  } else if (e.target.id == "btn-prev") {
    App.currentPage--;
    moveTo(App, App.currentPage);
  }

  App.currentPage == 0
    ? (App.dom.btnPrev.style.display = "none")
    : (App.dom.btnPrev.style.display = "flex");

  App.currentPage == 2
    ? (App.dom.btnNext.style.display = "none")
    : (App.dom.btnNext.style.display = "flex");

  App.currentPage == 2
    ? (App.dom.btnSubmit.style.display = "flex")
    : (App.dom.btnSubmit.style.display = "none");

  App.dom.steps.forEach((step) => {
    if (step.dataset.step > App.currentPage) {
      step.className = "step next";
    } else if (step.dataset.step == App.currentPage) {
      step.className = "step current";
    } else {
      step.className = "step valid";
    }
  });
}

function moveTo(App, numOfPage) {
  let firstField = App.dom.fields[0];
  firstField.style.marginLeft = `-${(App.gap + 100) * App.currentPage}%`;
}

export default moveTheForm;
