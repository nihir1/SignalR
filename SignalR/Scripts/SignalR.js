(function () {

    $("#click-me").on("click", function () {
        chat.server.getServerDateTime()
                      .done(function (data) {
                          writeToPage(data);
                      })
                      .fail(function (error) {
                          writeToPage(error);
                      });
    });

    var chat = $.connection.chat;
    $.connection.hub.start()
                .done(function () {
                    writeToPage("It Worked!");
                    chat.server.annouce("Connected!");
                  
                })
                .fail(function () { writeToPage("Failed! :("); })

    chat.client.annouce = function (message) {
        writeToPage(message);
    }

    var writeToPage = function (message) {
        $('#welcome-messages').append(message + "<br/>");
    }

})()

