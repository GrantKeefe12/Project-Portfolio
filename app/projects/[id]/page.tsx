"use client"

import { useRouter } from "next/navigation"

const PDF_PROJECT_ID = 7 // The id for "Semi-Autonomous Robot Design"
const PDF_URL = "/Semi-Autonomous/robotics_paper.pdf" // Update this path to your actual PDF location

// Import the project data
const projects = [
	{
		id: 1,
		title: "Nose-Deployed Drogue Rocket",
		images: [
			{
				src: "/Nose-Deployed Drogue Rocket/iso_view 1.png?height=685&width=603",
				title: "The Prototype",
				description:
					"This project is a preliminary design for a rocket that has not yet been built, representing the first iteration in its development. It includes four actuated canards, a parachute hatch, a two-degree-of-freedom ball gimbal, and a deployable nose drogue to manage descent orientation. The main objective is to deepen my understanding of robust control systems in dynamic, underactuated environments. The rocket is intended to maintain stability both during powered ascent and unpowered descent using its aerodynamic control surfaces.",
			},
			{
				src: "/Nose-Deployed Drogue Rocket/Gimbal.PNG?height=585&width=594",
				title: "Gimbaled Thrust Vectoring",
				description:
					"The gimbal is a two-degree-of-freedom system actuated by two servo motors, allowing for ±7 degrees of rotation in both pitch and yaw axes. Its purpose is to vector the rocket’s motor during flight, providing active control authority over the vehicle’s orientation. By adjusting thrust direction, the gimbal enables real-time correction of instability and maintains the rocket’s desired heading. This mechanism is key to achieving robust stability under powered flight, especially in the presence of external disturbances.",
			},
			{
				src: "/Nose-Deployed Drogue Rocket/nose_cone.PNG?height=650&width=760",
				title: "Nose Drogue",
				description:
					"The nose-deployed drogue consists of four panels connected by linkages to a central rod, designed to deploy outward when released by a servo-actuated mechanism. Upon deployment, the panels shift the rocket’s center of pressure above its center of gravity, passively stabilizing it in a tail-down orientation during descent. In the current flight plan, this mechanism concludes the active portion of the mission, followed by a standard parachute deployment for recovery. Future iterations aim to build on this orientation method as a precursor to achieving a fully powered vertical landing.",
			},
			{
				src: "/Nose-Deployed Drogue Rocket/CANARD_BOX.PNG?height=400&width=400",
				title: "Canard Box",
				description:
					"The canard box contains four servos, each mechanically linked to a canard axle that is supported by two ball bearings to handle the shear loads experienced during flight. Each axle is equipped with a dedicated magnetic encoder to provide real-time rotational feedback to the flight controller. This setup enhances the controller’s ability to estimate the rocket’s state with greater accuracy throughout ascent. With improved state feedback, the control system can more reliably predict vehicle dynamics and issue appropriate control commands for stable flight.",
			},
			{
				src: "/Nose-Deployed Drogue Rocket/parachute_release.PNG?height=400&width=400",
				title: "Parachute Deployment",
				description:
					"The parachute deployment mechanism uses four spring-loaded linear bearings designed to push outward when released. A servo actuates the release of the hatch panel, allowing the springs to drive the deployment motion. While the concept is simple and compact, its reliability and reusability remain uncertain and will need to be validated through physical testing.",
			},
		],
		teamMembers: ["Grant Keefe"],
	},
	{
		id: 2,
		title: "Modular Flight Controller",
		images: [
			{
				src: "/Modular Flight Controller/iso_view.png?height=557&width=603",
				title: "Vertical Module Stack",
				description:
					"This project is a modular flight controller stack currently in the design phase, intended for use in experimental rockets and other robotics applications. The stack is composed of several custom-designed PCBs that interconnect via a central backplane using PCI-style connectors.",
			},
			{
				src: "/Modular Flight Controller/FCU_module.png?height=557&width=603",
				title: "Flight Control Unit",
				description:
					"The FCU is built around an STM32H7 microcontroller and serves as the central command module. It receives state estimates from the navigation unit and generates control outputs. It includes 8 PWM channels for motor or actuator control, 2 general-purpose GPIO lines, and an SD card slot for onboard logging.",
			},
			{
				src: "/Modular Flight Controller/NAV_Module.png?height=557&width=603",
				title: "State Estimation Module",
				description:
					"This board uses an STM32F4 microcontroller with an embedded IMU and barometer, and is connected to the GPS and telemetry modules. It performs sensor fusion to estimate the system’s state and transmits this information to the FCU for control decisions.",
			},
			{
				src: "/Modular Flight Controller/GPS_Module.png?height=557&width=603",
				title: "GPS Module",
				description:
					"A compact board featuring the MAX-M8C GNSS module. It provides reliable positioning data to the navigation unit in a small form factor ideal for embedded applications.",
			},
			{
				src: "/Modular Flight Controller/IO_Module.png?height=557&width=603",
				title: "IO Module",
				description:
					"Designed to interface with external payloads and subsystems, this board offers 8 PWM outputs and 2 independently fused pyro channels for tasks like deployment or ignition events in rocketry.",
			},
			{
				src: "/Modular Flight Controller/telem_module.png?height=557&width=603",
				title: "Telemetry Module",
				description:
					"Due to tight space constraints with embedded transceivers, this board currently includes a breakout pin header for mounting an external radio module in the future, giving flexibility based on mission needs.",
			},
			{
				src: "/Modular Flight Controller/backplane (2).png?height=557&width=603",
				title: "Backplane",
				description:
					"The backplane uses PCI-style connectors to stack and interface all modules. It simplifies wiring and allows modular testing, hot-swapping, and future expansion of the system.",
			},
		],
		teamMembers: ["Grant Keefe"],
	},
	{
		id: 3,
		title: "2 DOF Ball Gimbal",
		images: [
			{
				src: "/2DOF_Gimbal/V1_CAD_build.png?height=701&width=622",
				title: "Initial 3D-Printed Prototype",
				description:
					"The first iteration of the gimbal design was fully 3D printed, allowing for cheap prototyping and initial testing of mechanical fit and function. However, the approach introduced key issues: surface interfaces lacked the precise tolerancing required for smooth motion, resulting in excessive friction between moving parts. Additionally, the 3D-printed material contributed significant weight, which negatively impacted the aircraft’s center of gravity. These limitations informed the transition to a lighter, more precisely manufactured carbon fiber assembly in the next design phase.",
			},
			{
				src: "/2DOF_Gimbal/v1_tests.mp4",
				title: "Testing the V1 Prototype",
				description:
					"The video shows the partially assembled 3D-printed prototype, featuring a Teensy 4.0 microcontroller and an early version of the custom motor driver board. The test focuses on evaluating the roll and pitch axis functionality under manual input conditions. A potentiometer is used to generate analog control signals, allowing the user to command the gimbal's orientation interactively. This prototype test was a key step in validating basic motion response and identifying friction and balance issues in the initial design.",
			},
			{
				src: "/2DOF_Gimbal/gimbal_cad_img-1.png?height=701&width=622",
				title: "Final CAD Design",
				description:
					"The V3 design features a robust assembly of flat water-jet-cut carbon fiber plates joined with box joints to maintain precise orientation during gluing. The front of the gimbal houses both the DJI FPV system and the Zed X Mini Depth Camera, securely mounted for forward-facing visibility. XT30 connectors on the left side provide external access for charging and powering the system, while the pitch-axis BLDC motor is mounted on the right using a PETG-CF 3D-printed bracket for added strength. Behind the central plate lies a custom 3-cell lithium-ion battery pack and BMS, strategically placed to counterbalance the off-axis sensor mass and ensure smooth motion.",
			},
			{
				src: "/2DOF_Gimbal/v2_build.png?height=701&width=622",
				title: "Assembly Process",
				description:
					"The gimbal assembly process, beginning with the integration of the camera, control electronics, and power system into the central housing. Each joint is glued and clamped sequentially, with paper shims used to ensure proper clearance between plates that require relative motion. In the final image, the carbon fiber skin is being fitted and trimmed; it was laid up in a single-piece donut-shaped 3D-printed mold, with cutouts aligned to preformed indentations in the mold for precise fitment.",
			},
			{
				src: "/2DOF_Gimbal/internal_view.mp4",
				title: "A look Inside",
				description:
					"The complete mechatronic assembly of the gimbal, highlighting the integration of mechanical and electrical systems. A magnetic encoder is visible on the back of the roll axis, enabling precise feedback for closed-loop control, while a slip ring allows continuous signal transmission through the roll joint. The custom lithium-ion battery pack is also featured, acting as a counterweight to stabilize the pitch axis and reduce motor load. ",
			},
			{
				src: "/2DOF_Gimbal/external_disturbance.mp4",
				title: "Disturbance Test",
				description:
					"This demonstrates the gimbal operating under field-oriented control (FOC) in closed-loop mode. In early open-loop tests, external disturbances caused the BLDC motor poles to slip, resulting in instability and lost positioning. By incorporating a magnetic encoder for feedback, the system can now actively track and correct the motor’s position in response to external forces. The video clearly shows the motor maintaining its commanded orientation despite physical disturbances, validating the effectiveness of the closed-loop control strategy.",
			},
			{
				src: "/2DOF_Gimbal/roll_stabilized_test.mp4",
				title: "Roll Axis Stabilization",
				description:
					"This video showcases roll axis stabilization using real-time feedback from the onboard IMU. The gimbal maintains level orientation autonomously, demonstrating effective closed-loop control on a single axis. It also highlights the modularity of the system, as the gimbal operates entirely self-contained without any external data cables connected to the rear. This design enables quick integration and testing while simplifying mounting on different platforms.",
			},
			{
				src: "/2DOF_Gimbal/gimbal-video.mp4",
				title: "Full System Integration",
				description:
					"Success! This captures the full operation of the gimbal with both pitch and roll axes actively stabilized. Mounted to its platform, the gimbal responds smoothly to disturbances, maintaining camera orientation with high precision. The synchronized control of both axes demonstrates the effectiveness of the full system integration. This marks a major milestone in validating the design’s stability, responsiveness, and readiness for real-world deployment",
			},
		],
		teamMembers: ["Grant Keefe - Mechatronic Design/Assembly/Prototype Firmware", "Ian Keefe - Production Firmware"],
	},
	{
		id: 4,
		title: "Field Oriented Control Board",
		images: [
			{
				src: "/FOC_Board/failures.png?height=400&width=600",
				title: "PCB Mistakes",
				description:
					"Learning PCB design and best practices was not a perfect process. This image displays the four PCB design iterations developed throughout the gimbal project. The first version was a basic prototype on perfboard, housing only a motor driver and filter for initial testing. The second design introduced a custom PCB but lacked programming breakouts, making firmware development cumbersome. The third iteration, using an ATmega328p, suffered from insufficient compute resources and lacked back-voltage protection, leading to frequent failures when misconnected. The final version integrated an RP2040, which provided ample processing power and reliable performance for running both motor and orientation control loops.",
			},
			{
				src: "/FOC_Board/arduinoUnoPrototype.mp4",
				title: "Testing the 'Bare Bones'",
				description:
					"The first prototype of the gimbal control system, using an Arduino Nano and an L6234 motor driver on a hand-wired prototype board. A potentiometer supplies input, and the Arduino generates three 120-degree out-of-phase PWM signals to control the BLDC motor via duty cycle modulation. The motor’s jumpy and inconsistent response reveals the limitations of open-loop control and the electrical noise introduced by loosely arranged wiring. Unlike later designs with a proper PCB featuring a continuous ground plane, this early version lacked proper grounding and isolation, making it far more susceptible to noise and unstable behavior.",
			},
			{
				src: "/FOC_Board/gimbalpcbprototype2.jpg?height=400&width=600",
				title: "First PCB Shortcomings",
				description:
					"This image highlights the programming challenges encountered with the first PCB iteration. I initially assumed the ATmega328 microcontroller would come pre-flashed with a bootloader, but it did not, which prevented uploading Arduino sketches directly. To resolve this, I had to use a separate Arduino Uno to burn the bootloader onto the chip. Since I hadn’t anticipated this issue, I didn’t include an ICSP header in the design, forcing me to solder wires directly to the SMD pins—an error that made early development unnecessarily tedious.",
			},
			{
				src: "/FOC_Board/v1_2motors.mp4",
				title: "Proof of PCB Design",
				description:
					"The first custom PCB is shown controlling the speed of both gimbal motors. At this stage, the board operates in open-loop mode, simply receiving a PWM signal as input and mapping it to a motor speed by adjusting the duty cycles of the three-phase outputs per motor. It does not directly control angular velocity or respond to feedback—only the input PWM value determines the motor’s behavior. This lack of closed-loop feedback makes the system vulnerable to disturbances and limits its precision and stability.",
			},
			{
				src: "/FOC_Board/feedbackv1.mp4",
				title: "Introducing Feedback",
				description:
					"This video captures the initial attempt to incorporate feedback into the system using a slotted optical optocoupler as a basic encoder. If you watch closely, you can see noticeable choppiness in the motor's motion, which stems from the extremely low resolution of the optical encoder. The limited number of slots provided very coarse positional feedback, making smooth control difficult. While it marked a step toward closed-loop control, the resolution was insufficient for precise or stable gimbal operation.",
			},
			{
				src: "/FOC_Board/3d-render.png?height=400&width=600",
				title: "Final PCB Design",
				description:
					"A rendering of the third and final PCB design, featuring a curved edge that sits flush against the gimbal's center plate, allowing the micro-USB port to protrude cleanly for easy external access. On the right side is the RP2040 microcontroller with its external flash memory positioned above it,. Two dedicated I²C ports are broken out to interface with the magnetic encoders, which have fixed addresses and must be isolated on separate buses. On the left side of the board, the L6234 motor driver is visible alongside voltage dividers used to monitor phase current.",
			},
			{
				src: "/FOC_Board/foc_block.png?height=400&width=600",
				title: "Field Oriented Control",
				description:
					"Field-Oriented Control (FOC) is an advanced motor control technique that precisely regulates torque and magnetic flux in brushless DC motors by transforming phase currents into a rotating reference frame. Unlike simpler control strategies, FOC uses real-time feedback—typically from encoders—to dynamically adjust current inputs, enabling highly responsive and efficient control. This method provides smooth and quiet motor operation, which is particularly valuable in gimbal systems where jitter and vibration can compromise camera stability. FOC also delivers high precision in positioning, making it ideal for maintaining accurate orientation in the presence of external disturbances. Additionally, it improves energy efficiency by applying only the necessary current, reducing power consumption and heat buildup—key benefits for compact, battery-powered UAV payloads. Overall, FOC enables gimbals to achieve superior performance in stabilization, accuracy, and operational reliability.",
			},
			{
				src: "/FOC_Board/FOC_V3_cropped.mp4",
				title: "FOC in Action",
				description:
					"A single BLDC motor running under a field-oriented control (FOC) loop, with a magnetic encoder mounted on top of the motor shaft for position feedback. The setup was used to validate the FOC implementation before full gimbal integration. As the motor spins, the encoder continuously reports angular position, allowing the controller to dynamically adjust phase currents and maintain smooth, precise motion.",
			},
		],
		teamMembers: ["Grant Keefe - Electrical Design/Assembly/Prototype Firmware", "Ian Keefe - Production Firmware"],
	},
	{
		id: 5,
		title: "Autonomous Carbon Dioxide Mapping Robot",
		images: [
			{
				src: "/CO2_Robot/skid_robot.jpeg?height=400&width=600",
				title: "The Robot",
				description:
					"The fully assembled air quality monitoring robot with its key hardware components clearly visible. The chassis is enclosed in a custom 3D-printed shell, offering both protection and a clean aesthetic. Mounted on top is a LiDAR unit used for mapping and localization, alongside visible SHARP sensors for obstacle detection. At the rear or inside the shell, the Raspberry Pi handles processing, while an Arduino Nano and Arduino Uno manage sensor input and motor control, respectively. Wiring is neatly routed to connect the motor drivers, CO2 sensor, speaker, and lighting system, reflecting a well-organized and integrated mechatronic platform.",
			},
			{
				src: "/CO2_Robot/simulationdemo2.png?height=400&width=600",
				title: "Gazebo Simulation",
				description:
					"The simulation was conducted in Gazebo using a virtual model of the air quality monitoring robot to validate mapping, navigation, and control systems before deploying to hardware. The robot operated in a realistic indoor environment where SLAM was used to generate a map, and AMCL localization provided accurate pose estimation within that map. Navigation2 was implemented to plan and execute paths while avoiding simulated obstacles, closely mimicking the challenges of a real-world office setting.",
			},
			{
				src: "/CO2_Robot/SLAM+COST.png?height=400&width=600",
				title: "Mapping and Navigation",
				description:
					"A SLAM-generated occupancy grid map alongside the cost map used for real-time navigation. The SLAM map outlines the robot’s environment with walls, obstacles, and free space, while the overlaid cost map highlights inflated zones around obstacles for safe path planning. Transitioning from simulation to hardware introduced several challenges—most notably, integrating the H-bridge motor drivers with ROS2, which required careful tuning of PWM signals and handling motor direction control. A significant bug also arose from how encoder counts were handled: failing to iteratively clear the counts led to integer overflow as the robot moved, causing incorrect velocity estimates and erratic behavior. These issues emphasized the importance of hardware-aware coding practices and thorough real-world testing after simulation.",
			},
			{
				src: "/CO2_Robot/full_autonomy.mp4",
				title: "Integrating with Hardware",
				description:
					"A live demonstration of the robot autonomously navigating to a user-defined goal pose. In the foreground, RViz2 is displayed with the SLAM map and cost map visible, and a goal pose is dropped using the interactive “2D Nav Goal” tool. Simultaneously, in the background, the physical robot begins moving, calculating an optimal path and avoiding obstacles as it makes its way toward the target location. The smooth coordination between RViz2, Navigation2, and the robot’s onboard systems showcases the successful integration of perception, planning, and control in a real-world environment.",
			},
			{
				src: "/CO2_Robot/HEAT_MAP3.png?height=400&width=600",
				title: "Purpose of the Robot",
				description:
					"The purpose of this air quality monitoring robot is to identify areas within indoor environments where elevated CO2 levels indicate poor ventilation. High concentrations of carbon dioxide can cause symptoms such as headaches, dizziness, and impaired concentration, especially in enclosed spaces with multiple occupants. The robot autonomously navigates through the space, collects CO2 data, and generates heat maps that highlight problematic zones. This enables building operators to locate and address ventilation issues that may not be apparent through static sensors or manual inspection. By continuously monitoring and mapping CO2 levels, the robot supports the maintenance of healthier indoor environments.",
			},
		],
		teamMembers: ["Grant Keefe"],
	},
	{
		id: 6,
		title: "VTOL Design",
		images: [
			{
				src: "/VTOL/build1.jpg?height=400&width=600",
				title: "The Hardware",
				description:
					"The partially assembled VTOL aircraft shows the carbon fiber frame and core components, with the wings not yet fully attached, exposing the internal structure including the front gearbox and rear belt-driven wing mechanism. The electrical system is centered around a Teensy 4.0 microcontroller, supported by a power distribution board for motors and servos. Key inputs like the IMU, GPS, and receiver feed into the system, while PWM outputs control thrust and wing actuation. The layout highlights a clean, functional integration of mechanical and electrical systems in the early stages of the build.",
			},
			{
				src: "/VTOL/wings_actuated.mp4",
				title: "Actuating the Wings",
				description:
					"The wing spars are rotating in response to an RC command, driven by the servos. The movement confirms that the signal from the receiver is correctly processed and transmitted to the actuators. The rotation is steady and matches the input, showing that the linkage and control system are working as expected. This was an early test to verify basic actuation.",
			},
			{
				src: "/VTOL/tail_design.jpeg?height=400&width=600",
				title: "Tail Actuation Design",
				description:
					"The first iteration of the tail belt assembly used to actuate the rear wing spar. The design routes the belt around the bend in the tail but does not include a tensioning mechanism. During early tests, belt skipping was observed under load, which affected the reliability of wing actuation. In later versions, the design was modified to include a belt tensioner to prevent slippage and improve control accuracy.",
			},
			{
				src: "/VTOL/pitch_stablization_early.mp4",
				title: "Initial Tuning",
				description:
					"The initial tuning was done on a single axis by constraining the drone to one degree of freedom using a carbon fiber rod placed between two wooden blocks. This setup allowed for controlled testing of the pitch axis response to PID inputs. Although the friction from the rod introduced some interference, it served as a useful starting point for establishing baseline PID values. Despite its limitations, the test provided valuable insight into the system’s dynamic behavior.",
			},
			{
				src: "/VTOL/stabilize_on_univers.mp4",
				title: "Tuning on a Universal Joint",
				description:
					"After completing the roll axis tuning, we transitioned to tuning the control loops using a universal socket wrench joint to allow for more realistic multi-axis movement. This setup provided greater freedom of motion while still keeping the system constrained enough for safe testing. Through repeated adjustments to the PID values, the system gradually became more stable and responsive. The final tuning results show that it can now handle significant external disturbances without losing control.",
			},
			{
				src: "/VTOL/vtol_plane_mode1.jpeg?height=400&width=600",
				title: "Full VTOL Assembly",
				description:
					"The wings were 3D printed in lightweight PLA to minimize overall mass and reduce the impact on flight dynamics. This picture shows the fully assembled prototype with all major components integrated, including the printed wings mounted to the actuation system. The use of PLA kept the structure light while still providing enough rigidity for basic testing. This final assembly marked the transition from subsystem testing to full system integration.",
			},
			{
				src: "/VTOL/stabilization_with_wings.mp4",
				title: "Lessons Learned",
				description:
					"The maneuverability and stability of quad rotor mixed with the efficiency of fixed wing flight. The design is novel and was proven not feasible in the given time frame. I underestimated the difficulties of active stabilization and in the process learned about the importance of integrating passive stability into aircraft design. The motors were not able to generate enough torque to vector thrust with enough speed to dampen the oscillations for the quadcopter to fixed wing transition. Although we failed to achieve this goal in the time frame, we were able to maintain stable quadcopter flight and accurate wing actuation and positioning.",
			},
		],
		teamMembers: ["Grant Keefe Mechatronic Design/Assembly/Drehm Flight Firmware/Tuning", "Ian Keefe - Remote integration/Drehm Flight Firmware/Tuning"],
	},
	{
		id: 7,
		title: "Semi-Autonomous Robot Design",
		images: [],
		teamMembers: ["Grant Keefe", "Tony Yang"],
	},
	{
		id: 8,
		title: "Canadian UAS Competition",
		images: [
			{
				src: "/Canadian_UAS/team.jpeg?height=2304&width=2880",
				title: "Dream Team",
				description:
					"It is important to recognize how much of a team project this was, without this group of amazing engineering students none of this would have been possible. Although everyone had a defined role, cross-discipline collaboration was key to our success. I am sharing our process and results here to highlight the work we did together. It is hard to put into words the amount of hours and effort that this team put into this project, but I am proud to have been a part of it. More about the team members can be found below.",
			},
			{
				src: "/Canadian_UAS/design.mp4",
				title: "First Conceptual Design",
				description:
					"This graphic was created by William Conway for the team’s first conceptual design review. The outer mold line was developed by the aerodynamics team, led by Will, as part of the initial airframe shaping process. The design required close cross-discipline collaboration, with input from avionics, power systems, and structures to determine component placement and weight distribution. ",
			},
			{
				src: "/Canadian_UAS/VTOL_internal.jpg?height=400&width=600",
				title: "Urban Transport",
				description:
					"I created this graphic at the end of the project to clearly illustrate the design layout and overall purpose of the aircraft. It highlights the placement of key components, including the battery pack, power distribution board, onboard computer, gimbal, and passenger cabin. The visual helps communicate how each subsystem fits within the airframe and supports the mission objectives. It also reinforces the core intent of the competition—to simulate the real-world challenges of urban air mobility and autonomous passenger transport.",
			},
			{
				src: "/Canadian_UAS/internal.jpeg?height=400&width=600",
				title: "The Build",
				description:
					"Mateo Schwartz-Mendez designed a clever interlocking carbon fiber internal structure that formed the backbone of the airframe. This structure provided strength, rigidity, and precise alignment for component mounting while keeping weight low. The first phase of the build process began with the cutting of these parts on a water jet, marking the transition from design to fabrication.",
			},
			{
				src: "/Canadian_UAS/internal_assem.jpeg?height=400&width=600",
				title: "Internal Assembly",
				description:
					"The beauty of this design is clearly shown in this picture—none of the pieces are glued in place yet, as the entire structure is held together through precise friction fits. The interlocking geometry allows the parts to self-align and hold their shape even before adhesive is applied. This not only highlights the precision of the water-jet cutting and design work but also makes the gluing process much easier and more accurate. It's a great example of smart structural design simplifying assembly.",
			},
			{
				src: "/Canadian_UAS/batts.png?height=400&width=600",
				title: "6S 5P Li-ion Battery Pack",
				description:
					"In parallel with the mechanical assembly, the electrical system was being developed—this became my main technical responsibility after our dedicated electrical lead stepped away from the team for personal reasons. My first task was designing the lithium-ion battery packs, which we chose for their superior energy density compared to LiPo alternatives. I spot-welded two 6-cell, 5-parallel (6S5P) battery packs, carefully assembling them to meet our endurance and power requirements. We opted not to include an onboard battery management system (BMS) due to weight and cost constraints. Instead, balance leads were soldered to each cell group for external monitoring and balancing. In hindsight, using a BMS on the charging end could have streamlined our workflow during competition by enabling faster, safer charging without needing to remove the batteries.",
			},
			{
				src: "/Canadian_UAS/pdb.jpeg?height=400&width=600",
				title: "Power Distribution Board",
				description:
					"The power distribution board was my first-ever PCB design, and as a result, it had several shortcomings. The board was intended to manage system power, monitor voltage and current, and supply 12V and 5V rails via buck converters rated for 10A and 5A output, respectively. However, the buck converters underperformed under load, likely due to excessive loop lengths and not following the datasheet’s recommended layout closely enough. The current sensor also failed to integrate properly with the flight control firmware as intended. After designing a similar board for a separate project, I’ve since learned that the necessary firmware modifications are relatively straightforward. Despite these issues, many parts of the board functioned well—most notably, the low-side N-channel MOSFET switching, which proved to be a useful and reliable feature.",
			},
			{
				src: "/Canadian_UAS/iron_bird.jpeg?height=400&width=600",
				title: "Iron Bird Testing",
				description:
					"I then wired the full electrical system onto a piece of plywood to create an 'iron bird' test setup. This approach is commonly used to verify that power distribution, control surfaces, the flight control unit (FCU), and all connected peripherals function correctly before integration into the airframe. It also allows for testing the system under realistic load conditions to confirm stable operation. This step was critical for catching wiring or configuration issues early in a controlled environment.",
			},
			{
				src: "/Canadian_UAS/avionics_power_on.mp4",
				title: "Internal Wiring",
				description:
					"This image shows the internal electrical system being added to the mechanical assembly for a test fit. The goal was to verify cable lengths, connector alignment with external panels, and overall layout before final integration. Since much of the wiring and power distribution needed to be in place before gluing the carbon fiber skin over the internal structure, this step was critical. Full system testing at this stage ensured that everything would be accessible and functional after final assembly.",
			},
			{
				src: "/Canadian_UAS/glue_fues.jpeg?height=400&width=600",
				title: "Semi-Monocoque Fuselage",
				description:
					"The mechanical team, led by Mateo, chose a semi-monocoque design to significantly increase the structural rigidity of the airframe. While effective, the gluing process for this design proved to be extremely challenging. The epoxy had a one-hour set time, and both the internal structure and carbon fiber skin had to be glued in a single attempt to ensure proper alignment. To achieve this, all components were clamped together using the same molds that had been used for the carbon fiber layups.",
			},
			{
				src: "/Canadian_UAS/wing_assem.jpeg?height=400&width=600",
				title: "Wing Assembly",
				description:
					"The wings were assembled using a similar process, built around two large carbon fiber wing spars and laser-cut wooden ribs for structural support. Telemetry and airspeed sensor cables were routed through the internal structure during assembly and glued into place to ensure secure and clean integration. This approach allowed the wings to maintain a lightweight yet rigid construction. Careful planning was required to ensure all internal components were positioned correctly before final bonding.",
			},
			{
				src: "/Canadian_UAS/all_together.mp4",
				title: "A Complete Aircraft",
				description:
					"A look at the fully assembled aircraft, showcasing the completed airframe with wings attached and all internal components integrated. The design features a sleek, aerodynamic profile with the carbon fiber skin providing both strength and weight savings. The aircraft is now ready for final system checks and flight testing, marking a significant milestone in the project.",
			},

			{
				src: "/Canadian_UAS/wingless_flight_test.mp4",
				title: "Initial Flight Test",
				description:
					"Intitially, we conducted flight tests without the wings to validate the flight control system and ensure stable operation. This approach allowed us to focus on tuning the quadcopter's flight characteristics without the added complexity of wing aerodynamics. The test was successful, demonstrating that the core flight control algorithms were functioning as intended and that the aircraft could maintain stable hover and controlled flight.",
			},
			{
				src: "/Canadian_UAS/crash.jpeg?height=400&width=600",
				title: "Maiden Flight Crash",
				description:
					"This picture shows the damage sustained during our first transition test, which ended in a significant crash. The failure was caused by strong gusts that introduced external disturbances, ultimately leading to a stall mid-transition. In hindsight, we should not have flown that day—wind conditions were unfavorable, but the pressure of limited testing time before team members left for the summer influenced the decision. The combination of a tight timeline and fatigue led to poor judgment on my part, and it’s a mistake I’ve taken seriously and will not repeat.",
			},
			{
				src: "/Canadian_UAS/repair.jpeg?height=400&width=600",
				title: "Sleepless Repair",
				description:
					"After the crash, extensive repairs were required in the weeks leading up to the competition to salvage the work we had put in over the year. One of our team members, Sam Williamson, stayed at my house during this period to help with the rebuild. The process involved many late nights, as we worked to restore the aircraft while also managing full-time job commitments. The resulting sleep deprivation was intense and unlike anything I had experienced before, but it was a necessary push to get the project flight-ready in time.",
			},
			{
				src: "/Canadian_UAS/post_crash_test.mp4",
				title: "Post-Crash Testing",
				description:
					"This video captures a flight test conducted in Nova Scotia following the crash and subsequent repair efforts. It shows the aircraft back in the air, successfully completing basic maneuvers and demonstrating that critical systems—flight control, power distribution, and structural integrity—had been restored. The flight marked a major milestone in confirming the effectiveness of the repairs made under tight time and resource constraints. It was a reassuring moment for the team, proving that the project could still move forward despite the earlier setback.",
			},
			{
				src: "/Canadian_UAS/competition.jpeg?height=400&width=600",
				title: "Competition Day",
				description:
					"The competition was an incredible experience, offering the chance to see how other teams approached the same problem with different design philosophies and technical strategies. It was both humbling and inspiring to observe the ingenuity, as well as the surprising similarities, across various solutions. Being surrounded by like-minded individuals who shared a passion for UAV design and problem-solving created a collaborative and motivating atmosphere.",
			},
			{
				src: "/Canadian_UAS/runway.jpeg?height=400&width=600",
				title: "Lessons Learned",
				description:
					"This project taught me the importance of sound judgment under pressure—rushing flight tests in poor weather due to time constraints led to avoidable failure. It reinforced the value of thorough pre-integration testing, like iron bird setups and load testing, which help catch critical issues before final assembly. Working on my first PCB highlighted how essential good layout practices and serviceability features are, especially for power systems. I also learned that simulation alone is not enough; many issues only become apparent during physical testing. Above all, the experience underscored the importance of collaboration, as the project could not have been salvaged without the dedication and support of teammates during intense repair efforts.",
			},
		],
		teamMembers: ["Co-Captain – Grant Keefe", "Co-Captain – Ryan Berry", "Perception – Conor Spalvieri", "Avionics, Firmware – Ian Keefe", "Navigation – Gabe David", "Aerodynamics & Propulsion – William Conway", "Structures & Manufacturing – Mateo Schwartz-Mendez", "CAD Wizard - James Gullberg", "Aerodynamics Wizard - Sam Williamson"]
	},
	{
		id: 9,
		title: "Internatioanal Micro Air Vehicles Competition",
		images: [
			{
				src: "/IMAV/Competition_team.jpg?height=400&width=600",
				title: "The Team",
				description:
					"From left to right, the photo shows Conor Spalvieri, me, Gabe David, and Ryan Berry. Not pictured is Ian Keefe, who was unable to attend the competition in person. Despite that, he remained a key member of the team and stayed connected over FaceTime for nearly the entire event. His remote support was critical throughout the competition.",
			},
			{
				src: "/IMAV/drone_bottom.png?height=400&width=600",
				title: "Final Design",
				description:
					"The final design featured a Raspberry Pi 4B as the onboard computer, integrated with two cameras, an optical flow sensor, a range finder, a Pixhawk 6C autopilot, and a proximity-triggered gripper for object interaction. A notable addition was a battery hot-swap circuit that used a diode and secondary battery to maintain power to the avionics during main battery changes—critical for minimizing downtime during the competition. I was responsible for the full design and physical build of the drone, from component integration to airframe assembly. Meanwhile, the rest of the team focused on setting up and refining the simulation environment.",
			},
			{
				src: "/IMAV/line_follow.mp4",
				title: "Initial Line Following Sim",
				description:
					"The first controls problem the team focused on was line following, as it formed the foundation for all other tasks and needed to be reliable. The initial Gazebo simulation was a simple environment consisting only of a flat floor with lines placed in their correct positions. This video demonstrates our approach, where we used the intersection of the line with a virtual circle projected from the drone to determine both the direction of the line and whether it was in front of or behind the drone. This method provided a consistent reference for heading correction and decision-making during navigation.",
			},
			{
				src: "/IMAV/test_sim.png?height=400&width=600",
				title: "Full Lap Simulation",
				description:
					"Eventually, the team progressed to simulating the entire mission lap in Gazebo, though unfortunately no one captured a video of it. The full simulation included all major tasks required for competition: flying through gates, landing precisely on ArUco codes, picking up cones using the gripper, and imaging screens placed at specific locations. This environment allowed for end-to-end testing of navigation, perception, and control logic. It was a critical step in validating system performance before transitioning to real-world testing.",
			},
			{
				src: "/IMAV/air-bnb-test.jpeg?height=400&width=600",
				title: "Last minute testing",
				description:
					"As with most robotics projects, the transition from simulation to real-world testing was not smooth—and in hindsight, it shouldn’t have been left so close to the competition. We encountered coordinate system mismatches that affected the line-following logic, which in turn made PID tuning slow and inconsistent. These issues limited the amount of productive flight time we had before the event. As a result, some last-minute testing and tuning had to be done in the Airbnb at the competition site, under less-than-ideal conditions.",
			},
			{
				src: "/IMAV/IMAV-2024-Bristol-Indoor-Drone-Competition_BMS5970_.JPG?height=400&width=600",
				title: "Final Hardware",
				description:
					"The final hardware setup included all the components integrated and tested together. This photo shows the drone ready for the competition, with all sensors and no gripper attached. We did not have time to fully integrate the gripper before the event, so it was left off during the competition.",
			},
			{
				src: "/IMAV/IMAV-2024-Bristol-Indoor-Drone-Competition_BMS5956_.JPG?height=400&width=600",
				title: "Competition Day",
				description:
					"The team performed well, placing 2nd among the undergraduate teams—a strong result given the challenges we faced. The competition was a lot of fun and provided a great opportunity to see how our system stacked up against others. More importantly, it clearly highlighted the true difficulty of transitioning from a controlled simulation environment to the unpredictable nature of real-world robotics.",
			},
		],
		teamMembers: ["Grant Keefe", "Ryan Berry", "Conor Spalvieri", "Ian Keefe", "Gabe David"],
	},
]

