import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code, 
  Database, 
  Server, 
  Smartphone, 
  Terminal, 
  Menu, 
  X,
  ChevronRight,
  Download,
  MapPin,
  Calendar,
  Briefcase,
  GraduationCap,
  Heart,
  ShieldAlert,
  Fuel,
  Blocks
} from 'lucide-react';

// --- Components ---

const SectionTitle = ({ title, subtitle }) => (
  <div className="mb-12 text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{title}</h2>
    <div className="w-20 h-1 bg-indigo-600 mx-auto rounded-full mb-4"></div>
    {subtitle && <p className="text-slate-600 max-w-2xl mx-auto">{subtitle}</p>}
  </div>
);

const SkillBadge = ({ name }) => (
  <span className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium hover:bg-indigo-50 hover:text-indigo-700 transition-colors cursor-default border border-slate-200">
    {name}
  </span>
);

const ExperienceCard = ({ role, company, duration, location, description, tags }) => (
  <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow relative pl-8 md:pl-6 border-l-4 border-l-indigo-500">
    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
      <div>
        <h3 className="text-xl font-bold text-slate-900">{role}</h3>
        <div className="flex items-center text-indigo-600 font-medium mt-1">
          <Briefcase className="w-4 h-4 mr-2" />
          {company}
        </div>
      </div>
      <div className="mt-2 md:mt-0 text-sm text-slate-500 flex flex-col md:items-end">
        <div className="flex items-center">
          <Calendar className="w-4 h-4 mr-1" />
          {duration}
        </div>
        <div className="flex items-center mt-1">
          <MapPin className="w-4 h-4 mr-1" />
          {location}
        </div>
      </div>
    </div>
    <p className="text-slate-600 mb-4 text-sm leading-relaxed whitespace-pre-line">{description}</p>
    {tags && (
      <div className="flex flex-wrap gap-2 mt-4">
        {tags.map((tag, index) => (
          <span key={index} className="text-xs px-2 py-1 bg-indigo-50 text-indigo-700 rounded font-medium">
            {tag}
          </span>
        ))}
      </div>
    )}
  </div>
);

