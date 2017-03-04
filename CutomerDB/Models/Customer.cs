using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace CutomerDB.Models
{
    public class Customer
    {
            [Key]
            public int CustomerID { get; set; }
            public string CustomerName { get; set; }
            public string EmailAdress { get; set; }
            public string MobileNumber { get; set; }
        
    }
}