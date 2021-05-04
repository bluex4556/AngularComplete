using System;
using System.Collections.Generic;

#nullable disable

namespace ShoppingMall.Models
{
    public partial class Order
    {
        public Order()
        {
        }

        public int OrderId { get; set; }
        public string UserName { get; set; }
        public DateTime PurchaseDate { get; set; }
        public decimal FinalAmount { get; set; }

    }
}
