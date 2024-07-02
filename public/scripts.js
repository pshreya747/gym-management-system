// Import necessary Firebase modules
import { auth, database } from "../src/firebase/firebaseConfig.js";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { ref, set, push } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

// Function to initialize the application logic
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const content = document.getElementById('content');
    const authSection = document.getElementById('auth-section');

    // Event listener for the login form submission
    loginForm.addEventListener('submit', handleLogin);

    // Event listener for the register form submission
    registerForm.addEventListener('submit', handleRegistration);

    // Function to handle login form submission
    function handleLogin(e) {
        e.preventDefault();
        const email = loginForm.elements['email'].value;
        const password = loginForm.elements['password'].value;
        const userType = loginForm.elements['user-type'].value;

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                loadContent(userType);
                authSection.style.display = 'none';
            })
            .catch((error) => {
                console.error('Error logging in:', error);
                alert('Error logging in. Please check your credentials.');
            });
    }

    // Function to handle registration form submission
    function handleRegistration(e) {
        e.preventDefault();
        const email = registerForm.elements['register-email'].value;
        const password = registerForm.elements['register-password'].value;
        const userType = registerForm.elements['register-user-type'].value;

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                // Store user details in the database
                setUserData(user.uid, email, userType);
                alert('User registered successfully!');
            })
            .catch((error) => {
                console.error('Error registering:', error);
                alert('Error registering. Please try again.');
            });
    }

    // Function to set user data in the database
    function setUserData(userId, email, userType) {
        set(ref(database, 'users/' + userId), {
            email: email,
            userType: userType
        });
    }

    // Function to load content based on user type after login
    function loadContent(userType) {
        switch (userType) {
            case 'admin':
                loadAdminContent();
                break;
            case 'member':
                loadMemberContent();
                break;
            case 'user':
                loadUserContent();
                break;
            default:
                console.error('Invalid user type');
        }
    }

    // Function to load admin-specific content
    function loadAdminContent() {
        content.innerHTML = `
            <h2>Admin Section</h2>
            <p>Welcome Admin! Manage gym operations here.</p>
            <ul class="action-list">
                <li><button onclick="showAddMember()">Add Member</button></li>
                <li><button onclick="showUpdateMember()">Update/Delete Member</button></li>
                <li><button onclick="showCreateBill()">Create Bill</button></li>
                <li><button onclick="showAssignFeePackage()">Assign Fee Package</button></li>
                <li><button onclick="showAssignNotification()">Assign Notification</button></li>
                <li><button onclick="showReportExport()">Export Report</button></li>
                <li><button onclick="showSupplementStore()">Supplement Store</button></li>
                <li><button onclick="showDietDetails()">Diet Details</button></li>
            </ul>
        `;
    }

    // Function to load member-specific content
    function loadMemberContent() {
        content.innerHTML = `
            <h2>Member Section</h2>
            <p>Welcome Member! View your bills and notifications here.</p>
            <ul class="action-list">
                <li><button onclick="showViewBillReceipts()">View Bill Receipts</button></li>
                <li><button onclick="showViewBillNotifications()">View Bill Notifications</button></li>
            </ul>
        `;
    }

    // Function to load user-specific content
    function loadUserContent() {
        content.innerHTML = `
            <h2>User Section</h2>
            <p>Welcome User! View details and search records here.</p>
            <ul class="action-list">
                <li><button onclick="showViewDetails()">View Details</button></li>
                <li><button onclick="showSearchRecords()">Search Records</button></li>
            </ul>
        `;
    }

    // Event listeners for placeholder functions (to be implemented)
    window.showAddMember = function() {
        content.innerHTML = `
            <h2>Add Member</h2>
            <form id="add-member-form">
                <label for="member-name">Name:</label>
                <input type="text" id="member-name" name="member-name" required>
                <label for="member-email">Email:</label>
                <input type="email" id="member-email" name="member-email" required>
                <button type="submit">Add Member</button>
            </form>
        `;
        document.getElementById('add-member-form').addEventListener('submit', addMember);
    }

    // Placeholder function to add member (to be implemented)
    function addMember(e) {
        e.preventDefault();
        const memberName = document.getElementById('member-name').value;
        const memberEmail = document.getElementById('member-email').value;

        const membersRef = ref(database, 'members');
        const newMemberRef = push(membersRef);
        set(newMemberRef, {
            name: memberName,
            email: memberEmail,
            joinedAt: new Date().toISOString()
        }).then(() => {
            console.log('Member added successfully');
            alert('Member added successfully!');
        }).catch((error) => {
            console.error('Error adding member:', error);
        });

        document.getElementById('add-member-form').reset();
    }

    // Placeholder functions for user actions (to be implemented)
    window.showViewBillReceipts = function() {
        alert('View Bill Receipts functionality to be implemented');
    }

    window.showViewBillNotifications = function() {
        alert('View Bill Notifications functionality to be implemented');
    }

    window.showViewDetails = function() {
        alert('View Details functionality to be implemented');
    }

    window.showSearchRecords = function() {
        alert('Search Records functionality to be implemented');
    }

    window.showUpdateMember = function() {
        alert('Update/Delete Member functionality to be implemented');
    }

    window.showCreateBill = function() {
        alert('Create Bill functionality to be implemented');
    }

    window.showAssignFeePackage = function() {
        alert('Assign Fee Package functionality to be implemented');
    }

    window.showAssignNotification = function() {
        alert('Assign Notification functionality to be implemented');
    }

    window.showReportExport = function() {
        alert('Export Report functionality to be implemented');
    }

    window.showSupplementStore = function() {
        alert('Supplement Store functionality to be implemented');
    }

    window.showDietDetails = function() {
        alert('Diet Details functionality to be implemented');
    }
});
