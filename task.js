var task = {
    title: 'My Task',
    description: 'My Description',
    toString: function() {
        return this.title + ' ' + this.description;
    }
}

console.log(task.toString());
console.log(new Date());
