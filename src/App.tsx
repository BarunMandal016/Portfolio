import { useState, useEffect } from 'react'

function App() {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    setTheme(isDark ? 'dark' : 'light')
  }, [])

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light')
  }

  return (
    <div className={`${theme} min-h-screen bg-white dark:bg-gray-900`}>
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/90 dark:bg-gray-900/90 backdrop-blur">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold text-gray-900 dark:text-white">Aarti Mandal</h1>
          <div className="hidden md:flex space-x-6">
            <a href="#about" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">About</a>
            <a href="#education" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">Education</a>
            <a href="#experience" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">Experience</a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">Contact</a>
          </div>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300"
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                Aspiring Medical Professional
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                Dedicated MBBS aspirant with a passion for healthcare and a commitment to making a positive impact in medicine.
              </p>
              <div className="flex gap-4">
                <a
                  href="#contact"
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Contact Me
                </a>
                <a
                  href="#"
                  className="px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                >
                  Download CV
                </a>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Aarti%20Mandal.jpg-ULRkza7g3eKuJfpV3VVIX2b2NTE0U9.jpeg"
                alt="Portfolio"
                className="rounded-lg shadow-xl w-full max-w-md mx-auto"
              />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4 py-16 md:py-24">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-8">
              About Me
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Academic Excellence</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Consistently achieving top grades in biology, chemistry, and physics, laying a strong foundation for medical studies.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Community Service</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Active participation in health camps and community outreach programs, developing crucial patient interaction skills.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Medical Aspirations</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Focused on specializing in pediatrics with a particular interest in preventive healthcare and child development.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="container mx-auto px-4 py-16 md:py-24">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-8">
            Education
          </h2>
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Higher Secondary Education</h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2">ABC Higher Secondary School | 2020-2022</p>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                Science stream with Biology major. Achieved 95% in board examinations.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Secondary Education</h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2">XYZ Secondary School | 2018-2020</p>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                Completed with distinction, securing 92% marks.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Medical Entrance Preparation</h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2">Premier Medical Academy | 2022-Present</p>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                Preparing for NEET examination with focus on Biology and Chemistry.
              </p>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4 py-16 md:py-24">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-8">
              Clinical Experience
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Hospital Volunteering</h3>
                <p className="text-gray-600 dark:text-gray-300 mt-2">City General Hospital • Summer 2022</p>
                <p className="text-gray-600 dark:text-gray-300 mt-2">
                  Assisted in the pediatric ward, gaining valuable exposure to hospital operations and patient care protocols.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Health Camp Participant</h3>
                <p className="text-gray-600 dark:text-gray-300 mt-2">Rural Health Initiative • Winter 2022</p>
                <p className="text-gray-600 dark:text-gray-300 mt-2">
                  Participated in organizing and conducting health awareness camps in rural areas, focusing on preventive healthcare.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Medical Research Observer</h3>
                <p className="text-gray-600 dark:text-gray-300 mt-2">Medical Research Center • Spring 2023</p>
                <p className="text-gray-600 dark:text-gray-300 mt-2">
                  Observed clinical research procedures and data collection methods in a study on childhood nutrition.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="container mx-auto px-4 py-16 md:py-24">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-8">
            Get in Touch
          </h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Contact Information</h3>
              <div className="space-y-4">
                <p className="text-gray-600 dark:text-gray-300">📧 aarti.mandal@email.com</p>
                <p className="text-gray-600 dark:text-gray-300">📞 +977 98XXXXXXXX</p>
                <p className="text-gray-600 dark:text-gray-300">📍 Kathmandu, Nepal</p>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Send a Message</h3>
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Your Message"
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 py-6">
          <p className="text-center text-gray-600 dark:text-gray-300">
            Built with ❤️ by Aarti Mandal © {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App

