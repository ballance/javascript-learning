var task = {
    title: 'My Task',
    description: 'My Description',
}

Object.defineProperty(task, 'toString', {
    value: function () {
        return this.title + ' ' + this.description;
    },
    writable: false,
    enumerable: false,
    configuratble: false
});

var urgentTask = Object.create(task);
Object.defineProperty(urgentTask, 'toString', {
    value: function() {
        return this.title + ' is urgentr';
    },
    writable: false,
    enumerable: false,
    configuratble: false    
})

console.log(task.toString());
console.log(new Date());

console.log(urgentTask.toString());
