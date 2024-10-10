import { motion } from "framer-motion";
import "./App.css";
import { useEffect, useRef, useState } from "react";

function App() {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  interface Skill {
    src: string;
    text: string;
  }
  const skills: Skill[] = [
    {
      src: "/html.webp",
      text: "HTML structures web content.",
    },
    {
      src: "/css.png",
      text: "CSS styles web content.",
    },
    {
      src: "/js.webp",
      text: "JavaScript adds interactivity to web content.",
    },
    {
      src: "/reactJs.png",
      text: "React.js builds user interfaces with components.",
    },
    {
      src: "/tailwind.png",
      text: "Tailwind CSS provides utility-first styling for rapid design.",
    },
    {
      src: "/php.png",
      text: "PHP processes server-side logic and generates dynamic web content.",
    },
    {
      src: "/mysql.webp",
      text: "MySQL manages and stores relational database data.",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once the element is visible
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the section is visible
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);
  return (
    <div className="h-screen">
      <section className="bg-blue-700 overscroll-none overflow-hidden h-full p-10 flex flex-col justify-center ">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="py-10 px-12 bg-white rounded-2xl  flex items-center   justify-between "
        >
          <motion.h1
            // initial={{ opacity: 0, x: -100 }}
            // animate={{ opacity: 1, x: 0 }}
            // transition={{ duration: 1 }}
            className=" text-3xl w-[29rem]"
          >
            I'm{" "}
            <span className="text-blue-700 text-4xl font-bold">
              Ahmed Sleem,
            </span>{" "}
            Full Stack Developer specializing in web and mobile apps.
          </motion.h1>
          <motion.img
            // initial={{ opacity: 0, x: 100 }}
            // animate={{ opacity: 1, x: 0 }}
            // transition={{ duration: 1 }}
            src="/profile.jfif"
            className="rounded-full h-64"
          />
        </motion.div>
      </section>
      <section className="h-[90%] flex flex-col items-center py-10 mt-12 px-36">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 100 }} // Initial state before entering view
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 100 }} // Animate when visible
          transition={{ duration: 1 }}
          className="text-center"
        >
          <h1 className="font-bold text-4xl">About Me</h1>
          <div className="mt-10 bg-blue-700 rounded-lg text-center text-color p-6 py-12 text-lg text-white">
            I'm <span className="font-bold">Ahmed Sleem</span>, a passionate and
            dedicated Full Stack Developer with expertise in both{" "}
            <span className="font-bold">web</span> and{" "}
            <span className="font-bold">mobile </span>
            development. Over the years, I’ve honed my skills in building
            responsive and scalable applications that cater to client needs. I
            specialize in <span className="font-bold">React.js</span> and{" "}
            <span className="font-bold">Tailwind CSS</span> for frontend
            development, and I work with <span className="font-bold">PHP</span>{" "}
            and <span className="font-bold">MySQL</span> on the backend. For
            mobile app development, I leverage{" "}
            <span className="font-bold">Flutter</span>, focusing on delivering
            smooth, cross-platform applications. With a strong background in API
            integration, state management, and payment processing, I’ve worked
            on projects ranging from{" "}
            <span className="font-bold">AI-powered platforms</span> like
            <span className="font-bold"> WiseContent</span> to the{" "}
            <span className="font-bold">WattWizard Flutter App,</span> which is
            used for calculating electricity equations. My goal is to deliver
            innovative, user-friendly solutions that make a real impact. When
            I'm not coding, I'm constantly learning new technologies and
            enhancing my skillset to stay ahead in the ever-evolving tech world.
          </div>
        </motion.div>
      </section>

      <section className="h-full flex flex-col items-center px-12">
        <h1 className="font-bold text-4xl mt-6">My Skills</h1>
        <div className="grid grid-cols-3 gap-20 mt-24">
          {skills.map((skill) =>
            SkillItem({ src: skill.src, text: skill.text })
          )}
        </div>
      </section>
    </div>
  );
}

function SkillItem({ src, text }: { src: string; text: string }) {
  return (
    <div className="flex flex-col items-center">
      <img src={src} className="h-32" />
      <h1 className="font-semibold text-center mt-3">{text}</h1>
    </div>
  );
}

export default App;
