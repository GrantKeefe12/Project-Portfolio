"use client"

import { useRouter } from "next/navigation"

export function BackButton() {
	const router = useRouter()
	
	return (
		<button
			className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
			onClick={() => router.push("/")}
		>
			Back to Projects
		</button>
	)
}
