import React, { useState } from 'react';
import Header from '../Header';
import SuccessImage from '../assets/SuccessImage.jpeg';

const Success = ()=>{
    const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "Food Critic",
      content: "Quay's attention to detail and innovative approach to Australian ingredients creates an unforgettable dining experience. The service was impeccable.",
      rating: 5,
      date: "2025-01-15"
    },
    {
      name: "James Thompson",
      role: "Business Executive",
      content: "Every dish was a masterpiece of flavor and presentation. The sommelier's wine pairings elevated the entire experience. Truly exceptional.",
      rating: 5,
      date: "2025-01-10"
    },
    {
      name: "Emma Wilson",
      role: "Special Occasion",
      content: "We celebrated our anniversary and the staff went above and beyond to make it memorable. The ambiance and food were perfect.",
      rating: 5,
      date: "2025-01-08"
    },
    {
      name: "Michael Chen",
      role: "Culinary Enthusiast",
      content: "As someone who appreciates fine dining, Quay exceeded my expectations. The chef's creativity and the quality of ingredients were outstanding.",
      rating: 5,
      date: "2025-01-05"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
    return (
        <div>
            <Header></Header>
           <section id="testimonials" className="-mt-10 bg-gray-200">
  <div className="max-w-full h-screen mx-auto flex flex-col md:flex-row items-center">
    
    {/* Left Side Content */}
    <div className="md:w-1/2 h-screen flex items-center p-10 bg-gray-200">
      <div className="flex flex-col space-y-6">
        
        <h2 className="text-5xl font-bold mb-6">SUCCESS STORIES</h2>
        <h3 className="text-3xl font-bold mb-6">WHAT OUR CUSTOMERS SAY</h3>
        
        <p className="text-lg leading-relaxed mb-8 text-gray-700 font-semibold">
          We take pride in delivering exceptional service and unforgettable experiences.<br/>
          Here’s what our customers have to say about their journey with us.<br/><br/>
          Read more testimonials <span className="underline">here</span>
        </p>

        <div className="flex space-x-0">
          <a
            href="#"
            className="border-2 border-black px-8 py-1 text-lg font-medium hover:bg-black hover:text-white transition-colors"
          >
            READ MORE REVIEWS
          </a>
        </div>

      </div>
    </div>

    {/* Right Side Image */}
    <div className="md:w-1/2 h-screen">
      <img
        src={SuccessImage}
        alt="Happy Customer"
        className="w-full h-full object-cover"
      />
    </div>

  </div>
</section>

 {/* Featured Testimonials Carousel */}
      <section id="featured-testimonials" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-800">Featured Success Stories</h2>
          
          <div className="relative">
            <div className="bg-gray-50 p-12 rounded-2xl shadow-lg text-center">
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-2xl">★</span>
                ))}
              </div>
              <blockquote className="text-xl italic text-gray-700 mb-6 leading-relaxed">
                "{testimonials[currentTestimonial].content}"
              </blockquote>
              <div>
                <p className="font-bold text-gray-800">{testimonials[currentTestimonial].name}</p>
                <p className="text-gray-600">{testimonials[currentTestimonial].role}</p>
                <p className="text-sm text-gray-500 mt-2">{testimonials[currentTestimonial].date}</p>
              </div>
            </div>
            
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow"
            >
              ❮
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow"
            >
              ❯
            </button>
          </div>
        </div>
      </section>

      {/* All Testimonials Section */}
      <section id="all-testimonials" className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-800">All Success Stories</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
                <blockquote className="text-gray-700 mb-6 italic">
                  "{testimonial.content}"
                </blockquote>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-300 rounded-full mr-4 flex items-center justify-center">
                    <span className="text-gray-600 font-bold">{testimonial.name.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="font-bold text-gray-800">{testimonial.name}</p>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                    <p className="text-xs text-gray-500">{testimonial.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <h3 className="text-4xl font-bold mb-2">5000+</h3>
              <p className="text-gray-300">Happy Customers</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold mb-2">98%</h3>
              <p className="text-gray-300">Satisfaction Rate</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold mb-2">15+</h3>
              <p className="text-gray-300">Years of Excellence</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold mb-2">4.9★</h3>
              <p className="text-gray-300">Average Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Testimonial Section */}
      <section className="py-20 bg-white">
  <div className="max-w-4xl mx-auto px-4 text-center">
    
    <h2 className="text-3xl font-bold mb-12 text-gray-800">Video Testimonials</h2>
    
    <div className="aspect-video rounded-2xl overflow-hidden mb-8 shadow-lg">
      <iframe
        className="w-full h-full"
        src="https://www.youtube.com/embed/QWxMzk7ICUo" 
        title="Quay Restaurant Experience"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>

    <p className="text-gray-600">
      Watch our customers share their memorable dining experiences at Quay.
    </p>

  </div>
</section>

      {/* Review Submission Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Share Your Experience</h2>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                    placeholder="Your email address"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Your Experience</label>
                <textarea
                  rows="4"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                  placeholder="Tell us about your experience at Quay..."
                ></textarea>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Rating</label>
                <div className="flex space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      className="text-2xl text-gray-300 hover:text-yellow-400 focus:outline-none"
                    >
                      ★
                    </button>
                  ))}
                </div>
              </div>
              
              <button
                type="submit"
                className="w-full bg-black text-white py-3 px-6 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-300"
              >
                Submit Your Review
              </button>
            </form>
          </div>
        </div>
      </section>
        </div>
    );
};
export default Success;