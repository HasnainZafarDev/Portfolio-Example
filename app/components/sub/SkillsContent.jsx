"use client"
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import React from 'react'

const SkillsContent = ({src, width, height}) => {
  return (
    <>
      <Image src={src}
      width={width}
      height={height}
      alt='skill image'
      />
    </>
  )
}

export default SkillsContent
