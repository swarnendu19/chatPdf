import React from 'react';
import MaxWidthWrapper from './MaxWidthWrapper';
import Link from 'next/link';
import { buttonVariants } from './ui/button';
import {RegisterLink, LoginLink} from "@kinde-oss/kinde-auth-nextjs/components";
import { ArrowRight } from 'lucide-react';


function Navbar() {
  return (
    <nav>
      <MaxWidthWrapper>
       <div className='flex h-14 items-center justify-between border-b border-zinc-200'>
       <Link
            href='/'
            className='flex z-40 font-semibold'>
            <span>quill.</span>
          </Link>
        <div className='hidden items-center space-x-4 sm:flex'>
          <Link  
          href='/pricing'
          className={buttonVariants({
            variant: 'ghost',
            size: 'sm',
          })}>
            Pricing
          </Link>
          <LoginLink 
            className={buttonVariants({
            variant: 'ghost',
            size: 'sm',
           })}
            >
            Sign in
          </LoginLink>
          <RegisterLink
            className={buttonVariants({
               size: 'sm',
              })}>
                  Get started{' '}
           <ArrowRight className='ml-1.5 h-5 w-5' />
           </RegisterLink>
        </div>  
        </div>
      </MaxWidthWrapper>
    </nav>
  )
}

export default Navbar
