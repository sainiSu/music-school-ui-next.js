import React from 'react'

function Footer() {
    return (
      <footer className="bg-gray-300 text-emerald-950 py-12">

          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">

          <div>
            <h2 className="text-black text-xl font-semibold mb-4">About Us</h2>

            <p className="mb-4 font-mono">
              Music School is a premier institution dedicated to teaching the art
              and science of music. We nurture talent from the ground up,
              fostering a vibrant community of musicians.
            </p>

          </div>


          <div>

            <h2 className="text-black text-xl font-semibold mb-4">Quick Links</h2>
           
          

            <ul>
              <li>
                <a  href="#" className="hover:text-white transition-colors duration-300" >  Home </a>
              </li>

              <li>
              <a  href="#" className="hover:text-white transition-colors duration-300" >  About </a>
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
            <h2 className="text-black text-xl font-semibold mb-4">Follow Us</h2>
          
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

            <h2 className="text-black text-xl font-semibold mb-4">Contact Us</h2>

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
