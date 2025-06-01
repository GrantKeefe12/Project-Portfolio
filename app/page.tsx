import Link from "next/link"
import { Mail } from "lucide-react"
import ProjectCard from "@/components/project-card"
import { Button } from "@/components/ui/button"

export default function Home() {
  // Sample project data - replace with your actual projects
  const projects = [
    {
      id: 1,
      title: "Smart Home Automation System",
      description:
        "Developed an IoT-based home automation system using Arduino and Raspberry Pi that controls lighting, temperature, and security features through a mobile app.",
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
            <span>contact@example.com</span>
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </main>
  )
}
