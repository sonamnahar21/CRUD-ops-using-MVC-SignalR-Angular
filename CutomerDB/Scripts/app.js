
document.getElementById("customerDetails").style.display = "none";
// hub creation and notifying clients
var hub = $.connection.NotifyClients;
hub.client.updatedClients = function () {
    FetchCustomers();
}

$.connection.hub.start().done(function () {
    FetchCustomers();
});

// 
function FetchCustomers() {
    var model = $('#dataTable');
    $.ajax({
        url: '/home/GetAllCustomerRecords',
        contentType: 'application/html ; charset:utf-8',
        type: 'GET',
        dataType: 'html',
        success: function (result) { model.empty().append(result); }
    })
}
function ShowCustomerTable(ops)
{
    document.getElementById("customerDetails").style.display = "block";
    if (ops === "delete")
    {
        //
    }
}
function UpdateCustomer()
{
    var customer = {
        CustomerID: $('#txtCustomerID').val(),
        CustomerName: $('#txtCustomerName').val(),
        EmailAdress: $('#txtEmail').val(),
        MobileNumber: $('#txtMobile').val()
    };

    $.ajax({
        url: '/home/Update',
        type: 'POST',
        data: JSON.stringify(customer),
        contentType: "application/json;charset=utf-8",
        success: function (data) {
            alert('Customer updated Successfully');
        },
        error: function (e) {
            console.log(e);
            alert('Customer could not be updated');
        }
    });
}
function DeleteCustomer()
{
    var customer = {
        CustomerID: $('#txtCustomerID').val()
    };

    $.ajax({
        url: '/home/Delete',
        type: 'POST',
        data: JSON.stringify(customer),
        contentType: "application/json;charset=utf-8",
        success: function (data) {
            alert('Customer deleted Successfully');
        },
        error: function (x, y, z) {
            alert(x + '\n' + y + '\n' + z);
        }
    });
}
function InsetCustomer() {
    var customer = {
        CustomerName: $('#txtCustomerName').val(),
        EmailAdress: $('#txtEmail').val(),
        MobileNumber: $('#txtMobile').val()
    };


    $.ajax({
        url: '/home/Insert',
        type: 'POST',
        data: JSON.stringify(customer),
        contentType: "application/json;charset=utf-8",
        success: function (data) {
            alert('Employee added Successfully');
            document.getElementById("customerDetails").style.display = "none";
        },
        error: function () {
            alert('Employee not Added');
        }
    });
}
