const dashboardCategories = document.querySelector(".dashboard__right");

function createCategorie(data) {
  let url = "/images/";
  switch (data.title) {
    case "Work":
      url += "icon-work.svg";
      break;
    case "Play":
      url += "icon-play.svg";
      break;
    case "Study":
      url += "icon-study.svg";
      break;
    case "Exercise":
      url += "icon-exercise.svg";
      break;
    case "Social":
      url += "icon-social.svg";
      break;
    case "Self Care":
      url += "icon-self-care.svg";
      break;
  }
  return `
    <div class="dashboard__category category">
        <div class="category__top">
            <img src="${url}" alt="" />
        </div>
        <div class="category__content">
          <header class="category__content__header">
                <h2>${data.title}</h2>
                <img src="/images/icon-ellipsis.svg" alt="option" />
          </header>
          <div category="category__content__content">
            <h2>${data.timeframes.daily.current}hrs</h2>
            <p>Last day - ${data.timeframes.daily.previous}hrs</p>
          </div>
        </div>
    </div>
    `;
}

for (let info of data) {
  dashboardCategories.innerHTML += createCategorie(info);
}
