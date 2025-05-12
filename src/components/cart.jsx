function Cart({ cart, setallProduct }) {
  console.log("data from the cart comp", cart);
  function handleIncrement(id) {
    setallProduct((prevCart) =>
      prevCart.map((pro) =>
        pro?.id === id ? { ...pro, count: (pro.count || 0) + 1 } : pro
      )
    );
    
  }
  
  return (
    <>
      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        cart.map((val, key) => {
          console.log("count",val?.count)
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
                    <button className="mt-3 w-full bg-blue-600 text-white rounded-lg py-2 text-sm hover:bg-blue-700 transition cursor-pointer">
                      View Details
                    </button>
                    <div className="flex gap-1">
                      <button className="px-3 border h-9 mt-5 rounded flex items-center cursor-pointer">
                        -
                      </button>
                      <p className="px-3  h-9 mt-5 rounded flex items-center text-sm">
                        {val?.count
                        
                        }
                      </p>
                      <button
                        onClick={() => {
                          handleIncrement(val?.id);
                        }}
                        className="px-3 py-3 border h-9 mt-5 rounded flex items-center cursor-pointer"
                      >
                        +
                      </button>
                    </div>
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
