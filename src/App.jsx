import React from 'react';
import { Github, Mail, Phone, ExternalLink, Code, Database, Palette } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen text-white bg-gradient-to-br from-gray-900 to-gray-800">
      {/* Hero Section */}
      <header className="container px-6 py-16 mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="mb-6 text-5xl font-bold">Ayush Kalakoti</h1>
          <p className="mb-8 text-xl text-gray-300">Full Stack Developer</p>
          <div className="flex justify-center gap-6 text-gray-300">
            <a href="mailto:ayushkalakoti3@gmail.com" className="flex items-center gap-2 transition-colors hover:text-white">
              <Mail size={20} />
              <span>ayushkalakoti3@gmail.com</span>
            </a>
            <a href="https://github.com/ashuifh" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 transition-colors hover:text-white">
              <Github size={20} />
              <span>GitHub</span>
            </a>
            <a href="tel:8791213332" className="flex items-center gap-2 transition-colors hover:text-white">
              <Phone size={20} />
              <span>8791213332</span>
            </a>
          </div>
        </div>
      </header>

      {/* Skills Section */}
      <section className="container px-6 py-16 mx-auto border-t border-gray-700">
        <h2 className="mb-12 text-3xl font-bold text-center">Skills</h2>
        <div className="grid max-w-4xl grid-cols-1 gap-8 mx-auto md:grid-cols-3">
          <div className="p-6 transition-all bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl hover:-translate-y-1">
            <div className="flex items-center gap-3 mb-4">
              <Code className="text-blue-400" size={24} />
              <h3 className="text-xl font-semibold">Frontend</h3>
            </div>
            <ul className="space-y-2 text-gray-300">
              <li>React.js</li>
              <li>JavaScript (ES6+)</li>
              <li>HTML5 & CSS3</li>
              <li>Tailwind CSS</li>
              <li>Responsive Design</li>
               <li>C</li>
               <li>C++</li>
            </ul>
          </div>

          <div className="p-6 transition-all bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl hover:-translate-y-1">
            <div className="flex items-center gap-3 mb-4">
              <Database className="text-green-400" size={24} />
              <h3 className="text-xl font-semibold">Backend</h3>
            </div>
            <ul className="space-y-2 text-gray-300">
              <li>Node.js</li>
              <li>Express.js</li>
              <li>MongoDB</li>
              <li>RESTful APIs</li>
              <li>SQL Databases</li>
            </ul>
          </div>

          <div className="p-6 transition-all bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl hover:-translate-y-1">
            <div className="flex items-center gap-3 mb-4">
              <Palette className="text-purple-400" size={24} />
              <h3 className="text-xl font-semibold">Tools & Others</h3>
            </div>
            <ul className="space-y-2 text-gray-300">
              <li>Git & GitHub</li>
              <li>VScode</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="container px-6 py-16 mx-auto border-t border-gray-700">
        <h2 className="mb-12 text-3xl font-bold text-center">My Projects</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Project Card 1 */}
          <div className="overflow-hidden transition-shadow bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80" 
              alt="Project 1" 
              className="object-cover w-full h-48"
            />
            <div className="p-6">
              <h3 className="mb-2 text-xl font-semibold">Rat in a maze visualizer</h3>
              <p className="mb-4 text-gray-400">PATH VISUALIZER</p>
              <div className="flex gap-4">
                <a 
                  href="https://github.com/ashuifh/project_1" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-400 transition-colors hover:text-blue-300"
                >
                  <Github size={16} />
                  <span>Code</span>
                </a>
              </div>
            </div>
          </div>

          {/* Project Card 2 */}
          <div className="overflow-hidden transition-shadow bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80" 
              alt="Project 3" 
              className="object-cover w-full h-48"
            />
            <div className="p-6">
              <h3 className="mb-2 text-xl font-semibold">Live Chat Application</h3>
              <p className="mb-4 text-gray-400">A real time live chat application utilizing Websockets or seamless communication</p>
              <div className="flex gap-4">
                <a 
                  href="https://github.com/ashuifh/LIVE_CHAT01" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-400 transition-colors hover:text-blue-300"
                >
                  <Github size={16} />
                  <span>Code</span>
                </a>
              </div>
            </div>
          </div>

          {/* Project Card 3 */}
          <div className="overflow-hidden transition-shadow bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80" 
              alt="Financial Tracker" 
              className="object-cover w-full h-48"
            />
            <div className="p-6">
              <h3 className="mb-2 text-xl font-semibold">Financial Tracker</h3>
              <p className="mb-4 text-gray-400">Financial Tracker helps you to track your financial status.It is a full stack project</p>
              <div className="flex gap-4">
                <a 
                  href="https://github.com/ashuifh/Finance_tracker_final" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-400 transition-colors hover:text-blue-300"
                >
                  <Github size={16} />
                  <span>Code</span>
                </a>
              </div>
            </div>
          </div>

          {/* Project Card 4 */}
          <div className="overflow-hidden transition-shadow bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80" 
              alt="Blog App" 
              className="object-cover w-full h-48"
            />
            <div className="p-6">
              <h3 className="mb-2 text-xl font-semibold">BLOG App</h3>
              <p className="mb-4 text-gray-400">Real Time Blog Website</p>
              <div className="flex gap-4">
                <a 
                  href="https://github.com/ashuifh/Blogcheck" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-400 transition-colors hover:text-blue-300"
                >
                  <Github size={16} />
                  <span>Code</span>
                </a>
              </div>
            </div>
          </div>

          {/* Project Card 5 - Nutrie Snap */}
          <div className="overflow-hidden transition-shadow bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80" 
              alt="Nutrie Snap" 
              className="object-cover w-full h-48"
            />
            <div className="p-6">
              <h3 className="mb-2 text-xl font-semibold">Nutrie Snap</h3>
              <p className="mb-4 text-gray-400">Nutrition analysis app that provides food information from images</p>
              <div className="flex gap-4">
                <a 
                  href="https://github.com/ashuifh/nutrie-snap" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-400 transition-colors hover:text-blue-300"
                >
                  <Github size={16} />
                  <span>Code</span>
                </a>
              </div>
            </div>
          </div>

          {/* Project Card 6 - Class Buddy */}
          <div className="overflow-hidden transition-shadow bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=800&q=80" 
              alt="Class Buddy" 
              className="object-cover w-full h-48"
            />
            <div className="p-6">
              <h3 className="mb-2 text-xl font-semibold">Class Buddy</h3>
              <p className="mb-4 text-gray-400">Group project, lead as a backend developer a project manager </p>
              <div className="flex gap-4">
                <a 
                  href="https://github.com/ashuifh/class-buddy" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-400 transition-colors hover:text-blue-300"
                >
                  <Github size={16} />
                  <span>Code</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
