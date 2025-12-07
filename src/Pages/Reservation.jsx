import React, { useState } from 'react';
import Header from '/src/Header.jsx';
import axios from 'axios';
import toast from 'react-hot-toast';

const Reservation = ()=>{
    const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [partySize, setPartySize] = useState('2');
  const [firstName, setFirstName] = useState('');
   const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const times = ['5:30 PM', '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM', '8:45 PM'];
  const partySizes = ['1', '2', '3', '4', '5', '6', '7', '8+'];


  const handleReservation = async(e) =>{
    e.preventDefault();
    try{
      const {data} = await axios.post("https://your-backend.onrender.com/api/v1/reservation/send",{firstName, lastName, email, phone, date, time},{
        headers:{
          "Content-Type": "application/json"
        }, withCredentials: true
      });
      toast.success(data.message);
      setFirstName('');
      setLastName('');
      setPhone('');
      setEmail('');
      setDate('');
      setTime('');
      setPartySize('2');
    }catch(error){
      toast.error(error.response?.data?.message || "Reservation failed");
    }
  }

    return (
        <div>
           <Header></Header>
           <section id="menu" className=" -mt-10 bg-gray-200">
                  <div className="max-w-full h-screen mx-auto flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 h-screen flex items-center p-10 bg-gray-200">
                    <div className="flex flex-col space-y-6">
                      <h2 className="text-5xl font-bold mb-6">RESERVATIONS</h2>
                      <h3 className="text-3xl font-bold mb-6">DINNER</h3>
                      <p className="text-lg leading-relaxed mb-8 text-gray-700 font-semibold">Tuesday to Sunday<br/>Reservations from 5.30pm to 8.45pm<br/><br/>
                      Bookings are essential. View our Reservations Policy <span className='underline'>here</span></p>
                      <div className="flex space-x-0">
                        <a href="#" className="border-2 border-black px-8 py-1 text-lg font-medium hover:bg-black hover:text-white transition-colors">
                          MAKE A RESERVATION
                        </a>
                      </div>
                      </div>
                    </div>
                    <div className="md:w-1/2 h-screen">
                      <img 
                        src="https://img.delicious.com.au/1WpwRRCH/del/2016/11/quay-38936-1.jpg"  alt="Signature Dish" className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
            </section>
                {/* Booking Form Section */}
      <section id="booking-form" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-gray-50 p-8 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-bold mb-8 text-center">Make Your Reservation</h2>
            
            <form  className="space-y-6">
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Date</label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Time</label>
                  <select
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                    required
                  >
                    <option value="">Select Time</option>
                    {times.map((time) => (
                      <option key={time} value={time}>{time}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Party Size</label>
                  <select
                    value={partySize}
                    onChange={(e) => setPartySize(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                    required
                  >
                    {partySizes.map((size) => (
                      <option key={size} value={size}>{size} {size === '8+' ? 'Guests' : size === '1' ? 'Guest' : 'Guests'}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">First Name</label>
                  <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Last Name</label>
                  <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Phone Number</label>
                <input
                  type="number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                  required
                />
              </div>

              <div className="pt-4">
                <button
                  type="submit" onClick={handleReservation}
                  className="w-full bg-black text-white py-3 px-6 rounded-lg font-medium hover:bg-gray-800 transition-colors"
                >
                  Confirm Reservation
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Reservations Policy Section */}
      <section className="py-20 bg-gray-200">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Reservations Policy</h2>
          
          <div className="bg-white p-8 rounded-2xl shadow-md space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-3">Cancellation Policy</h3>
              <p className="text-gray-600">We require 24 hours notice for any cancellations or changes to your reservation. Cancellations made with less than 24 hours notice may incur a charge.</p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-3">Dress Code</h3>
              <p className="text-gray-600">Smart casual attire is requested. We recommend avoiding sportswear, beachwear, or overly casual clothing.</p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-3">Seating Arrangements</h3>
              <p className="text-gray-600">While we will do our best to accommodate your seating preferences, we cannot guarantee specific tables. Large parties may be seated at separate tables.</p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-3">Special Requests</h3>
              <p className="text-gray-600">Please inform us of any dietary restrictions, allergies, or special occasions when making your reservation. We will do our best to accommodate your needs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold">Address</h3>
                  <p className="text-gray-600">199 George St, The Rocks NSW 2000</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Phone</h3>
                  <p className="text-gray-600">(02) 9251 5600</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Email</h3>
                  <p className="text-gray-600">reservations@quay.com.au</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Hours</h3>
                  <p className="text-gray-600">Dinner: Tuesday to Sunday 5:30pm - 10:00pm</p>
                  <p className="text-gray-600">Lunch: Saturday & Sunday 12:00pm - 2:30pm</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-xl font-bold mb-4">Private Dining</h3>
              <p className="text-gray-600 mb-6">For private events and special occasions, please contact our events team for custom arrangements and exclusive dining experiences.</p>
              <button className="border-2 border-black px-6 py-2 hover:bg-black hover:text-white transition-colors">
                Inquire About Private Dining
              </button>
            </div>
          </div>
        </div>
      </section>
        </div>
    );
};
export default Reservation;


