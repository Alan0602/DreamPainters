'use client'

import { useState, useEffect } from 'react'
import { ParallaxProvider, Parallax } from 'react-scroll-parallax'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Menu, X, Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react'
import Image from '../assets/image.jpg'

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <ParallaxProvider>
      <div className="min-h-screen flex flex-col">
        <header className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
          <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
            <div className="flex items-center">
              <img src="/placeholder.svg?height=40&width=40" alt="Dream Painters Logo" width={40} height={40} className="mr-2" />
              <span className="text-xl font-bold text-blue-600">Dream Painters</span>
            </div>
            <div className="hidden md:flex space-x-4">
              <a href="#home" className="text-gray-600 hover:text-blue-600">Home</a>
              <a href="#services" className="text-gray-600 hover:text-blue-600">Services</a>
              <a href="#portfolio" className="text-gray-600 hover:text-blue-600">Portfolio</a>
              <a href="#about" className="text-gray-600 hover:text-blue-600">About</a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600">Contact</a>
            </div>
            <button className="md:hidden" onClick={toggleMenu}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </nav>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden bg-white shadow-md absolute top-full left-0 right-0"
            >
              <div className="container mx-auto px-4 py-2 flex flex-col space-y-2">
                <a href="#home" className="text-gray-600 hover:text-blue-600" onClick={toggleMenu}>Home</a>
                <a href="#services" className="text-gray-600 hover:text-blue-600" onClick={toggleMenu}>Services</a>
                <a href="#portfolio" className="text-gray-600 hover:text-blue-600" onClick={toggleMenu}>Portfolio</a>
                <a href="#about" className="text-gray-600 hover:text-blue-600" onClick={toggleMenu}>About</a>
                <a href="#contact" className="text-gray-600 hover:text-blue-600" onClick={toggleMenu}>Contact</a>
              </div>
            </motion.div>
          )}
        </header>

        <main className="flex-grow pt-16">
          <HeroSection />
          <ServicesSection />
          <PortfolioSection />
          <AboutSection />
        </main>

        <footer className="bg-gray-800 text-white py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-between">
              <div className="w-full md:w-1/3 mb-4 md:mb-0">
                <h3 className="text-xl font-bold mb-2">Dream Painters</h3>
                <p className="text-sm">Transforming spaces with color and creativity</p>
              </div>
              <div className="w-full md:w-1/3 mb-4 md:mb-0">
                <h4 className="text-lg font-semibold mb-2">Contact Us</h4>
                <ul className="text-sm">
                  <li className="flex items-center mb-2"><Phone className="mr-2 h-4 w-4" /> (555) 123-4567</li>
                  <li className="flex items-center mb-2"><Mail className="mr-2 h-4 w-4" /> info@dreampainters.com</li>
                  <li className="flex items-center"><MapPin className="mr-2 h-4 w-4" /> 123 Paint Street, Color City, ST 12345</li>
                </ul>
              </div>
              <div className="w-full md:w-1/3">
                <h4 className="text-lg font-semibold mb-2">Follow Us</h4>
                <div className="flex space-x-4">
                  <a href="#" className="hover:text-blue-400"><Facebook /></a>
                  <a href="#" className="hover:text-blue-400"><Instagram /></a>
                  <a href="#" className="hover:text-blue-400"><Twitter /></a>
                </div>
              </div>
            </div>
            <div className="mt-8 text-center text-sm">
              © {new Date().getFullYear()} Dream Painters. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </ParallaxProvider>
  )
}

function HeroSection() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <Parallax translateY={[-20, 20]} className="absolute inset-0">
        <img
          src="/placeholder.svg?height=1080&width=1920"
          alt="Painting scene"
        />
      </Parallax>
      <div className="relative z-10 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Dream Painters</h1>
        <p className="text-xl md:text-2xl mb-8">Transforming Spaces with Color and Creativity</p>
        <a
          href="#contact"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300"
        >
          Get a Free Quote
        </a>
      </div>
    </section>
  )
}

function ServicesSection() {
  const controls = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  const services = [
    { title: 'Interior Painting', description: 'Transform your indoor spaces with our expert interior painting services.' },
    { title: 'Exterior Painting', description: 'Enhance your home\'s curb appeal with our durable exterior painting solutions.' },
    { title: 'Commercial Painting', description: 'Professional painting services for businesses and commercial properties.' },
    { title: 'Color Consultation', description: 'Get expert advice on color schemes to match your style and preferences.' },
  ]

  return (
    <section id="services" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
        <motion.div
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={{
            visible: { opacity: 1, y: 0, transition: { duration: 0.5, staggerChildren: 0.2 } },
            hidden: { opacity: 0, y: 20 }
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 20 }
              }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function PortfolioSection() {
  const projects = [
    { title: 'Modern Living Room', image: '/placeholder.svg?height=300&width=400' },
    { title: 'Cozy Bedroom', image: '/placeholder.svg?height=300&width=400' },
    { title: 'Vibrant Kitchen', image: '/placeholder.svg?height=300&width=400' },
    { title: 'Elegant Office Space', image: '/placeholder.svg?height=300&width=400' },
  ]

  return (
    <section id="portfolio" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="relative overflow-hidden rounded-lg shadow-md group">
              <img
                src={project.image}
                alt={project.title}
                width={400}
                height={300}
                className="w-full h-auto transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-white text-xl font-semibold">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function AboutSection() {
  return (
    <section id="about" className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <Parallax translateX={[-10, 10]}>
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="About Dream Painters"
                width={600}
                height={400}
                className="rounded-lg shadow-md"
              />
            </Parallax>
          </div>
          <div className="w-full md:w-1/2 md:pl-8">
            <h2 className="text-3xl font-bold mb-4">About Dream Painters</h2>
            <p className="text-gray-600 mb-4">
              At Dream Painters, we believe that a fresh coat of paint can transform not just your space, but your entire outlook. With years of experience and a passion for perfection, our team of skilled painters is dedicated to bringing your vision to life.
            </p>
            <p className="text-gray-600 mb-4">
              We use only the highest quality paints and materials, ensuring a finish that not only looks beautiful but stands the test of time. From residential to commercial projects, we approach each job with the same level of care and attention to detail.
            </p>
            <p className="text-gray-600">
              Choose Dream Painters for a painting experience that exceeds your expectations and leaves you with a space you'll love for years to come.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

