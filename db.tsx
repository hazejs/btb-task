// User Schema
export interface User {
    username: string;
    password: string;
    role: 'admin' | 'non-admin';
}
 
// Users Table
export const users: User[] = [
    { username: 'admin', password: 'admin', role: 'admin' },
    { username: 'user', password: 'user', role: 'non-admin' },
];