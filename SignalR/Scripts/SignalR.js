(function () {


    var chat = $.connection.chat;
    $.connection.hub.start()
                .done(function () {
                    $.connection.hub.logging = true;
                    writeToPage("It Worked!");
                    $.connection.hub.log("Connected!");
                    chat.server.annouce("Connected!");
                    $('#sendmessage').click(function () {                        
                        // Call the Send method on the hub. 
                        chat.server.send($('#displayname').val(), $('#message').val());
                        // Clear text box and reset focus for next comment. 
                        $('#message').val('').focus();
                    });
                })
                .fail(function () {
                    writeToPage("Failed! :(");
                })

    chat.client.annouce = function (message) {
        writeToPage(message);
    }

    chat.client.broadcastMessage = function (name, message) {
        // Html encode display name and message. 
        var encodedName = $('<div />').text(name).html();
        var encodedMsg = $('<div />').text(message).html();
        // Add the message to the page. 
        $('#discussion').append('<li><strong>' + encodedName
            + '</strong>:&nbsp;&nbsp;' + encodedMsg + '</li>');
    };

    

    var writeToPage = function (message) {
        $('#welcome-messages').append(message + "<br/>");
    }

    $("#click-me").on("click", function () {
        chat.server.getServerDateTime()
                      .done(function (data) {
                          writeToPage(data);
                      })
                      .fail(function (error) {
                          writeToPage(error);
                      });
    });

})()

