import logo from "../../public/image99.png"

const ButtonPrimary = ({title,bg}) => {
    return (
        <div className="text-[#020043]">
        <button   className= { `flex justify-center items-center  gap-x-2 border rounded-xl px-3 md:px-7 border-[#020043] md:text-2xl   py-2 ${bg}`}>{title} <span><img className="h-4 text-xl " src={logo} alt="" /></span></button>
    </div>
    );
};

export default ButtonPrimary;