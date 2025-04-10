import React, { useState } from 'react';
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Code2,
  Cloud,
  Database,
  Brain,
} from 'lucide-react';


interface Skill {
  name: string;
  logo: string;
}

interface SkillModal {
  title: string;
  skills: Skill[];
}

function App() {
  const [selectedSkill, setSelectedSkill] = useState<SkillModal | null>(null);
  const [activeSection, setActiveSection] = useState('profile');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const header = document.querySelector('header');
      const headerHeight = header?.offsetHeight || 0;
      const elementPosition = element.offsetTop - headerHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
      setActiveSection(sectionId);
    }
  };

  const skillsData: SkillModal[] = [
    {
      title: "Software Engineering",
      skills: [
        { name: "Django", logo: "https://cdn.worldvectorlogo.com/logos/django.svg" },
        { name: "Flask", logo: "https://cdn.worldvectorlogo.com/logos/flask.svg" },
        { name: "Git", logo: "https://cdn.worldvectorlogo.com/logos/git-icon.svg" },
        { name: "Docker", logo: "https://cdn.worldvectorlogo.com/logos/docker.svg" },
        { name: "Java", logo: "https://cdn.worldvectorlogo.com/logos/java-4.svg" },
        { name: "Selenium", logo: "https://cdn.worldvectorlogo.com/logos/selenium-1.svg" }
      ]
    },
    {
      title: "Cloud Computing",
      skills: [
        { name: "AWS EC2", logo: "https://cdn.worldvectorlogo.com/logos/aws-vpc-1.svg" },
        { name: "Lambda", logo: "https://cdn.worldvectorlogo.com/logos/aws-lambda.svg" },
        { name: "S3", logo: "https://cdn.worldvectorlogo.com/logos/amazon-s3-simple-storage-service.svg" },
        { name: "CloudWatch", logo: "https://cdn.worldvectorlogo.com/logos/aws-cloudwatch.svg" },
        { name: "IAM", logo: "https://cdn.worldvectorlogo.com/logos/aws-iam.svg" }
      ]
    },
    {
      title: "Data Science",
      skills: [
        { name: "Python", logo: "https://cdn.worldvectorlogo.com/logos/python-5.svg" },
        { name: "R", logo: "https://cdn.worldvectorlogo.com/logos/r-lang.svg" },
        { name: "Pandas", logo: "https://cdn.worldvectorlogo.com/logos/pandas.svg" },
        { name: "TensorFlow", logo: "https://cdn.worldvectorlogo.com/logos/tensorflow-2.svg" },
        { name: "PyTorch", logo: "https://cdn.worldvectorlogo.com/logos/pytorch-2.svg" },
        { name: "SQL", logo: "https://cdn.worldvectorlogo.com/logos/amazon-database.svg" }
      ]
    },
    {
      title: "Big Data & DBMS",
      skills: [
        { name: "MS SQL Server", logo: "https://cdn.worldvectorlogo.com/logos/microsoft-sql-server-1.svg" },
        { name: "Hadoop", logo: "https://cdn.worldvectorlogo.com/logos/hadoop.svg" },
        { name: "PostgreSQL", logo: "https://cdn.worldvectorlogo.com/logos/postgresql.svg" },
        { name: "MySQL", logo: "https://cdn.worldvectorlogo.com/logos/mysql-3.svg" }
      ]
    }
  ];

  const getSkillIcon = (title: string) => {
    switch (title) {
      case "Software Engineering":
        return <Code2 className="w-8 h-8 text-white" />;
      case "Cloud Computing":
        return <Cloud className="w-8 h-8 text-white" />;
      case "Data Science":
        return <Brain className="w-8 h-8 text-white" />;
      case "Big Data & DBMS":
        return <Database className="w-8 h-8 text-white" />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50">
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">EO</span>
              </div>
              <span className="text-xl font-semibold text-primary-900">Elyes Omri</span>
            </div>
            <nav>
              <ul className="flex space-x-8">
                {['profile', 'experience', 'skills', 'contact'].map((section) => (
                  <li key={section}>
                    <button
                      onClick={() => scrollToSection(section)}
                      className={`text-sm font-medium capitalize transition-colors ${
                        activeSection === section
                          ? 'text-primary-600'
                          : 'text-gray-600 hover:text-primary-600'
                      }`}
                    >
                      {section}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section with Background */}
      {/* Hero Section with Background */}
<div 
  id="profile"
  className="relative h-screen max-h-[800px] w-full bg-cover bg-center pt-16"
  style={{
    backgroundImage: 'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")',
  }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-primary-900/90" />
  
  {/* Content */}
  <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
    <div className="flex items-center space-x-8">
      {/* Profile Video */}
      <div className="relative h-70 w-60 rounded-full border-4 border-white/20 shadow-2xl overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full "
        >
          <source src="/static/portfolioVID.mp4" type="video/mp4" />
          {/* Fallback image if video doesn't load */}
          <img 
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" 
            alt="Profile" 
            className="w-full h-full object-cover"
          />
        </video>
      </div>
      
      <div className="space-y-4">
        <h1 className="text-6xl font-bold text-white animate-fade-in">
          Elyes OMRI
        </h1>
        <p className="text-2xl text-primary-200">Software Engineer</p>
        <p className="max-w-2xl text-lg text-gray-300 leading-relaxed">
          Highly motivated Software Engineer with expertise in Python, Django, and AWS. 
          Passionate about building scalable solutions and leveraging data science for 
          real-world impact. Currently focused on developing enterprise-level HRIS systems 
          and cloud-native applications.
        </p>
      </div>
    </div>
  </div>

  {/* Scroll indicator */}
  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
    <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
      <div className="w-1 h-3 bg-white/60 rounded-full" />
    </div>
  </div>
</div>

      <main className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">

        {/* Experience Section */}
        <section id="experience" className="relative py-20 overflow-hidden bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-primary-900 mb-16 text-center">
              <span className="relative inline-block">
                Professional Journey
                <span className="absolute bottom-0 left-0 w-full h-2 bg-primary-200/50 -rotate-1 z-0"></span>
              </span>
            </h2>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary-200"></div>

              {/* Experience items */}
              <div className="space-y-12">
                {/* ADP Experience */}
                <div className="relative flex items-start group animate-fade-in-up">
                
                  
                  {/* Timeline dot with company logo */}
                  <div className="absolute left-0 w-16 h-16 rounded-full bg-white border-4 border-primary-200 group-hover:border-primary-400 transition-colors flex items-center justify-center shadow-lg z-10">
                    <img
                      src="/static/adp.png"
                      alt="ADP"
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                  
                  {/* Experience card - fixed width */}
                  <div className="ml-24 w-[calc(100%-6rem)] min-w-[300px] max-w-[800px] bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 group-hover:shadow-xl group-hover:border-primary-200 transition-all duration-300">
                    {/* Unified header color */}
                    <div className="bg-gradient-to-r from-primary-600 to-primary-700 p-6">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-2xl font-bold text-white">Functional Analyst – HRIS</h3>
                          <p className="text-primary-100">ADP • Full-time</p>
                        </div>
                        <p className="text-white/80 bg-white/10 px-3 py-1 rounded-full text-sm md">
                          Feb 2025 - Present
                        </p>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-6">
                      <ul className="space-y-4">
                        <li className="flex items-start">
                          <div className="flex-shrink-0 mt-1">
                            <div className="w-2 h-2 rounded-full bg-primary-600"></div>
                          </div>
                          <p className="ml-3 text-gray-700">
                            Analyzed client requirements and optimized HRIS payroll configuration for enterprise clients
                          </p>
                        </li>
                        <li className="flex items-start">
                          <div className="flex-shrink-0 mt-1">
                            <div className="w-2 h-2 rounded-full bg-primary-600"></div>
                          </div>
                          <p className="ml-3 text-gray-700">
                            Ensured payroll processing compliance through rigorous testing and audit procedures
                          </p>
                        </li>
                        <li className="flex items-start">
                          <div className="flex-shrink-0 mt-1">
                            <div className="w-2 h-2 rounded-full bg-primary-600"></div>
                          </div>
                          <p className="ml-3 text-gray-700">
                             Support clients and coordinate interactions with internal teams
                          </p>
                        </li>
                      </ul>
                      
                      {/* Tech stack */}
                      <div className="mt-8 pt-6 border-t border-gray-100">
                        <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                          Technical Environment
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {['HRIS Systems', 'Payroll Software', 'SQL', 'Data Analysis', 'Compliance Tools', 'JIRA'].map((tech, i) => (
                            <span 
                              key={i}
                              className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-xs font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Ilmam Consulting Experience */}
                <div className="relative flex items-start group animate-fade-in-up">
                
                  
                  {/* Timeline dot with company logo */}
                  <div className="absolute left-0 w-16 h-16 rounded-full bg-white border-4 border-primary-200 group-hover:border-primary-400 transition-colors flex items-center justify-center shadow-lg z-10 overflow-hidden">
                    <img
                      src="/static/elmam.svg"
                      alt="ELmam"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Experience card - fixed width */}
                  <div className="ml-24 w-[calc(100%-6rem)] min-w-[300px] max-w-[800px] bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 group-hover:shadow-xl group-hover:border-primary-200 transition-all duration-300">
                    {/* Unified header color */}
                    <div className="bg-gradient-to-r from-primary-600 to-primary-700 p-6">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-2xl font-bold text-white">Software Engineer</h3>
                          <p className="text-primary-100">Elmam Consulting • Full-time</p>
                        </div>
                        <p className="text-white/80 bg-white/10 px-3 py-1 rounded-full text-sm md">
                         Sep 2023 - Sep 2024
                        </p>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-6">
                      <ul className="space-y-4">
                        <li className="flex items-start">
                          <div className="flex-shrink-0 mt-1">
                            <div className="w-2 h-2 rounded-full bg-primary-600"></div>
                          </div>
                          <p className="ml-3 text-gray-700">
                            Developed a Django web platform for government relationship management serving 50+ clients
                          </p>
                        </li>
                        <li className="flex items-start">
                          <div className="flex-shrink-0 mt-1">
                            <div className="w-2 h-2 rounded-full bg-primary-600"></div>
                          </div>
                          <p className="ml-3 text-gray-700">
                            Designed automated data extraction systems that reduced manual work by 70%
                          </p>
                        </li>
                        <li className="flex items-start">
                          <div className="flex-shrink-0 mt-1">
                            <div className="w-2 h-2 rounded-full bg-primary-600"></div>
                          </div>
                          <p className="ml-3 text-gray-700">
                            Integrated 5+ external APIs with custom Python algorithms for data processing
                          </p>
                        </li>
                      </ul>
              
                      {/* Tech stack */}
                      <div className="mt-8 pt-6 border-t border-gray-100">
                        <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                          Technical Environment
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {['Django', 'Python', 'PostgreSQL', 'REST APIs', 'Pandas', 'Docker', 'AWS EC2'].map((tech, i) => (
                            <span 
                              key={i}
                              className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-xs font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                  </div>
                  </div>
                </div>

                {/* ODDO-BHF Experience */}
                <div className="relative flex items-start group animate-fade-in-up">
                
                  
                {/* Timeline dot with company logo */}
                <div className="absolute left-0 w-16 h-16 rounded-full bg-white border-4 border-primary-200 group-hover:border-primary-400 transition-colors flex items-center justify-center shadow-lg z-10">
                  <img
                    src="/static/oddo.jpeg"
                    alt="oddo-bhf"
                    className="w-10 h-10 rounded-full object-cover" 
                  />
                </div>
                
                {/* Experience card - fixed width */}
                <div className="ml-24 w-[calc(100%-6rem)] min-w-[300px] max-w-[800px] bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 group-hover:shadow-xl group-hover:border-primary-200 transition-all duration-300">
                  {/* Unified header color */}
                  <div className="bg-gradient-to-r from-primary-600 to-primary-700 p-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-2xl font-bold text-white">Data Science Intern</h3>
                        <p className="text-primary-100">ODDO-BHF • Internship</p>
                      </div>
                      <p className="text-white/80 bg-white/10 px-3 py-1 rounded-full text-sm md">
                        Mar 2023 - Sep 2023
                      </p>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <div className="flex-shrink-0 mt-1">
                          <div className="w-2 h-2 rounded-full bg-primary-600"></div>
                        </div>
                        <p className="ml-3 text-gray-700">
                          Developed an Anomaly Detection system for financial time series data with 91% accuracy
                        </p>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 mt-1">
                          <div className="w-2 h-2 rounded-full bg-primary-600"></div>
                        </div>
                        <p className="ml-3 text-gray-700">
                          Improved model performance from 62% to 91% using LSTM Autoencoder architecture
                        </p>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 mt-1">
                          <div className="w-2 h-2 rounded-full bg-primary-600"></div>
                        </div>
                        <p className="ml-3 text-gray-700">
                          Built Django dashboard with real-time data visualization for monitoring transactions
                        </p>
                      </li>
                    </ul>
              
                    {/* Tech stack */}
                    <div className="mt-8 pt-6 border-t border-gray-100">
                      <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                        Technical Environment
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {['Python', 'TensorFlow', 'LSTM', 'Django', 'MS SQL Server', 'Pandas', 'Matplotlib'].map((tech, i) => (
                          <span 
                            key={i}
                            className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>
        </section>          



      {/* Skills Section */}
      <section id="skills" className="relative py-20 overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-900 to-primary-700 opacity-95"></div>
          {/* Animated particles */}
          {[...Array(30)].map((_, i) => (
            <div 
              key={i}
              className="absolute rounded-full bg-white/10"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 10 + 2}px`,
                height: `${Math.random() * 10 + 2}px`,
                animation: `float ${Math.random() * 20 + 10}s infinite ${Math.random() * 5}s linear`,
              }}
            />
          ))}
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            <span className="relative inline-block">
              <span className="relative z-10">Technical Skills</span>
              <span className="absolute bottom-0 left-0 w-full h-2 bg-primary-400/50 -rotate-1 z-0"></span>
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillsData.map((category, categoryIdx) => (
              <div 
                key={category.title}
                className="relative group perspective-1000"
                onMouseEnter={() => setSelectedSkill(category)}
                onMouseLeave={() => setSelectedSkill(null)}
              >
                {/* Category card */}
                <div className={`relative h-full transition-all duration-500 transform-style-preserve-3d group-hover:rotate-y-20 bg-white/10 backdrop-blur-md rounded-xl overflow-hidden border border-white/10 shadow-lg`}>
                  {/* Front face */}
                  <div className="p-6 flex flex-col items-center text-center h-full">
                    <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-4 border-2 border-white/20 group-hover:border-primary-400 transition-all">
                      {getSkillIcon(category.title)}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{category.title}</h3>
                    
                    {/* Skill cloud */}
                    <div className="flex flex-wrap justify-center gap-2 mt-4">
                      {category.skills.slice(0, 4).map((skill, skillIdx) => (
                        <div 
                          key={skillIdx}
                          className="px-3 py-1 bg-white/5 rounded-full text-xs text-white/80 hover:text-white hover:bg-primary-500/30 transition-all"
                        >
                          {skill.name}
                        </div>
                      ))}
                      {category.skills.length > 4 && (
                        <div className="px-3 py-1 bg-white/5 rounded-full text-xs text-white/50">
                          +{category.skills.length - 4} more
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Back face - visible on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-600 to-primary-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col items-center justify-center text-center">
                    <h3 className="text-xl font-bold text-white mb-4">{category.title}</h3>
                    <div className="grid grid-cols-2 gap-3 w-full">
                      {category.skills.map((skill, skillIdx) => (
                        <div 
                          key={skillIdx}
                          className="flex items-center space-x-2 p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                        >
                          <img 
                            src={skill.logo} 
                            alt={skill.name} 
                            className="w-5 h-5 object-contain" 
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.src = "/api/placeholder/24/24";
                              target.alt = skill.name.charAt(0);
                            }}
                          />
                          <span className="text-xs text-white">{skill.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Floating skill icons */}
                <div className="absolute -top-8 -right-8 w-40 h-40 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {category.skills.slice(0, 5).map((skill, skillIdx) => (
                    <div 
                      key={skillIdx}
                      className="absolute w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg"
                      style={{
                        top: `${Math.sin(skillIdx * 0.5) * 60 + 90}%`,
                        left: `${Math.cos(skillIdx * 0.5) * 30 + 50}%`,
                        transform: `scale(${1 + skillIdx * 0.1})`,
                        zIndex: 10 - skillIdx,
                        animation: `float ${6 + skillIdx}s infinite ${skillIdx * 0.5}s ease-in-out alternate`
                      }}
                    >
                      <img 
                        src={skill.logo} 
                        alt={skill.name} 
                        className="w-5 h-5 object-contain" 
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Detailed view for selected category */}
          {selectedSkill && (
            <div className="mt-16 bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-white">{selectedSkill.title}</h3>
                <div className="w-12 h-12 rounded-full bg-primary-500/20 flex items-center justify-center">
                  {getSkillIcon(selectedSkill.title)}
                </div>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {selectedSkill.skills.map((skill, skillIdx) => (
          <div 
            key={skillIdx}
            className="group relative flex flex-col items-center p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all"
          >
            <div className="relative w-16 h-16 mb-3">
              <div className="absolute inset-0 bg-white rounded-full transform group-hover:scale-110 transition-all"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <img 
                  src={skill.logo} 
                  alt={skill.name} 
                  className="w-10 h-10 object-contain z-10" 
                />
              </div>
            </div>
            <span className="text-sm font-medium text-white">{skill.name}</span>
            <div className="absolute -bottom-2 h-1 w-1/2 bg-primary-400 opacity-0 group-hover:opacity-100 transition-all"></div>
          </div>
        ))}
      </div>

            </div>
          )}
        </div>
      </section>


        {/* Contact Section */}
          {/* Contact Section */}
<section id="contact" className="relative py-20 overflow-hidden bg-gradient-to-br from-primary-50 to-secondary-50">
  <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
    <h2 className="text-4xl font-bold text-primary-900 mb-12 text-center">
      <span className="relative inline-block">
        Let's Connect
        <span className="absolute bottom-0 left-0 w-full h-2 bg-primary-200/50 -rotate-1 z-0"></span>
      </span>
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {/* Email Card */}
      <div 
        className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 group text-center cursor-pointer"
        onClick={(e) => {
          const email = e.currentTarget.querySelector('.email-text');
          const clickText = e.currentTarget.querySelector('.click-text');
          if (email && clickText) {
            email.classList.toggle('hidden');
            clickText.classList.toggle('hidden');
          }
        }}
      >
        <div className="w-14 h-14 rounded-xl bg-primary-100 flex items-center justify-center mb-4 mx-auto group-hover:bg-primary-200 transition-colors">
          <Mail className="h-8 w-8 text-primary-600 group-hover:text-primary-700 transition-colors" />
        </div>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Email</h3>
        <div className="click-text text-gray-500 text-sm">Click to show</div>
        <a 
          href="mailto:elyesomri2@gmail.com" 
          className="email-text hidden text-primary-600 hover:text-primary-700 transition-colors text-sm font-medium"
        >
          elyesomri2@gmail.com
        </a>
      </div>

      {/* LinkedIn Card */}
      <a 
        href="https://www.linkedin.com/in/ilyes-omri/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 group text-center"
      >
        <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center mb-4 mx-auto group-hover:bg-blue-200 transition-colors">
          <Linkedin className="h-8 w-8 text-blue-600 group-hover:text-blue-700 transition-colors" />
        </div>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">LinkedIn</h3>
        <div className="text-blue-600 text-sm font-medium">
          Elyes Omri
        </div>
      </a>

      {/* GitHub Card */}
      <a 
        href="https://github.com/ilyeso" 
        target="_blank" 
        rel="noopener noreferrer"
        className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 group text-center"
      >
        <div className="w-14 h-14 rounded-xl bg-gray-100 flex items-center justify-center mb-4 mx-auto group-hover:bg-gray-200 transition-colors">
          <Github className="h-8 w-8 text-gray-600 group-hover:text-gray-700 transition-colors" />
        </div>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">GitHub</h3>
        <div className="text-gray-600 text-sm font-medium">
          ilyeso
        </div>
      </a>

      {/* Phone Card */}
      <div 
        className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 group text-center cursor-pointer"
        onClick={(e) => {
          const phone = e.currentTarget.querySelector('.phone-text');
          const clickText = e.currentTarget.querySelector('.click-text');
          if (phone && clickText) {
            phone.classList.toggle('hidden');
            clickText.classList.toggle('hidden');
          }
        }}
      >
        <div className="w-14 h-14 rounded-xl bg-green-100 flex items-center justify-center mb-4 mx-auto group-hover:bg-green-200 transition-colors">
          <Phone className="h-8 w-8 text-green-600 group-hover:text-green-700 transition-colors" />
        </div>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Phone</h3>
        <div className="click-text text-gray-500 text-sm">Click to show</div>
        <div className="phone-text hidden text-green-600 text-sm font-medium">
          +216 55 249 653
        </div>
      </div>
    </div>
  </div>
</section>
      </main>

      {/* Footer */}
      {/* Footer */}
<footer className="relative bg-gradient-to-r from-primary-900 to-primary-800 text-white py-12">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex flex-col md:flex-row justify-between items-center">
      <div className="flex items-center space-x-3 mb-6 md:mb-0">
        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
          <span className="text-primary-900 font-bold text-xl">EO</span>
        </div>
        <span className="text-xl font-semibold">Elyes Omri</span>
      </div>
      
      <div className="flex space-x-6">
        <a href="mailto:elyesomri2@gmail.com" className="text-white/80 hover:text-white transition-colors">
          <Mail className="h-6 w-6" />
        </a>
        <a href="https://www.linkedin.com/in/ilyes-omri/" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors">
          <Linkedin className="h-6 w-6" />
        </a>
        <a href="https://github.com/ilyeso" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors">
          <Github className="h-6 w-6" />
        </a>
      </div>
    </div>
    
    <div className="mt-8 pt-8 border-t border-white/10 text-center md:text-left">
      <p className="text-white/80">
        © {new Date().getFullYear()} Elyes OMRI. All rights reserved.
      </p>
      <p className="text-white/60 text-sm mt-2">
        Built with passion in Tunis, Tunisia
      </p>
    </div>
  </div>
</footer>
    </div>
  );
}

export default App;