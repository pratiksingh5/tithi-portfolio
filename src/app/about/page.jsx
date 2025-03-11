import React from 'react'
import { Header , About, Footer} from '@/components'

const page = () => {
  return (
    <div className="w-full h-full" suppressHydrationWarning>
        <Header/>
        <About/>
        <Footer/>
    </div>
  )
}

export default page