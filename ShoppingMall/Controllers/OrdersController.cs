using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ShoppingMall.Models;

namespace ShoppingMall.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrdersController : ControllerBase
    {
        private readonly shoppingmallContext _context;

        public OrdersController(shoppingmallContext context)
        {
            _context = context;
        }

        // GET: api/Orders/5
        [HttpGet("{username}")]
        public async Task<ActionResult<IEnumerable<Order>>> GetOrder(string username)
        {
            var order = await _context.Orders.Where(ord=>ord.UserName==username).ToListAsync();

            if (order == null)
            {
                return NotFound();
            }

            return order;
        }

        [HttpPost]
        public async Task<ActionResult<Order>> PostOrder(Order order)
        {
            _context.Orders.Add(order);
            await _context.SaveChangesAsync();
            await _context.Carts.Where(cart => (cart.UserName == order.UserName && cart.OrderId == null)).Include(c=>c.Product).ForEachAsync(
                cart => {
                    cart.OrderId = order.OrderId;
                    cart.Product.Stock -= cart.Qty;
                    _context.Entry(cart.Product).Property("Stock").IsModified = true;
                    _context.Entry(cart).Property("OrderId").IsModified = true;
                }
            );

            await _context.SaveChangesAsync();
            return Created("GetOrder", order);
        }

        private bool OrderExists(int id)
        {
            return _context.Orders.Any(e => e.OrderId == id);
        }
    }
}
