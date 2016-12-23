(function () {

    $("#click-me").on("click", function () {
        myHub.server.getServerDateTime()
                      .done(function (data) {
                          writeToPage(data);
                      })
                      .fail(function (error) {
                          writeToPage(error);
                      });
    });

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

