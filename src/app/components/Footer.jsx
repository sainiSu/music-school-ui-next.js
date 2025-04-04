import React from 'react'

function Footer() {
    return (
      <footer className="bg-fuchsia-200 text-emerald-950 py-12">

          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">

          <div>
            <h2 className="text-black text-lg font-semibold mb-4">About Us</h2>

            <p className="mb-4 font-mono">
              Music School is a premier institution dedicated to teaching the art
              and science of music. We nurture talent from the ground up,
              fostering a vibrant community of musicians.
            </p>

            <p className="mb-4 font-mono">
              Our mission is to provide high-quality music education that inspires
              creativity and passion in our students.
            </p>

          </div>


          <div>

            <h2 className="text-black text-lg font-semibold mb-4">Quick Links</h2>
            <p className="mb-4 font-mono">
              Explore our website to learn more about our courses, faculty, and
              events. We offer a range of programs for all ages and skill levels.
            </p>

            <ul>
              <li>
                <a  href="#" className="hover:text-black transition-colors duration-300" >  Home </a>
              </li>

              <li>
                <a href="#" className="hover:text-black transition-colors duration-300" > About </a>
              </li>
              
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300"
                >
                  Courses
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>


          <div>
            <h2 className="text-black text-lg font-semibold mb-4">Follow Us</h2>
            <p className="mb-4 font-mono">
              Stay connected with us on social media for the latest updates,
              events, and announcements. Join our community of music lovers and
              enthusiasts.
            </p>
            <div className="flex space-x-4">

            <ul>
              <li>
                <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Facebook
              </a>
              </li>
                <li>
                    <a  href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Twitter
              </a>
                </li>
                <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Instagram
              
                </a>
              </li>
            </ul>
          </div>
            </div>

          <div>

            <h2 className="text-black text-lg font-semibold mb-4">Contact Us</h2>
            <p className="mb-4 font-mono">
              Have questions or need assistance? Feel free to reach out to us
              through our contact form or directly via email or phone. We are
              here to help you on your musical journey.
              </p>

            <p>Barcelona, Spain</p> 
            <p>Barcelona 10001</p>
            <p>Email: info@musicschool.com</p>
            <p>Phone: (+34) 456-7890</p>
          </div>
          </div>


          <p className="text-center text-xs pt-8">© 2024 Music School. All rights reserved.</p>
      </footer>
    )
  }
  
  export default Footer
