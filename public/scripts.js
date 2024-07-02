document.addEventListener('DOMContentLoaded', function() {
    const content = document.getElementById('content');
    
    document.getElementById('login-form').addEventListener('submit', function(e) {
        e.preventDefault();
        const userType = document.getElementById('user-type').value;
        loadContent(userType);
    });
    
    function loadContent(userType) {
        if (userType === 'admin') {
            loadAdminContent();
        } else if (userType === 'member') {
            loadMemberContent();
        } else if (userType === 'user') {
            loadUserContent();
        }
    }

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

    // Placeholder functions for buttons (implement as needed)
    window.showAddMember = function() { alert('Add Member functionality to be implemented'); }
    window.showUpdateMember = function() { alert('Update/Delete Member functionality to be implemented'); }
    window.showCreateBill = function() { alert('Create Bill functionality to be implemented'); }
    window.showAssignFeePackage = function() { alert('Assign Fee Package functionality to be implemented'); }
    window.showAssignNotification = function() { alert('Assign Notification functionality to be implemented'); }
    window.showReportExport = function() { alert('Report Export functionality to be implemented'); }
    window.showSupplementStore = function() { alert('Supplement Store functionality to be implemented'); }
    window.showDietDetails = function() { alert('Diet Details functionality to be implemented'); }
    window.showViewBillReceipts = function() { alert('View Bill Receipts functionality to be implemented'); }
    window.showViewBillNotifications = function() { alert('View Bill Notifications functionality to be implemented'); }
    window.showViewDetails = function() { alert('View Details functionality to be implemented'); }
    window.showSearchRecords = function() { alert('Search Records functionality to be implemented'); }
});
