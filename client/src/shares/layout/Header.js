import Ad from '../../assets/images/Ad.png'
import Logo from '../../assets/images/Logo.png'
export default function Header() {
    return (
            <div className="grid grid-cols-4 justify-self-center gap-5">
                <div className="col-span-1">
                    <img src={Logo} alt="Logo" className='bg-white w-full' />
                </div>
                <div className="col-start-2 col-end-5">
                    <img src={Ad} alt="Ad" />
                </div>
            </div>
    )
}