// Named export
export const users = [
    {
        name: "Aimee",
        email: "nyaaimee9@gmail.com",
        address: "Limbe"
    },
    {
        name: "Claudia",
        email: "claudia@gmail.com",
        address: "Duoala"
    },
    {
        name: "Deborah",
        email: "deborah@gmail.com",
        address: "Buea"
    }
]

// there are two types of export which are;

// and default export
export const Users = users.map((user, index) => {return { ... user, id: index} });