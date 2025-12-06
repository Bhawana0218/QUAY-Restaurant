import React, { useState } from 'react';
import Header from '../Header';
import MenuImage from '../assets/MenuImage1.jpg';
import WineImage from '../assets/WineImage.jpg';

const Menu = ()=>{
     const [activeCategory, setActiveCategory] = useState('starters');

      const menuData = {
    starters: [
      { name: 'Ocean Trout Cured in Ocean Salt', description: 'With finger lime, native pepper and wattleseed', price: '$32' },
      { name: 'Marron Crusted in Native Herbs', description: 'With lemon myrtle and quandong', price: '$38' },
      { name: 'Smoked Duck Breast', description: 'With mountain pepper and native cherry', price: '$35' }
    ],
    mains: [
      { name: 'Wagyu Beef with Native Botanicals', description: 'David Blackmore wagyu, leatherwood honey, native mint', price: '$68' },
      { name: 'Barramundi with Seasonal Vegetables', description: 'With saltbush and native thyme', price: '$48' },
      { name: 'Heritage Pork with Garden Vegetables', description: 'With native pepperberry and wattleseed jus', price: '$52' }
    ],
    desserts: [
      { name: 'Chocolate Sphere with Native Fruits', description: 'With Davidson plum and finger lime', price: '$28' },
      { name: 'Lemon Myrtle Panna Cotta', description: 'With quandong and native mint', price: '$26' },
      { name: 'Wattleseed Ice Cream', description: 'With honeycomb and native berries', price: '$24' }
    ]
  };

  const categories = [
    { id: 'starters', name: 'Starters' },
    { id: 'mains', name: 'Mains' },
    { id: 'desserts', name: 'Desserts' }
  ];
    return (
        <div>
            <Header></Header>
           <section id="menu" className=" -mt-10 bg-gray-200">
                  <div className="max-w-full h-screen mx-auto flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 h-screen flex items-center p-10 bg-gray-200">
                    <div className="flex flex-col space-y-6">
                      <h2 className="text-5xl font-bold mb-6">MENU</h2>
                      <p className="text-md leading-relaxed mb-8 text-gray-700 font-semibold">Quay is a progression of rare and beautiful ingredients where texture, flavour and harmony is paramount.
                        Continually inspired by nature, the creative process for chef Peter Gilmore begins in working closely with the farmers, fishermen,
                         producers and artisans who cultivate bespoke produce exclusively for Quay. For each dish, the growth of every element and the selection of every ceramic piece is carefully considered and crafted for its role in the dining experience.
                        Quay brings a personal, interactive passage for diners through Peter Gilmore’s culinary evolution.</p>
                      <div className="flex space-x-0">
                        <a href="#" className="border-2 border-black px-6 py-3 text-lg font-medium hover:bg-black hover:text-white transition-colors">
                          VIEW MENU
                        </a>
                      </div>
                      </div>
                    </div>
                    <div className="md:w-1/2 h-screen">
                      <img 
                        src={MenuImage}  alt="Signature Dish" className="w-full h-full object-cover"
                      />
                    </div>
                    
                  </div>
                </section>

                 {/* New Menu Items Section */}
      <section id="menu-items" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">Our Culinary Journey</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Each dish tells a story of connection to the land and sea, celebrating Australia's unique ingredients</p>
          </div>

          {/* Category Navigation */}
          <div className="flex justify-center mb-12">
            <div className="bg-gray-100 p-2 rounded-full inline-flex">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105 ${
                    activeCategory === category.id
                      ? 'bg-black text-white shadow-lg'
                      : 'hover:bg-gray-200 text-gray-700'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Menu Items */}
          <div className="grid md:grid-cols-2 gap-12">
            {menuData[activeCategory].map((item, index) => (
              <div key={index} className="border-b border-gray-200 pb-8 hover:border-gray-300 transition-colors duration-300">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2 text-gray-800 hover:text-black transition-colors duration-300">{item.name}</h3>
                    <p className="text-gray-600 mb-3 leading-relaxed">{item.description}</p>
                  </div>
                  <div className="ml-4">
                    <span className="text-xl font-bold text-gray-800">{item.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chef's Philosophy Section */}
      <section className="py-20 bg-linear-to-br from-gray-100 to-gray-200">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Chef's Philosophy</h2>
          <div className="bg-white p-12 rounded-2xl shadow-lg relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-black to-gray-800"></div>
            <p className="text-lg text-gray-700 leading-relaxed mb-8 text-center relative z-10">
              "Cooking is a conversation between the chef, the ingredients, and the diner. At Quay, we listen to the land and sea, 
              allowing the natural flavors to speak through careful preparation and presentation."
            </p>
            <div className="relative z-10">
              <p className="italic text-gray-600 text-xl font-semibold">- Peter Gilmore</p>
            </div>
          </div>
        </div>
      </section>

      {/* Seasonal Ingredients Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-800">Seasonal Ingredients</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { emoji: '🌿', title: 'Native Herbs', desc: 'Hand-picked from sustainable farms' },
              { emoji: '🐟', title: 'Sustainable Seafood', desc: 'Sourced from local fishermen' },
              { emoji: '🥩', title: 'Premium Meats', desc: 'Ethically raised and grass-fed' }
            ].map((item, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-2xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-20 h-20 bg-linear-to-br from-gray-200 to-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center text-3xl shadow-inner">
                  {item.emoji}
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wine Pairing Section */}
      <section className=" bg-linear-to-r from-gray-200 via-gray-200 to-gray-200 text-white">
        <div className="max-w-full h-screen mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 h-screen flex items-center p-10 bg-gray-200">
            <div className="flex flex-col space-y-6">
              <h2 className="text-3xl font-bold mb-6 text-black">Wine Pairings</h2>
              <p className="text-gray-900 mb-6 text-lg leading-relaxed">
                Our sommelier has carefully selected wines that complement the natural flavors 
                and textures of each dish, enhancing your dining experience.
              </p>
              <ul className="space-y-3">
                {[
                  'Australian varietals and boutique selections',
                  'Organic and biodynamic options available',
                  'Expertly curated by our wine team'
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-gray-800">
                    <span className="w-2 h-2 bg-black rounded-full mr-3"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            {/* </div> */}
            </div>
           <div className="md:w-1/2 h-screen">
                      <img 
                        src={WineImage}  alt="Signature Dish" className="w-full h-full object-cover"
                      />
                    </div>
              <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
      </section>
    </div>
    );
};
export default Menu;