

class MakeTodoList {
    constructor(list) {
      this.todoList = list;
      this.todos = [];
    }
  
    static addtoList(text) {
      let list = document.getElementById("todo-list");
      var li = document.createElement("li");
      li.textContent = text;
      list.appendChild(li);
      return li;
    }
  
    static removeFromList(text) {
      let list = document.getElementById("todo-list");
      let childs = Array.from(list.childNodes);
      let item = childs.find(i => i.innerText === text);
      return item;
    }
  
    addTodo(text) {
      this.todos.push(text);
      this.todoList.appendChild(MakeTodoList.addtoList(text));
    }
  
    removeTodo(text) {
      let filter = this.todos.filter(i => i !== text);
      this.todoList.removeChild(MakeTodoList.removeFromList(text));
      this.todos = filter;
    }
  
    get getList() {
      return this.todos;
    }
  
    set DummyData(value) {
      this.todos = value;
      this.todos.map(i => MakeTodoList.addtoList(i));
    }
  }

  let list = document.getElementById("todo-list");

  // creando objeto de clase

  let listEle = new MakeTodoList(list);

  listEle.DummyData = ["Jugar Beisbol", "Hacer Tareas"]; // colocando métodos para ejemplos

  console.log("current  ...........", listEle.getList); //   obteniendo método

  // para la lista

  function addtodo() {
    let input = document.getElementById("input").value;
    listEle.addTodo(input); //  llamando el método desde la clase

    console.log("current  ...........", listEle.getList); //   obteniendo método
  }

  // funcion simple de utilidasd

  function getEventTarget(e) {
    e = e || window.event;
    return e.target || e.srcElement;
  }

  // para eliminar item de la lista

  function remove() {
    let updated = document.getElementById("todo-list");
    updated.onclick = function(event) {
      var target = getEventTarget(event);
      listEle.removeTodo(target.innerText);
      console.log("current  ...........", listEle.getList); //  obteniendo método
    };
  }