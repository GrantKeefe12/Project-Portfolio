"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { ExternalLink, FileText, Mail, UserRound } from "lucide-react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/autoplay"

interface HomeClientProps {
  aboutImages: string[]
}

export function HomeClient({ aboutImages }: HomeClientProps) {
  const [aboutOpen, setAboutOpen] = useState(false)

  const projects = [
    {
      id: 10,
      title: "Indoor Drone Positioning System",
      outcome: "Developed a custom TDOA-based indoor positioning system for drone navigation and control.",
      process: "",
      testing: "",
      images: [
        "/Hand_Gesture_Controlled_Drones/anchor.png",
        "/Hand_Gesture_Controlled_Drones/tag.png",
        "/Hand_Gesture_Controlled_Drones/drone_rotated_180.jpg",
        "/Hand_Gesture_Controlled_Drones/TDOA_measurment_example.png",
        "/Hand_Gesture_Controlled_Drones/tdoa_plot.png",
      ],
    },
    {
      id: 1,
      title: "Nose-Deployed Drogue Rocket",
      outcome: "Modular rocket concept with thrust vectoring, canards, and nose-deployed drogue recovery.",
      process: "Designed the gimbal, canard box, parachute hatch, nose drogue, and modular avionics architecture around controllability and serviceability.",
      testing: "Currently a CAD-stage system intended for physical validation of stability, deployment reliability, and control authority.",
      images: [
        "/Nose-Deployed%20Drogue%20Rocket/iso_view%201.png?height=685&width=603",
        "/Nose-Deployed%20Drogue%20Rocket/Gimbal.PNG?height=585&width=594",
        "/Nose-Deployed%20Drogue%20Rocket/nose_cone.PNG?height=650&width=760",
      ],
    },
    {
      id: 2,
      title: "Modular Flight Controller",
      outcome: "Swappable STM32-based flight computer stack for rockets and robotics platforms.",
      process: "Split the system into FCU, navigation, GPS, telemetry, IO, power, and backplane modules for isolated design and debugging.",
      testing: "Designed to simplify bring-up by allowing each board to be powered, inspected, replaced, and tested independently.",
      images: [
        "/Modular%20Flight%20Controller/iso_view.png?height=557&width=603",
        "/Modular%20Flight%20Controller/side_view.png?height=621&width=593",
        "/Modular%20Flight%20Controller/top_view.png?height=543&width=567",
      ],
    },
    {
      id: 3,
      title: "2 DOF Ball Gimbal",
      outcome: "Self-contained two-axis BLDC gimbal stabilizing a DJI FPV system and ZED X Mini depth camera.",
      process: "Moved from a heavy 3D-printed prototype to a carbon-fiber assembly with custom battery packaging, slip-ring routing, encoders, and control electronics.",
      testing: "Validated closed-loop disturbance rejection, roll stabilization, and full pitch/roll integration on the aircraft.",
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
      outcome: "Custom RP2040 gimbal controller running closed-loop field-oriented BLDC motor control.",
      process: "Iterated from hand-wired prototypes through multiple PCB revisions, improving programming access, compute headroom, grounding, and encoder feedback.",
      testing: "Bench-tested open-loop drive, low-resolution feedback, magnetic encoder feedback, and smooth FOC motor operation before gimbal integration.",
      images: [
        "/FOC_Board/3d-render.png?height=826&width=776",
        "/FOC_Board/trace_layout-v2.0.png?height=697&width=688",
        "/FOC_Board/9gimbal-pcb-2.jpg?height=2540&width=2540",
      ],
    },
    {
      id: 8,
      title: "Canadian UAS Competition",
      outcome: "Competition-scale autonomous passenger VTOL airframe with integrated propulsion, avionics, battery, and payload systems.",
      process: "Co-led the team and contributed the Li-ion packs, power distribution board, iron-bird wiring, and full internal electrical integration.",
      testing: "Progressed through subsystem checks, wingless hover tests, crash repair, post-repair flights, and competition operations.",
      images: [
        "/Canadian_UAS/VTOL_internal.jpg?height=2304&width=2880",
        "/Canadian_UAS/vtol_render.jpg?height=2304&width=2303",
        "/Canadian_UAS/vtol_built.jpg?height=3024&width=4032",
      ],
    },
    {
      id: 9,
      title: "International Micro Air Vehicles Competition",
      outcome: "Autonomous indoor drone that placed second among undergraduate teams at IMAV.",
      process: "Built the aircraft around a Raspberry Pi, Pixhawk 6C, cameras, optical flow, rangefinder, and hot-swap avionics power.",
      testing: "Used Gazebo mission simulation, line-following development, late-stage real-world tuning, and competition flights to validate the system.",
      images: [
        "/IMAV/drone_bottom.png?height=1089&width=1350",
        "/IMAV/Drone_front.png?height=2304&width=2880",
        "/IMAV/test_sim.png?height=637&width=797",
      ],
    },
    {
      id: 5,
      title: "Autonomous Carbon Dioxide Mapping Robot",
      outcome: "ROS2 skid-steer robot that autonomously maps indoor CO2 concentration into ventilation heat maps.",
      process: "Integrated Raspberry Pi compute, LiDAR, Arduino motor control, CO2 sensing, a 3D-printed chassis, SLAM, AMCL, and NAV2.",
      testing: "Started in Gazebo, then debugged encoder, H-bridge, localization, and path-planning behavior on physical hardware.",
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
      outcome: "Experimental tilt-wing VTOL prototype that achieved stable quadcopter flight and accurate wing actuation.",
      process: "Designed a Teensy-controlled airframe with actuated wings, custom linkage hardware, GPS, IMU, receiver input, and power distribution.",
      testing: "Tuned constrained pitch, universal-joint multi-axis behavior, and winged hover tests, revealing the need for more passive stability and faster thrust-vector response.",
      images: [
        "/VTOL/tuning.jpg?height=1263&width=1125",
        "/VTOL/vtol_plane_mode1.jpeg?height=1536&width=1655",
        "/VTOL/build1.jpg?height=3024&width=3024",
      ],
    },
    {
      id: 7,
      title: "Semi-Autonomous Robot Design",
      outcome: "Rescue-style robot study focused on particle-filter localization from sparse ultrasonic sensor observations.",
      process: "Built and analyzed the robot architecture, assembly drawings, simulation, and localization approach with a teammate.",
      testing: "Compared simulated and physical results, showing how limited sensor richness constrained state-estimation accuracy.",
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

  const aboutMe = `I'm Grant Keefe, a passionate engineer who loves building things that move, sense, and interact with the world. My interests span robotics, aerospace, embedded systems, and control. I thrive on hands-on problem solving and collaborative engineering, and I'm always looking for new challenges and opportunities to learn.`
  const profilePic = "/profile.jpg"
  const aboutCarouselImages = aboutImages.length > 0 ? aboutImages : [profilePic]
  const dominionArticle =
    "https://www.linkedin.com/posts/dominiondynamics_we-designed-and-deployed-icespike-now-echo-activity-7439270060990337024-vOV7?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEJ1yhgBJRPkCNpI7lJ6Yv0Ik0NeEeDPJbU"
  const researchArticle =
    "https://smithengineering.queensu.ca/news/2026/04/smith-engineering-students-secure-550k-search-and-rescue-research-grant-for-quip-internships.html"
  const currentProject = {
    image: "/SARNIF.JPG?height=685&width=603",
    title: "UAV application for SAR",
    description:
      "I submitted a successful grant application to the Search and Rescue New Initiatives Fund (SARNIF), securing $515,000 in funding. With additional support from Queen’s University and contributions from hardware partners, the total valuation of the project is approximately $700,000. The research focuses on the deployment and characterization of fixed-wing UAVs for maritime search and rescue operations. Over the past year, I have been conducting undergraduate research on the implementation of these systems and evaluating various detection methodologies.",
  }
  const featuredWindows = [
    {
      eyebrow: "Undergraduate research",
      href: "/research",
      image: currentProject.image,
      title: currentProject.title,
      description: "Fixed-wing UAV deployment and detection methods for maritime search and rescue.",
      ctaHref: researchArticle,
      ctaLabel: "Smith Engineering article",
      ctaExternal: true,
    },
    {
      eyebrow: "Industry R&D",
      href: "/arctic-deployed-sensor-node",
      image: "/Arctic_Deployed_Sensor_Node/testing_monitor.jpg",
      title: "Arctic Sensing Node",
      description: "Modular sensor node deployment in the Arctic for environmental monitoring.",
      ctaHref: dominionArticle,
      ctaLabel: "Dominion article",
      ctaExternal: true,
    },
  ]

  return (
    <>
      {aboutOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/60 px-4 py-8 backdrop-blur-sm">
          <div className="relative mx-auto grid max-w-4xl gap-8 rounded-lg border border-slate-200 bg-white p-6 shadow-2xl md:grid-cols-[0.95fr_1.05fr] md:p-10">
            <button
              onClick={() => setAboutOpen(false)}
              className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-xl font-bold text-slate-500 transition hover:border-slate-400 hover:text-slate-900"
              aria-label="Close"
            >
              ×
            </button>
            <div className="flex flex-col">
              <div className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
                <Swiper
                  slidesPerView={1}
                  loop={aboutCarouselImages.length > 1}
                  autoplay={{ delay: 3500, disableOnInteraction: false, pauseOnMouseEnter: false }}
                  observer
                  observeParents
                  modules={[Autoplay]}
                  className="h-full"
                >
                  {aboutCarouselImages.map((image, index) => (
                    <SwiperSlide key={image}>
                      <img
                        src={image}
                        alt={`Grant Keefe about image ${index + 1}`}
                        className="aspect-[4/5] w-full object-cover"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
            <div className="flex flex-col justify-center pt-8 md:pt-0">
              <h2 className="text-3xl font-bold tracking-tight text-slate-950">Grant Keefe</h2>
              <p className="mt-5 text-base leading-8 text-slate-700">{aboutMe}</p>
            </div>
          </div>
        </div>
      )}

      <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/90 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-4 md:flex-row md:items-center md:justify-between lg:px-8">
          <Link href="/" className="w-fit">
            <span className="block text-base font-bold tracking-tight text-slate-950">Grant Keefe</span>
            <span className="block text-xs font-medium text-slate-500">Engineering Portfolio</span>
          </Link>
          <div className="flex flex-wrap items-center gap-2">
            <Link
              href="#projects"
              className="rounded-md px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 hover:text-slate-950"
            >
              Projects
            </Link>
            <Link
              href="/research"
              className="rounded-md px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 hover:text-slate-950"
            >
              Research
            </Link>
            <Link
              href="/resume.pdf"
              target="_blank"
              className="inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white px-3 py-2 text-sm font-semibold text-slate-800 shadow-sm transition hover:border-slate-400 hover:bg-slate-50"
            >
              <FileText className="h-4 w-4" />
              Resume
            </Link>
            <button
              className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
              onClick={() => setAboutOpen(true)}
              type="button"
            >
              <UserRound className="h-4 w-4" />
              About
            </button>
            <Link
              href="mailto:20gak5@queensu.ca"
              className="inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white px-3 py-2 text-sm font-semibold text-slate-800 shadow-sm transition hover:border-slate-400 hover:bg-slate-50"
            >
              <Mail className="h-4 w-4" />
              Contact
            </Link>
          </div>
        </nav>
      </header>

      <main className="min-h-screen bg-slate-50 text-slate-950">
        <section className="mx-auto grid max-w-7xl gap-8 px-5 pb-12 pt-10 lg:px-8 lg:pb-16 lg:pt-14 xl:grid-cols-[minmax(0,1fr)_minmax(0,720px)]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">Robotics / Aerospace / Embedded Control</p>
            <h1 className="mt-4 max-w-4xl text-5xl font-bold tracking-tight text-slate-950 md:text-6xl">
              Engineering Design Portfolio
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              I have had a lot of fun during my undergrad. These projects capture a lot of what I enjoy most about engineering: designing, testing, failing, learning, and building things that move, sense, and interact with the world. 
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:gap-8">
            {featuredWindows.map((featuredWindow) => (
              <article
                key={featuredWindow.title}
                className="group h-full rounded-lg border border-slate-200 bg-white p-4 text-left shadow-sm transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg"
              >
                <Link href={featuredWindow.href} className="block overflow-hidden rounded-md border border-slate-200 bg-slate-100">
                  <img
                    src={featuredWindow.image}
                    alt={featuredWindow.title}
                    className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                </Link>
                <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">{featuredWindow.eyebrow}</p>
                <Link href={featuredWindow.href}>
                  <h2 className="mt-2 text-xl font-bold tracking-tight text-slate-950 transition hover:text-blue-800">{featuredWindow.title}</h2>
                </Link>
                <p className="mt-3 text-sm leading-6 text-slate-600">{featuredWindow.description}</p>
                <Link
                  href={featuredWindow.ctaHref}
                  target={featuredWindow.ctaExternal ? "_blank" : undefined}
                  rel={featuredWindow.ctaExternal ? "noopener noreferrer" : undefined}
                  className="mt-5 inline-flex items-center gap-2 rounded-md border border-blue-200 bg-blue-50 px-3 py-2 text-sm font-semibold text-blue-800 transition hover:border-blue-300 hover:bg-blue-100"
                >
                  {featuredWindow.ctaLabel}
                  <ExternalLink className="h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="border-t border-slate-200 bg-slate-200">
          <div className="mx-auto max-w-7xl px-5 pb-10 pt-8 lg:px-8 lg:pb-14 lg:pt-10">
            <div className="mb-10 flex flex-col gap-3 text-left md:flex-row md:items-center md:justify-between md:gap-8">
              <h2 className="text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">Projects</h2>
              <p className="max-w-2xl text-base leading-7 text-slate-600">
                Each project opens with the finished system, then steps through the design process. Projects completed with a team have team members listed at the bottom of the page.
              </p>
            </div>

            <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => {
                const projectHref = "href" in project && project.href ? project.href : `/projects/${project.id}`

                return (
                  <Link key={project.id} href={projectHref} className="block self-start">
                    <article className="flex cursor-pointer flex-col items-center rounded-lg border border-slate-400 bg-gray-50 p-6 transition hover:bg-blue-50">
                      <div className="mb-5 h-44 w-44 shrink-0">
                        <Swiper
                          spaceBetween={10}
                          slidesPerView={1}
                          autoplay={{ delay: 3500, disableOnInteraction: false }}
                          modules={[Autoplay]}
                          className="h-full w-full"
                        >
                          {project.images.map((image, index) => (
                            <SwiperSlide key={index} className="h-full w-full">
                              <img
                                src={image}
                                alt={`${project.title} image ${index + 1}`}
                                className="block h-full w-full rounded-full border-4 border-blue-200 object-cover shadow"
                              />
                            </SwiperSlide>
                          ))}
                        </Swiper>
                      </div>
                      <h3 className="mb-2 text-center text-xl font-bold text-slate-950">{project.title}</h3>
                      <p className="text-center text-sm leading-6 text-gray-600">{project.outcome}</p>
                    </article>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
