import Link from "next/link"
import { Mail } from "lucide-react"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"

export default function Home() {
  const projects = [
    {
      id: 1,
      title: "Smart Home Automation System",
      description:
        "Developed an IoT-based home automation system using Arduino and Raspberry Pi that controls lighting, temperature, and security features through a mobile app.",
      details:
        "This project involved integrating various IoT devices and creating a seamless user experience through a mobile app. The system was tested in real-world scenarios and optimized for energy efficiency.",
      images: [
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
      technologies: ["Arduino", "Raspberry Pi", "React Native", "Node.js"],
    },
    {
      id: 2,
      title: "Autonomous Drone Navigation",
      description:
        "Built a drone with computer vision capabilities that can navigate indoor environments, avoid obstacles, and perform automated tasks.",
      details:
        "The drone is equipped with a camera and uses computer vision algorithms to understand and navigate its environment. It can be controlled remotely or operate autonomously based on pre-defined waypoints.",
      images: [
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
      technologies: ["Python", "OpenCV", "TensorFlow", "ROS"],
    },
    {
      id: 3,
      title: "Renewable Energy Monitor",
      description:
        "Created a system to monitor and optimize energy usage from solar panels and wind turbines, with real-time data visualization and predictive analytics.",
      details:
        "This project involved developing a monitoring system that provides real-time data on energy production and consumption. It uses machine learning algorithms to predict energy trends and optimize usage.",
      images: [
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
      technologies: ["React", "D3.js", "Python", "MongoDB"],
    },
  ]

  return (
    <main className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row justify-between items-center mb-12">
        <div>
          <h1 className="text-4xl font-bold mb-2">My Engineering Projects</h1>
          <p className="text-lg text-muted-foreground">A showcase of my technical work and innovations</p>
        </div>
        <div className="flex items-center gap-4 mt-4 md:mt-0">
          <Button asChild>
            <Link href="/resume.pdf" target="_blank">
              View Resume
            </Link>
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            <Mail className="h-4 w-4" />
            <span>20gak5@queensu.ca</span>
          </Button>
        </div>
      </div>

      <Accordion type="single" collapsible>
        {projects.map((project) => (
          <AccordionItem key={project.id} value={`project-${project.id}`}>
            <AccordionTrigger>
              <h2 className="text-xl font-semibold">{project.title}</h2>
            </AccordionTrigger>
            <AccordionContent>
              <p className="mb-4">{project.description}</p>
              <p className="text-sm text-muted-foreground">{project.details}</p>
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.images.map((image, index) => (
                  <img key={index} src={image} alt={`${project.title} image ${index + 1}`} className="rounded-lg" />
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <style jsx>{`
        .accordion-content {
          max-height: 300px; /* Adjust as needed */
          overflow-y: auto;
        }
      `}</style>
    </main>
  )
}
