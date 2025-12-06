import React from 'react';
import { useState} from 'react';
import signature from '/src/assets/signature-dish-Image2.png';
import Awards from '/src/assets/AwardsImage7.jpeg';
import Dessert from '/src/assets/DessertImage6.webp';
import Events from '/src/assets/EventsImage5.jpeg';
import Chef from '/src/assets/chefImage3.png';
import ChristmasImage from '/src/assets/ChristmasImage8.jpg';
import NewYear from '/src/assets/NewYearImage9.avif';
import Five from '/src/assets/FiveImage10.png';
import backgroundImage from '/src/assets/backgroundImage1.jpg';
import QUAY from '/src/assets/quay-white.svg';
export const events =[
    {
        title: 'CHRISTMAS DAY AT QUAY',
        subtitle: 'SPECIAL EVENT',
        description: 'Christmas Day Lunch at Quay Experience unforgettable service and a signature five-course menu by Executive Chef Peter Gilmore this Christmas',
        image: ChristmasImage,
        button: 'READ MORE'
    },
    {
         title: "NEW YEAR'S EVE AT QUAY",
        subtitle: 'SPECIAL EVENT',
        description: "Wednesday 31 December 2025 Celebrate this New Year’s Eve with an unforgettable evening at Quay. Choose to dine in our",
        image: NewYear,
        button: 'READ MORE'

    },
    {
         title: 'FIVE AT QUAY',
        subtitle: 'FIVE AT QUAY',
        description: "The essence of Quay, across five courses. For a limited time this spring, discover Five By Quay, a five-course tasting",
        image: Five,
        button: 'READ MORE'

    },
];

const newsItems=[
    {
        title: 'DESSERTS BY QUAY',
        subtitle: 'DESSERT',
        description: 'Desserts by Quay What could be better than ending a perfect day with something sweet? For those seeking a late-night',
        image: Dessert,
        button: 'READ MORE'
    },
    {
        title: "THREE CHEF HATS FOR 23 CONSECUTIVE YEARS",
        subtitle: 'AWARDS',
        description: "Quay is honoured to retain Three Chef Hats in the Good Food Guide 2026, marking an unprecedented 23 consecutive years",
        image: Awards,
        button: 'READ MORE'
    }
];


