using System;
using System.Collections.Generic;

#nullable disable

namespace ShoppingMall.Models
{
    public partial class Cart
    {
        public int CartId { get; set; }
        public string UserName { get; set; }
        public int ProductId { get; set; }
        public int Qty { get; set; }
        public int? OrderId { get; set; }
        public virtual Product Product { get; set; }
    }
}
