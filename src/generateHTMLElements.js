function getLiListItem({ title, id }) {
  const li = document.createElement("li");
  const p = document.createElement("p");
  const buttonDelete = document.createElement("button");

  li.className = "flex text-lg items-center mb-2 gap-2";
  p.className = "flex-1 rounded-lg border-2 border-teal-300 bg-teal-200 py-1 px-2 cursor-pointer";
  buttonDelete.className = "border-2 py-1 px-4 rounded-lg bg-red-100 border-red-200";

  li.id = id;
  p.textContent = title;
  buttonDelete.textContent = "X";
  buttonDelete.type = "button";

  li.append(p);
  li.append(buttonDelete);

  return li;
}

function getLiToDoItem({ title, id, isCompleted }) {
  const li = document.createElement("li");
  const p = document.createElement("p");
  const buttonCompleted = document.createElement("button");
  const buttonDelete = document.createElement("button");

  li.className = "flex text-lg items-center mb-2 gap-5";
  p.className = "flex-1 pl-2 border-2 bg-gray-200 rounded-lg py-1 px-2 cursor-pointer";
  p.className += isCompleted ? " bg-teal-200" : "";
  buttonCompleted.className = "border-2 py-1 px-4 rounded-md bg-teal-100 border-teal-200";
  buttonDelete.className = "border-2 py-1 px-4 rounded-md bg-red-100 border-red-200";

  li.id = id;
  p.textContent = title;
  buttonCompleted.textContent = "Completed";
  buttonDelete.textContent = "Delete";
  buttonCompleted.type = "button";
  buttonDelete.type = "button";

  li.append(p);
  li.append(buttonCompleted);
  li.append(buttonDelete);

  return li;
}

function showListLists(list, el) {
  const fragment = new DocumentFragment();

  list.forEach((item) => {
    fragment.append(getLiListItem(item));
  });

  el.innerHTML = "";
  el.append(fragment);
}

function showListItems(list, el) {
  const fragment = new DocumentFragment();

  list.forEach((item) => {
    fragment.append(getLiToDoItem(item));
  });
  el.innerHTML = "";
  el.append(fragment);
}

function toggleClasses(target, currentTarget, classes) {
  const arrClasses = classes.split(" ");

  currentTarget.childNodes.forEach((node) => {
    arrClasses.forEach((item) => node.firstChild.classList.remove(item));
  });

  arrClasses.forEach((item) => target.classList.add(item));
}

export { showListLists, showListItems, toggleClasses };
