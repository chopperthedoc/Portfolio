"use client";
import React, { useState } from "react";
import Image from "next/image";
import Card from "./Card"; // Stellen Sie sicher, dass der Pfad zu Ihrer Card Komponente korrekt ist
import CardContent from "./CardContent"; // Stellen Sie sicher, dass der Pfad zu Ihrer CardContent Komponente korrekt ist
import { interestData } from "@/lib/data";

const ProfilePicture = () => {
  const [profilePic, setProfilePic] = useState("/profilbild.png");
  const [interestText, setInterestText] = useState("");

  // Eine Funktion, die das Profilbild aktualisiert basierend auf dem übergebenen Wert
  const changeProfilePic = (newPic: string, text: string) => {
    setProfilePic(newPic);
    setInterestText(text);
  };

  return (
    <div className="p-6 border border-black/[0.1] shadow-xl rounded-2xl flex flex-col items-center justify-center space-y-">
      <div className="w-32 h-32 sm:w-48 sm:h-48 lg:w-72 lg:h-72 relative mb-4 border-4 border-white rounded-full overflow-hidden">
        <Image
          src={profilePic}
          alt="Profilbild"
          layout="fill"
          objectFit="cover"
          className="rounded-full"
        />
      </div>
      <p className="font-mono">{interestText}</p>
      <div className="text-center text-lg font-semibold font-mono Menlo">
        Interests
      </div>

      <div className="flex justify-center gap-4 flex-wrap">
        {interestData.map((interest, index) => (
          <button
            key={index}
            className="w-48 hover:shadow-lg hover:scale-105 "
            onClick={() => changeProfilePic(interest.newPic, interest.text)}
          >
            <Card>
              <CardContent>
                <div className="flex items-center justify-center">
                  <span className="mt-1">{interest.icon}</span>
                  <span className="ml-2 font-mono Menlo">{interest.title}</span>
                </div>
              </CardContent>
            </Card>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProfilePicture;
