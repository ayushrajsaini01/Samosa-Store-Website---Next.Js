"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // check initial on load

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Intersection Observer for reveal animations
  useEffect(() => {
    const revealElements = document.querySelectorAll(".reveal-on-scroll");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    revealElements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white font-[family-name:var(--font-geist-sans)]">
      {/* Navbar */}
      <header
        className={`fixed top-0 left-0 w-full z-50 backdrop-blur border-b border-black/5 transition-colors duration-300 ${
          scrolled ? "bg-transparent" : "bg-[#e53935cc]"
        }`}
      >
        <nav className="max-w-5xl mx-auto flex items-center justify-between px-5 py-3">
          <span className="text-xl font-bold tracking-tight text-yellow-400 select-none">
            Samosa Store
          </span>
          <div className="flex items-center gap-4">
            <a
              href="#our-store"
              className="rounded-full px-5 py-2 bg-yellow-400 text-black border border-yellow-500 shadow-sm font-medium transition hover:bg-yellow-500 hover:text-white hover:border-yellow-600"
            >
              Our Store
            </a>
            <a
              href="#order-now"
              className="rounded-full px-5 py-2 bg-yellow-400 text-black border border-yellow-500 shadow-sm font-medium transition hover:bg-yellow-500 hover:text-white hover:border-yellow-600"
            >
              Order Now
            </a>
            <button
              className="ml-2 rounded-full p-2 bg-yellow-400 border border-yellow-500 shadow-sm transition hover:bg-yellow-500 hover:text-white hover:border-yellow-600 flex items-center"
              aria-label="Cart"
            >
              <Image
                src="/images/cart.png"
                alt="Cart"
                width={22}
                height={22}
                className="pointer-events-none"
              />
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative w-full h-screen pt-20">
        <Image
          src="/images/Samosa.jpg"
          alt="Samosa Store Hero"
          fill
          style={{
            objectFit: "cover",
            objectPosition: "center",
            marginTop: "60px",
          }}
          className="pointer-events-none select-none"
          priority
        />
      </section>

      {/* Our Store Section */}
      <section id="our-store" className="max-w-5xl mx-auto px-5 py-16">
        <h2 className="text-3xl font-bold text-center mb-10 text-[#e53935] reveal-on-scroll">
          Variety Available in Our Store
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="relative bg-white rounded-xl shadow-lg overflow-hidden flex flex-col group reveal-on-scroll">
            <Image
              src="/images/Punjabi-Samosa.jpg"
              alt="Punjabi Samosa"
              width={400}
              height={250}
              className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="flex-1 p-4 flex flex-col">
              <h3 className="text-lg font-bold text-black mb-2">Punjabi Samosa</h3>
              <p className="text-gray-700 mb-4">₹20</p>
              <button className="absolute right-4 bottom-4 rounded-full px-4 py-2 bg-yellow-400 text-black border border-yellow-500 shadow-sm font-medium transition-all duration-300 hover:bg-yellow-500 hover:text-white hover:border-yellow-600 group-hover:scale-110">
                Add to Cart
              </button>
            </div>
          </div>
          {/* Card 2 */}
          <div className="relative bg-white rounded-xl shadow-lg overflow-hidden flex flex-col group reveal-on-scroll">
            <Image
              src="/images/Cheesee-Samosa.jpeg"
              alt="Cheese Samosa"
              width={400}
              height={250}
              className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="flex-1 p-4 flex flex-col">
              <h3 className="text-lg font-bold text-black mb-2">Cheese Samosa</h3>
              <p className="text-gray-700 mb-4">₹30</p>
              <button className="absolute right-4 bottom-4 rounded-full px-4 py-2 bg-yellow-400 text-black border border-yellow-500 shadow-sm font-medium transition-all duration-300 hover:bg-yellow-500 hover:text-white hover:border-yellow-600 group-hover:scale-110">
                Add to Cart
              </button>
            </div>
          </div>
          {/* Card 3 */}
          <div className="relative bg-white rounded-xl shadow-lg overflow-hidden flex flex-col group reveal-on-scroll">
            <Image
              src="/images/Chicken-Samosas.jpg"
              alt="Chicken Samosa"
              width={400}
              height={250}
              className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="flex-1 p-4 flex flex-col">
              <h3 className="text-lg font-bold text-black mb-2">Chicken Samosa</h3>
              <p className="text-gray-700 mb-4">₹40</p>
              <button className="absolute right-4 bottom-4 rounded-full px-4 py-2 bg-yellow-400 text-black border border-yellow-500 shadow-sm font-medium transition-all duration-300 hover:bg-yellow-500 hover:text-white hover:border-yellow-600 group-hover:scale-110">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
        <style jsx>{`
          .reveal-on-scroll {
            opacity: 0;
            transform: translateY(40px);
            transition: opacity 0.7s cubic-bezier(.4,0,.2,1), transform 0.7s cubic-bezier(.4,0,.2,1);
          }
          .reveal-on-scroll.revealed {
            opacity: 1;
            transform: none;
          }
        `}</style>
      </section>

      
      <section
        id="store-showcase"
        className="max-w-5xl mx-auto px-5 py-20 flex flex-col md:flex-row items-center gap-12"
      >
        <div className="flex-1 reveal-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold text-[#e53935] mb-4">
            Our Store
          </h2>
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
            Step into our vibrant Samosa Store, where tradition meets taste! Enjoy a cozy ambiance, friendly service, and the irresistible aroma of freshly made samosas. Whether you’re grabbing a quick bite or picking up a party order, our store is your go-to spot for authentic flavors and a delightful experience.
          </p>
        </div>
        <div className="flex-1 flex justify-center items-center reveal-on-scroll">
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-[#e53935]/10 bg-white/70 backdrop-blur-sm transition-transform duration-500 hover:scale-105">
            <Image
              src="/images/Samosa-Store.jpg"
              alt="Samosa Store Front"
              width={420}
              height={320}
              className="object-cover w-full h-80"
              priority
            />
          </div>
        </div>
      </section>

      {/* Order Now Section */}

      {/* How Are Samosas Made Section */}
      <section className="max-w-5xl mx-auto px-5 py-16">
        <h2 className="text-3xl font-bold text-center mb-14 text-yellow-400">
          How Are Samosas Made
        </h2>
        <div className="flex flex-col md:flex-row items-center mb-12 reveal-on-scroll">
          <div className="md:w-1/2 w-full flex justify-center mb-6 md:mb-0">
            <Image
            
              src="/images/Filling.jpg"
              alt="Step 1: Preparing the Filling"
              width={350}
              height={250}
              className="rounded-xl shadow-lg object-cover"
            />
          </div>
          <div className="md:w-1/2 w-full md:pl-10">
            <h3 className="text-2xl font-bold text-[#e53935] mb-2">Step 1</h3>
            <p className="text-gray-700 text-lg">
              <span className="font-semibold">Prepare the Filling:</span> Potatoes, peas, and spices are cooked together to create a flavorful stuffing that forms the heart of every samosa.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center mb-12 reveal-on-scroll">
          <div className="md:w-1/2 w-full md:pr-10 order-2 md:order-1">
            <h3 className="text-2xl font-bold text-[#e53935] mb-2">Step 2</h3>
            <p className="text-gray-700 text-lg">
              <span className="font-semibold">Shape & Fry:</span> The dough is rolled, filled, and folded into the classic triangle shape, then deep-fried until golden and crispy.
            </p>
          </div>
          <div className="md:w-1/2 w-full flex justify-center order-1 md:order-2 mb-6 md:mb-0">
            <Image
              src="/images/Fry.webp"
              alt="Step 2: Shaping and Frying"
              width={350}
              height={250}
              className="rounded-xl shadow-lg object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center mb-12 reveal-on-scroll">
          <div className="md:w-1/2 w-full flex justify-center mb-6 md:mb-0">
            <Image
            
              src="/images/Serve.jpg"
              alt="Step 3: Serve to Customer"
              width={350}
              height={250}
              className="rounded-xl shadow-lg object-cover"
            />
          </div>
          <div className="md:w-1/2 w-full md:pl-10">
            <h3 className="text-2xl font-bold text-[#e53935] mb-2">Step 3</h3>
            <p className="text-gray-700 text-lg">
              <span className="font-semibold">Serve To Coustmer:</span> Potatoes, peas, and spices are cooked together to create a flavorful stuffing that forms the heart of every samosa.
            </p>
          </div>
        </div>
      </section>

      {/* Store Showcase Section */}


      <section
        id="testimonials"
        className="max-w-5xl mx-auto px-5 py-16"
      >
        <h2 className="text-3xl font-bold text-center mb-10 text-yellow-400 reveal-on-scroll">
          What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-white rounded-2xl shadow-lg flex flex-row items-center p-6 gap-5 reveal-on-scroll group transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <Image
              src="/images/C1.jpeg"
              alt="Customer 1"
              width={70}
              height={70}
              className="rounded-full object-cover border-4 border-yellow-400"
            />
            <div className="flex-1">
              <h3 className="font-bold text-lg text-[#e53935] mb-1">Priya Sharma</h3>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.967c.3.921-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.175 0l-3.38 2.455c-.784.57-1.838-.197-1.539-1.118l1.287-3.967a1 1 0 00-.364-1.118L2.174 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z"/>
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 text-sm">
                Absolutely delicious! The samosas are always fresh and crispy. The cheese samosa is my favorite. Highly recommended!
              </p>
            </div>
          </div>
          {/* Testimonial 2 */}
          <div className="bg-white rounded-2xl shadow-lg flex flex-row items-center p-6 gap-5 reveal-on-scroll group transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <Image
              src="/images/C2.jpeg"
              alt="Customer 2"
              width={70}
              height={70}
              className="rounded-full object-cover border-4 border-yellow-400"
            />
            <div className="flex-1">
              <h3 className="font-bold text-lg text-[#e53935] mb-1">Anjali Singh</h3>
              <div className="flex items-center mb-2">
                {[...Array(4)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.967c.3.921-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.175 0l-3.38 2.455c-.784.57-1.838-.197-1.539-1.118l1.287-3.967a1 1 0 00-.364-1.118L2.174 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z"/>
                  </svg>
                ))}
                <svg className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.967c.3.921-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.175 0l-3.38 2.455c-.784.57-1.838-.197-1.539-1.118l1.287-3.967a1 1 0 00-.364-1.118L2.174 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z"/>
                </svg>
              </div>
              <p className="text-gray-700 text-sm">
                Great variety and friendly staff. The chicken samosa is a must-try! Will visit again for sure.
              </p>
            </div>
          </div>
          {/* Testimonial 3 */}
          <div className="bg-white rounded-2xl shadow-lg flex flex-row items-center p-6 gap-5 reveal-on-scroll group transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <Image
              src="/images/C3.jpg"
              alt="Customer 3"
              width={70}
              height={70}
              className="rounded-full object-cover border-4 border-yellow-400"
            />
            <div className="flex-1">
              <h3 className="font-bold text-lg text-[#e53935] mb-1">Vanshika Gupta</h3>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 15.27L16.18 18l-1.64-7.03L20 7.24l-7.19-.61L10 0 7.19 6.63 0 7.24l5.46 3.73L3.82 18z"/>
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 text-sm">
                Love the ambiance and the taste! The staff is super friendly and the samosas are the best in town.
              </p>
            </div>
          </div>
        </div>
      </section>


      <section
        id="order-now"
        className="max-w-5xl mx-auto px-5 py-16 text-center"
      >
        <h2 className="text-3xl font-bold mb-6 text-[#e53935]">Order Now</h2>
        <p className="text-gray-700 text-lg mb-4">
          Call us at +91-12345-67890 or visit our store to place your order!
        </p>
        <a
          href="tel:+911234567890"
          className="inline-block rounded-full px-6 py-3 bg-yellow-400 text-black border border-yellow-500 shadow-sm font-medium transition hover:bg-yellow-500 hover:text-white hover:border-yellow-600"
        >
          Call Now
        </a>
      </section>



    <footer className="bg-gray-100 py-8">
      <div className="max-w-5xl mx-auto text-center text-gray-600">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Samosa Store. All rights reserved. | India | <a href="https://www.linkedin.com/in/ayush-raj-saini-2b2741297/?original_referer=https%3A%2F%2Fwww%2Egoogle%2Ecom%2F&originalSubdomain=in" className="text-yellow-500 hover:underline">Made By Ayush Raj Saini</a>
        </p>
      </div>
    </footer>
    

        </div>

  );
}
