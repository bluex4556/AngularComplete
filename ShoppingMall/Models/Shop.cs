using System;
using System.Collections.Generic;

#nullable disable

namespace ShoppingMall.Models
{
    public partial class Shop
    {
        public Shop()
        {
        }

        public int ShopId { get; set; }
        public string ShopName { get; set; }
        public string ShopImageUrl { get; set; }
        public string ManagerName { get; set; }
        public string Description { get; set; }

    }
}
