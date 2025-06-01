// Project data
const projects = [
  {
    title: "Smart Home Automation System",
    description:
      "Developed an IoT-based home automation system using Arduino and Raspberry Pi that controls lighting, temperature, and security features through a mobile app. The system includes voice control, automated scheduling, and remote monitoring capabilities. Users can control their entire home environment from anywhere in the world.",
    images: [
      "https://via.placeholder.com/600x400/4f46e5/ffffff?text=Smart+Home+1",
      "https://via.placeholder.com/600x400/7c3aed/ffffff?text=Smart+Home+2",
      "https://via.placeholder.com/600x400/2563eb/ffffff?text=Smart+Home+3",
    ],
    technologies: ["Arduino", "Raspberry Pi", "React Native", "Node.js", "MQTT", "Firebase"],
  },
  {
    title: "Autonomous Drone Navigation",
    description:
      "Built a drone with computer vision capabilities that can navigate indoor environments, avoid obstacles, and perform automated tasks. The system uses machine learning algorithms for real-time object detection and path planning. Features include autonomous mapping, package delivery, and emergency response capabilities.",
    images: [
      "https://via.placeholder.com/600x400/059669/ffffff?text=Drone+Nav+1",
      "https://via.placeholder.com/600x400/dc2626/ffffff?text=Drone+Nav+2",
      "https://via.placeholder.com/600x400/ea580c/ffffff?text=Drone+Nav+3",
    ],
    technologies: ["Python", "OpenCV", "TensorFlow", "ROS", "C++", "LIDAR"],
  },
  {
    title: "Renewable Energy Monitor",
    description:
      "Created a comprehensive system to monitor and optimize energy usage from solar panels and wind turbines, with real-time data visualization and predictive analytics. The platform helps users maximize their renewable energy efficiency and provides insights for better energy management decisions.",
    images: [
      "https://via.placeholder.com/600x400/16a34a/ffffff?text=Energy+Monitor+1",
      "https://via.placeholder.com/600x400/ca8a04/ffffff?text=Energy+Monitor+2",
      "https://via.placeholder.com/600x400/0891b2/ffffff?text=Energy+Monitor+3",
    ],
    technologies: ["React", "D3.js", "Python", "MongoDB", "InfluxDB", "Grafana"],
  },
]

const currentImageIndices = [0, 0, 0]

// Change image in carousel
function changeImage(projectIndex, direction) {
  event.stopPropagation()

  const images = document.querySelectorAll(`[data-project="${projectIndex}"] .project-image`)
  const currentIndex = currentImageIndices[projectIndex]

  // Hide current image
  images[currentIndex].classList.remove("active")

  // Calculate new index
  currentImageIndices[projectIndex] = (currentIndex + direction + images.length) % images.length

  // Show new image
  images[currentImageIndices[projectIndex]].classList.add("active")
}

// Open modal with project details
function openModal(projectIndex) {
  const project = projects[projectIndex]
  const modal = document.getElementById("modal")
  const modalBody = document.getElementById("modal-body")

  modalBody.innerHTML = `
        <div class="modal-image-container">
            <img src="${project.images[currentImageIndices[projectIndex]]}" alt="${project.title}" style="width: 100%; height: 100%; object-fit: cover;">
            <button class="nav-btn prev-btn" onclick="changeModalImage(${projectIndex}, -1)">‹</button>
            <button class="nav-btn next-btn" onclick="changeModalImage(${projectIndex}, 1)">›</button>
        </div>
        <h2 class="modal-title">${project.title}</h2>
        <div class="tech-tags" style="margin-bottom: 1.5rem;">
            ${project.technologies.map((tech) => `<span class="tag">${tech}</span>`).join("")}
        </div>
        <p class="modal-description">${project.description}</p>
    `

  modal.style.display = "block"
}

// Change image in modal
function changeModalImage(projectIndex, direction) {
  event.stopPropagation()

  const project = projects[projectIndex]
  currentImageIndices[projectIndex] =
    (currentImageIndices[projectIndex] + direction + project.images.length) % project.images.length

  const modalImage = document.querySelector(".modal-image-container img")
  modalImage.src = project.images[currentImageIndices[projectIndex]]
}

// Close modal
function closeModal() {
  document.getElementById("modal").style.display = "none"
}

// Add click event listeners to project cards
document.addEventListener("DOMContentLoaded", () => {
  const projectCards = document.querySelectorAll(".project-card")
  projectCards.forEach((card, index) => {
    card.addEventListener("click", () => openModal(index))
  })

  // Close modal when clicking outside
  window.addEventListener("click", (event) => {
    const modal = document.getElementById("modal")
    if (event.target === modal) {
      closeModal()
    }
  })
})
