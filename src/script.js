import { showListLists, showListItems, toggleClasses } from "./generateHTMLElements.js";
import { data } from "./data.js";

const ulListLists = document.querySelector("._list-lists");
const ulList = document.querySelector("._list-items");
const formAddList = document.forms.addList;
const formAddItem = document.forms.addItem;

formAddList.addEventListener("submit", (e) => {
  e.preventDefault();
  const title = formAddList.titleNewList.value;
  formAddList.titleNewList.value = "";
  data.addList(title);
  showListLists(data.getLists(), ulListLists);
});

formAddItem.addEventListener("submit", (e) => {
  e.preventDefault();
  const title = formAddItem.titleNewItem.value;
  formAddItem.titleNewItem.value = "";
  data.addItem(title);
  showListItems(data.getListById(data.idCurrentList), ulList);
});

ulListLists.addEventListener("click", (e) => {
  const target = e.target;
  if (!target.closest("li")) return;

  if (target.tagName === "BUTTON") {
    const isDelete = confirm("Are you sure?");
    if (!isDelete) return;

    data.deleteList(e.target.closest("li").id);
    //  data.idCurrentList = null;
    showListLists(data.lists, ulListLists);
    ulList.innerHTML = "";
    return;
  }

  data.idCurrentList = +e.target.closest("li").id;

  showListItems(data.getListById(data.idCurrentList), ulList);

  toggleClasses(target, e.currentTarget, "font-bold text-white bg-teal-500");
});

ulList.addEventListener("click", (e) => {
  const target = e.target;
  if (!target.closest("li")) return;

  if (target.tagName === "BUTTON" && target.textContent === "Delete") {
    const isDelete = confirm("Are you sure?");
    if (!isDelete) return;
    data.deleteItem(e.target.closest("li").id);
  }

  if (target.tagName === "BUTTON" && target.textContent === "Completed") {
    data.toggleItem(e.target.closest("li").id);
  }

  ulList.innerHTML = "";
  showListItems(data.getListById(data.idCurrentList), ulList);
});

showListLists(data.lists, ulListLists);
