
import logo from "../../public/image99.png"
import logo1 from "../../public/image1.png"
const Navbar = () => {
    return (
        <div className="flex justify-between items-center gap-x-2 font-sans py-2 md:px-2"> 
            <div className="text-[#020043]">
                <p className="flex md:text-4xl text-2xl font-semibold justify-center items-center">D <span className="bg-yellow-500 h-7 w-7 rounded-full flex items-center justify-center"><img className="h-3  " src={logo1} alt="" /></span>C+</p>
            </div>
            <div className="text-[#343268]"> <ul className="flex justify-center items-center space-x-1 md:text-xl md:space-x-4 font-semibold "><a>Home</a>
                      <a>Services</a>
                      <a>Blog</a>
                      <a>About us</a>
            </ul></div>
            <div className="text-[#020043]">
                <button className="flex justify-center items-center gap-x-2 border rounded-xl px-3 md:px-7 border-[#020043] md:text-2xl   py-2">Appoiment <span><img className="h-4 text-xl " src={logo} alt="" /></span></button>
            </div>
        </div>
    );
};

export default Navbar;