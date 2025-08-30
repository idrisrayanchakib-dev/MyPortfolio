import InfiniteScroll from "./InfiniteScroll";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, 
 SiExpress, SiFlask } from "react-icons/si";


  export const SkillSection = () => {

    const skills = [
      { name: "HTML5", icon: "./icons/html5.svg"},
      { name: "CSS3", icon: "./icons/css3.svg"},
      { name: "JavaScript", icon: "./icons/javascript.svg"},
      { name: "TypeScript", icon: "./icons/typescript.svg"},
      { name: "PHP", icon: "./icons/php.svg"},
      { name: "Java", icon: "./icons/java.svg"},
      { name: "C", icon: "./icons/c.svg"},
      { name: "C++", icon: "./icons/cplusplus.svg"},
      { name: "Pyton", icon: "./icons/python.svg"},
    ]

   const frontendFrameworks = [
    { name: "React", icon: <FaReact size={50} className="text-cyan-400 min-w-[120px]" /> },
    { name: "Next.js", icon: <SiNextdotjs size={50} className="text-gray-300 min-w-[120px]" /> },
    { name: "Vite", icon: <img src="./icons/vite.svg" alt="Vite" className="w-12 h-12 min-w-[120px]" /> },
    { name: "Tailwind", icon: <SiTailwindcss size={50} className="text-cyan-500 min-w-[120px]" /> },
    { name: "Threejs", icon: <i className="devicon-threejs-original text-white text-4xl min-w-[120px]"></i> },
  ];

    const backendFrameworks = [
    { name: "Node.js", icon: <FaNodeJs size={50} className="text-green-600 min-w-[120px]" /> },
    { name: "Express.js", icon: <SiExpress size={50} className="text-gray-700 min-w-[120px]" /> },
    { name: "Flask", icon: <SiFlask size={50} className="text-gray-400 min-w-[120px]" /> },
    { name: "Prisma", icon: <img src="./icons/prisma.svg" alt="Prisma" className="w-12 h-12 min-w-[120px]" /> },
  ];

  const databases = [
    { name: "MySQL", icon: <img src="./icons/mysql.svg" alt="MySQL" className="w-12 h-12 min-w-[120px]" /> },
    { name: "SQLite", icon: <img src="./icons/sqlite.svg" alt="SQLite" className="w-12 h-12 min-w-[120px]" /> },
    { name: "PostgreSQL", icon: <img src="./icons/postgresql.svg" alt="PostgreSQL" className="w-12 h-12 min-w-[120px]"/> },
    { name: "Mongodb", icon: <img src="./icons/mongodb.svg" alt="MongoDB" className="w-12 h-12 min-w-[120px]" /> },
    { name: "Oracle", icon: <img src="./icons/oracle.svg" alt="Oracle" className="w-12 h-12 min-w-[120px]" /> },
  ];


  return (
    <section id="skill" className="min-h-screen text-white lg:mt-0 md:mt-0 scroll-mt-32">
         

          {/* skills block */}
          <div className="lg:text-center md:text-center text-center" >
            <h1 className="text-3xl font-bold  md:text-5xl leading-normal mb-10 md:mb-12 ">My Skills</h1>
             
              <h2 className="text-xl font-semibold mt-6 mb-16">Languages I speak</h2>
           <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 gap-8 justify-items-center mb-16">
            {skills.map((skill) => (
              <div key={skill.name} className="flex flex-col items-center">
                <img src={skill.icon} alt={skill.name} className="w-12 h-12" />
                <p className="mt-2 text-gray-300">{skill.name}</p>                              
              </div>
            ))}
           </div>
          {/* infinite scroll row */}
         <div className="space-y-12 overflow-hidden relative text-center lg:w-3/4 mx-auto ">

          <h2 className="pt-10 text-xl font-semibold mb-20">Frameworks & Libraries I master</h2>
  {/* FrontEnd Framework */}
   <InfiniteScroll direction="left" desktopSpeed={15} mobileSpeed={25}>
            {frontendFrameworks.map((f) => f.icon)}
   </InfiniteScroll>


  {/* Backend framework */}
<InfiniteScroll direction="right" desktopSpeed={18} mobileSpeed={28}>
    {backendFrameworks.map((f) => f.icon)}
</InfiniteScroll>


  {/* Databases */}
   <InfiniteScroll direction="left" desktopSpeed={15} mobileSpeed={25}>
          {databases.map((f) => f.icon)}
  </InfiniteScroll>

</div>

          </div>

    </section>
  );
};

