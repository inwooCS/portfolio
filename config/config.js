
import profile from './profile.png';
import { faAppStore, faGithub, faGooglePlay, faAws, faCompTia } from '@fortawesome/free-brands-svg-icons';
import { } from '@fortawesome/free-solid-svg-icons';

export const navigation = {
	name: "In Woo",
	links: [
		{
			title: "About",
			link: "#about",
		},
		{
			title: "Projects",
			link: "#projects",
		},
		{
			title: "Contact",
			link: "#contact",
		},
		{
			title: "Links",
			link: "/links",
		},
	],
}
export const intro = {
	title: "In Woo Park",
	description: "Greetings! Armed with a Master's and Bachelor's degree in Computer Science, I bring a wealth of knowledge and expertise to the realm of information technology and DevOps. My professional journey has been marked by a dedication to excellence and a commitment to staying abreast of the latest technological advancements. I specialize in leveraging my skills to drive innovation and efficiency in IT operations.",
	description2: "I am fervently driven to chart a path in IT, DevOps, or cybersecurity, where my passion for technology and knack for problem-solving can flourish. Delve into my resume below or connect with me on LinkedIn to explore how we can collaborate for mutual success!",
	image: profile.src,
	image2: profile.src,
	buttons: [
		{
			title: "Contact Me",
			link: "#contact",
			isPrimary: true,
		},
		{
			title: "Resume",
			link: "https://drive.google.com/file/d/1ZhVfGvIJAl4fgeYftpUZkD0DeSm3zKnM/view?usp=sharing",
			isPrimary: false,
		},
	],
}

export const about = {
	title: "Who I am",
	description: [
		"Aloha, I graduated from the University of Hawaii at Manoa in 2023 with a Master's in Computer Science.",
		"For my Master's Capstone Project, I created a comprehensive document detailing the configuration process for a hyper-converged infrastructure deployed on-premises at TASI. The goal was to establish a reliable and efficient software-as-a-service platform to support SAS technologies for various agencies operating in the Pacific islands.",
		"I am eager to pursue a career in the cybersecurity and infrastructure fields of information technology within the Department of Defense located in Hawaii.",
	],
}

export const work = {
	title: "What I do & have done",
	cards: [
		{
			title: "Sr. IT Specialist - Telecom Administrator",
			description: "Configured and managed government-funded equipment (GFE) devices, encompassing unclassified desk phones, SVoIPs, iPhones, and Android tablets. Installed, maintained, and troubleshooted ECVoIP phones across HQ-INDOPACOM.",
			icons: null,
		},
		{
			title: "Communications Focal Point",
			description: "Monitored and followed trends related to operational security, and collaborated with various departments for prompt resolution. Developed and managed a standard operating procedure (SOP) utilized for onboarding, training, and troubleshooting up to Tier 2 incidents.",
			icons: null,
		},
		{
			title: "IT Systems Support",
			description: "Migrated websites, automated downloads, tracked malware, configured servers, installed hardware, and performed maintenance in IT Ops and DevOps. Additionally, troubleshooted server and application issues, and lead DevOps projects like ELK Stack deployment and Docker sandboxing.",
			icons: null,
		}
	],
}

export const certifications = {
	title: "Certifications",
	cards: [
		{
			title: "Linux+",
			description: "Demonstrating a foundational understanding of Linux administration and operation, enabling effective management of diverse IT environments.",
			icons: [
				{
					icon: faAws,
					link: "https://github.com/inwoocs/Massively-Learning-Activities",
				},
			]
		},
		{
			title: "Security+",
			description: "Demonstrating an understanding of foundational cybersecurity principles and practices to safeguard digital assets and mitigate risks.",
			icons: [
				{
					icon: faGithub,
					link: "https://github.com/inwooCS/ICS632_High-Performance-Computing",
				},
			]
		},
		{
			title: "AWS Developer - Associate",
			description: "Demonstrating a understanding of designing, developing, and deploying scalable applications on the Amazon Web Services (AWS) cloud platform.",
			icons: [
				{
					icon: faAws,
					link: "https://github.com/inwooCS/ICS635_Machine-Learning",
				},
			]
		},
	],
}

export const projects = {
	title: "Projects",
	cards: [
		{
			title: "Massively Learning Activities",
			description: "A document detailing the configuration process of SAS technologies on-prem at UHTASI, to provide SaaS data analytics for agencies in the Pacific Islands.",
			icons: [
				{
					icon: faGithub,
					link: "https://github.com/inwoocs/Massively-Learning-Activities",
				},
			]
		},
		{
			title: "High Performance Computing",
			description: "A coding assignment that teaches students how to parallelize in POSIX C using OpenMP and MPI using a simplified Brute Force Dictionary Attack.",
			icons: [
				{
					icon: faGithub,
					link: "https://github.com/inwooCS/ICS632_High-Performance-Computing",
				},
			]
		},
		{
			title: "Machine Learning and AI",
			description: "TrashGO: Garbage locator (concept) using transfer learning object detection YOLO, CNN, and re-purposed Amazon Scouts. Other ML projects such as Kaggle: Titanic Survival Probability.",
			icons: [
				{
					icon: faGithub,
					link: "https://github.com/inwooCS/ICS635_Machine-Learning",
				},
				{
					icon: faGithub,
					link: "https://github.com/inwooCS/ICS691_Human-Centered-AI",
				},
			]
		},
	],
}



export const contact = {
	title: "Get in touch",
	description: "Feel free to reach out directly by email at inwoo at hawaii dot edu and schedule a meeting with me about any opportunities.",
	buttons: [
		{
			title: "Send Email",
			link: "mailto:inwoo@hawaii.edu",
			isPrimary: true,
		},
		{
			title: "Resume",
			link: "https://drive.google.com/file/d/1SqIrT1bMrcBVhsZbhHFue8Z0XZNForOF/view?usp=sharing",
			isPrimary: false,
		},
	]
}

// SEARCH ENGINE
export const SEO = {
	// 50 - 60 char
	title: "In Woo Park | Sr. IT Specialist - Telecom Administrator",
	description: "Sr. IT Specialist - Telecom Administrator.",
	image: profile.src,
}

export const links = {
	image: profile.src,
	title: "@inwoo",
	description: "Sr. IT Specialist - Telecom Administrator",
	cards: [
		{
			title: "My website",
			link: "https://inwoocs.github.io/",
		},
		{
			title: "My GitHub",
			link: "https://github.com/inwoocs/",
		},
		{
			title: "My LinkedIn",
			link: "https://www.linkedin.com/in/inwoopark/",
		},
	]
}