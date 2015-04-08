function Employee(id, name, salary){
    if (!(this instanceof Employee))
        return new Employee(id,name,salary);

    var _id = id;
    this.getId = function(){
        return _id;
    }


    this.name = name;
    this.salary = salary;
}
 Employee.prototype.display = function(){
        console.log(this.id, this.name, this.salary);
    }

