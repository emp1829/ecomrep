var list = document.createElement('ul');
var info = document.createElement('p');
var html = document.querySelector('html');

info.textContent = 'Below is a dynamic list. Click anywhere outside the list to add a new list item. Click an existing list item to change its text to something else.';

document.body.appendChild(info);
document.body.appendChild(list);

html.onclick = function() {
  var listItem = document.createElement('li');
  var listContent = prompt('Benal Jojo!');
  listItem.textContent = listContent;
  list.appendChild(listItem);

  listItem.onclick = function(e) {
    e.stopPropagation();
    var listContent = prompt('Injam areeeehhh!?');
    this.textContent = listContent;
  }
}

document.body.appendChild(info);
document.body.appendChild(list);

html.onclick = function() {
  var listItem = document.createElement('li1');
  var listContent = prompt('Benal Jojo1!');
  listItem.textContent = listContent;
  list.appendChild(listItem);

  listItem.onclick = function(e) {
    e.stopPropagation();
    var listContent = prompt('Injam areeeehhh!?');
    this.textContent = listContent;
  }
}
