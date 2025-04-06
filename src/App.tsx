import React, { useState } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, Download, ExternalLink, Code2, Cloud, Database, Brain } from 'lucide-react';

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

  const skillsData: SkillModal[] = [
    {
      title: "Software Engineering",
      skills: [
        {
          name: "Django",
          logo: "https://cdn.worldvectorlogo.com/logos/django.svg"
        },
        {
          name: "Flask",
          logo: "https://cdn.worldvectorlogo.com/logos/flask.svg"
        },
        {
          name: "Git",
          logo: "https://cdn.worldvectorlogo.com/logos/git-icon.svg"
        },
        {
          name: "Docker",
          logo: "https://cdn.worldvectorlogo.com/logos/docker.svg"
        },
        {
          name: "Java",
          logo: "https://cdn.worldvectorlogo.com/logos/java-4.svg"
        },
        {
          name: "Selenium",
          logo: "https://cdn.worldvectorlogo.com/logos/selenium-1.svg"
        }
      ]
    },
    {
      title: "Cloud Computing",
      skills: [
        {
          name: "AWS EC2",
          logo: "https://cdn.worldvectorlogo.com/logos/aws-ec2.svg"
        },
        {
          name: "Lambda",
          logo: "https://cdn.worldvectorlogo.com/logos/aws-lambda.svg"
        },
        {
          name: "S3",
          logo: "https://cdn.worldvectorlogo.com/logos/aws-s3.svg"
        },
        {
          name: "CloudWatch",
          logo: "https://cdn.worldvectorlogo.com/logos/aws-cloudwatch.svg"
        },
        {
          name: "IAM",
          logo: "https://cdn.worldvectorlogo.com/logos/aws-iam.svg"
        }
      ]
    },
    {
      title: "Data Science",
      skills: [
        {
          name: "Python",
          logo: "https://cdn.worldvectorlogo.com/logos/python-5.svg"
        },
        {
          name: "R",
          logo: "https://cdn.worldvectorlogo.com/logos/r-lang.svg"
        },
        {
          name: "Pandas",
          logo: "https://cdn.worldvectorlogo.com/logos/pandas.svg"
        },
        {
          name: "TensorFlow",
          logo: "https://cdn.worldvectorlogo.com/logos/tensorflow-2.svg"
        },
        {
          name: "PyTorch",
          logo: "https://cdn.worldvectorlogo.com/logos/pytorch-1.svg"
        },
        {
          name: "SQL",
          logo: "https://cdn.worldvectorlogo.com/logos/sql-database-generic.svg"
        }
      ]
    },
    {
      title: "Big Data & DBMS",
      skills: [
        {
          name: "MS SQL Server",
          logo: "https://cdn.worldvectorlogo.com/logos/microsoft-sql-server-1.svg"
        },
        {
          name: "Hadoop",
          logo: "https://cdn.worldvectorlogo.com/logos/hadoop.svg"
        },
        {
          name: "PostgreSQL",
          logo: "https://cdn.worldvectorlogo.com/logos/postgresql.svg"
        },
        {
          name: "MySQL",
          logo: "https://cdn.worldvectorlogo.com/logos/mysql-6.svg"
        }
      ]
    }
  ];

  const getSkillIcon = (title: string) => {
    switch (title) {
      case "Software Engineering":
        return <Code2 className="w-8 h-8 text-primary-600" />;
      case "Cloud Computing":
        return <Cloud className="w-8 h-8 text-primary-600" />;
      case "Data Science":
        return <Brain className="w-8 h-8 text-primary-600" />;
      case "Big Data & DBMS":
        return <Database className="w-8 h-8 text-primary-600" />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50">
      {/* Header/Hero Section */}
      <header className="bg-white shadow-lg">
        <div className="max-w-5xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="flex-1 min-w-0 animate-fade-in">
              <h1 className="text-4xl font-bold text-primary-900 sm:text-5xl">
                Elyes OMRI
              </h1>
              <p className="mt-2 text-xl text-primary-600">Software Engineer</p>
              
              <div className="mt-4 flex flex-wrap gap-4">
                <a href="mailto:elyesomri2@gmail.com" className="flex items-center text-gray-600 hover:text-primary-600 transition-colors">
                  <Mail className="h-5 w-5 mr-2" />
                  elyesomri2@gmail.com
                </a>
                <a href="https://www.linkedin.com/in/ilyes-omri/" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-600 hover:text-primary-600 transition-colors">
                  <Linkedin className="h-5 w-5 mr-2" />
                  Elyes Omri
                </a>
                <a href="https://github.com/ilyeso" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-600 hover:text-primary-600 transition-colors">
                  <Github className="h-5 w-5 mr-2" />
                  ilyeso
                </a>
                <span className="flex items-center text-gray-600">
                  <Phone className="h-5 w-5 mr-2" />
                  +216 55 249 653
                </span>
                <span className="flex items-center text-gray-600">
                  <MapPin className="h-5 w-5 mr-2" />
                  Tunis, Tunisia
                </span>
              </div>
            </div>
            <div className="mt-6 md:mt-0 animate-fade-in">
              <img
                className="h-32 w-32 rounded-full border-4 border-primary-200 shadow-xl transform hover:scale-105 transition-transform"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="Profile"
              />
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Experience Section */}
        <section className="mb-12 animate-fade-in">
          <h2 className="text-2xl font-bold text-primary-900 mb-12">Professional Experience</h2>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary-200"></div>

            {/* Experience items */}
            <div className="space-y-12">
              {/* ADP */}
              <div className="relative flex items-start group animate-fade-in-up">
                <div className="absolute left-0 w-16 h-16 rounded-full bg-white border-4 border-primary-200 group-hover:border-primary-400 transition-colors flex items-center justify-center shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80"
                    alt="ADP"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                </div>
                <div className="ml-24 bg-white p-6 rounded-lg shadow-sm group-hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-semibold text-primary-900">Functional Analyst – HRIS</h3>
                      <p className="text-primary-600">ADP</p>
                    </div>
                    <p className="text-gray-500">February 2025 - Present</p>
                  </div>
                  <ul className="mt-4 space-y-2 list-disc list-inside text-gray-600">
                    <li>Analyze client requirements and optimize HRIS payroll configuration</li>
                    <li>Ensure payroll processing compliance through testing and audits</li>
                    <li>Support clients and coordinate interactions with internal teams</li>
                  </ul>
                </div>
              </div>

              {/* Ilmam Consulting */}
              <div className="relative flex items-start group animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <div className="absolute left-0 w-16 h-16 rounded-full bg-white border-4 border-primary-200 group-hover:border-primary-400 transition-colors flex items-center justify-center shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80"
                    alt="Ilmam"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                </div>
                <div className="ml-24 bg-white p-6 rounded-lg shadow-sm group-hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-semibold text-primary-900">Software Engineer</h3>
                      <p className="text-primary-600">Ilmam Consulting</p>
                    </div>
                    <p className="text-gray-500">September 2023 - September 2024</p>
                  </div>
                  <ul className="mt-4 space-y-2 list-disc list-inside text-gray-600">
                    <li>Developed a Django web platform for government relationship management</li>
                    <li>Designed automated data extraction systems</li>
                    <li>Integrated external APIs with Python algorithms</li>
                    <li className="font-medium">Technologies: Django, Python, API integration, SQL, Data management</li>
                  </ul>
                </div>
              </div>

              {/* ODDO-BHF */}
              <div className="relative flex items-start group animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                <div className="absolute left-0 w-16 h-16 rounded-full bg-white border-4 border-primary-200 group-hover:border-primary-400 transition-colors flex items-center justify-center shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80"
                    alt="ODDO"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                </div>
                <div className="ml-24 bg-white p-6 rounded-lg shadow-sm group-hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-semibold text-primary-900">Data Science Intern</h3>
                       <a href="https://oddo.com" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-600 hover:text-primary-600 transition-colors">
                         <p>ODOO-BHF</p>
                       </a>
                    </div>
                    <p className="text-gray-500">March 2023 - September 2023</p>
                  </div>
                  <ul className="mt-4 space-y-2 list-disc list-inside text-gray-600">
                    <li>Developed an Anomaly Detection system for financial time series data</li>
                    <li>Improved model accuracy from 62% to 91% using LSTM Autoencoder</li>
                    <li>Built Django application with real-time features</li>
                    <li className="font-medium">Technologies: FinTech, LSTM, TensorFlow, Django, MS SQL Server</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-12 animate-fade-in">
          <h2 className="text-2xl font-bold text-primary-900 mb-6">Skills</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillsData.map((skill) => (
              <div
                key={skill.title}
                onClick={() => setSelectedSkill(skill)}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group"
              >
                <div className="flex items-center space-x-4">
                  {getSkillIcon(skill.title)}
                  <h3 className="text-lg font-semibold text-primary-900 group-hover:text-primary-600 transition-colors">
                    {skill.title}
                  </h3>
                </div>
                <p className="text-gray-600 mt-4">{skill.skills.map(s => s.name).join(", ")}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Modal for skill details */}
        {selectedSkill && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50" onClick={() => setSelectedSkill(null)}>
            <div className="bg-white rounded-lg p-6 max-w-4xl w-full animate-fade-in" onClick={e => e.stopPropagation()}>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold text-primary-900">{selectedSkill.title}</h3>
                <button
                  onClick={() => setSelectedSkill(null)}
                  className="text-gray-500 hover:text-gray-700 text-2xl"
                >
                  ×
                </button>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                {selectedSkill.skills.map((skill, index) => (
                  <div key={index} className="flex flex-col items-center space-y-2 group">
                    <div className="w-16 h-16 p-2 bg-white rounded-lg shadow-md group-hover:shadow-lg transition-shadow">
                      <img
                        src={skill.logo}
                        alt={skill.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Projects Section */}
        <section className="mb-12 animate-fade-in">
          <h2 className="text-2xl font-bold text-primary-900 mb-6">Featured Projects</h2>
          
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-primary-900">Stock Price Prediction with AWS Pipeline</h3>
              <ul className="mt-4 space-y-2 list-disc list-inside text-gray-600">
                <li>Flask application for stock price prediction using AWS services</li>
                <li>Automated data pipeline with Lambda and EventBridge</li>
                <li>CI/CD with GitHub Actions</li>
                <li className="font-medium">Technologies: AWS, Python, Flask, Machine Learning, CI/CD</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-primary-900">HR Management System</h3>
              <ul className="mt-4 space-y-2 list-disc list-inside text-gray-600">
                <li>Custom Django-based HR platform with role-based access</li>
                <li>Real-time notifications and data-driven dashboards</li>
                <li>Reduced HR agent workload by 50%</li>
                <li className="font-medium">Technologies: Django, Python, MySQL, JavaScript</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="animate-fade-in">
          <h2 className="text-2xl font-bold text-primary-900 mb-12">Education</h2>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary-200"></div>

            <div className="space-y-12">
              {/* ESPRIT */}
              <div className="relative flex items-start group animate-fade-in-up">
                <div className="absolute left-0 w-16 h-16 rounded-full bg-white border-4 border-primary-200 group-hover:border-primary-400 transition-colors flex items-center justify-center shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80"
                    alt="ESPRIT"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                </div>
                <div className="ml-24 bg-white p-6 rounded-lg shadow-sm group-hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-semibold text-primary-900">Software Engineering</h3>
                      <p className="text-primary-600">ESPRIT - Private Higher School of Engineering and Technology</p>
                      <p className="text-gray-500 mt-1">Data Science specialization</p>
                    </div>
                    <p className="text-gray-500">2020 - 2024</p>
                  </div>
                </div>
              </div>

              {/* Preparatory Institute */}
              <div className="relative flex items-start group animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <div className="absolute left-0 w-16 h-16 rounded-full bg-white border-4 border-primary-200 group-hover:border-primary-400 transition-colors flex items-center justify-center shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1592280771190-3e2e4d571952?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80"
                    alt="Preparatory Institute"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                </div>
                <div className="ml-24 bg-white p-6 rounded-lg shadow-sm group-hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-semibold text-primary-900">Preparatory Studies</h3>
                      <p className="text-primary-600">Preparatory Institute for Engineering Studies El Manar</p>
                      <p className="text-gray-500 mt-1">Physics and Technology</p>
                    </div>
                    <p className="text-gray-500">2018 - 2020</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t">
        <div className="max-w-5xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500">© 2025 Elyes OMRI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;