const ProjectCard = ({ title, description, tech, icon: Icon }) => (
  <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-lg transition-all duration-300 group">
    <div className="p-6">
      <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-lg flex items-center justify-center mb-4 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
        <Icon size={24} />
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">{title}</h3>
      <p className="text-slate-600 text-sm mb-4 leading-relaxed h-auto md:h-24 overflow-hidden">
        {description}
      </p>
      <div className="flex flex-wrap gap-2">
        {tech.map((t, i) => (
          <span key={i} className="text-xs font-medium text-slate-500 bg-slate-100 px-2 py-1 rounded">
            {t}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const EducationCard = ({ degree, institution, year, location }) => (
  <div className="flex flex-col md:flex-row md:items-center justify-between p-4 bg-slate-50 rounded-lg border border-slate-200 hover:border-indigo-300 transition-colors">
    <div className="flex items-start">
      <div className="mr-4 mt-1 text-indigo-600">
        <GraduationCap size={24} />
      </div>
      <div>
        <h4 className="font-bold text-slate-900">{degree}</h4>
        <p className="text-slate-600">{institution}</p>
      </div>
    </div>
    <div className="mt-2 md:mt-0 text-right">
      <p className="text-sm font-medium text-slate-900">{year}</p>
      <p className="text-xs text-slate-500">{location}</p>
    </div>
  </div>
);

// --- Main Application ---

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Handle scroll spy
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition && (element.offsetTop + element.offsetHeight) > scrollPosition) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Experience', id: 'experience' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => scrollTo('home')}>
              <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
                Rutvik Mathapati
              </span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollTo(link.id)}
                  className={`text-sm font-medium transition-colors hover:text-indigo-600 ${
                    activeSection === link.id ? 'text-indigo-600' : 'text-slate-600'
                  }`}
                >
                  {link.name}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-slate-600 hover:text-indigo-600 focus:outline-none"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 shadow-lg absolute w-full">
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollTo(link.id)}
                  className={`block w-full text-left px-3 py-3 rounded-md text-base font-medium ${
                    activeSection === link.id 
                      ? 'bg-indigo-50 text-indigo-600' 
                      : 'text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 md:pt-40 md:pb-32 px-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-indigo-100 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-72 h-72 bg-violet-100 rounded-full blur-3xl opacity-50"></div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-sm font-medium mb-6 border border-indigo-100">
            <span className="flex h-2 w-2 relative mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            Available for Opportunities
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-6">
            Hi, I'm <span className="text-indigo-600">Rutvik Mathapati</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-600 max-w-2xl mx-auto mb-8 font-light">
            MCA Graduate | Full Stack Developer | Java & Python Enthusiast
          </p>
          
          <p className="text-lg text-slate-500 max-w-xl mx-auto mb-10">
            "Turning Ideas into Impactful Code - One Line at a Time!"
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button 
              onClick={() => scrollTo('projects')}
              className="px-8 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200 flex items-center justify-center"
            >
              View My Work
              <ChevronRight className="ml-2 w-4 h-4" />
            </button>
            <button 
              onClick={() => scrollTo('contact')}
              className="px-8 py-3 bg-white text-slate-700 border border-slate-300 rounded-lg font-medium hover:bg-slate-50 transition-colors flex items-center justify-center"
            >
              Contact Me
            </button>
          </div>

          <div className="mt-12 flex justify-center space-x-6 text-slate-400">
            <a href="https://github.com/ruties4354" target="_blank" rel="noreferrer" className="hover:text-indigo-600 transition-colors transform hover:scale-110">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com/in/rutvik-mathapati-3a5577208" target="_blank" rel="noreferrer" className="hover:text-indigo-600 transition-colors transform hover:scale-110">
              <Linkedin size={24} />
            </a>
            <a href="mailto:ruties4354@gmail.com" className="hover:text-indigo-600 transition-colors transform hover:scale-110">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative">
               <div className="aspect-square rounded-2xl overflow-hidden bg-slate-200 relative shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
                  {/* Placeholder for actual image */}
                  <div className="absolute inset-0 bg-indigo-900/10 z-10"></div>
                  <img 
                    src="/api/placeholder/600/600" 
                    alt="Rutvik Mathapati" 
                    className="object-cover w-full h-full"
                    onError={(e) => {
                      e.target.onerror = null; 
                      e.target.src = "https://ui-avatars.com/api/?name=Rutvik+Mathapati&background=4f46e5&color=fff&size=512";
                    }}
                  />
               </div>
               <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl border border-slate-100 hidden md:block">
                 <div className="flex items-center gap-4">
                   <div className="bg-indigo-100 p-3 rounded-full text-indigo-600">
                     <Code size={24} />
                   </div>
                   <div>
                     <p className="text-sm text-slate-500">Focus</p>
                     <p className="font-bold text-slate-900">Scalable Solutions</p>
                   </div>
                 </div>
               </div>
            </div>
            
            <div>
              <SectionTitle title="About Me" />
              <div className="prose prose-lg text-slate-600">
                <p className="mb-4">
                  Hi, I'm <span className="font-semibold text-slate-900">Rutvik Mathapati</span>, an MCA graduate from KLE College of Engineering and Technology. I have a deep passion for building practical, real-world tech solutions. Whether it's developing a full-stack web application or crafting a secure Android app, I thrive at the intersection of problem-solving and creativity.
                </p>
                <p className="mb-4">
                  My journey in tech started with curiosity and quickly evolved into a mission to code with purpose and deliver value. Over the past year, I've completed full-stack internships where I engineered scalable applications using Java, Python Django, React.js, and Node.js.
                </p>
                <p className="mb-6">
                  I'm proficient in DSA, DBMS, OS, and MAD, and I actively explore technologies like Git and Razorpay Integration. Beyond code, I've coordinated tech events and contributed to team-based academic projects, strengthening my leadership and communication skills.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  <div className="flex items-center text-slate-700">
                    <MapPin className="w-5 h-5 text-indigo-600 mr-2" />
                    Bengaluru, Karnataka
                  </div>
                  <div className="flex items-center text-slate-700">
                    <Briefcase className="w-5 h-5 text-indigo-600 mr-2" />
                    Open to Work
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title="Technical Proficiency" 
            subtitle="A toolkit built for delivering robust full-stack applications."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Frontend */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                <Code size={24} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-4">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {['React.js', 'HTML5', 'CSS3', 'Bootstrap', 'Responsive Design', 'JSP'].map(s => (
                  <SkillBadge key={s} name={s} />
                ))}
              </div>
            </div>

            {/* Backend */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
              <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center text-green-600 mb-4">
                <Server size={24} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-4">Backend</h3>
              <div className="flex flex-wrap gap-2">
                {['Java', 'Python', 'Django', 'Node.js', 'REST APIs', 'MySQL'].map(s => (
                  <SkillBadge key={s} name={s} />
                ))}
              </div>
            </div>

            {/* Tools & Core */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
              <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center text-purple-600 mb-4">
                <Database size={24} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-4">CS Core & Tools</h3>
              <div className="flex flex-wrap gap-2">
                {['DSA', 'DBMS', 'OS', 'Git', 'Razorpay API', 'AI-ML Basics'].map(s => (
                  <SkillBadge key={s} name={s} />
                ))}
              </div>
            </div>

            {/* Mobile & Others */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
              <div className="bg-orange-100 w-12 h-12 rounded-lg flex items-center justify-center text-orange-600 mb-4">
                <Smartphone size={24} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-4">Mobile & Other</h3>
              <div className="flex flex-wrap gap-2">
                {['Android Dev', 'Secure Apps', 'Team Leadership', 'Tech Events'].map(s => (
                  <SkillBadge key={s} name={s} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title="Professional Experience" 
            subtitle="My journey in the software industry, building real-world solutions."
          />
          
          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
            
            <ExperienceCard 
              role="Web Developer"
              company="Cognifyz Technologies"
              location="Nagpur, Maharashtra, India (Remote)"
              duration="August 2025 - September 2025"
              description="Worked on web development tasks, enhancing user interfaces and responsiveness of web applications."
              tags={['Web Development', 'Frontend', 'Design']}
            />

            <ExperienceCard 
              role="Python Django Full Stack Developer Intern"
              company="Amba Software"
              location="Dharwad, Karnataka, India"
              duration="November 2024 - January 2025"
              description={`Led backend development for a Car Rental Service web app.
              • Designed RESTful APIs and integrated Razorpay payment gateway.
              • Reduced admin-side processing time by 45% via automation.
              • Enhanced user engagement by 50% with improved UI/UX.
              • Resolved 25+ bugs and conducted 10+ code reviews in a team of 3.`}
              tags={['Python', 'Django', 'REST APIs', 'Razorpay', 'Bootstrap']}
            />

            <ExperienceCard 
              role="Java Full Stack Developer Intern"
              company="Amba Software"
              location="Dharwad, Karnataka, India"
              duration="November 2024 - January 2025"
              description={`Contributed to a Dairy Farm Management System.
              • Streamlined daily operations, reducing manual effort by 60%.
              • Implemented dynamic web pages (JSP) and MySQL connectivity.
              • Achieved 30% improvement in system response time.
              • Completed project 2 weeks ahead of schedule.`}
              tags={['Java', 'JSP', 'MySQL', 'HTML/CSS']}
            />
            
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title="Featured Projects" 
            subtitle="A selection of projects that demonstrate my technical skills and problem-solving abilities."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard 
              title="Car Rental Service"
              description="A full-stack web application featuring booking management, billing automation, and role-based access control. Includes secure email confirmation and invoice generation."
              tech={['Python', 'Django', 'Bootstrap', 'Razorpay', 'SMTP']}
              icon={ExternalLink}
            />
            
            <ProjectCard 
              title="Dairy Farm Management System"
              description="An operational management tool streamlining dairy farm processes. Features admin dashboards, inventory tracking, and robust database connectivity."
              tech={['Java', 'JSP', 'MySQL', 'JDBC', 'HTML/CSS']}
              icon={Database}
            />
            
            <ProjectCard 
              title="Secure Notes Android App"
              description="A mobile application focused on privacy and data security. Allows users to create, store, and manage encrypted notes on Android devices."
              tech={['Android', 'Java', 'XML', 'Security']}
              icon={Smartphone}
            />

            <ProjectCard 
              title="SYNCHER"
              description="An AI/ML-powered health tracking application helping users monitor and stay aligned with their menstrual health cycles."
              tech={['AI-ML', 'Python', 'HealthTech', 'Predictive Analysis']}
              icon={Heart}
            />

            <ProjectCard 
              title="Web Vulnerability Detection"
              description="A cybersecurity tool designed to scan web applications, identifying potential security gaps and vulnerabilities to prevent attacks."
              tech={['Cyber Security', 'Python', 'Vulnerability Scanning']}
              icon={ShieldAlert}
            />

            <ProjectCard 
              title="AI Petrol Pump Fraud Detection"
              description="An AI/ML solution that analyzes fuel dispensing patterns to detect anomalies and prevent fraud at petrol stations."
              tech={['AI-ML', 'Python', 'Pattern Recognition', 'Fraud Detection']}
              icon={Fuel}
            />

            <ProjectCard 
              title="Decentralized Verification"
              description="A transparent and secure verification system built on blockchain technology for authenticating identities and documents."
              tech={['Blockchain', 'Smart Contracts', 'Decentralized Apps']}
              icon={Blocks}
            />
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Education" />
          <div className="space-y-4">
            <EducationCard 
              degree="Master of Computer Applications (MCA)"
              institution="KLE College of Engineering & Technology"
              year="Feb 2024 - Aug 2025"
              location="Bengaluru, Karnataka"
            />
            <EducationCard 
              degree="Bachelor of Science (Computer Science)"
              institution="Karnataka University, Dharwad"
              year="June 2019 - Aug 2022"
              location="Dharwad, Karnataka"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Work Together</h2>
          <p className="text-slate-300 mb-10 text-lg max-w-2xl mx-auto">
            I'm currently seeking opportunities as a Full Stack Developer. If you have a project in mind or just want to say hi, feel free to reach out!
          </p>
          
          <div className="bg-slate-800 p-8 rounded-2xl shadow-2xl max-w-lg mx-auto border border-slate-700">
            <div className="flex flex-col space-y-6">
              <a 
                href="mailto:ruties4354@gmail.com"
                className="flex items-center justify-center p-4 bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors group"
              >
                <Mail className="mr-3 group-hover:animate-bounce" />
                <span className="font-medium">ruties4354@gmail.com</span>
              </a>
              
              <a 
                href="https://linkedin.com/in/rutvik-mathapati-3a5577208"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center p-4 bg-white text-slate-900 rounded-lg hover:bg-slate-100 transition-colors"
              >
                <Linkedin className="mr-3 text-[#0077b5]" />
                <span className="font-medium">Connect on LinkedIn</span>
              </a>

              
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 py-8 text-center text-slate-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Rutvik Mathapati. All rights reserved.</p>
      </footer>

    </div>
  );
}