[{
  id: '/dsjkds',
  name: 'Charlie',
  room: 'The Office Fans'
}]

// addUser(id, name, room)
// removeUser(id)
// getUser(id)
// getUserList(room)

class Users {
  constructor () {
    this.users = [];
  }

  addUser (id, name, room) {
    let user = {id, name, room};
    this.users.push(user);
    return user;
  }
  removeUser (id) {
    let user = this.getUser(id);

    if(user) {
      this.users = this.users.filter((user) => user.id !== id);
    }
    
    return user;
  }
  getUser (id) {
    return this.users.filter((user => user.id === id))[0];
  }
  getUserList (room) {
    let users = this.users.filter((user) => user.room === room);
    var namesArray = users.map((user) => user.name);

    return namesArray;
  }
}

module.exports = { Users };


// class Person {
//   constructor (name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   getUserDescription() {
//     return `${this.name} is ${this.age} year(s) old.`;
//   }
// }
//
// var me = new Person('Charlie', 17);
//
// console.log(me.getUserDescription());


// var users = [];
//
// var addUser = (id, name, room) => {
//   users.push({})
// }
//
// modules.export = {addUser}
