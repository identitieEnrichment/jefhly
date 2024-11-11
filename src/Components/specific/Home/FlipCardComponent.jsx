import { teamMembers } from "../../../utils/Constant";
import { useEffect, useRef } from "react";
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const FlipCardComponent = () => {
  const cardRefs = useRef([]);

  useEffect(() => {
    let mm = gsap.matchMedia();
  
    mm.add("(max-width: 768px)", () => { 
      cardRefs.current.forEach((card) => {
        gsap.to(card, {
          rotationY: 180, 
          scrollTrigger: {
            trigger: card,
            start: "top 50%", 
            end: "bottom -50%", 
            toggleActions: "play none none none", 
            onEnter: () => {
              gsap.to(card, {
                rotationY: 180,
                duration: 0.2,
                ease: "power2.inOut",
              });
            },
              // onLeave: () => {
              //   // Reset the card when it leaves the viewport
              //   gsap.to(card, {
              //     rotationY: 0,
              //     duration: 0.2,
              //     ease: "power2.inOut",
              //   });
              // },
            onEnterBack: () => {
              gsap.to(card, {
                rotationY: 180,
                duration: 0.2,
                ease: "power2.inOut",
              });
            },
            onLeaveBack: () => {
              gsap.to(card, {
                rotationY: 0,
                duration: 0.2,
                ease: "power2.inOut",
              });
            },
          },
          duration: 0.2,
          ease: "power2.inOut",
        });
      });
    });
  
    return () => {
      mm.revert(); 
    };
  }, []);

  return (
    <section className="  ">
      <div className="card-container">
        <div className="">
          <div className="mx-auto grid lg:gap-12  gap-5 md:space-y-0 grid-cols-2 sm:gap-16 lg:grid-cols-3 ">
            {teamMembers.map((member ,index) => {
              const whatsappUrl = `https://wa.me/+919677630248?text=${encodeURIComponent('Hello, I would like to schedule an appointment   ')}`;

              return(
              
              <div
                key={member.name}

                className="group h-64 w-full lg:min-w-96  [perspective:1000px]"
              >
                <div   ref={(el) => (cardRefs.current[index] = el)} className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d]  group-hover:[transform:rotateY(180deg)]">
                  {/* Front Face */}

                  <div className="rounded-xl absolute inset-0 bg-[#E7F0EF] h-full w-full lg:min-w-96 flex flex-col items-center justify-center lg:space-y-0 space-y-3  ">
                    <img
                      className=" size-28  rounded-full object-contain "
                      src={member.imgSrc}
                    ></img>
                    <h2 className="font-semibold">{member.name}</h2>
                    <p className="text-sm text-center">{member.title}</p>
                  </div>
                  {/* Back Face */}
                  <div className="absolute inset-0 h-full w-full rounded-xl bg-black/95 lg:px-12 px-2 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    <div className="flex min-h-full flex-col items-center justify-center">
                      <h2 className="lg:text-2xl  font-bold mb-4">
                        {member.name}
                      </h2>
                      <p className="lg:text-lg text-sm text-pretty text-center mb-4">
                        {member.title}
                      </p>
                      <a  target="_blank" rel="noopener noreferrer"  href={whatsappUrl} className="inline-flex">
                        <button className="my-2 bg-yellow-800 hover:bg-yellow-700 text-white font-bold py-2 lg:px-4 px-2 w-auto rounded-full inline-flex text-xs  items-center">
                          <span>Schedule Appoinment</span>
                          {/* <WrenchScrewdriverIcon className="h-6 w-6 ml-2" /> */}
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )})}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FlipCardComponent;
