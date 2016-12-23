$.connection.hub.start()
            .done(function () {
                console.log("It Worked!");
                $.connection.myHub.server.annouce("Connected!");
            })
            .fail(function () { alert("Failed"); })

$.connection.myHub.client.annouce = function (message)
{
    $('#welcome-messages').append(message + "<br/>");
}