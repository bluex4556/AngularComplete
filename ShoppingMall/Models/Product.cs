using System;
using System.Collections.Generic;

#nullable disable

namespace ShoppingMall.Models
{
    public partial class Product
    {
        public Product()
        {
        }

        public int ProductId { get; set; }
        public string ProductName { get; set; }
        public decimal Price { get; set; }
        public string ProductImageUrl { get; set; }
        public int Stock { get; set; }
        public string ShopName { get; set; }
        public string Description { get; set; }
        public int? ShopId { get; set; }
    }
}
