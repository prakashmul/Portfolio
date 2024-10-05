import React, { useState, useEffect, useRef } from 'react';
import emailjs from 'emailjs-com';
import './App.css'; // Ensure Tailwind CSS is imported

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('darkMode') === 'enabled' || 
           (!('darkMode' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [messageSent, setMessageSent] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', 'enabled');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('darkMode', 'disabled');
    }
  }, [darkMode]);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.send('service_p8rzmvv', 'template_4az2lqr', {
      name: formData.name,
      email: formData.email,
      message: formData.message
    }, 'QlmN6_dT_5bIvM0tL')
      .then((result) => {
        console.log(result.text);
        setMessageSent(true);
        setTimeout(() => setMessageSent(false), 3000);
      }, (error) => {
        console.log(error.text);
        alert("There was an issue sending your message.");
      });

    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-100 text-gray-900'}`}>
      <header className="bg-gray-800 dark:bg-gray-900 text-white py-4 sticky top-0 z-50">
        <nav className="flex justify-between items-center max-w-6xl mx-auto px-4">
          <ul className="flex space-x-8 w-full justify-center">
            <li><a href="#home" className="hover:text-gray-400">Home</a></li>
            <li><a href="#about" className="hover:text-gray-400">About</a></li>
            <li><a href="#projects" className="hover:text-gray-400">Projects</a></li>
            <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
          </ul>
          <button 
            onClick={() => setDarkMode(!darkMode)} 
            className="p-2 rounded-full bg-gray-600 dark:bg-gray-700 hover:bg-gray-500 dark:hover:bg-gray-600 ml-4"
          >
            {darkMode ? '🌞' : '🌜'}
          </button>
        </nav>
      </header>

      <main className="scroll-snap-y snap-mandatory">
        <section id="home" className="h-screen -mt-20 bg-gray-100 dark:bg-gray-900 flex items-center justify-center snap-start pt-20 fade-in">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4 slide-in">Welcome to My Portfolio</h1>
            <p className="text-xl slide-in">I am a [Your Profession]</p>
          </div>
        </section>

        <section id="about" className="h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center snap-start py-20 fade-in">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 slide-in">About Me</h2>
            <p className="text-lg slide-in">[A brief introduction about yourself]</p>
          </div>
        </section>

        <section id="projects" className="h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center snap-start py-20 fade-in">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 slide-in">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-200 dark:bg-gray-800 p-6 rounded-lg shadow-lg transform-scale">
                <h3 className="text-xl font-bold mb-4">Project 1</h3>
                <p>Description of project 1</p>
                <a href="#" className="text-blue-500 dark:text-blue-400 hover:underline">View Project</a>
              </div>
              <div className="bg-gray-200 dark:bg-gray-800 p-6 rounded-lg shadow-lg transform-scale">
                <h3 className="text-xl font-bold mb-4">Project 2</h3>
                <p>Description of project 2</p>
                <a href="#" className="text-blue-500 dark:text-blue-400 hover:underline">View Project</a>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center snap-start py-20 fade-in">
          <div className="text-center max-w-lg mx-auto">
            <h2 className="text-3xl font-bold mb-8 slide-in">Contact Me</h2>
            <form onSubmit={sendEmail}>
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your Name" 
                className="w-full p-3 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 dark:bg-gray-700 dark:text-white"
                required 
              />
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Your Email" 
                className="w-full p-3 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 dark:bg-gray-700 dark:text-white"
                required 
              />
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Your Message" 
                className="w-full p-3 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 dark:bg-gray-700 dark:text-white" 
                required 
              />
              <button 
                type="submit" 
                className="bg-blue-500 dark:bg-blue-600 text-white py-2 px-6 rounded-md btn-hover"
              >
                Send
              </button>
              {messageSent && <p className="text-green-500 mt-4 text-animate visible">Message sent successfully!</p>}
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 dark:bg-gray-900 text-white py-6">
        <div className="text-center max-w-6xl mx-auto px-4">
          <p className="text-sm">&copy; 2024 Your Name. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
