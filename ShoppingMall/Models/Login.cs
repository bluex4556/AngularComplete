using System;
using System.Collections.Generic;

#nullable disable

namespace ShoppingMall.Models
{
    public partial class Login
    {
        public Login()
        {
            
        }

        public string UserName { get; set; }
        public string Password { get; set; }
        public string Email { get; set; }
        public string Role { get; set; }

    }
}
