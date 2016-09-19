function get_todos() {
    //create function and call it get_todos()
    var todos = new Array;
    //declare a new array called todos
    var todos_str = localStorage.getItem('todo');
    //localStorage is data stored in the browser and will persist when the browser/tab closes
    //declare a variable 'todo_str' and assign it to the value of 'todo' in localStorage
    if (todos_str !== null) {
        todos = JSON.parse(todos_str); 
    }
    //if todos_str (localStorage.getItem('todo')) is NOT null
    //parse the string 'todos_str' & set the array 'todos' to it
    return todos;
    //return todos
}
 
function add() {
    //create function and call it add()
    var task = document.getElementById('task').value;
    //searches current document for object with name 'task',
    //if 'task' is in the document
    //declare var and name it task and assign the value of the object in the document named 'task' to it
 
    var todos = get_todos();
    //declare variable 'todos' and set it to the function get_todos()
    todos.push(task);
    //add the value of 'task' to the array todos
    localStorage.setItem('todo', JSON.stringify(todos));
    //convert the array todos to a JSON string and set it to the array 'todo' in localStorage
 
    show();
    //call the show() function
 
    return false;
    //return false to stop the function from running
}
 
function remove() {
    //create function call remove
    var id = this.getAttribute('id');
    //retreive the attribute with the 'id' of item on the page clicked, then assign it to the declared variable 'id'

    var todos = get_todos();
    //declare variable 'todos' and set it to the function get_todos()
    todos.splice(id, 1);
    //remove the item with value assign to id from the array todos

    localStorage.setItem('todo', JSON.stringify(todos));
    //convert the array todos to a JSON string and set it to the array 'todo' in localStorage
 
    show();
    //call the show() function
 
    return false;
    //return false to stop the function from running
}
 
function show() {
    //create function call show
    var todos = get_todos();
    //declare variable 'todos' and set it to the function get_todos()
 
    var html = '<ul>';
    //declare var called html and assign the string '<ul>' to it
    //this starts the html for an unordered list
    for(var i=0; i<todos.length; i++) {
        //initiate for loop
        //declare variable i and assign 0 to it
        //as long as i is less than the length of the array todos perform the following tasks
        // after perform the following tasks increment i by 1
        html += '<li>' + todos[i] + '<button class="remove" id="' + i  + '">x</button></li>';
        //concantenate the string '<li>' to item at location i of array todos then concantenate a string '<button class="remove" id="' then concantenate i then concantenate the string '">x</button></li>'
        //this will create the html for list items in the array todos with buttons with class remove and the id for the item in the array
        // this allows the items in the todos array to be displayed on the page with a button for each item that will allow the user to remove the item when the button is pressed
    };
    html += '</ul>';
    //concantenates the string '</ul>' to the variable html
    // this will close the unordered list
 
    document.getElementById('todos').innerHTML = html;
    //innerHTML is used to modify/change the content of an html element
    //assign html to the html element with id todos
 
    var buttons = document.getElementsByClassName('remove');
    //return elements with class name 'remove' and assign them to a declared variable buttons
    for (var i=0; i < buttons.length; i++) {
        //initiate for loop
        //declare variable i and assign 0 to it
        //as long as i is less than the length of the array buttons (or number of buttons on the page named remove) perform the following tasks
        // after perform the following tasks increment i by 1
        buttons[i].addEventListener('click', remove);
        //task to be performed
        //add event listener that listens for a click of the remove button to each button in the array buttons
    };
}
 
document.getElementById('add').addEventListener('click', add);
//retrieve elements with id 'add'
//add an event listener that listens for a click on the add button
show();
//call the show() function