
import getUser, { userRole, getUserRole } from '../userUtils.mjs';

console.log(getUser('Alice'));

console.log(`User Role: ${userRole}`);

console.log(`Get User Role: ${getUserRole()}`);
