"use client"

import { useRouter } from "next/navigation"
import { ArrowLeft } from "lucide-react"

export function BackButton() {
	const router = useRouter()
	
	return (
		<button
			className="inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-800 shadow-sm transition hover:border-slate-400 hover:bg-slate-50"
			onClick={() => router.push("/")}
		>
			<ArrowLeft className="h-4 w-4" />
			Back to projects
		</button>
	)
}
