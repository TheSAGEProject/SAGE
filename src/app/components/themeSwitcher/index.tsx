'use client';
import React from 'react'
import { useTheme } from '../../context/themeContext'

const ThemeSwitcher = () => {
    const {toggleTheme, theme} = useTheme()
    const buttonClasses = 'bg-theme1-default hover:bg-theme1-hover'
  return (
    <div>
      <button className={buttonClasses} onClick={() =>{toggleTheme('theme1')}}>Theme 1</button>
    </div>
  )
}

export default ThemeSwitcher
