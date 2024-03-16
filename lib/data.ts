import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact, FaBook } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiGit,
  SiTailwindcss,
  SiExpress,
  SiSwift,
  SiApple,
  SiFirebase,
  SiPython,
  SiSelenium,
} from "react-icons/si";
import { LiaDrumSolid } from "react-icons/lia";
import { BsBackpack2 } from "react-icons/bs";
import { IoBarbell } from "react-icons/io5";
import { FaRegChessKnight } from "react-icons/fa6";

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
  },
] as const;

export const skillsData = [
  { title: "Swift", icon: React.createElement(SiSwift) },
  { title: "AppKit", icon: React.createElement(SiApple) },
  { title: "Python", icon: React.createElement(SiPython) },
  { title: "Selenium", icon: React.createElement(SiSelenium) },
  { title: "HTML", icon: React.createElement(SiHtml5) },
  { title: "CSS", icon: React.createElement(SiCss3) },
  { title: "JavaScript", icon: React.createElement(SiJavascript) },
  { title: "TypeScript", icon: React.createElement(SiTypescript) },
  { title: "React", icon: React.createElement(SiReact) },
  { title: "Next.js", icon: React.createElement(SiNextdotjs) },
  { title: "Node.js", icon: React.createElement(SiNodedotjs) },
  { title: "Express", icon: React.createElement(SiExpress) },

  { title: "Tailwind", icon: React.createElement(SiTailwindcss) },
  { title: "Firebase", icon: React.createElement(SiFirebase) },
  { title: "Git", icon: React.createElement(SiGit) },
] as const;

export const interestData = [
  {
    title: "Drums",
    icon: React.createElement(LiaDrumSolid),
    newPic: "/Schlagzeug.jpeg",
    text: "This year, I started playing the drums. I've been wanting to express myself more musically for some time, and out of a spontaneous idea, three friends and I decided to form a band. This made the decision easy, and I've loved it ever since.",
  },
  {
    title: "Travel",
    icon: React.createElement(BsBackpack2),
    newPic: "/backpack.jpeg",
    text: "I love meeting new people, especially in foreign countries. That's why I really enjoy backpacking. The great thing is, you can also code from abroad. That's exactly what I did last year for four months. I was in Indonesia, Thailand, and Vietnam, and developed my projects on the side.",
  },
  {
    title: "Sports",
    icon: React.createElement(IoBarbell),
    newPic: "/hero_logo.svg",
    text: "I've always been athletic and have tried pretty much every sport there is. Football and strength training are my anchors, and without them, my week does not function.",
  },
  {
    title: "Chess",
    icon: React.createElement(FaRegChessKnight),
    newPic: "/moon-cloud.svg",
    text: "I've always had a passion for chess, enjoying the classic, analog game with friends. Even though there hasn't been as much time for it lately, it remains one of my favorite pastimes. It's not just a game; it's a way to connect, think deeply, and challenge myself mentally.",
  },
] as const;

