const search = document.querySelector("#search");
const list = document.querySelector(".list");
const ul = document.querySelector("ul");

fetch("https://northwind.vercel.app/api/categories")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((elem) => {
      list_elm(elem);
      const li = document.querySelectorAll("li");
console.log(li);
      search.addEventListener("keyup", function () {
        // search_list(data);
        search_list1();
      });
    });
  });

function list_elm(data) {
  const li = document.createElement("li");
  li.innerText = data.name;

  ul.appendChild(li);
}
function search_list(data) {
  ul.innerHTML = "";
  for (let i = 0; i < data.length; i++) {
    value = data[i].name;

    if (
      value.toLocaleLowerCase().indexOf(search.value.toLocaleLowerCase()) > -1
    ) {
      console.log(data[i].name);
      list_elm(data[i]);
    }
  }
}
function search_list1() {
  const li = document.querySelectorAll("li");
  for (let i = 0; i < li.length; i++) {
    if (
      li[i].innerText
        .toLocaleLowerCase()
        .indexOf(search.value.toLocaleLowerCase()) > -1
    ) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}
