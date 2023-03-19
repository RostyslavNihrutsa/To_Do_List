export const data2 = {
  initialCount: JSON.parse(localStorage.getItem("id")) || 0,
  lists: JSON.parse(localStorage.getItem("data")) || [],
  idCurrentList: null,

  getNewId() {
    ++this.initialCount;
    localStorage.setItem("id", JSON.stringify(this.initialCount));
    return this.initialCount;
  },

  addList(title) {
    if (!title.trim()) return;
    const newList = {
      title: title,
      id: this.getNewId(),
      items: [],
      prog: 0
    };
    this.lists.push(newList);
    this.saveInLocalStorage();
  },

  addItem(title) {
    if (!title.trim()) return;
    const newItem = {
      title: title,
      id: this.getNewId(),
      isCompleted: false,
    };
    this.getListById(this.idCurrentList).push(newItem);
    this.saveInLocalStorage();
  },

  deleteList(id) {
    const index = this.lists.findIndex((item) => item.id === +id);
    this.lists.splice(index, 1);
    this.saveInLocalStorage();
  },



  deleteItem(id) {
    let list = this.getListById(this.idCurrentList);
    const index = list.findIndex((item) => item.id === +id);
    list.splice(index, 1);
    this.saveInLocalStorage();
  },

  toggleItem(id) {
    this.getListById(this.idCurrentList).find((item) => item.id === +id).isCompleted = !this.getListById(
      this.idCurrentList
    ).find((item) => item.id === +id).isCompleted;
    this.saveInLocalStorage();
  },


  
  getLists() {
    return this.lists;
  },

  getListById(id) {
    return this.lists.find((item) => item.id === +id).items;
  },

  saveInLocalStorage() {
    localStorage.setItem("data", JSON.stringify(this.lists));
  },
};

export const data = {
  initialCount: JSON.parse(localStorage.getItem("count")) || 0,
  lists: JSON.parse(localStorage.getItem("data")) || [],
  idCurrentList: null,

  getNewId() {
    this.initialCount++;
    localStorage.setItem("count", this.initialCount);
    return this.initialCount;
  },

  addList(title) {
    if (!title) return;
    this.lists.push({ id: this.getNewId(), title, items: [] });
    this.saveInLocalStorage();
  },

  addItem(title) {
    if (!title) return;
    this.getListById(this.idCurrentList).push({ id: this.getNewId(), title, isCompleted: false });
    this.saveInLocalStorage();
  },

  deleteList(id) {
    this.lists = this.lists.filter((item) => item.id !== +id);
    this.saveInLocalStorage();
  },

  deleteItem(id) {
    let list = this.getListById(this.idCurrentList);
    const index = list.findIndex((item) => item.id === +id);
    list.splice(index, 1);
    this.saveInLocalStorage();
  },

  toggleItem(id) {
    this.getListById(this.idCurrentList).find((item) => item.id === +id).isCompleted = !this.getListById(
      this.idCurrentList
    ).find((item) => item.id === +id).isCompleted;
    this.saveInLocalStorage();
  },

  getLists() {
    return this.lists;
  },

  getListById(id) {
    return this.lists.find((i) => i.id === +id).items;
  },

  saveInLocalStorage() {
    localStorage.setItem("data", JSON.stringify(this.lists));
  },
};
