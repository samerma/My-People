let users = []


const renderUsers = function (users) {
    $("#users").empty()
    const source = $('#user-template').html();
    const template = Handlebars.compile(source);
    let newHTML = template({ users: users });
    $('#users').append(newHTML);
}


const fetch = function () {
    $.ajax({
        method: "GET",
        url: 'https://randomuser.me/api/?results=10',
        success: function (data) {
            console.log(data);
            users = data.results.map(u => { return { name: u.name.title + " " + u.name.first + " " + u.name.last, email: u.email } })
            console.log(users);
            renderUsers(users)
        }
    })
}
fetch()

