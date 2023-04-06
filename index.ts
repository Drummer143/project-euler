import * as tasks from './src';

let taskNumber: string | number = process.argv[2];

if (!taskNumber) {
    throw new Error("Enter task number.");
}

taskNumber = +taskNumber;

if (isNaN(taskNumber)) {
    throw new Error("Task number must be a number");
}

const taskName = `task${taskNumber}` as keyof typeof tasks;

if (!(taskName in tasks)) {
    throw new Error("Can't find this task");
}

const result = tasks[taskName]()

console.log(result);
