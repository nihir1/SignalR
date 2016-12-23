(function () {
    var myHub = $.connection.myHub;
    $.connection.hub.start()
                .done(function () {
                    writeToPage("It Worked!");
                    myHub.server.annouce("Connected!");
                })
                .fail(function () { writeToPage("Failed! :("); })

    myHub.client.annouce = function (message) {
        writeToPage(message);
    }

    var writeToPage = function (message) {
        $('#welcome-messages').append(message + "<br/>");
    }

})()

