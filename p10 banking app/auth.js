class Auth {
    constructor() {
        this.users = [];
    }
    register(username, password) {
        const user = { username, password };
        this.users.push(user);
    }
    login(username, password) {
        const user = this.users.find(u => u.username === username && u.password === password);
        return !!user;
    }
}
export default Auth;
