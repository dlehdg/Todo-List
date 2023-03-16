let input = document.querySelector('.todo');
let addTodo = document.querySelector('.btn');
let toDo = document.querySelector('.todoList');

addTodo.addEventListener('click', function(){
    let list = document.createElement('li');
    if(input.value == false){
        alert('내용을 입력해주세요');
    }
    else{
        list.innerHTML = input.value;
        toDo.appendChild(list);
        input.value == "";
        console.log(input.value);
    }

    list.addEventListener('click', function(){
        list.style.textDecoration = "line-through"
    })

    list.addEventListener('dblclick' , function() {
        toDo.removeChild(list);
    })
})

