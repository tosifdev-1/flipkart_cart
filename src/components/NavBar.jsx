import { NavLink } from "react-router-dom";

function Nav({ cart }) {
  console.log("count", cart);

  return (
    <>
      <div className="flex justify-between shadow-lg w-auto h-15 items-center py-3  font-medium">
        <div className="p-4 w-xl ">
          <img
            src="https://i.postimg.cc/mg10LQ5j/Flipkart-logo-svg.png"
            className="w-25"
            alt="Flipkart Logo"
          />
        </div>

        <div>
          <input
            placeholder="Search Product"
            className="border-hidden bg-purple-100 border-gray-500 rounded px-3 py-2 w-xl outline-none "
          />
        </div>

        <ul className="flex justify-around w-150 h-auto gap-5 items-center">
          <NavLink to="/">Home</NavLink>

          <NavLink to="/cart" className="relative flex items-center">
            <i className="fa-solid fa-cart-shopping text-xl"></i>
          {
            
            <span className="bg-yellow-300 w-auto h-auto px-2 text-sm rounded-xl -mt-6 -ml-3">{cart.length}</span>}
          </NavLink>
        </ul>
      </div>
    </>
  );
}

export default Nav;
