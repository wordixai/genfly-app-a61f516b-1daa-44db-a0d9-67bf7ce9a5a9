import Image from "next/image";
import { Coffee, Croissant, Clock, MapPin, Phone } from "lucide-react";

export default function Home() {
  const menuItems = [
    { name: "Espresso", price: "$3.50", description: "Rich and aromatic" },
    { name: "Cappuccino", price: "$4.50", description: "Perfectly balanced" },
    { name: "Avocado Toast", price: "$8.50", description: "Fresh and healthy" },
    { name: "Blueberry Muffin", price: "$3.75", description: "Homemade daily" },
  ];

  return (
    <div className="min-h-screen bg-[#f9f5f0] text-[#3a3226]">
      {/* Hero Section */}
      <section className="relative h-[80vh]">
        <div className="absolute inset-0 bg-black/30 z-10" />
        <Image
          src="https://images.unsplash.com/photo-1445116572660-236099ec97a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
          alt="Cafe interior"
          fill
          className="object-cover"
        />
        <div className="relative z-20 h-full flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            Brew & Bites
          </h1>
          <p className="text-xl md:text-2xl text-white max-w-2xl mb-8">
            Artisanal coffee and homemade pastries in the heart of the city
          </p>
          <button className="bg-[#8b5a2b] hover:bg-[#6d4621] text-white px-8 py-3 rounded-full text-lg font-medium transition">
            View Menu
          </button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <Image
              src="https://images.unsplash.com/photo-1517705008128-361805f42e86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              alt="Coffee beans"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-lg mb-6">
              Founded in 2010, Brew & Bites started as a small coffee cart and
              has grown into a beloved neighborhood cafe. We source our beans
              directly from sustainable farms and bake all our pastries fresh
              each morning.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <Coffee className="text-[#8b5a2b]" />
                <span>Specialty Coffee</span>
              </div>
              <div className="flex items-center gap-2">
                <Croissant className="text-[#8b5a2b]" />
                <span>Fresh Pastries</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-20 bg-[#f0e6d9]">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Menu</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold">{item.name}</h3>
                  <span className="text-[#8b5a2b] font-bold">{item.price}</span>
                </div>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button className="border-2 border-[#8b5a2b] text-[#8b5a2b] hover:bg-[#8b5a2b] hover:text-white px-8 py-3 rounded-full text-lg font-medium transition">
              Full Menu
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Visit Us</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <MapPin className="mx-auto text-[#8b5a2b] mb-4" size={32} />
            <h3 className="text-xl font-semibold mb-2">Location</h3>
            <p>123 Coffee Street</p>
            <p>Downtown, City</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Clock className="mx-auto text-[#8b5a2b] mb-4" size={32} />
            <h3 className="text-xl font-semibold mb-2">Hours</h3>
            <p>Mon-Fri: 7am - 7pm</p>
            <p>Sat-Sun: 8am - 6pm</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Phone className="mx-auto text-[#8b5a2b] mb-4" size={32} />
            <h3 className="text-xl font-semibold mb-2">Contact</h3>
            <p>(123) 456-7890</p>
            <p>hello@brewandbites.com</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#3a3226] text-white py-12 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-4">Brew & Bites</h3>
            <p>Artisanal coffee and homemade pastries</p>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#8b5a2b] transition">
              Instagram
            </a>
            <a href="#" className="hover:text-[#8b5a2b] transition">
              Facebook
            </a>
            <a href="#" className="hover:text-[#8b5a2b] transition">
              Twitter
            </a>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-12 pt-6 border-t border-[#5a4d3d] text-center">
          <p>&copy; {new Date().getFullYear()} Brew & Bites. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}