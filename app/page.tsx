import fs from "fs"
import path from "path"
import { HomeClient } from "./home-client"

const supportedImageExtensions = new Set([".jpg", ".jpeg", ".png", ".webp", ".gif"])

function getAboutImages() {
  const aboutImageDirectory = path.join(process.cwd(), "public", "about")

  try {
    return fs
      .readdirSync(aboutImageDirectory)
      .filter((file) => supportedImageExtensions.has(path.extname(file).toLowerCase()))
      .sort((a, b) => a.localeCompare(b))
      .map((file) => `/about/${encodeURIComponent(file)}`)
  } catch {
    return []
  }
}

export default function Home() {
  return <HomeClient aboutImages={getAboutImages()} />
}
