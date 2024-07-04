import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import bg from "../../public/service-banner.png"
import bg1 from "../../public/old.png"
import bg2 from "../../public/young.png"


const Service = () => {
    return (
        <div className="my-10 md:my-20 grid grid-cols-1 lg:grid-cols-2 gap-12 md:px-4 px-1 mb-3  md:mb-0">

     
             <LeftSide h1={'Empowering Health,'} h2={'Enriching Lives'} bptitle={'Appoiment'} btitle={'service'} bg={'bg-yellow-400'} p={'We are committed to providing high-quality, compassionate care to every patient we serve. Whatever your healthcare needs may be, you can trust us to be your partner in health and wellness.'}></LeftSide>
           
          
               <RightSide bg={bg} h1={'Advanced Technology'}p={'Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision'}></RightSide>
               <RightSide bg={bg1} h1={'Online Doctor Meet'}p={'Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision'}></RightSide>
               <RightSide bg={bg2} h1={'Consultancy your health'}p={'Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision'}></RightSide>
       
            
        </div>
    );
};

export default Service;