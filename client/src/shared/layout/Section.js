import Section1 from '../../assets/images/section-1.png'
import Section2 from '../../assets/images/section-2.png'
import Section3 from '../../assets/images/section-3.png'
import Section4 from '../../assets/images/section-4.png'
import Section5 from '../../assets/images/section-5.png'
export default function Section(){
    return(
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 mt-20'>
            <div  className='hidden lg:block'>
            <img src={Section1} alt=""/>
            </div >
            <div className='hidden md:block'>
            <img src={Section2} alt="" />
            </div>
            <div className='hidden sm:block'>
            <img src={Section3} alt="" />
            </div>
            <div>
            <img src={Section4} alt="" />
            </div>
            <div>
            <img src={Section5} alt="" />
            </div>
        </div>
    )
}