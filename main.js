
let counter=0;
let task_list=document.getElementById('taskList');
let button_container=getElementById('taskList');

function addTask()
{
    const task_input=document.getElementById('taskInput').value;
    
    if(task_input)
    {
        counter+=1;
        const task_create=document.createElement('li');
        task_create.innerText=task_input;

        task_list.appendChild(task_create);

        document.getElementById('taskInput').value='';
        document.getElementById('button_1').value='block';

        const button_1=document.createElement('button').innerHTML='<button id=button_1 onclick="finished()">Finished</button>';
        document.getElementsByClassName('task-app').div.div.innerText= button_1;
    }
    else
    {
        alert('Please fill the form');
    }
    


}