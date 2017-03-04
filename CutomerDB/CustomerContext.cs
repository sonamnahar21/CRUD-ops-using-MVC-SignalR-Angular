using CutomerDB.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace CutomerDB
{
    public class CustomerContext : DbContext
    {
        public CustomerContext() : base("dbConnectionString")
        {
            Database.SetInitializer<CustomerContext>(new CreateDatabaseIfNotExists<CustomerContext>());
        }
        public DbSet<Customer> Customers { get; set; }
    }
}