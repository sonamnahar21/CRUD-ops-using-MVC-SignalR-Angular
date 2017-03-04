using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(CutomerDB.Startup))]
namespace CutomerDB
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            app.MapSignalR();
        }
    }
}
