using CutomerDB.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity.Core;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace CutomerDB.Controllers
{
    public class HomeController : Controller
    {
        List<Customer> custList;

        public ActionResult Index()
        {
            return View();
        }
        [HttpGet]
        public ActionResult GetAllCustomerRecords()
        {
            using (var context = new CustomerContext())
            {
                custList = context
                .Customers
                .ToList();
            }
            return PartialView("_CustomerList", custList);
        }


        //Insert Customer Record
        public ActionResult Insert()
        {
            return View();
        }
        [HttpPost]
        public ActionResult Insert(Customer customer)
        {
            if (ModelState.IsValid)
            {
                //Insert into Customer table 
                using (var context = new CustomerContext())
                {
                    
                   
                        try
                        {
                            context.Customers.Add(customer);
                            context.SaveChanges();
                        }
                    catch (Exception ex)
                    {

                        Console.WriteLine(ex.Message);
                    }


                }
            }

            //Once the record is inserted , then notify all the subscribers (Clients)
            CustomerHub.NotifyCurrentCustomerInformationToAllClients();
            return RedirectToAction("Index");
        }

        
    }
}