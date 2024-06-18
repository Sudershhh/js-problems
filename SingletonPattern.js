class UserSession {
  constructor() {
    if (UserSession.instance) {
      return UserSession.instance;
    }

    this.user = null;
    this.token = null;
    UserSession.instance = this;
  }

  createSession(user, token) {
    this.user = user;
    this.token = token;
  }

  destroySession() {
    this.user = null;
    this.token = null;
  }

  getSession() {
    return {
      user: this.user,
      token: this.token,
    };
  }

  isLoggedIn() {
    return this.user !== null && this.token !== null;
  }
}

const session1 = new UserSession();

session1.createSession(
  { name: "Sri Sudersan", email: "sri@netflix.com" },
  "THISisAvalidTOKEN"
);

console.log(session1.getSession()); // { user: { name: 'Sri Sudersan', email: 'sri@netflix.com' }, token: 'THISisAvalidTOKEN' }

const session2 = new UserSession();

console.log(session2.isLoggedIn()); // Output: true

console.log(session2.getSession()); // { user: { name: 'Sri Sudersan', email: 'sri@netflix.com' }, token: 'THISisAvalidTOKEN' }

session2.destroySession(); //Returns the original instance and does not create a new object/instance

console.log(session1.isLoggedIn()); // Output: false

console.log(session2.isLoggedIn()); // Output: false