export default function ProjectPage({ params }: { params: { id: string } }) {
	const router = useRouter()
	const projectId = parseInt(params.id)

	if (projectId === PDF_PROJECT_ID) {
		return (
			<main className="container mx-auto px-4 py-12 flex flex-col items-center">
				<h1 className="text-3xl font-bold mb-6">Semi-Autonomous Robot Design</h1>
				<iframe
					src={PDF_URL}
					width="100%"
					height="800px"
					style={{ border: "none" }}
					title="Semi-Autonomous Robot Design PDF"
				/>
				<button
					className="mt-6 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
					onClick={() => router.push("/")}
				>
					Back to Projects
				</button>
			</main>
		)
	}

	const project = projects.find((p) => p.id === projectId)

	if (!project) {
		return <p>Project not found</p>
	}

	return (
		<main className="container mx-auto px-4 py-12">
			{/* Title and Back Button */}
			<div className="flex justify-between items-center mb-8">
				<h1 className="text-4xl font-bold bg-gray-100 px-6 py-3 rounded-lg border border-gray-300">
					{project.title}
				</h1>
				<button
					className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
					onClick={() => router.push("/")}
				>
					Back to Projects
				</button>
			</div>

			{/* Images and Paragraphs */}
			<div className="flex flex-col gap-8">
				{project.images.map((media, index) => (
					<div
						key={index}
						className={`flex flex-col md:flex-row ${
							index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
						} items-center gap-8`}
					>
						<div className="flex-1">
							{media.src.endsWith(".mp4") ? (
								<video controls className="rounded-lg w-full">
									<source src={media.src} type="video/mp4" />
									Your browser does not support the video tag.
								</video>
							) : (
								<img
									src={media.src}
									alt={media.title ? media.title : `${project.title} image ${index + 1}`}
									className="rounded-lg w-full"
								/>
							)}
						</div>
						<div className="flex-1">
							{/* Show individual image title if present, otherwise fallback */}
							<div className="mb-2">
								<span className="font-bold text-3xl">
									{media.title ? media.title : `Image ${index + 1}`}
								</span>
							</div>
							<p className="text-xl">{media.description}</p>
						</div>
					</div>
				))}
			</div>

			{/* team Section */}
			<h3 className="text-3xl font-bold mt-12 mb-2">Team Members:</h3>
			<ul className="list-disc list-inside">
				{project.teamMembers.map((member, index) => (
					<li key={index} className="text-xl text-gray-800">{member}</li>
				))}
			</ul>
		</main>
	)
}