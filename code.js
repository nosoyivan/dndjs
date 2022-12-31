    //Race & Classes End
    
    var raceobject = {
        Dwarves : 'Dwarves',
        Elves : 'Elves',
        Halflings : 'Halflings',
        Humans : 'Humans',
        Dragonborns : 'Dragonborns',
        Gnomes : 'Gnomes',
        Halfelves : 'Halfelves',
        Halforcs : 'Halforcs',
        Tieflings : 'Tieflings',
    };
    var select = document.getElementById("raceSelect");
    for(index in raceobject) {
        select.options[select.options.length] = new Option(raceobject[index], index);
    }
    
    var claobject = {
        Barbarian : 'Barbarian',
        Bard : 'Bard',
        Cleric : 'Cleric',
        Druid : 'Druid',
        Fighter : 'Fighter',
        Monk : 'Monk',
        Paladin : 'Paladin',
        Ranger : 'Ranger',
        Rogue : 'Rogue',
        Sorcerer : 'Rogue',
        Warlock : 'Warlock',
        Wizard : 'Wizard',
    };
    var select = document.getElementById("claSelect");
    for(index in claobject) {
        select.options[select.options.length] = new Option(claobject[index], index);
    }
    //Race & Classes End
    


(function () {
    if (!console) {
        console = {};
    }
    var old = console.log;
    var logger = document.getElementById('outputLog');
    console.log = function (message) {
        logger.innerHTML = message ;
    }
})();




