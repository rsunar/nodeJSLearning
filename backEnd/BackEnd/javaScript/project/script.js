// var h = document.createElement('h1')
// var myValue = document.createTextNode('Hello World!')

// h.appendChild(myValue)
// document.querySelector('h1').appendChild(h)

// above is create text using textnode method

// while loop started here

// var val = 5 
// while(val > 0){
//     console.log(val)
//     val--
// }
var ul = document.getElementById('list')
var li;

var addButton = document.getElementById('add') ;
addButton.addEventListener('click', addItem);
var removeButton = document.getElementById('remove')
removeButton.addEventListener('click',removeItem)

var removeEverything = document.getElementById('removeAll')

removeEverything.addEventListener('click',removelist)
function addItem(){
 var input = document.getElementById('input')
 var item = input.value 
 var textNode = document.createTextNode(item)

 if(item === ''){
    document.getElementById('airMessage').innerText = 'Add string to the input'
     
 }
 else{
     li = document.createElement('li') // create li
     var checkBox  = document.createElement('input') // create checkbox
     checkBox.type = 'checkbox'
     checkBox.setAttribute('id','check')

     //create label
     var label = document.createElement('label')
     label.setAttribute('for','item')//optional

     //add these element on web page

     ul.appendChild(label)
     li.appendChild(checkBox)
     label.appendChild(textNode)
     li.appendChild(label)
     ul.insertBefore(li , ul.childNodes[0])
     li.className = 'visual'
     input.value = ''

 }
}

function removeItem(){
 li = ul.children
 for(let index = 0 ; index < li.length ; index ++){
    while(li[index] && li[index].children[0].checked){
      ul.removeChild(li[index])
    }
 }
}

function removelist(){
ul.remove(li)
}
