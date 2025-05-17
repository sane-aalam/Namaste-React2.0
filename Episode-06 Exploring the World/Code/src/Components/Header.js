import { LOGO_URL } from "../Utils/CommonFile.js"

const Header = () => {
  return (
    <div className="flex justify-between items-center shadow-md w-full h-[90px]">
      <div className="ml-25">
        <img className="w-[160px] h-[90px]" src={LOGO_URL} alt="logo-png" />
      </div>
      <div className="flex justify-between items-center mr-30">
        <li className="list-none m-5 text-[18px] font-semibold"><a className="no-underline" href="#home">Home</a></li>
        <li className="list-none m-5 text-[18px] font-semibold"><a className="no-underline" href="#about">About</a></li>
        <li className="list-none m-5 text-[18px] font-semibold"><a className="no-underline" href="#contactus">Contact us</a></li>
        <li className="list-none m-5 text-[18px] font-semibold"><a className="no-underline" href="card">Card (0)</a></li>
      </div>
    </div>
  )
};

export default Header;