class TaskScheduler{
   
  
    //A Scheduler class
    //list t= new list(T1,T2, T3)
    // tasks = [
    // Task(1, 3, []), # Task 1 (no dependencies, 3 sec)
    // Task(2, 5, [1]), # Task 2 (depends on Task 1, 5 sec)
    // Task(3, 2, []), # Task 3 (no dependencies, 2 sec)
    // Task(4, 4, [2, 3]) # Task 4 (depends on Task 2 and 3, 4 sec)
    // ]
    // scheduler = TaskScheduler(max_concurrent=2)
    // scheduler.add_tasks(tasks)
    // scheduler.run()
    }
    function add_tasks(){
        let  n=5;
        let taks= new task(1,2,3,4,5);
        //define 3 tasks and chcek after each iteration if tas is empty
        //let t1 t2 t3 comes from task class 
        let t1="First Task"
         let t2="Second Task"
          let t3="Third Task"
       let tasks =[t1,t2,t3];
        tasks.forEach(element => {
            setTimeout(() => {
                console.log("Task1 started");
            }, 1000);
        });
        setTimeout(() => {
            console.log("Task2 started");
        }, 2000);
        setTimeout(() => {
            console.log("Task3 started");
        }, 3000);
        //we can assume if tasks have started 
        //
        if(t1){}
    }


    //for eg i have three tasks of file reading 