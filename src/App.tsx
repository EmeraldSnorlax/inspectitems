import React from 'react'
import tw from 'twin.macro'
import styled from '@emotion/styled'
import { motion } from 'framer-motion'

const Greeting = styled(motion.h1)`
  ${tw`
  text-6xl font-extrabold
  tracking-widest uppercase
  text-center my-auto
  text-gray-100 my-auto
  block
`}
`

function App() {
  return (
    <div tw="w-screen h-screen bg-gray-800 flex">
      <Greeting initial={{ opacity: 0, y: 500 }} animate={{ opacity: 1, y: 0 }}>
        React + TailwindCSS + Framer Motion + Emotion
      </Greeting>
    </div>
  )
}

export default App
