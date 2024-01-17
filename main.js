
let counter=0;



function addTask()
{
    let task_list=document.getElementById('taskList');
    const task_input=document.getElementById('taskInput');
    
    if(task_input)
    {
        counter+=1;
        const task_create=document.createElement('li');
        task_create.innerHTML=`<span>${task_input.value}</span>
                                <button onclick="finished(this)">Finished</button>
                                <button onclick="delete_(this)">Delete</button>`;
        task_list.appendChild(task_create);
        task_input.value='';
     
    }
    else
    {
        alert('Please fill the form');
    }
    


}
    function finished(button)
    {
        let task_item=button.parentNode;
        task_item.classList.toggle('completed');


    }
    function delete_(button)
    {
        let task_item=button.parentNode;
        task_item.remove();
    }
