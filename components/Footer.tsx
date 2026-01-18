import React from 'react'
import { Separator } from './ui/separator'
import { FaLinkedin, FaSquareGithub } from 'react-icons/fa6'
import { Button } from './ui/button'
import Link from 'next/link'
import { FaFacebookSquare } from 'react-icons/fa'
import { CgUser } from 'react-icons/cg'
import { Send } from 'lucide-react'

function Footer() {
    return (
        <footer className='bg-[#9bb7938e]/80 flex justify-center py-4'>
          <div className='max-w-5xl w-full flex-col space-y-4'>

            <div className='flex justify-between'>
        <div className='flex flex-col'>
            <div className='flex items-center gap-1'>
                <CgUser className='size-5 text-green-600'/> 
            <strong className='font-bold text-lg'>Barun Mandal</strong>
            </div>
            <address className='flex items-center gap-1'> <Send className='size-4 text-green-600' /> <a href="mailto:barun.mandalbct@gmail.com" aria-label='Email'>barun.mandalbct@gmail.com</a></address>
        </div>
        <div className='flex flex-col gap-1'>
        <span>Get In Touch</span>
        <div className="flex space-x-2 [&_button]:p-0 [&_svg]:!size-8">
          <Button>
            <Link href="https://github.com/BarunMandal016" target="_blank" aria-label="GitHub">
              <FaSquareGithub/>
            </Link>
          </Button>
          <Button>
            <Link
              href="https://www.linkedin.com/in/barun-mandal16/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </Link>
          </Button>
          <Button className="">
            <Link href="https://www.facebook.com/barun.mandal.963871" aria-label="Facebook">
              <FaFacebookSquare />
            </Link>
          </Button>
        </div>
        </div>
            </div>
            <Separator className='bg-black'/>
            <div className='flex justify-center gap-2 [&_span]:text-sm'>
                <span>&copy; Copyright 2026</span> <span>Made by Barun</span></div>
          </div>
        </footer>
    )
}

export default Footer