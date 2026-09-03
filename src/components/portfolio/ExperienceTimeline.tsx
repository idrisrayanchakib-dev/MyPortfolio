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
    position: "Software Engineer Intern",
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
  },
  {
    id: 2,
    company: "Institut Pasteur",
    logo: "/Institut-Pasteur-Logo.jpeg",
    position: "Data Processing & AI Researcher Intern / Computational Biology Intern",
    location: "El Hamma, Alger",
    period: "15/02/2026 - 30/06/2026",
    type: " Internship",
    description:
      "Designed and trained AEGIS-GT (Affinity Evaluation Geometric Transformer Induced Fit Screening), a custom ~23 Million parameters geometric transformer that predicts how cancer-driving protein mutations alter drug-binding affinity. Built the entire pipeline from scratch, curating and validating a multi-million-pair dataset from six public bio/chem databases, generating 3D protein and ligand structures, and training a novel multi-task architecture in two phases (physics pretraining → clinical fine-tuning).",
    achievements: [
      "Curated and validated a 1.67M-pair oncology drug-target dataset by cross-referencing BindingDB, COSMIC, OncoKB, and IntOGen, filtering out chemical assay artifacts (PAINS) with 95.9% purity",
      "Physically validated 5,920 cancer-driving mutations across 971 genes by cross confirming COSMIC and ClinVar against real protein sequences",
      "Generated 3D protein structures (ESMFold + FoldX) and computed biophysical mutation impact metrics (ΔΔG, SASA, packing, RMSD) for every validated variant",
      "Designed a novel geometric transformer architecture (RMSNorm/SwiGLU blocks, learnable radial basis functions, cross-attention fusion, gated pooling) from scratch, ~23M trainable parameters",
      "Implemented uncertainty weighted multi-task loss (Kendall et al., CVPR 2018) and a custom gene-aware pairwise ranking loss",
      "Built a two-phase transfer learning pipeline: structural pretraining followed by fine-tuning on 16,431 real experimental affinity measurements, reaching test Pearson r = 0.31 and Spearman p = 0.13",
      "Engineered memory efficient infrastructure to handle 900M+ molecular graph edges via memory-mapped tensors, enabling training at scale on Blackwell server edition GPU"
    ],
    technologies: [
      "Python",
      "PyTorch",
      "PyTorch Geometric",
      "RDKit",
      "ESM-2 / ESMFold",
      "FoldX",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "CUDA"
    ],
  },
];

export const ExperienceTimeline = () => {
  return (
    <section id="experience" className="py-16 px-6 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-5xl font-bold mb-4">
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
              className={`relative mb-20 ${index % 2 === 0 ? "md:pr-1/2" : "md:pl-1/2"
                }`}
            >
              {/* Timeline node */}
              <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary rounded-full ring-4 ring-background border-2 border-card transform md:-translate-x-1/2" />

              {/* Card */}
              <div
                className={`ml-16 md:ml-0 ${index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                  }`}
              >
                <Card className="bg-background transition duration-300 text-left">
                  <CardHeader className="text-left">
                    <div className="flex items-center gap-4">
                      <img
                        src={experience.logo}
                        alt={`${experience.company} logo`}
                        className="w-16 h-16 rounded-full object-cover ring-2 ring-primary/20"
                      />
                      <div className="flex-1 text-left">
                        <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors text-left">
                          {experience.position}
                        </CardTitle>
                        <div className="flex items-center gap-2 text-muted-foreground mt-1 text-left">
                          <Building className="h-4 w-4" />
                          <span className="font-medium">
                            {experience.company}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mt-4 text-left">
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

                  <CardContent className="space-y-6 text-left">
                    {/* Description */}
                    <p className="text-foreground/80 leading-relaxed text-left">
                      {experience.description}
                    </p>

                    {/* Achievements */}
                    <div className="text-left">
                      <h4 className="font-semibold mb-3 flex items-center gap-2 text-left">
                        <TrendingUp className="h-4 w-4 text-success" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-2 text-left">
                        {experience.achievements.map((achievement, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-sm text-muted-foreground text-left"
                          >
                            <span className="w-1.5 h-1.5 bg-success rounded-full mt-2 flex-shrink-0" />
                            <span className="text-left">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="text-left">
                      <h4 className="font-semibold mb-3 flex items-center gap-2 text-left">
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


        <div className="text-center mt-16 flex flex-wrap items-center justify-center gap-4">
          <Button asChild variant="cyanGlow" size="lg" className="glass-card">
            <a href="/cv-chakib-anglais.pdf" download="Idris-Rayan-Chakib-Resume-EN.pdf">
              Resume (English)
              <Download className="w-5 h-5" />
            </a>
          </Button>
          <Button asChild variant="cyanGlow" size="lg" className="glass-card">
            <a href="/cv-chakib-francais.pdf" download="Idris-Rayan-Chakib-CV-FR.pdf">
              CV (Français)
              <Download className="w-5 h-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
