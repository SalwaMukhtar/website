import { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div>
      {/* Header Section */}
      <header className="bg-white shadow bg-gradient-to-r from-purple-500 to-blue-500 text-white">
        <nav className="max-w-6xl mx-auto flex justify-between items-center p-4">
       
        <div className="text-2xl font-bold text-grey-600">My Site</div>
          <div className="space-x-4">
            <a href="#about" className="text-gray-600 hover:text-purple-600 transition">About</a>
            <a href="#services" className="text-gray-600 hover:text-purple-600 transition">Services</a>
            <a href="#contact" className="text-gray-600 hover:text-purple-600 transition">Contact</a>
            <a href="#!" className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition">Get Started</a>
          </div>
        </nav>
      </header>

    {/*  {/* Hero Section */}
    
      <section className="flex items-center justify-center h-screen bg-gradient-to-r from-purple-500 to-blue-500 text-white">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Welcome to My Site</h1>
          <p className="mt-4 text-lg">Built with Next.js and Tailwind CSS</p>
          <a href="#about" className="mt-6 inline-block px-6 py-2 bg-white text-purple-600 rounded-full shadow-lg hover:bg-gray-200 transition">
            Learn More
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-semibold">About Us</h2>
          <p className="mt-4 text-lg text-gray-600">
            We create beautiful, responsive websites using the latest technologies.
         </p>
       </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-semibold">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-bold">Web Design</h3>
              <p className="mt-2 text-gray-600">Creating stunning web designs tailored to your needs.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-bold">Development</h3>
              <p className="mt-2 text-gray-600">Building responsive and efficient web applications.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-bold">SEO Services</h3>
              <p className="mt-2 text-gray-600">Optimizing your site for better visibility and performance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-semibold">Contact Us</h2>
          <p className="mt-4 text-lg text-gray-600">Get in touch for a quote or any questions.</p>
          <a href="mailto:info@example.com" className="mt-6 inline-block px-6 py-2 bg-purple-500 text-white rounded-full shadow-lg hover:bg-purple-600 transition">
            Email Us
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 bg-gray-800 text-white text-center">
        <p>&copy; {new Date().getFullYear()} My Beautiful Site. All Rights Reserved.</p>
     </footer>
    </div>
  );
};

export default Home;
