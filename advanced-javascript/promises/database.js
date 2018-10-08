let databaseModule = {
    getUser,
    getUserEmail
};

let users = [
    {
        firstName: 'Spruce',
        lastName: 'Feinstein'
    },
    {
        firstName: 'John',
        lastName: 'Snow'
    },
    {
        firstName: 'Leslie',
        lastName: 'Palmer'
    },
    {
        firstName: 'Alex',
        lastName: 'Martinez'
    }
];

let emails = [
    {
        firstName: 'Spruce',
        email: 'sprucefeinstein@gmail.com',
    },
    {
        firstName: 'John',
        email: 'johnsnow@gmail.com',
    },
    {
        firstName: 'Leslie',
        email: 'lesliepalmer@gmail.com',
    },
    {
        firstName: 'Alex',
        email: 'alexmartinez@gmail.com',
    }
];

function getUser(firstName) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            for (let i = 0; i < users.length; i++) {
                if (users[i].firstName === firstName) {
                    return resolve(users[i])
                }
            }
            return reject('user not found');
        }, 200);
    });
}

function getUserEmail(userFirstName) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            for (let i = 0; i < emails.length; i++) {
                if (emails[i].firstName === userFirstName) {
                    return resolve(emails[i].email)
                }
            }
            return reject('email not found');
        }, 200);
    });
}

module.exports = databaseModule;