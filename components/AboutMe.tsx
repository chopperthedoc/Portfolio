import React from "react";
import Timeline from "./Timeline";
import Image from "next/image";

interface AboutMeProps {
  id?: string;
}

const AboutMe: React.FC<AboutMeProps> = ({ id }) => {
  return (
    <div id={id} className="max-w-4xl mx-auto p-4 mb-20 pt-[85px] ">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-4 font-mono Menlo">
        About Me
      </h2>
      <div className="flex flex-col lg:flex-row items-center lg:items-start text-center lg:text-left">
        <div className="flex-shrink-0 mb-4 lg:mb-0 lg:mr-4">
          <div className="w-32 h-32 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 xl:w-72 xl:h-72 relative border-4 border-white rounded-lg overflow-hidden">
            <Image
              src={"/3.JPG"}
              alt="Profilbild"
              layout="fill"
              objectFit="cover"
              className="rounded-lg bg-red-200"
            />
          </div>
        </div>
        <p className="text-lg text-gray-700 font-mono Menlo lg:flex-grow">
          Mein Interesse an der Entwicklung wurde während meines Studiums der
          Soziologie und Statistik geweckt, insbesondere durch die
          computergestützte Datenanalyse mit R. Während Corona entschied ich
          meiner Leidenschaft zu folgen. Seitdem vertiefe ich mich in die
          Softwareentwicklung durch Selbststudium und Projektarbeit. Neben der
          Programmierung finde ich Ausgleich im Sport, entdecke die Welt beim
          Backpacking und spiele leidenschaftlich Schlagzeug.
        </p>
      </div>
      <div className="mt-32">
        <Timeline />
      </div>
    </div>
  );
};

export default AboutMe;
