import {MDCList} from '@material/list';
import {MDCRipple} from '@material/ripple';
import $ from "jquery"

const template = "  <li class=\"mdc-list-item\" role=\"checkbox\" aria-checked=\"false\">\n" +
  "                <span class=\"mdc-list-item__graphic\">\n" +
  "                  <div class=\"mdc-checkbox\">\n" +
  "                    <input type=\"checkbox\"\n" +
  "                           class=\"mdc-checkbox__native-control\"\n" +
  "                           id=\"demo-list-checkbox-item-1\"  />\n" +
  "                    <div class=\"mdc-checkbox__background\">\n" +
  "                      <svg class=\"mdc-checkbox__checkmark\"\n" +
  "                           viewBox=\"0 0 24 24\">\n" +
  "                        <path class=\"mdc-checkbox__checkmark-path\"\n" +
  "                              fill=\"none\"\n" +
  "                              d=\"M1.73,12.91 8.1,19.28 22.79,4.59\"/>\n" +
  "                      </svg>\n" +
  "                      <div class=\"mdc-checkbox__mixedmark\"></div>\n" +
  "                    </div>\n" +
  "                  </div>\n" +
  "                </span>\n" +
  "                <label class=\"mdc-list-item__text\" for=\"demo-list-checkbox-item-1\">{{content}}</label> "+
  "             <button class =\"mdc-button \" id=\"remove-button\"> " +
  "                <div class=\" remove-button mdc-button__ripple\"></div>\n" +
  "                <span class=\"mdc-button__label remove-label\">Remove</span>" +
  "             </button>  "+
  "              </li>";

let removedItem = 'removed item';

function removeItem(e) {
  const item = e.target;
  if(item.classList[0] === 'remove-button') {
    removedItem = item.parentElement.parentElement.children[1].textContent;
    item.parentElement.parentElement.remove();
  }
}

function restoreRemoved(){
  if(removedItem !== '') {
    let list = $('.mdc-list')
    console.log(list);
    let node = parser.parseFromString(template.replace("{{content}}", removedItem), 'text/html').body;
    list.append(node);
    removedItem = '';
  }

}

//Enter handling
$(document).ready(function() {

  $('.mdc-text-field__input').on("keypress", function(e) {
    if (e.keyCode === 13) {
      $('#add-button').click();
      return false;
    }
  });


  $(document).keydown( function(e) {
    if (e.which === 90 && e.ctrlKey) {
      restoreRemoved();
      return false;
    }
  });

});

$(document).on('click', "[id^=remove-button]", function(e){
  bootbox.confirm("Are you sure you want to remove an item?", function (k) {
    if(k)
      removeItem(e)
  })
});


let parser = new DOMParser();
window.onload = function(){

let input = document.querySelector('.mdc-text-field__input');
let addButton = document.querySelector('#add-button');
let mdcList = new MDCList(document.querySelector('.mdc-list'));

let checkbox = document.querySelector('.mdc-checkbox__native-control');
let list = document.querySelector('.mdc-list');


//enables ripples
  const listItemRipples = mdcList.listElements.map((listItemEl) => new MDCRipple(listItemEl));
  const buttonRipple = new MDCRipple(document.querySelector('.mdc-button'));


  //list.addEventListener('click', removeItem);
  list.addEventListener('change', checkItem);


  function checkItem(e) {
    const item = e.target;
      if(item.checked) {
        item.parentElement.parentElement.nextElementSibling.classList.add('line-through');
        item.parentElement.parentElement.parentElement.classList.add('selected');
      }
      else {
        item.parentElement.parentElement.nextElementSibling.classList.remove('line-through');
        item.parentElement.parentElement.parentElement.classList.remove('selected');
      }
  }

addButton.onclick = function() {

  let newTodo = input.value;
  if(newTodo === ""){
    alert('Can\'t add empty todo')
  }else {
      input.value = '';
      let node = parser.parseFromString(template.replace("{{content}}",newTodo), 'text/html').body;
      list.appendChild(node);
  }
}
};

