function Cart({ cart }) {
  console.log("data from the cart comp", cart);
  return (
    <>
      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        cart.map((val, key) => {
          return (
            <>
              <div key={key} className="inline-grid m-4">
                <div className="flex justify-center">
                  <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow p-4 w-64">
                    <img
                      src={val.img}
                      alt={val.brand}
                      className="w-full object-cover rounded-xl mb-3"
                    />
                    <div className="space-y-1">
                      <h2 className="text-lg font-semibold text-gray-800 truncate">
                        {val.brand}
                      </h2>
                      <p className="text-sm text-gray-600">{val.model}</p>
                      <p className="text-sm text-gray-600 truncate">
                        {val.description}
                      </p>
                      <p className="text-md font-bold text-green-600 mt-2">
                        ₹{val.price}
                      </p>
                    </div>
                    <button className="mt-3 w-full bg-blue-600 text-white rounded-lg py-2 text-sm hover:bg-blue-700 transition">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </>
          );
        })
      )}
    </>
  );
}

export default Cart;
