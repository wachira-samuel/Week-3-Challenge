const roles = {
    Admin: {
        permissions: [
            'manage_users',
            'manage_employees',
            'view_reports',
            'send_messages',
            'receive_messages'
        ]
    },
    Manager: {
        permissions: [
            'view_employees',
            'send_messages',
            'receive_messages'
        ]
    },
    Employee: {
        permissions: [
            'view_self',
            'send_messages',
            'receive_messages'
        ]
    }
};

function assignRole(user, role) {
    if (!roles[role]) {
        console.log(`Role ${role} does not exist.`);
    }
    user.role = role;
    user.permissions = roles[role].permissions;
    console.log(`${user.name} has been assigned the role: ${role}`);
}


const registrationForm = document.getElementById('registration-form');
if (registrationForm) {
    registrationForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const role = document.getElementById('role').value;


        // verify empty fields
        if (!email || !password || !role) {
            showErrorMessage("All field are required.");
            return;
        }

        if (!validateEmail(email)) {
            showErrorMessage("Please enter a valid email address.");
            return;
        }
        // check whether a user with such email exist


        const newUser = {
            name: email.split('@')[0],
            email: email,
            password: password,
        };

        try {
            assignRole(newUser, role);
            console.log('User registered successfully:', newUser);
            alert('Registration successful!');
        } catch (error) {
            console.error(error.message);
            alert('Error during registration: ' + error.message);
        }
    });
}


const adminUser = { name: 'AdminUser', email: 'admin@example.com' };
const managerUser = { name: 'ManagerUser', email: 'manager@example.com' };

try {

    assignRole(adminUser, 'Admin');
    assignRole(managerUser, 'Manager');


    console.log(adminUser);
    console.log(managerUser);
} catch (error) {
    console.error(error.message);
}

function hasPermission(user, permission) {
    return user.permissions && user.permissions.includes(permission);
}
console.log(hasPermission(adminUser, 'manage_users'));
console.log(hasPermission(managerUser, 'manage_users')); 
