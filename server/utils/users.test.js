const expect = require('expect');

const {Users} = require('./users');


describe('Users', () => {
  var users;

  beforeEach(() => {
    users = new Users();
    users.users = [{
      id: '1',
      name: 'Charlie',
      room: 'Node Course'
    },
    {
      id: '2',
      name: 'Jen',
      room: 'React Course'
    },
    {
      id: '3',
      name: 'Hila',
      room: 'Node Course'
    }]
  });

  it('should add new user', () => {
    let users = new Users();
    var user = {
      id: '123',
      name: 'Charlie',
      room: 'The Office Fans'
    };

    var resUser = users.addUser(user.id, user.name, user.room);

    expect(users.users).toEqual([user]);
  });

  it('should remove a user', () => {
    let charlie = users.users[0];
    let removedUser = users.removeUser('1');
    var userList = users.getUserList('Node Course');

    expect(removedUser).toEqual(charlie);
    expect(users.users.length).toBe(2);
  });

  it('should not remove user', () => {
    let removedUser = users.removeUser('notanid');

    expect(removedUser).toBeFalsy();
    expect(users.users.length).toBe(3);
  });

  it('should find user', () => {
    let foundUser = users.getUser('2');
    let jen = users.users[1];

    expect(foundUser).toEqual(jen);
  });

  it('should not find user', () => {
    let foundUser = users.getUser('notanid');

    expect(foundUser).toBeFalsy();
  });

  it('should return names for node course', () => {
    var userList = users.getUserList('Node Course');

    expect(userList).toEqual(['Charlie','Hila']);
  });

  it('should return names for react course', () => {
    var userList = users.getUserList('React Course');

    expect(userList).toEqual(['Jen']);
  });
});
