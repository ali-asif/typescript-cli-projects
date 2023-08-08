import User  from './user.js';

class Auth {
  private users: User[] = [];

  register(username: string, password: string): void {
    const user: User = { username, password };
    this.users.push(user);
  }

  login(username: string, password: string): boolean {
    const user = this.users.find(u => u.username === username && u.password === password);
    return !!user;
  }
}

export default Auth;