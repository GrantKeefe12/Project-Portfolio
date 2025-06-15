"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Mail } from "lucide-react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/autoplay"

export default function Home() {
  const [aboutOpen, setAboutOpen] = useState(false)

  const projects = [
    {
      id: 1,
      title: "Nose-Deployed Drogue Rocket",
      description:
        "A modular, thrust-vectoring rocket featuring STM32-based flight control, GPS, telemetry, IMU, and power modules, with an expanding nose cone for passive descent stability, actuated canards, a dual-axis gimbal, and parachute deployment system.",
      images: [
        "/Nose-Deployed Drogue Rocket/iso_view 1.png?height=685&width=603",
        "/Nose-Deployed Drogue Rocket/Gimbal.PNG?height=585&width=594",
        "/Nose-Deployed Drogue Rocket/nose_cone.PNG?height=650&width=760",
      ],
    },
    {
      id: 2,
      title: "Modular Flight Controller",
      description:
        "A modular rocket flight controller built around STM32H7 and F4 MCUs, featuring swappable boards for GPS, telemetry, power distribution, IO, and IMU/barometer to allow easy debugging and quick replacement of faulty designs.",
      images: [
        "/Modular Flight Controller/iso_view.png?height=557&width=603",
        "/Modular Flight Controller/side_view.png?height=621&width=593",
        "/Modular Flight Controller/top_view.png?height=543&width=567",
      ],
    },
    {
      id: 3,
      title: "2 DOF Ball Gimbal",
      description:
        "A 2-DOF ball gimbal actuated by BLDC motors with FOC control, designed to stabilize and command the orientation of a DJI FPV system and ZED X Mini depth camera, featuring a power system with a 3-cell 21700 Li-ion pack to offset the camera weight, and a custom control board with IMU for angle stabilization.",
      images: [
        "/2DOF_Gimbal/gimbal_cad_img-1.png?height=701&width=622",
        "/2DOF_Gimbal/gimbal_cad_img.png?height=738&width=775",
        "/2DOF_Gimbal/Image.jpeg?height=798&width=800",
        "/2DOF_Gimbal/gimbal_on_plane.jpg?height=1129&width=1125",
      ],
    },
    {
      id: 4,
      title: "Field Oriented Control Board",
      description:
        "A custom gimbal control board based on the RP2040 MCU, featuring dual L6234PD motor drivers for BLDC control, I2C interfaces for IMU and motor encoders, and a PWM input for receiving external angle commands.",
      images: [
        "FOC_Board/3d-render.png?height=826&width=776",
        "FOC_Board/trace_layout-v2.0.png?height=697&width=688",
        "FOC_Board/9gimbal-pcb-2.jpg?height=2540&width=2540",
      ],
    },
    {
      id: 8,
      title: "Canadian UAS Competition",
      description:
        "Led a team in the Canadian UAS competition to develop a small-scale autonomous passenger VTOL capable of endurance flight and complex overhang landings, my main technical contributions being the designing the Li-ion battery packs, power distribution board, and full system wiring—gaining firsthand experience in the challenges of large-scale engineering coordination.",
      images: [
        "/Canadian_UAS/VTOL_internal.jpg?height=2304&width=2880",
        "/Canadian_UAS/vtol_render.jpg?height=2304&width=2303",
        "/Canadian_UAS/vtol_built.jpg?height=3024&width=4032",
      ],
    },
    {
      id: 9,
      title: "Internatioanal Micro Air Vehicles Competition",
      description:
        "Designed and built an autonomous indoor drone for the IMAV competition, integrating a Raspberry Pi, Pixhawk 6C, camera, rangefinder, and optical flow to enable line following, precision landing, navigation, and object retrieval.",
      images: [
        "/IMAV/drone_bottom.png?height=1089&width=1350",
        "/IMAV/Drone_front.png?height=2304&width=2880",
        "/IMAV/test_sim.png?height=637&width=797",
      ],
    },
    {
      id: 5,
      title: "Autonomous Carbon Dioxide Mapping Robot",
      description:
        "A 4-wheeled skid-steer robot powered by a Raspberry Pi 4B, RPLIDAR, and Arduino Uno with L298N motor driver, running ROS2 with NAV2 to autonomously map and navigate indoor environments while logging CO₂ concentration data.",
      images: [
        "/CO2_Robot/skid_robot.jpeg?height=1536&width=1536",
        "/CO2_Robot/AMCL_localization.png?height=461&width=507",
        "/CO2_Robot/simulationdemo.png?height=709&width=709",
        "/CO2_Robot/HEAT_MAP3.png?height=882&width=1020",
        "/CO2_Robot/NAV_COST.png?height=859&width=781",
      ],
    },
    {
      id: 6,
      title: "VTOL Design",
      description:
        "A VTOL UAV combined the maneuverability of a quadrotor with the efficiency of fixed-wing flight, controlled by a Teensy microcontroller; while the novel design proved infeasible within the project timeline due to challenges in active stabilization and insufficient thrust-vectoring response, the project delivered stable quadcopter flight, precise wing actuation, and valuable insights into the role of passive stability in aircraft design.",
      images: [
        "VTOL/tuning.jpg?height=1263&width=1125",
        "VTOL/vtol_plane_mode1.jpeg?height=1536&width=1655",
        "VTOL/build1.jpg?height=3024&width=3024",
      ],
    },
    {
      id: 7,
      title: "Semi-Autonomous Robot Design",
      description:
        "A 'rescue' competition robot featuring particle filter localization using fixed ultrasonic sensors, which I developed and tested—revealing key limitations in sparse sensor data and emphasizing the value of richer observations for accurate state estimation.",
      images: [
        "/Semi-Autonomous/robot.jpg?height=767&width=1151",
        "/Semi-Autonomous/robot2.png?height=778&width=804",
        "/Semi-Autonomous/Simulation.png?height=500&width=500",
        "/Semi-Autonomous/Results.png?height=602&width=789",
      ],
    },
  ]

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (aboutOpen) document.body.style.overflow = "hidden"
    else document.body.style.overflow = ""
    return () => { document.body.style.overflow = "" }
  }, [aboutOpen])

  // Example about me data
  const aboutMe = `I'm Grant Keefe, a passionate engineer who loves building things that move, sense, and interact with the world. My interests span robotics, embedded systems, and control. I thrive on hands-on problem solving and collaborative engineering, and I'm always looking for new challenges and opportunities to learn.`
  const profilePic = "/profile.jpg"
  const currentProject = {
    image: "/SARNIF.JPG?height=685&width=603",
    title: "Current Research: UAV application for SAR",
    description:
      "I submitted a successful grant application to the Search and Rescue New Initiatives Fund (SARNIF), securing $515,000 in funding. With additional support from Queen’s University and contributions from hardware partners, the total valuation of the project is approximately $700,000. The research focuses on the deployment and characterization of fixed-wing UAVs for maritime search and rescue operations. Over the past year, I have been conducting undergraduate research on the implementation of these systems and evaluating various detection methodologies. Our team is targeting the submission of two papers to ICRA by the end of the summer, contributing new insights into UAV-based maritime anomaly detection and autonomous SAR mission planning.",
  }

  return (
    <main className="container mx-auto px-4 py-12">
      {/* About Me Modal */}
      {aboutOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white rounded-xl shadow-2xl max-w-5xl w-full p-12 relative flex flex-col md:flex-row gap-12">
            {/* Close button */}
            <button
              onClick={() => setAboutOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl font-bold"
              aria-label="Close"
            >
              ×
            </button>
            {/* Profile and About */}
            <div className="flex flex-col items-center md:items-start flex-1">
              <img
                src={profilePic}
                alt="Grant Keefe"
                className="w-full max-w-lg h-auto object-cover shadow mb-4"
              />
              <h2 className="text-2xl font-bold mb-2">Grant Keefe</h2>
              <p className="text-lg text-gray-800 max-w-xs">{aboutMe}</p>
            </div>
            {/* Current Project */}
            <div className="flex-1 flex flex-col items-center md:items-start">
              <img
                src={currentProject.image}
                alt={currentProject.title}
                className="w-full max-w-md rounded-lg shadow mb-2"
              />
              <h3 className="text-lg font-bold mb-1">{currentProject.title}</h3>
              <p className="text-sm text-gray-700">{currentProject.description}</p>
            </div>
          </div>
        </div>
      )}

      <div className="flex flex-col md:flex-row justify-between items-center mb-12">
        <div>
          <h1 className="text-4xl font-bold mb-2">My Engineering Projects</h1>
          <p className="text-lg text-muted-foreground">
            I enjoy building things. Here are some of my recent projects.
          </p>
          <p className="text-lg text-muted-foreground">
            For those done with a team, you can find the members listed on each project’s page.
          </p>
        </div>
        <div className="flex items-center gap-4 mt-4 md:mt-0">
          <Link href="/resume.pdf" target="_blank">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
              View Resume
            </button>
          </Link>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            onClick={() => setAboutOpen(true)}
            type="button"
          >
            About Me
          </button>
          <button
            className="border border-gray-300 px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-100"
            onClick={() => (window.location.href = "mailto:20gak5@queensu.ca")}
          >
            <Mail className="h-4 w-4" />
            <span>20gak5@queensu.ca</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Link key={project.id} href={`/projects/${project.id}`}>
            <div className="cursor-pointer bg-gray-50 border border-gray-200 rounded-lg p-6 flex flex-col items-center hover:bg-blue-50 transition">
              {/* Swiper for cycling images, styled as a large icon */}
              <div className="w-40 h-40 mb-4">
                <Swiper
                  spaceBetween={10}
                  slidesPerView={1}
                  autoplay={{ delay: 3500, disableOnInteraction: false }}
                  modules={[Autoplay]}
                >
                  {project.images.map((image, index) => (
                    <SwiperSlide key={index}>
                      <img
                        src={image}
                        alt={`${project.title} image ${index + 1}`}
                        className="object-cover w-full h-full rounded-full border-4 border-blue-200 shadow"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <h2 className="text-xl font-bold mb-2 text-center">{project.title}</h2>
              <p className="text-sm text-gray-600 text-center">{project.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  )
}
