const loadingData = async () => {
  const url = "https://restcountries.com/v3.1/all";
  const res = await fetch(url);
  const data = await res.json();
  displayData(data);
};
loadingData();
const displayData = (items) => {
  console.log(items);
  const getInnerHtml = items.map((item) => getAllData(item));
  const mainDiv = document.getElementById("show-data");
  mainDiv.innerHTML = getInnerHtml.join(" ");
};

const getAllData = ({ flags, name, population }) => {
  return `
<div class="col">
              <div class="card h-100">
                <img src='${flags.png}' class="card-img-top" alt="...">
                <div class="card-body">
                  <h3 class="card-title">${name.common}</h3>
                  <p class="card-text">${population}</p>
                </div>
              </div>
            </div>`;
};
