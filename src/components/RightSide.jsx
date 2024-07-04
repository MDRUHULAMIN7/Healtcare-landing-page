

const RightSide = ({bg,h1,p}) => {
    return (
        <div className=" h-[425px] ">
        <div  className="w-full bg-cover rounded-2xl md:mt-0 mt-4 h-full relative " style={{
            backgroundImage: `url(${bg}) `,
          }}>
              <div className="bg-[#343268] bg-opacity-55 rounded-2xl    absolute top-[50%] left-8  px-4 py-3 space-y-3 w-96 h-[180px] text-white">
                  <h1 className="text-4xl">{h1}</h1>
                  <p>{p}</p>
              </div>
        </div>
        </div>
    );
};

export default RightSide;