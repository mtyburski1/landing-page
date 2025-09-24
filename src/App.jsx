import { motion } from "framer-motion";
import { Linkedin, FileText } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100 p-6">
      {/* Header */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-gray-800 mb-4"
      >
        Welcome to My Page
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="text-lg text-gray-600 mb-8 text-center max-w-xl"
      >
        Hi, I'm Rodo. You can find my professional profile and resume below.
      </motion.p>

      {/* Links */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-md">
        <div className="rounded-2xl shadow-md hover:shadow-lg transition bg-white">
          <div className="p-6 flex flex-col items-center">
            <Linkedin className="w-10 h-10 text-blue-600 mb-4" />
            <h2 className="text-xl font-semibold mb-2">LinkedIn</h2>
            <p className="text-gray-500 mb-4 text-center">
              Check out my professional profile.
            </p>
            <a
              href="https://linkedin.com/in/rodo"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700"
            >
              Visit LinkedIn
            </a>
          </div>
        </div>

        <div className="rounded-2xl shadow-md hover:shadow-lg transition bg-white">
          <div className="p-6 flex flex-col items-center">
            <FileText className="w-10 h-10 text-green-600 mb-4" />
            <h2 className="text-xl font-semibold mb-2">Curriculum Vitae</h2>
            <p className="text-gray-500 mb-4 text-center">
              Download a copy of my latest CV.
            </p>
            <a
              href="/cv.pdf"
              download
              className="px-4 py-2 bg-green-600 text-white rounded-xl hover:bg-green-700"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
