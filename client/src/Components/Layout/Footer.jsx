import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-black text-white p-3">
      <h4 className="text-center font-PlayfairDisplay text-gray-300">
        All Right Reserved &copy; TCMÉTIER
      </h4>
      <p className="text-center flex justify-center gap-7 font-PlayfairDisplay text-[12px] mt-3 ">
        <Link className="hover:text-[#C0C0C0]" to="/about">About</Link>
        <Link className="pl-2 border-l-2 border-white hover:text-[#C0C0C0]" to="/contact">Contact</Link>
        <Link className="pl-2 border-l-2 border-white hover:text-[#C0C0C0]" to="/policy">Privacy Policy</Link>
      </p>
    </div>
  );
};

export default Footer;