const Home = ()=>{
  const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <div className='min-h-screen bg-white  font-sans'>
          <header className='relative h-screen w-full overflow-hidden'>
            <div className='absolute inset-0'>
             <img src={backgroundImage} alt="Quay Restaurant Image" className="w-full h-full object-cover"/>
              <img src={QUAY} alt="QUAY" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-auto h-72"
             /> </div>
    {/* Navigation Bar */}
     <nav className="top-0 fixed left-0 right-0 z-10 bg-black bg-opacity-80">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <button 
          className="fixed top-6 left-6  z-9999 text-3xl font-bold text-gray-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}>
           {isMenuOpen ? "✕" : "☰"}
           </button> 
           <div className="flex-1 flex justify-center">
           <h1 className=" font-light tracking-wider"><img src={QUAY} alt="" className="h-10 w-auto object-contain" /></h1>
          </div>
          <div className="hidden md:flex">
        <button className=" text-white px-4 py-2  ring-2 ring-white text-sm font-medium hover:bg-gray-300 hover:text-black hover:font-semibold transition-colors">
         MAKE A QUAY RESERVATION
        </button>
        </div>
        </div>
       </nav>
    {/* Mobile Menu */}
    {isMenuOpen && (
      <div className="fixed top-0 left-0 h-full w-1/2 bg-white text-black p-10 z-40 shadow-xl transition-all duration-300">
        <div className="flex flex-col space-y-6 text-4xl font-medium">
          <a href="/" onClick={() => setIsMenuOpen(false)} className="hover:text-gray-500">HOME</a>
          <a href="menu" onClick={() => setIsMenuOpen(false)} className="hover:text-gray-500">MENU</a>
          <a href="order" onClick={() => setIsMenuOpen(false)} className="hover:text-gray-500">ORDER</a>
          <a href="reservation" onClick={() => setIsMenuOpen(false)} className="hover:text-gray-500">RESERVATION</a>
          <a href="Success" onClick={() => setIsMenuOpen(false)} className="hover:text-gray-500">SUCCESS</a>
        </div>
      </div>
    )}
    </header>
      <div className="flex h-[12vh] items-center justify-center gap-10 text-[1.4rem] font-semibold">
        <span>HOME</span>
        <span>MENU</span>
        <span>ORDER</span>
        <span>RESERVATION</span>
        <span>SUCCESS</span>
         </div>
          
      {/* About Section */}
      <section id="about" className="py-16 px-2 md:px-16 bg-white"> 
        <hr className='h-10 text-gray-500 gap-y-6'/>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-8 text-center">QUAY</h2>
          <p className="text-md leading-relaxed mb-6 text-gray-800 text-center font-semibold">Quay is the creation of leading Australian restaurant group, Fink, and Executive Chef Peter Gilmore. One of the country’s most celebrated restaurants, Quay has received Three Hats in the Good Food Guide for 23 consecutive years.</p>
          <p className="text-md leading-relaxed text-gray-800 text-center font-semibold">The restaurant is an organic space reflective of Peter Gilmore’s nature inspired cuisine. The interplay of textures and colour brings life and a vibrance that embraces the restaurant’s place in the dress circle of Sydney Harbour. An ode to the Australian landscape, from the vast ocean floor, to the cracked bark of a paperbark tree, every detail from the ground up has been thoughtfully considered.</p>
        </div>
      </section>

      {/* Menu Section - Image and Text Side by Side */}
      <section id="menu" className="  bg-gray-200">
        <div className="max-w-full h-screen mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 h-screen flex items-center p-10 bg-gray-200">
          <div className="flex flex-col space-y-6">
            <h2 className="text-5xl font-bold mb-6">MENU</h2>
            <p className="text-md leading-relaxed mb-8 text-gray-700 font-semibold">A progression of rare and beautiful ingredients where texture, flavour and harmony is paramount. Delve into the Quay dining experience with Peter Gilmore’s Menu and a thoughtfully curated Wine List.</p>
            <div className="flex space-x-0">
              <a href="#" className="border-2 border-black px-6 py-3 text-lg font-medium hover:bg-black hover:text-white transition-colors">
                READ MORE
              </a>
            </div>
            </div>
          </div>
          <div className="md:w-1/2 h-screen">
            <img 
              src={signature}  alt="Signature Dish" className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Chef Section - Alternating Layout */}
      <section className=" bg-gray-200">
        <div className="max-w-full h-screen mx-auto flex flex-col md:flex-row-reverse items-center">
          <div className="md:w-1/2 h-screen flex items-center p-10">
           <div className="flex flex-col space-y-6">
            <h2 className="text-5xl font-bold mb-6">PETER GILMORE</h2>
            <p className="text-md leading-relaxed mb-8 text-gray-700 font-semibold">
              Renowned for his nature-inspired cuisine, Chef Peter Gilmore creates dishes that are as visually stunning as they are delicious, drawing inspiration from Australia's diverse landscapes.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="border-2 border-black px-6 py-3 text-lg font-medium hover:bg-black hover:text-white transition-colors">
                MEET THE CHEF
              </a>
            </div>
            </div>
          </div>
          <div className="md:w-1/2 h-screen">
            <img src={Chef}  alt="Chef Peter Gilmore" className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      <section id="menu" className="bg-gray-200">
        <div className="max-w-full h-screen mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 h-screen flex items-center p-10">
            <div className="flex flex-col space-y-6">
            <h2 className="text-5xl font-bold mb-6">EVENTS</h2>
            <p className="text-md leading-relaxed mb-8 text-gray-700 font-semibold">Celebrate at one of Australia’s most awarded restaurants, with panoramic views encompassing the Sydney Harbour Bridge and Sydney Opera House. From intimate dinner parties in the Private Dining Room, to long lunches in the spectacular Upper Tower, to large cocktail events in The Green Room – Quay delivers an immersive dining experience with views like no other.</p>
            <div className="flex space-x-4">
              <a href="#" className="border-2 border-black px-6 py-3 text-lg font-medium hover:bg-black hover:text-white transition-colors">
                READ MORE
              </a>
            </div>
            </div>
          </div>
          <div className="md:w-1/2 h-screen">
            <img 
              src={Events} 
              alt="Signature Dish" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="bg-white">
        <div className="max-w-full">
          <div className="grid grid-cols-1 md:grid-cols-3">
            {events.map((event, index) => (
              <div key={index} className="relative overflow-hidden">
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-90 object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-r from-black/65 via-black/65 to-black/90"></div>
                <div className="absolute inset-0  bg-opacity-50 flex flex-col justify-end p-6">
                  <h3 className="text-white text-2xl font-bold mb-2">{event.subtitle}</h3>
                  <hr className='h-4 text-gray-300'/>
                  <h4 className="text-white text-4xl font-bold mb-4">{event.title}</h4>
                  <p className="text-white text-lg mb-4">{event.description}</p>
                  <div className='flex items-center justify-start '>
                  <button className="border-2 border-white text-white px-16 py-2 text-lg font-medium hover:bg-white hover:text-black transition-colors">
                    {event.button}
                  </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section id="news" className="bg-white">
        <div className="max-w-full">
          <div className="grid grid-cols-1 md:grid-cols-3">
            {newsItems.map((news, index) => (
              <div key={index} className="relative overflow-hidden">
                <img 
                  src={news.image} 
                  alt={news.title} 
                  className="w-full h-90 object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-r from-black/65 via-black/65 to-black/90">
                <div className="absolute inset-0  bg-opacity-50 flex flex-col justify-end p-6">
                  <h3 className="text-white text-2xl font-bold mb-2">{news.subtitle}</h3>
                  <hr className='h-4 text-gray-300'/>
                  <h4 className="text-white text-3xl font-bold mb-4">{news.title}</h4>
                  <p className="text-white text-lg mb-4">{news.description}</p>
                  <div className='flex items-center justify-start '>
                  <button className="border-2 border-white text-white text-lg px-16 py-2 font-medium hover:bg-white hover:text-black transition-colors">
                    {news.button}
                  </button>
                </div>
                </div>
                </div>
              </div>
            ))}
            <div className="bg-gray-200 p-8 flex justify-end flex-col">
              <h3 className="text-5xl font-bold mb-4">CONTINUE READING OUR NEWS&nbsp;
              <a href="#" className="text-5xl font-bold underline">HERE</a></h3>
            </div>
          </div>
        </div>
      </section>    
</div>
    );
};
export default Home;