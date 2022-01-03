import Section1 from '../../assets/images/section-1.png'
import Section2 from '../../assets/images/section-2.png'
import Section3 from '../../assets/images/section-3.png'
import Section4 from '../../assets/images/section-4.png'
import Section5 from '../../assets/images/section-5.png'
export default function Section(){
    return(
        <div className='grid grid-cols-5'>

            <img src={Section1} alt="" className='w-full'/>
            <img src={Section2} alt="" />
            <img src={Section3} alt="" />
            <img src={Section4} alt="" />
            <img src={Section5} alt="" />
        </div>
    )
}