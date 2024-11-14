import Image from 'next/image'; 
import { FaLocationArrow } from "react-icons/fa6";
import { certificates } from "../data";
import { PinContainer } from "./ui/3d-pin";

const Certificates = () => {
  return (
    <div className="py-20">
      <h1 className="heading" id="certificates">
        My{" "}
        <span className="text-purple">Certificates With Projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {certificates.map((item) => (
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
            key={item.id}
          >
            <PinContainer
              title={item.des}
              href={item.link}
            >
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <Image 
                    src="/bg.png" 
                    alt="bgimg" 
                    layout="fill" 
                    objectFit="cover" // Use layout and objectFit for better optimization
                    priority // If this image is crucial for initial render, you can add priority
                  />
                </div>
                <Image
                  src={item.img}
                  alt="cover"
                  className="z-10 absolute bottom-0"
                  layout="intrinsic" // Use intrinsic for a natural size
                  width={300} // Set a width
                  height={300} // Set a height
                />
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {item.title}
              </h1>

              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {item.des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex justify-center items-center">
                  <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                    Check Live Site
                  </p>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificates;
