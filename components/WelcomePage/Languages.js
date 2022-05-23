import { IoLogoJavascript } from 'react-icons/io';
import {AiFillGithub} from 'react-icons/ai'
import {FaReact} from 'react-icons/fa'
import {SiTailwindcss} from 'react-icons/si'
import {SiMongodb} from 'react-icons/si'
import next from '../../public/images/next-js.svg'
import Image from 'next/image'

const Languages = () => {
    return ( <div>
        <ul className="text-4xl">
            <li><IoLogoJavascript /></li>
            <li><AiFillGithub/></li>
            <li><FaReact/></li>
            <li> <SiTailwindcss/> </li>
            <li ><SiMongodb/> </li>
            <li><Image src={next} alt='next js logo'/></li>
        </ul>
    </div>);
}
 
export default Languages;