console.log(localStorage.getItem('List'));



    //RNG Start
        function RNG() {
            var min = 6; var max = 20;
            var result1 = Math.floor(Math.random() * (max - min + 1)) + min;
            var result2 = Math.floor(Math.random() * (max - min + 1)) + min;
            var result3 = Math.floor(Math.random() * (max - min + 1)) + min;
            var result4 = Math.floor(Math.random() * (max - min + 1)) + min;
            var result5 = Math.floor(Math.random() * (max - min + 1)) + min;
            var result6 = Math.floor(Math.random() * (max - min + 1)) + min;
    
            document.getElementById('result1').innerHTML = result1;
            document.getElementById('result2').innerHTML = result2;
            document.getElementById('result3').innerHTML = result3;
            document.getElementById('result4').innerHTML = result4;
            document.getElementById('result5').innerHTML = result5;
            document.getElementById('result6').innerHTML = result6;
        }
        function RNG1() {
            var min = 4; var max = 20;
            var result1 = Math.floor(Math.random() * (max - min + 1)) + min;
            document.getElementById('result1').innerHTML = result1;
        }
        function RNG2() {
            var min = 4; var max = 20;
            var result2 = Math.floor(Math.random() * (max - min + 1)) + min;
            document.getElementById('result2').innerHTML = result2;
        }
        function RNG3() {
            var min = 4; var max = 20;
            var result3 = Math.floor(Math.random() * (max - min + 1)) + min;
            document.getElementById('result3').innerHTML = result3;
        }
        function RNG4() {
            var min = 4; var max = 20;
            var result4 = Math.floor(Math.random() * (max - min + 1)) + min;
            document.getElementById('result4').innerHTML = result4;
        }
        function RNG5() {
            var min = 4; var max = 20;
            var result5 = Math.floor(Math.random() * (max - min + 1)) + min;
            document.getElementById('result5').innerHTML = result5;
        }
        function RNG6() {
            var min = 4; var max = 20;
            var result6 = Math.floor(Math.random() * (max - min + 1)) + min;
            document.getElementById('result6').innerHTML = result6;
        }
    //RNG End
    
    //Copy End
        function Copy() {
            var nodes = document.querySelectorAll('.copy1');
            var last = nodes[nodes.length- 1];
            document.querySelector('#str').value =last.innerHTML;
    
            var nodes = document.querySelectorAll('.copy2');
            var last = nodes[nodes.length- 1];
            document.querySelector('#dex').value =last.innerHTML;
    
            var nodes = document.querySelectorAll('.copy3');
            var last = nodes[nodes.length- 1];
            document.querySelector('#con').value =last.innerHTML;
    
            var nodes = document.querySelectorAll('.copy4');
            var last = nodes[nodes.length- 1];
            document.querySelector('#int').value =last.innerHTML;
    
            var nodes = document.querySelectorAll('.copy5');
            var last = nodes[nodes.length- 1];
            document.querySelector('#wis').value =last.innerHTML;
    
            var nodes = document.querySelectorAll('.copy6');
            var last = nodes[nodes.length- 1];
            document.querySelector('#cha').value =last.innerHTML;
        }
        function CopyEX() {
            var nodes = document.querySelectorAll('.copyex');
            var last = nodes[nodes.length - 1];
            document.querySelector('#task').value = last.innerHTML;

        }
    //Copy End 
    

    //Database Start
        let mylist = [];
    
        const addList = (ev)=>{
            ev.preventDefault();  //to stop the form submitting
            let list = {
                id: Math.floor(Math.random() * (1000)),
                name: document.getElementById('playername ').value,
                str: document.getElementById('str').value,
                dex: document.getElementById('dex').value,
                con: document.getElementById('con').value,
                int: document.getElementById('int').value,
                wis: document.getElementById('wis').value,
                cha: document.getElementById('cha').value,
                lvl: document.getElementById('lvl').value,
                race: document.getElementById('raceSelect').value,
                cla: document.getElementById('claSelect').value,
            }
    
            mylist.push(list);
            document.forms[0].reset(); // to clear the form for the next entries
            //document.querySelector('form').reset();
    
            //saving to localStorage
            localStorage.setItem('List', JSON.stringify(mylist) );
    
            //for display purposes only
            console.warn('added' , {mylist} );
            let pre = document.querySelector('#msg pre');
            pre.textContent = '\n' + JSON.stringify(mylist, '\t', 2);
    
    
            //display test 2
            var printStorageBody = function () {
            var body = document.querySelector("body");
            var pre = document.createElement("pre");
            body.innerHTML = "";
            pre.innerText = JSON.stringify(localStorage, null, '\t');
            body.appendChild(pre);
            
            }
    
    
            const text = JSON.stringify(mylist);
            const obj = JSON.parse(text);
            document.getElementById("demoJSON").innerHTML = obj.name + ", "; 
    
    //<p>JSON: <span class="copyJSON" id="demoJSON"></span></p>
    //<input type="text"  required id="JSONinput"><br />
    
            var input = document.getElementById("ipone");
            var paragraph = document.getElementById("test");
    
            input.addEventListener("input", function() {
            var value = input.value;
            paragraph.innerText = value;
            });
    
        }
    
    
    // End Database
        
        document.addEventListener('DOMContentLoaded', ()=>{
            document.getElementById('databtn').addEventListener('click', addList);
        });
    
    //CopyJSON End
    function CopyJSON() {
            var nodes = document.querySelectorAll('.copyJSON');
            var last = nodes[nodes.length- 1];
            document.querySelector('#JSONinput').value =last.innerHTML;
        }
    //CopyJSON End    
    
    






            window.onload = () => {
                const filter = document.querySelector("#filter");
                // Filter Tasks event
                filter.addEventListener("keyup", filterTask);

                getTasks();
                check();
            }

            // Get Tasks from LS
            function getTasks() {
                let tasks;

                if (Object.keys(localStorage).length > 0) {
                    // Loops over local storage keys
                    Object.keys(localStorage).forEach(taskCat => {
                        // Gets tasks for each task category
                        tasks = JSON.parse(localStorage.getItem(taskCat));
                        // Loop over each task
                        tasks.forEach(task => {
                            createTask(taskCat, task);
                        });
                    });
                }
            }

            function check() {
                const showMe = document.getElementById("showMe");
                // Check if any tasks exist
                showMe.style.display = Object.keys(localStorage).length > 0 ? "block" : "";
            }

            // Add Task
            function addTask() {
                const taskCat = document.getElementById("taskCat");
                const taskInput = document.getElementById("task");
                // Checks if valid task
                if (taskCat.value == 0 || !taskInput.value) {
                    console.log("Invalid inputs");
                    return;
                }

                // Create task
                createTask(taskCat.value, taskInput.value);
                // Store in LS
                addTaskToLocalStorage(taskCat.value, taskInput.value);
                // Clear inputs
                taskInput.value = "";
                taskCat.value = 0;
                check();
            }

            function createTask(taskCat, task) {
                const taskList = document.getElementById("collection");
                taskList.innerHTML += `
    <li class="collection-item ${taskCat}">
      ${task}
      <button class="delete-item secondary-content" onclick="deleteTask(this, '${taskCat}', '${task}')">
        DELETE
      </button>
    </li>
  `;
            }

            // Store Tasks
            function addTaskToLocalStorage(taskCat, task) {
                const tasks = !localStorage.getItem(taskCat) ? [] : JSON.parse(localStorage.getItem(taskCat));

                tasks.push(task);
                localStorage.setItem(taskCat, JSON.stringify(tasks));
            }

            // Remove Tasks
            function deleteTask(e, taskCat, task) {
                if (confirm("Are You Sure?")) {
                    e.parentElement.remove();
                    deleteTaskFromLocalStorage(taskCat, task);
                    check()
                }
            }

            // Remove Tasks from LS
            function deleteTaskFromLocalStorage(taskCat, task) {
                const tasks = JSON.parse(localStorage.getItem(taskCat));
                const index = tasks.indexOf(task);

                tasks.splice(index, 1);

                if (tasks.length > 0) {
                    localStorage.setItem(taskCat, JSON.stringify(tasks))
                } else {
                    localStorage.removeItem(taskCat);
                }
            }

            // Clear Tasks
            function deleteTasks() {
                const taskList = document.querySelector("#collection");
                taskList.innerHTML = "";

                localStorage.clear();
                check();
            }

            // Filter Tasks
            function filterTask(e) {
                const text = e.target.value.toLowerCase();

                document.querySelectorAll(".collection-item").forEach(function (task) {
                    const item = task.firstChild.textContent;
                    if (item.toLowerCase().indexOf(text) != -1) {
                        task.style.display = "block";
                    } else {
                        task.style.display = "none";
                    }
                });
            }

            function filtertaskCat() {
                const taskCatFilter = document.getElementById('taskCatFilter');
                const taskListItems = document.querySelectorAll(".collection-item");

                taskListItems.forEach(listItem => {
                    if (taskCatFilter.value == 0 || listItem.classList.contains(taskCatFilter.value)) {
                        listItem.style.display = "block";
                    } else {
                        listItem.style.display = "none";
                    }
                });
            }
            
//Connect

    const { createClient } = supabase
    supabase = createClient('https://zsllqqspcgvfpyesjgwo.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpzbGxxcXNwY2d2ZnB5ZXNqZ3dvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzIyNjQ2NDEsImV4cCI6MTk4Nzg0MDY0MX0.Uik4c0Ojpg_pj7seEjl73D2NvwgWbXHSDXx5b5bkcyY')

    const form = document.querySelector('#set-form')
    form.addEventListener('submit', async (event) => {
        event.preventDefault()

        const formInputs = form.querySelectorAll('input, select, textarea')

        let submision = {}

        formInputs.forEach(element => {
            const { value, name } = element
            if (value) {
                submision[name] = value
            }
        })

        const { error } = await supabase.from('dndjs').insert([submision], { returning: 'minimal' })

        if (error) {
            alert('There was an error please try again')
        } else {
            alert('Thanks for contacting us')
        }

        formInputs.forEach(element => element.value = '')

    })
