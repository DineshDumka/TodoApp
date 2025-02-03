let list = [
    {
        "task": "learn dsa",
        "time": "11/12/55"
    },
    {
        "task": "learn dsa",
        "time": "11/12/55"
    }
];

let containerEelement = document.querySelector('.container'); 

let display = () => {
    let new_html = '';
    for (let i = 0; i < list.length; i++) {
        let {task, time} = list[i];
        new_html += `
            <span id = "data">${task} </span>
            <span id = "date">${time} </span>
            <button id="delete" 
            onclick="list.splice(${i},1); display();"> Delete </button>
        
        `;
    }
    containerEelement.innerHTML = new_html;
};


display();

let add_task = () => {
    let input_box = document.querySelector('#input_id');
    let date_box = document.querySelector('#date_id');
    let item = input_box.value;
    let dueDate = date_box.value;
    list.push({task: item, time: dueDate});
    input_box.value = '';
    date_box.value = '';
    display();
};
