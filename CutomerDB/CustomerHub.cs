using Microsoft.AspNet.SignalR;
using Microsoft.AspNet.SignalR.Hubs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CutomerDB
{
    [HubName("NotifyClients")]
    public class CustomerHub : Hub
    {
        
        /*public static void NotifyCurrentCustomerInformationToAllClients()
        {
            IHubContext context = GlobalHost.ConnectionManager.GetHubContext<CustomerHub>();

            // the update client method will update the connected client about any recent changes in the server data
            context.Clients.All.updatedClients();
        }*/

        public static void NotifyCurrentCustomerInformationToAllClients()
        {
            try
            {
                IHubContext context = GlobalHost.ConnectionManager.GetHubContext<CustomerHub>();
                context.Clients.All.updatedClients();
            }
            catch (Exception w)
            {
                Console.Write(w.Message);
            }
        }
    }
}