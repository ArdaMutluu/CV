import React from "react";
import { Card, Carousel } from "@/components/ui/apple-cards-carousel";
import { projects } from "@/data";
import { FaLocationArrow } from "react-icons/fa6";

const Projects = () => {
  const projeItems = projects.map((proje) => (
    <Card
      key={proje.id}
      card={{
        src: proje.thumbnail,
        title: proje.title,
        content: (
          <div>
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl">
              {proje.desc}
            </p>
            {proje.id === 1 && (
              <div className="flex items-center justify-start mt-4">
                <a
                  href="https://habitracker-20jt.onrender.com/"
                  target="_blank"
                  className="text-purple-600 text-lg hover:underline flex items-center"
                >
                  Check Live Site
                  <FaLocationArrow className="ml-2" color="#CBACF9" />
                </a>
              </div>
            )}
          </div>
        ),
      }}
      index={0}
    />
  ));
  

  return (
    <div id="projects" className="w-full h-full py-20 md:col-span-2">
    <h2 className="pl-4 mx-auto text-xl md:text-4xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
      Some of My Projects That Are Available at Github
    </h2>
  
      <Carousel items={projeItems} />
  </div>
  
  );
};

export default Projects;
