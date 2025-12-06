 import React from 'react';
 import { FaInstagram, FaFacebookF, FaYoutube} from "react-icons/fa";
import QuayBlack from './assets/quay-black.svg';
 const Footer = () =>{
    return (
        <div>

 {/* Newsletter Section */}

      <section className="bg-[#D0DEDE]">
        <div className='py-18 ml-10'>
        <div className="max-w-full mx-auto">
          <h2 className="text-5xl font-bold mb-6 text-gray-900">KEEP UP TO DATE WITH QUAY</h2>
          <p className="text-sm mb-8">Sign up to be the first to receive special news and event updates from Quay.</p>
          <button className="border-2 border-black px-8 text-lg font-medium hover:bg-black hover:text-white transition-colors">
            SIGN UP
          </button>
        </div>
        </div>
      </section> 

            {/* Footer */}
      {/* FOOTER WRAPPER WITH TWO-TONE BACKGROUND */}
<div className="w-full grid grid-cols-1 md:grid-cols-[2fr_1fr]">

  {/* LEFT SIDE (LARGER AREA) */}
  <footer className="bg-[#D3DBD9] text-black px-10 py-12">
    <div className="max-w-full mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
      <div>
        <img src={QuayBlack} alt="QUAY logo" className="h-60 w-60 -my-10" />

        <h4 className="text-3xl font-bold mb-4 tracking-wide">SITEMAP</h4>
        <ul className="space-y-2 text-[17px]">
          <li><a href="#" className="hover:underline">About</a></li>
          <li><a href="#" className="hover:underline">Menu</a></li>
          <li><a href="#" className="hover:underline">News</a></li>
          <li><a href="#" className="hover:underline">Peter Gilmore</a></li>
          <li><a href="#" className="hover:underline">Meet the Team</a></li>
          <li><a href="#" className="hover:underline">Virtual Tour</a></li>
          <li><a href="#" className="hover:underline">Reservation Policy</a></li>
          <li><a href="#" className="hover:underline">Privacy Policy</a></li>
        </ul>
        <h4 className="text-3xl font-bold mb-4 tracking-wide mt-10">SOCIAL</h4>
       <div className="flex space-x-4 mt-4">
         <a href="#" className="h-8 w-8 rounded-full ring-2 ring-black flex items-center justify-center text-black hover:bg-gray-200 transition">
    <FaFacebookF size={18} />
  </a>
  <a href="#" className="h-8 w-8 rounded-full ring-2 ring-black flex items-center justify-center text-black hover:bg-gray-200 transition">
    <FaInstagram size={18} />
  </a>
 
  <a href="#" className="h-8 w-8 rounded-full ring-2 ring-black flex items-center justify-center text-black hover:bg-gray-200 transition">
    <FaYoutube size={18} />
  </a>
</div>
      </div>
      <div>
        <h4 className="text-3xl font-bold mb-4 mt-40 tracking-wide">LOCATION</h4>
        <p className="leading-relaxed text-[17px]">
          Upper Level,<br />
          Overseas Passenger Terminal,<br />
          The Rocks, Sydney 2000<br />
          phone: 02 9251 5600
        </p>

        <h4 className="text-3xl font-bold mt-10 mb-4 tracking-wide">OPENING HOURS</h4>
        <p className="leading-relaxed text-[17px]">
          DINNER<br />
          Tuesday to Sunday<br />
          Reservations from 5.30pm to 8.45pm
        </p>
      </div>

      {/* RESERVATIONS */}
      <div>
        <h4 className="text-3xl font-bold mb-4 mt-40 tracking-wide">RESERVATIONS</h4>

        <button className="border border-black px-6 py-2 text-lg font-medium mb-6 hover:bg-black hover:text-white transition">
          MAKE A RESERVATION
        </button>

        <p className="text-[14px] leading-relaxed mb-4">
          We acknowledge the Traditional Custodians of this land upon which Quay sits,
          the Gadigal of the Eora Nation. We recognise their continuing connection
          and unique cultural and spiritual relationship to the land, water and
          community. We pay our deepest respects to them and their culture, and to
          Elders, past, present and emerging.
        </p>

        <p className="text-[17px]">Tel: 02 9251 5600</p>
      </div>
    </div>
  </footer>
  {/* RIGHT SIDE (FINK SECTION) */}
  <div className="bg-gray-100 text-black py-16 px-10 md:px-12">
    <h3 className="text-5xl font-bold mb-8">FINK</h3>
    <ul className="space-y-4 text-3xl tracking-wide">
      <li><a href="#" className="hover:underline">BEACH BYRON BAY</a></li>
      <li><a href="#" className="hover:underline">BENNELONG</a></li>
      <li><a href="#" className="hover:underline">OTTO SYDNEY</a></li>
      <li><a href="#" className="hover:underline">OTTO BRISBANE</a></li>
      <li><a href="#" className="underline font-normal">QUAY</a></li>
    </ul>
  </div>
</div>
{/* BOTTOM COPYRIGHT BAR */}
<div className="bg-black/90 text-white py-7 px-8 md:px-16">
  <div className="max-w-7xl mx-auto flex justify-center items-center">
    <p className="text-sm tracking-widest">
      &#169; QUAY RESTAURANT 2023. ALL RIGHT RESERVED.
    </p>
  </div>
</div>


            </div>
    );
 }
 export default Footer;
 
 