export const ProjectData = [
  {
    title: "Paranote",
    about: [
      "Paranote wurde von zwei Freunden und mir entwickelt und ist das größte Projekt an dem ich bisher mitwirken konnte. Seit Dezember 2022 sitzen wir an der MacOS App, die Jurastudenten und Juristen bei der Recherche, als auch beim Lernen Arbeit abnehmen soll.",
      "Es extrahiert Gesetzverweise aus Dokumenten, Webseiten, oder dem Clipboard, sucht den jeweiligen Gesetzestext, um ihn dann anschließend neben dem jeweiligen Medium anzuzeigen. Es beinhaltet zudem alle Gesetzestexte, sowie alle Arbeitsorganisationsmittel wie Notizen und Markierungen direkt in der App.",
    ],

    challenge: [
      "Anfangs unterschätzten wir die Komplexität dieses Projekts. Die erste große Hürde war die Entwicklung eines effizienten Algorithmus zur Erkennung von Gesetzverweisen in Texten, eine Aufgabe, für die es keine fertigen Module gab. Gleichzeitig stand die Entscheidung für das richtige Framework und die Programmiersprache an.",
      "Mit dem Ziel, die App crossplatform-fähig zu machen, fiel unsere Wahl zunächst auf React Native. Diese Entscheidung stellte sich jedoch als ungeeignet heraus, da React Native im Bereich der Desktop Applikationen fehlende Dokumentationen und Community Support hat. Wir sind ständig auf Errors gestoßen, für die wir nach Tagen suche keine Lösung gefunden haben.",
      "Ein weiterer Wendepunkt war die Verarbeitung und Verbindung der Gesetzestexte. Da es gegen unserer Annahme hierfür keine bestehende API gibt mussten wir einen Prozess entwickeln, um Gesetzestexte von der Website gesetze-im-internet.de zu scrapen, sie aus dem XML-Format zu extrahieren und in ein für unsere Zwecke passendes JSON-Format zu konvertieren.",
    ],
    learnings: [
      "Bei der Entwicklung einer Desktop-App lernte man schnell, dass die Auswahl der richtigen Technologie entscheidend sein kann.  Der Umstieg von React Native zu Swift offenbarte sofort die Vorteile nativer Entwicklung: bessere Leistung, Zugang zu spezifischen Funktionalitäten und eine konsistentere UI. Hierbei muss aber auch betont werden, dass der Umstieg in den Programmiersprachen einer Umstellung bedurfte. Besonders auffällig war der Unterschied im Zustandsmanagement. Swifts komplexere Mechanismen wie ObservableObjects, Published/Private und Shared boten eine deutlich flexiblere Kontrolle im Vergleich zu den simpleren Zustandsmanagement-Tools in React.",
      "Ein weiteres Schlüsselelement des Lernprozesses war die Auseinandersetzung mit Swifts strenger Typisierung und der Notwendigkeit, komplexe Datenstrukturen sorgfältig zu planen. Dies wurde die Bedeutung einer durchdachten Datenmodellierung deutlich.",
      "Abschließend war die Planung der Datenbank mit Firebase für so ein großes Projekt sehr interessant, mit dem Hintergrund möglichst viele Daten effizient abzuspeichern, ohne zu wissen wie groß die Nutzerauslastung am Ende sein wird.",
    ],
    link: "https://www.paranote.de/",
  },

  {
    title: "Easy-PDF",
    about: [
      "Easy-PDF wurde inspiriert von dem Wunsch, älteren Leuten und Menschen mit Migrationshintergrund das Leben leichter zu machen. Viele von solchen Personen finden sich in der Flut behördlicher Dokumente und der damit verbundenen Fachsprache nicht zurecht.",
      "Easy-PDF ermöglicht es Nutzern, PDF-Dokumente in einem einfachen Format hochzuladen, den Text zu extrahieren und diesen mithilfe von OpenAI's API in leicht verständliche Sprache zu übersetzen. Der vereinfachte Text wird in verschiedenen Schwierigkeitsgraden bereitgestellt, um die Verständlichkeit für jeden Nutzer zu gewährleisten.",
    ],
    challenge: [
      "Die technische Herausforderung lag vor allem darin, den extrahierten Text effektiv mit OpenAI's API zu verknüpfen. Konkret lag die Aufgabe in der Formulierung geeigneter Prompts, um die Tokennutzung zu optimieren. Da wir auch mit großen PDFs und entsprechend viel Text rechnen mussten, sollte die Tokennutzung minimiert werden, ohne dabei die Qualität der Zusammenfassung zu beeinträchtigen.",
      "Eine weitere spannende Herausforderung lag in der visuellen Darstellung der erhaltenen Zusammenfassungen. Diese werden von OpenAI umformatiert an uns zurückgesendet, sollten angesichts der Nutzererfahrungen bspw. nach Absätzen unterteilt sein.",
    ],
    learnings: [
      "Durch dieses Projekt haben wir die Bedeutung präziser Prompt-Formulierungen und Token-Optimierung beim Einsatz von Language Models (LLMs) gelernt. Selbst kleine Abweichungen in den Variablen können zu signifikanten Unterschieden im Ergebnis führen.",
      "Zudem war die Entwicklung eines benutzerfreundlichen Designs, das insbesondere auf die Bedürfnisse älterer Menschen zugeschnitten ist, eine besonders bereichernde Erfahrung.",
    ],
    link: "https://developer.apple.com/documentation/appkit/",
  },
];
