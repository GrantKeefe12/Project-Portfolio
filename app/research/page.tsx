import fs from "fs"
import path from "path"
import Link from "next/link"
import { ArrowLeft, ExternalLink } from "lucide-react"
import { ResearchCarousel } from "./research-carousel"

const researchArticle =
  "https://smithengineering.queensu.ca/news/2026/04/smith-engineering-students-secure-550k-search-and-rescue-research-grant-for-quip-internships.html"

const supportedImageExtensions = new Set([".jpg", ".jpeg", ".png", ".webp", ".gif"])

function getResearchImages() {
  const researchImageDirectory = path.join(process.cwd(), "public", "research")

  try {
    return fs
      .readdirSync(researchImageDirectory)
      .filter((file) => supportedImageExtensions.has(path.extname(file).toLowerCase()))
      .sort((a, b) => a.localeCompare(b))
      .map((file) => `/research/${encodeURIComponent(file)}`)
  } catch {
    return []
  }
}

export default function ResearchPage() {
  const researchImages = getResearchImages()
  const carouselImages = researchImages.length > 0 ? researchImages : ["/SARNIF.JPG?height=685&width=603"]

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
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">Current research</p>
        <h1 className="mt-4 max-w-4xl text-5xl font-bold tracking-tight text-slate-950 md:text-6xl">
          UAV systems for maritime search and rescue.
        </h1>
        <div className="mt-8 grid gap-6 md:grid-cols-[0.85fr_1.15fr]">
          <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">Grant funding</p>
            <p className="mt-3 text-4xl font-bold tracking-tight text-slate-950">$515,000</p>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Search and Rescue New Initiatives Fund support, with additional backing from Queen's University and hardware partners.
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-bold tracking-tight text-slate-950">Research focus</h2>
            <p className="mt-4 text-base leading-8 text-slate-700">
              This work studies the deployment and characterization of fixed-wing UAVs for maritime search and rescue operations. The research focuses on implementing these systems in realistic operating conditions and evaluating detection methodologies for identifying maritime anomalies.
            </p>
            <p className="mt-4 text-base leading-8 text-slate-700">
              The project combines aircraft integration, field testing, mission planning, and detection-method evaluation to support more capable UAV-assisted SAR workflows.
            </p>
          </div>
        </div>

        <div className="mt-8 rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold tracking-tight text-slate-950">Project context</h2>
          <p className="mt-4 text-base leading-8 text-slate-700">
            I submitted the successful grant application and have been conducting undergraduate research on fixed-wing UAV implementation for maritime SAR. The broader project valuation is approximately $700,000 when Queen's University support and hardware partner contributions are included.
          </p>
          <Link
            href={researchArticle}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-md border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-800 transition hover:border-blue-300 hover:bg-blue-100"
          >
            Read the Smith Engineering article
            <ExternalLink className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  )
}
