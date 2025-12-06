import React, { useState } from 'react';
import Header from '/src/Header.jsx';
import OnlineOrder from '/src/assets/OnlineOrder.jpeg';

const Onlineorder = ()=>{
     const [cart, setCart] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('appetizers');

  // Mock menu data for online ordering
  const menuItems = {
    appetizers: [
      { id: 1, name: 'Ocean Trout Cured in Ocean Salt', description: 'With finger lime, native pepper and wattleseed', price: 32 },
      { id: 2, name: 'Marron Crusted in Native Herbs', description: 'With lemon myrtle and quandong', price: 38 },
      { id: 3, name: 'Smoked Duck Breast', description: 'With mountain pepper and native cherry', price: 35 }
    ],
    mains: [
      { id: 4, name: 'Wagyu Beef with Native Botanicals', description: 'David Blackmore wagyu, leatherwood honey, native mint', price: 68 },
      { id: 5, name: 'Barramundi with Seasonal Vegetables', description: 'With saltbush and native thyme', price: 48 },
      { id: 6, name: 'Heritage Pork with Garden Vegetables', description: 'With native pepperberry and wattleseed jus', price: 52 }
    ],
    desserts: [
      { id: 7, name: 'Chocolate Sphere with Native Fruits', description: 'With Davidson plum and finger lime', price: 28 },
      { id: 8, name: 'Lemon Myrtle Panna Cotta', description: 'With quandong and native mint', price: 26 },
      { id: 9, name: 'Wattleseed Ice Cream', description: 'With honeycomb and native berries', price: 24 }
    ]
  };

  const categories = [
    { id: 'appetizers', name: 'Appetizers' },
    { id: 'mains', name: 'Main Courses' },
    { id: 'desserts', name: 'Desserts' }
  ];

  const addToCart = (item) => {
    setCart([...cart, { ...item, quantity: 1 }]);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const updateQuantity = (id, quantity) => {
    if (quantity === 0) {
      removeFromCart(id);
      return;
    }
    setCart(cart.map(item => 
      item.id === id ? { ...item, quantity } : item
    ));
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
  };
    return (
        <div>
            <Header></Header>
           <section id="online-order" className="-mt-10 bg-gray-200">
  <div className="max-w-full h-screen mx-auto flex flex-col md:flex-row items-center">

    {/* Left Section */}
    <div className="md:w-1/2 h-screen flex items-center p-10 bg-gray-200">
      <div className="flex flex-col space-y-6">

        <h2 className="text-5xl font-bold mb-6">ONLINE ORDERING</h2>
        <h3 className="text-3xl font-bold mb-6">ORDER YOUR FAVORITES</h3>

        <p className="text-lg leading-relaxed mb-8 text-gray-700 font-semibold">
          Enjoy our signature dishes from the comfort of your home.<br/>
          Online orders available every day from 11:00am to 10:00pm.<br/><br/>
          Check our Delivery & Pickup Policy <span className="underline">here</span>.
        </p>

        <div className="flex space-x-0">
          <a
            href="#"
            className="border-2 border-black px-8 py-1 text-lg font-medium hover:bg-black hover:text-white transition-colors"
          >
            ORDER NOW
          </a>
        </div>

      </div>
    </div>

    {/* Right Image Section */}
    <div className="md:w-1/2 h-screen">
      <img
        src={OnlineOrder}
        alt="Online Ordering Food"
        className="w-full h-full object-cover"
      />
    </div>

  </div>
</section>
{/* Menu Items Section */}
      <section id="menu-items" className="py-20 bg-linear-to-br from-white to-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16 relative">
            <h2 className="text-4xl font-bold mb-4 text-gray-800 relative inline-block">
              Our Menu
              <div className="absolute bottom-0 left-0 w-full h-1 bg-linear-to-r from-black to-gray-800 transform scale-x-80 origin-left"></div>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">Carefully crafted dishes using the finest Australian ingredients</p>
          </div>

          {/* Category Navigation */}
          <div className="flex justify-center mb-12">
            <div className="bg-linear-to-r from-gray-100 to-gray-200 p-2 rounded-full inline-flex shadow-lg">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105 ${
                    selectedCategory === category.id
                      ? 'bg-linear-to-r from-black to-gray-800 text-white shadow-lg'
                      : 'hover:bg-gray-200 text-gray-700'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Menu Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {menuItems[selectedCategory].map((item, index) => (
              <div 
                key={item.id} 
                className="bg-linear-to-br from-white to-gray-50 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4">
                  <div className="w-12 h-12 bg-linear-to-r from-black to-gray-800 rounded-full flex items-center justify-center text-white font-bold mb-3">
                    {item.name.charAt(0)}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800 hover:text-black transition-colors">{item.name}</h3>
                <p className="text-gray-600 mb-4 text-sm">{item.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-gray-800">${item.price}</span>
                  <button
                    onClick={() => addToCart(item)}
                    className="bg-linear-to-r from-black to-gray-800 text-white px-4 py-2 rounded-lg hover:from-gray-800 hover:to-black transition-all duration-300 transform hover:scale-105 shadow-md"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cart Section */}
      <section className="py-20 bg-linear-to-br from-gray-100 to-gray-200">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-linear-to-br from-white to-gray-50 rounded-2xl shadow-2xl p-8 transform transition-all duration-500 hover:shadow-3xl">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 relative inline-block mx-auto">
              Your Order
              <div className="absolute bottom-0 left-0 w-full h-1 bg-linear-to-r from-black to-gray-800 transform scale-x-80 origin-left"></div>
            </h2>
            
            {cart.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🛒</div>
                <p className="text-gray-600 text-lg font-semibold">Your cart is empty. Add some delicious items from our menu!</p>
              </div>
            ) : (
              <div className="space-y-4 mb-8">
                {cart.map((item, index) => (
                  <div 
                    key={item.id} 
                    className="flex items-center justify-between py-4 border-b border-gray-200 hover:bg-gray-50 p-4 rounded-lg transition-colors duration-300"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div>
                      <h3 className="font-bold text-gray-800 text-lg">{item.name}</h3>
                      <p className="text-gray-600">${item.price}</p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center border-2 border-gray-300 rounded-lg overflow-hidden">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="px-3 py-1 bg-gray-100 hover:bg-gray-200 transition-colors"
                        >
                          -
                        </button>
                        <span className="px-3 font-bold">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="px-3 py-1 bg-gray-100 hover:bg-gray-200 transition-colors"
                        >
                          +
                        </button>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-600 hover:text-red-800 hover:scale-110 transition-transform duration-300 font-bold"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
            
            {cart.length > 0 && (
              <div className="border-t-2 border-gray-200 pt-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
                  <span className="text-2xl font-bold text-gray-800">Total: ${getTotalPrice()}</span>
                  <button className="bg-linear-to-r from-black to-gray-800 text-white px-8 py-3 rounded-lg font-bold hover:from-gray-800 hover:to-black transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                    Checkout
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Delivery Information */}
      <section className="py-20 bg-linear-to-br from-white to-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 relative inline-block mx-auto">
            Delivery Information
            <div className="absolute bottom-0 left-0 w-full h-1 bg-linear-to-r from-black to-gray-800 transform scale-x-80 origin-left"></div>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-linear-to-br from-gray-50 to-gray-100 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-100">
              <div className="text-4xl mb-4 text-center">🕐</div>
              <h3 className="text-xl font-bold mb-2 text-gray-800 text-center">Delivery Hours</h3>
              <p className="text-gray-600 text-center">11:00am - 10:00pm Daily</p>
            </div>
            <div className="bg-linear-to-br from-gray-50 to-gray-100 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-100">
              <div className="text-4xl mb-4 text-center">🚚</div>
              <h3 className="text-xl font-bold mb-2 text-gray-800 text-center">Delivery Fee</h3>
              <p className="text-gray-600 text-center">$5.99 (Free over $100)</p>
            </div>
            <div className="bg-linear-to-br from-gray-50 to-gray-100 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-100">
              <div className="text-4xl mb-4 text-center">⏱️</div>
              <h3 className="text-xl font-bold mb-2 text-gray-800 text-center">Prep Time</h3>
              <p className="text-gray-600 text-center">30-45 minutes</p>
            </div>
          </div>
        </div>
      </section>

        </div>
    );
};
export default Onlineorder;