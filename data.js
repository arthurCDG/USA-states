const URL =
  "https://gist.githubusercontent.com/mshafrir/2646763/raw/8b0dbb93521f5d6889502305335104218454c2bf/states_hash.json";

const body = document.body;
const button = document.getElementById("btn");
const input = document.getElementById("input");
const listElement = document.getElementById("list");

const display = (list) => {
  listElement.innerHTML = "";
  list.forEach((state) => {
    let li = document.createElement("li");
    li.innerText = state;
    listElement.appendChild(li);
  });
};

const fetchAllStates = () => {
  axios
    .get(URL)
    .then((response) => {
      const allStatesData = Object.values(response.data);
      display(allStatesData);
      filterList(allStatesData);
    })
    .catch((error) => {
      console.error("Something went wrong my friend", error);
    });
};

function filterList(list) {
  input.addEventListener("input", (evt) => {
    const inputValue = evt.target.value;
    const filtered = list.filter((el) => el.toLowerCase().includes(inputValue.toLowerCase()));
    display(filtered);
  });
}

fetchAllStates();

// Réutilsier la même fonction avec array.filter()
// includes/contains
// Fonctionne avec lowercase and uppercase
