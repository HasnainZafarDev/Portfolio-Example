"use client"
import { SparklesIcon } from '@heroicons/react/24/solid'
import React from 'react'
import { motion } from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'

const SkillsText = () => {
  return (
    <div className='w-ffull h-auto flex flex-col items-center justify-center'>
        <motion.div
        variants={slideInFromTop}
        className='Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]'>
        <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5"/>
        <h1 className='Welcome-text text-[13px]'>
            Think Better With Next Js
            </h1>
        </motion.div>
        <motion.div 
        variants={slideInFromLeft(0.5)}
        className='text-[30px] font-medium text-white mt-[10px] text-center mb-[15px]'>
            Making App With Modern Tehnologies 
        </motion.div>
        <motion.div
        variants={slideInFromRight(0.5)}
        className='cursive text-[20px] text-gray-200 mb-10 mt-[10px] text-center'
        >
            Never Miss A Tasks Deadline 
        </motion.div>
    </div>
  )
}

export default SkillsText

