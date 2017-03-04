
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
function ShowCustomerTable()
{
    document.getElementById("customerDetails").style.display = "block";

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