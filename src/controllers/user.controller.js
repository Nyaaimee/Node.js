/** USER CONTROLLER CLASS
 * @author Eng Nya Nziba Aimee
 * @contributors Levell 4 (July 2022 batch) 
 * @Date August 10th 2022
 */
 let data = [ {
    username: "Nya Aimee",
    email: "nyaaimee9@gmail.com",
    password: "Evergreen",
    isLoggedIn: true,
    createdAt: new Date (Date.now()) ,
},
{
    username: "Debra",
    email: "debra@gmail.com",
    password: "debie2021",
    isLoggedIn: true,
    createdAt: new Date (Date.now()) ,
},
{
    username: "Elvis nji",
    email: "nyaaimee9@gmail.com",
    password: "nji2022",
    isLoggedIn: true,
    createdAt: new Date (Date.now()) ,
}
]

export class UserController{
   
    // DEPENDENCIES
    // UseData
    userData = {} // create a class property
    constructor (users= [{}]){ // accept the user
        this.userData = users;
    }

    // add users => C
    addUser (user = []) {
        // add this user info into our userData
        return this.userData.push(user)
    }

    // list/get users => R
    getUser (user) {
        // this get user from all our userData
        return JSON.stringify(this.userData);
    }

    // get a single user
    getSingleUser(email = '') {
        return this.userData.find(user => user.email == email);
    }
    // update users => U
    updateUser (email,userInfo) {
        let foundUser = this.getSingleUser(email);
        if (foundUser) {
           this.userData = this.userData.map(user => {
             if (user.email == foundUser.email) {
                return { ...foundUser, ...userInfo};
             } 
             else
                return user;             
           });
        }
    }
    // delete users => D
    deleteUser (email = '') {
        return this.userData.filter(user => user.email !== email);
    }
}

// CRUD OPERATIONS

const IUser = {
    username: "",
    email: "", 
    password: "",
    isLoggedIn: "",
    createdAt: ""
}

// Create an instance of the userController
let controller = new UserController(data);

// before update
console.log("All the user before the update =>", JSON.parse(controller.getUser()));

// Add user 
console.log("All users => ",JSON.parse(controller.addUser({
    username: "Charity",
    email: "charity@gmail.com",
    password: "Ccas37",
    isLoggedIn: true,
    createdAt: new Date (Date.now()) ,
})));

// Call the Update endpoint
console.log("update users => ", (controller.updateUser("charity@gmail.com",{
    isLoggedIn: false,
    createdAt: new Date (Date.now()) ,
})));

// Call the get users endpoint
console.log("All users => ",JSON.parse(controller.getUser()));

// Call delete user endpoint
 console.log("All users after delete =>",controller.deleteUser("charity@gmail.com"));

