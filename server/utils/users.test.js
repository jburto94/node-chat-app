const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {
  let users;

  beforeEach(() => {
    users = new Users();
    users.users = [{
      id: '1',
      name: 'Scott',
      room: 'Node Course'
    }, {
      id: '2',
      name: 'Julie',
      room: 'React Course'
    }, {
      id: '3',
      name: 'Jane',
      room: 'Node Course'
    }];
  });

  it('should add new user', () => {
    const users = new Users();
    const user = {
      id: '123',
      name: 'jake',
      room: 'IASIP fanclub'
    };
    const resUser = users.addUser(user.id, user.name, user.room);
    
    expect(users.users).toEqual([user]);
  });

  it('should remove a user', () => {
    const user = users.removeUser('1');

    expect(user.id).toBe('1');
    expect(users.users.length).toBe(2);
  });

  it('should not remove user', () => {
    const user = users.removeUser('5');

    expect(user).toBeFalsy();
    expect(users.users.length).toBe(3);
  });

  it('should find user', () => {
    const user = users.getUser('1');

    expect(user.id).toBe('1');
  });

  it('should not find user', () => {
    const user = users.getUser('5');

    expect(user).toBeFalsy();
  });

  it('should return names for node course', () => {
    const userList = users.getUserList('Node Course');

    expect(userList).toEqual(['Scott', 'Jane']);
  });

  it('should return names for node course', () => {
    const userList = users.getUserList('React Course');

    expect(userList).toEqual(['Julie']);
  });
});