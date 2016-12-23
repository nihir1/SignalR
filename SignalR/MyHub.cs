using Microsoft.AspNet.SignalR;
using Microsoft.AspNet.SignalR.Hubs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SignalR
{
    [HubName("chat")]
    public class ChatHub : Hub
    {
        public void Annouce(string message)
        {
            Clients.All.annouce(message);
        }        

        public DateTime GetServerDateTime()
        {
            return DateTime.Now;
        }

        public void Send(string name, string message)
        {
            // Call the broadcastMessage method to update clients.
            Clients.All.broadcastMessage(name, message);
        }
    }
}