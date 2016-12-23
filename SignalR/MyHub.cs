using Microsoft.AspNet.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SignalR
{
    public class MyHub : Hub
    {
        public void Annouce(string message)
        {
            Clients.All.annouce(message);
        }
    }
}