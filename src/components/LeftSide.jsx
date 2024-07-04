import ButtonPrimary from "./ButtonPrimary";
import ButtonSecondery from "./ButtonSecondery";


const LeftSide = ({btitle,bg,h1,h2,p,bptitle}) => {
    return (
        
             <div className="flex-col  space-y-10 ">
        <p>
          <ButtonSecondery
            title={btitle}
            bg={"transparent"}
          ></ButtonSecondery>
        </p>
        <h1 className="md:text-5xl text-3xl font-semibold  "> {h1} 
            <br />
      
            {h2}</h1>
        <p className="leading-[24px]">
      {p}
        </p>
        <p>
            <ButtonPrimary title={bptitle} bg={bg}></ButtonPrimary>
        </p>
      </div>
    
    );
};

export default LeftSide;