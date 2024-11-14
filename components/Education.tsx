import React from 'react'
    import { Timeline } from "@/components/ui/timeline";

const Education = () => {
    
      const data = [
        {
          title: "2014 - 2015",
          content: (
            <div className="mb-5" id="education">
               <p className="lg:text-2xl mt-2 text-neutral-800 dark:text-neutral-200 md:text-sm font-bold">
              American Culture College, Gaziemir, İzmir 
              </p>
            </div>
          ),
        },
        {
          title: "2015 - 2018",
          content: (
            <div id="education">
              <p className="lg:text-2xl mt-2 text-neutral-800 dark:text-neutral-200 md:text-sm font-bold">
              Kocatürk High School, Gaziemir, İzmir 
              </p>
            </div>
          ),
        },
        {
          title: "2019 - 2024",
          content: (
            <div id="education">
              <p className="lg:text-2xl mt-1 text-neutral-800 dark:text-neutral-200 md:text-sm font-bold">
              Bachelor of Software Engineering, Izmir University of Economics, Balçova, İzmir
              </p>
            </div>
          ),
        },
      ];
      return (
        <div className="w-full overflow-hidden">
          <Timeline data={data} />
        </div>
      );
}

export default Education