import fs from "fs"
import path from "path"
import Link from "next/link"
import { ArrowLeft, ExternalLink } from "lucide-react"
import { ResearchCarousel } from "../research/research-carousel"

const arcticSensorNodePost =
  "https://www.linkedin.com/posts/dominiondynamics_we-designed-and-deployed-icespike-now-echo-activity-7439270060990337024-vOV7?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEJ1yhgBJRPkCNpI7lJ6Yv0Ik0NeEeDPJbU"

const supportedImageExtensions = new Set([".jpg", ".jpeg", ".png", ".webp", ".gif", ".svg"])
const hiddenImageFilenames = new Set(["tower_on_ice_square.jpeg"])

function getArcticSensorNodeImages() {
  const imageDirectory = path.join(process.cwd(), "public", "Arctic_Deployed_Sensor_Node")

  try {
    return fs
      .readdirSync(imageDirectory)
      .filter((file) => supportedImageExtensions.has(path.extname(file).toLowerCase()))
      .filter((file) => !hiddenImageFilenames.has(file))
      .sort((a, b) => a.localeCompare(b))
      .map((file) => `/Arctic_Deployed_Sensor_Node/${encodeURIComponent(file)}`)
  } catch {
    return []
  }
}

export default function ArcticDeployedSensorNodePage() {
  const images = getArcticSensorNodeImages()
  const carouselImages = images.length > 0 ? images : ["/Arctic_Deployed_Sensor_Node/placeholder.svg"]

  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <header className="border-b border-slate-200 bg-white">
        <nav className="mx-auto flex max-w-7xl items-center px-5 py-4 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white px-3 py-2 text-sm font-semibold text-slate-800 shadow-sm transition hover:border-slate-400 hover:bg-slate-50"
          >
            <ArrowLeft className="h-4 w-4" />
            Portfolio
          </Link>
        </nav>
      </header>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-10 lg:px-8 lg:py-14">
          <ResearchCarousel images={carouselImages} />
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-10 lg:px-8 lg:py-14">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">Research & Development project</p>
        <h1 className="mt-4 max-w-4xl text-5xl font-bold tracking-tight text-slate-950 md:text-6xl">
          Arctic deployable sensor node
        </h1>
        <div className="mt-8 grid gap-6 md:grid-cols-[0.85fr_1.15fr]">
          <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">Industry Funding</p>
            <p className="mt-3 text-4xl font-bold tracking-tight text-slate-950">$100,000</p>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Partnered with Dominion Dynamics to design, build, and deploy a modular sensor node in the Arctic for environmental monitoring. 
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-bold tracking-tight text-slate-950">Research focus</h2>
            <p className="mt-4 text-base leading-8 text-slate-700">
              The goal of the project was to extend Canadian capabilities in Arctic environmental monitoring through the deployment of modular sensor nodes. 
            </p>
            <p className="mt-4 text-base leading-8 text-slate-700">
              Specific details of the project and capabilities are confidential, but the project involved designing and building a sensor node package, enclosure, power system, and communications system that could be deployed in the Arctic environment. The project also involved environmental validation testing and field deployment to collect sensing results.
            </p>
          </div>
        </div>

        <div className="mt-8 rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold tracking-tight text-slate-950">Project context</h2>
          <Link
            href={arcticSensorNodePost}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-md border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-800 transition hover:border-blue-300 hover:bg-blue-100"
          >
            View Dominion Dynamics LinkedIn post
            <ExternalLink className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  )
}
