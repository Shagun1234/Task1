class Task {
    
    constructor(name, duration) {
      this.name = name;
      this.duration = duration; 
    }
  
    async run() {
      console.log(`Task ${this.name} is starting.`);
      await new Promise((resolve) => setTimeout(resolve, this.duration));
      console.log(`Task ${this.name} has finished.`);
    }
  }
  
  class Scheduler {
    constructor(concurrency) {
      this.concurrency = concurrency; 
      this.taskQueue = []; 
      this.runningTasks = 0; 
    }
  
    async addTask(task) {
      this.taskQueue.push(task); // Add task to the queue
      this.runNextTask(); // Try to run tasks
    }
  
    async runNextTask() {
      if (this.runningTasks < this.concurrency && this.taskQueue.length > 0) {
        const nextTask = this.taskQueue.shift(); 
        this.runningTasks++;
  
        nextTask
          .run()
          .then(() => {
            this.runningTasks--; 
            this.runNextTask(); // Run the next task in the queue
          })
          .catch((err) => {
            console.error(`Error running task ${nextTask.name}:`, err);
            
          });
      }
    }
  }
  
  // Example Usage:
  (async () => {
    const scheduler = new Scheduler(2); 
  
    // Creating tasks
    const task1 = new Task("Task1", 3000); // 3-second task
    const task2 = new Task("Task2", 2000); // 2-second task
    const task3 = new Task("Task3", 1000); // 1-second task
    const task4 = new Task("Task4", 1500); // 1.5-second task
  
    // Adding tasks to the scheduler
    scheduler.addTask(task1);
    scheduler.addTask(task2);
    scheduler.addTask(task3);
    scheduler.addTask(task4);
  })();
  
 
  