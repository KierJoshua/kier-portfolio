import React, {useState} from 'react'
import PageTitles from './PageTitles'
import html from '../components/images/html-md.png'
import css from '../components/images/css.png'
import js from '../components/images/javascript.png'
import bootstrap from '../components/images/bootstrap.png'
import tailwind from '../components/images/tailwind.png'
import react from '../components/images/react.png'
import wordpress from '../components/images/wordpress.png'
import NewTechSkillsIcons from './NewTechSkillsIcons'
import GitHub from '../components/images/Github.png'

const NewTechSkills = () => {
  const[isClicked,setIsClicked] = useState(false)

  const handleClick = () => {
    setIsClicked(!isClicked);
  }
  return (
    <div className='pb-10 bg-slate-900' id='skills' >
        <PageTitles name="Tech Skills" />
        <div className="flex justify-center">
        <div className="container w-full h-full grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-4" data-aos="zoom-in" data-aos-duration ="1000">
            <NewTechSkillsIcons icon={html} title="HTML"  level = "88"/>
            <NewTechSkillsIcons icon={css} title="CSS"  level = "84"/>
            <NewTechSkillsIcons icon={bootstrap} title="Bootstrap"  level = "85"/>
            <NewTechSkillsIcons icon={js} level = "75"/>
            <NewTechSkillsIcons icon={tailwind} level = "80"/>
            <NewTechSkillsIcons icon={react} level = "60"/>
            <NewTechSkillsIcons icon={wordpress} level = "50"/>
            <NewTechSkillsIcons icon={GitHub} level = "70"/>
        </div>
        </div>
    </div>
  )
}

export default NewTechSkills