import Cart from "./cart";
import productList from "./data";
import "react-toastify/dist/ReactToastify.css";
import { toast } from 'react-toastify';
function Home({ setCart }) {
  function addCart(veg) {
    console.log("clicked", veg);
    setCart(veg);
    toast.success("Item has added sucessfully");
  }
  return (
    <>
      {productList.map((veg, index) => (
        <div key={index} className="inline-grid mr-2 mt-5 ml-5">
          <div className="flex justify-center ">
            <div className="bg-white rounded shadow p-4 w-40">
              <img
                src={veg.img}
                alt={veg.brand}
                className="w-full h-auto object-cover rounded mb-2"
              />
              <h2 className="text-lg font-semibold text-gray-800 truncate">
                {veg.brand}
              </h2>
              <p className="text-sm text-gray-600 truncate">{veg.model}</p>
              <p className="text-md font-bold text-green-600 mt-2">
                ₹{veg.price}
              </p>
              <button
                onClick={() => addCart(veg?.id)}
                className="bg-blue-500 cursor-pointer rounded p-1 mt-2 w-full"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Home;
