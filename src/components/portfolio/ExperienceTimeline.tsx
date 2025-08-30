import React from "react";
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Building,
  Calendar,
  MapPin,
  TrendingUp,
  Code,
} from "lucide-react";
import { Download } from "lucide-react";


const experiences = [
  {
    id: 1,
    company: "Ooredoo",
    logo: "/Ooredoo.svg",
    position: "Software Engineer",
    location: "Ouled Fayet, Alger",
    period: "02/2024 - 06/2024",
    type: " Internship",
    description:
      "Designed and implemented a full-stack web application integrated with a neural network model to detect SIM Box fraud in telecommunications.The system streamlined fraud investigations through real-time dashboards, automated blocking, and anomaly detection, improving accuracy and operational efficiency.",
    achievements: [
      "Conducted an in-depth analysis of telecom fraud patterns, with a focus on SIM Box fraud.",
      "Designed the system architecture using UML (use case,class,sequence diagrams and deployment diagram).",
      "Developed a full-stack web application with role based access for administrators and analysts",
      "Built and trained a feedforward neural network model to detect anomalies in call detail records (CDRs)",
      "Validated the solution with real/simulated datasets,achieving robust detection performance",
      "Delivered a unified fraud monitoring system that improved efficiency,accuracy,and operational workflows."
    ],
    technologies: [
      "Python",
      "Tensorflow",
      "React",
      "Vite",
      "Nodejs",
      "Expressjs",
      "MySQL"
    ],
    metrics: {
      impact: "40% performance improvement",
      team: "8 engineers managed",
      scale: "1M+ users served",
    },
  },
];

export const ExperienceTimeline = () => {
  const [activeCTA, setActiveCTA] = React.useState<string | null>(null);

   const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "./EthicalHackerUpdate20250327-27-kuo4k3.pdf";                     // Path to your PDF in public folder
    link.download = "EthicalHackerUpdate";     // Name for downloaded file
    link.click();                                  // Trigger automatic download
  };
  return (
    <section id="experience" className="py-16 px-6 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            My Experience
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/60 via-accent/60 to-primary/60 transform md:-translate-x-1/2" />

          {experiences.map((experience, index) => (
            <div
              key={experience.id}
              className={`relative mb-20 ${
                index % 2 === 0 ? "md:pr-1/2" : "md:pl-1/2 md:text-right"
              }`}
            >
              {/* Timeline node */}
              <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary rounded-full ring-4 ring-background border-2 border-card transform md:-translate-x-1/2" />

              {/* Card */}
              <div
                className={`ml-16 md:ml-0 ${
                  index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                }`}
              >
                <Card className="bg-background transition duration-300">
                  <CardHeader>
                    <div
                      className={`flex items-center gap-4 ${
                        index % 2 === 0 ? "" : "md:flex-row-reverse"
                      }`}
                    >
                      <img
                        src={experience.logo}
                        alt={`${experience.company} logo`}
                        className="w-16 h-16 rounded-full object-cover ring-2 ring-primary/20"
                      />
                      <div
                        className={`flex-1 ${
                          index % 2 === 0 ? "" : "md:text-right"
                        }`}
                      >
                        <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors">
                          {experience.position}
                        </CardTitle>
                        <div className="flex items-center gap-2 text-muted-foreground mt-1">
                          <Building className="h-4 w-4" />
                          <span className="font-medium">
                            {experience.company}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div
                      className={`flex items-center gap-6 text-sm text-muted-foreground mt-4 ${
                        index % 2 === 0 ? "" : "md:justify-end"
                      }`}
                    >
                      <div className="flex items-center gap-1 min-w-0">
                        <Calendar className="h-4 w-4 flex-shrink-0" />
                        <time className="truncate">{experience.period}</time>
                      </div>
                      <div className="flex items-center gap-1 min-w-0">
                        <MapPin className="h-4 w-4 flex-shrink-0" />
                        <span className="truncate">{experience.location}</span>
                      </div>
                      <Badge variant="outline" className="whitespace-nowrap">{experience.type}</Badge>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    {/* Description */}
                    <p className="text-foreground/80 leading-relaxed">
                      {experience.description}
                    </p>


                    {/* Achievements */}
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <TrendingUp className="h-4 w-4 text-success" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {experience.achievements.map((achievement, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-sm text-muted-foreground"
                          >
                            <span className="w-1.5 h-1.5 bg-success rounded-full mt-2 flex-shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <Code className="h-4 w-4 text-primary" />
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="outline"
                            className="text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>

        {/* 👇 CTA BUTTON GOES HERE, AFTER THE TIMELINE */}
        <div className="text-center mt-16">
          <Button
            variant="cyanGlow"
            size="lg"
            className={`glass-card ${
              activeCTA === "cert"
                ? "bg-gradient-primary text-primary-foreground hover:shadow-none"
                : ""
            }`}
            onClick={handleDownload}
          >
            Download full resume
            <Download className="w-5 h-5" />
          </Button>
        </div>
     </div>
    </section>
  );
};
