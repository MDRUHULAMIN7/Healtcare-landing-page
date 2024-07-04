

const ButtonSecondery = ({title,bg}) => {
    return (
        <div className="text-[#020043]">
        <button   style={{ backgroundColor: bg }} className= { "flex justify-center items-center  gap-x-2 border rounded-2xl px-3  border-[#020043] text-xl   py-2"}>{title} </button>
    </div>
    );
};

export default ButtonSecondery;