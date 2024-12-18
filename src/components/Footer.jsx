import React from 'react'
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 w-full h-8 bg-blue-500 flex items-center justify-center text-xs text-white gap-4">
                <p className='bold'>Developed Using React</p>
                <a
                    href="mailto:kukadiyahiren34@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:underline"
                >
                    <FaEnvelope className="inline-block text-white text-lg" />
                </a>
                <a
                    href="https://github.com/hirenkukadiya3073"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:underline"
                >
                    <FaGithub className="inline-block text-white text-lg" />
                </a>
                <a
                    href="https://linkedin.com/in/hiren-kukadiya-83177826a"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:underline"
                >
                    <FaLinkedin className="inline-block text-white text-lg" />
                </a>
            </footer>
  )
}