
import profile from './profile.png';
import { faAppStore, faGithub, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
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
	description: "A Graduate Research Assistant at the Telecommunications and Social Informatics Program.",
	image: profile.src,
	buttons: [
		{
			title: "Contact Me",
			link: "#contact",
			isPrimary: true,
		},
		{
			title: "Resume",
			link: "https://drive.google.com/file/d/1SqIrT1bMrcBVhsZbhHFue8Z0XZNForOF/view?usp=sharing",
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
	title: "What I do",
	cards: [
		{
			title: "Graduate Research Assistant",
			description: "Documented the process of configuring SAS technologies on-prem at UHTASI. Wrote python/bash scripts to aggregate logs and report expiring licenses, consumables, and assets. Deployed a centralized management system for malware scans.",
			icons: null,
		},
		{
			title: "System Support Assistant I",
			description: "Migrated legacy websites, automated software downloads with Chocolatey, tracked and remediated malware on workstations, reconfigured legacy servers, installed and tested network hardware, and reviewed security camera logs.",
			icons: null,
		},
		{
			title: "Help Desk",
			description: "Troubleshooted issues with servers, applications (software & hardware) and other systems. Performed routine maintenance tasks, such as applying patches and updates.",
			icons: null,
		}
	],
}

export const projects = {
	title: "Projects",
	cards: [
		{
			title: "Massively Learning Activities",
			description: "A comprehensive document detailing the configuration process for a hyper-converged infrastructure deployed on-premises at TASI.",
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
	description: "Please do not hesitate to schedule a meeting. Alternatively, feel free to reach out directly by email at inwoo at hawaii dot edu.",
	buttons: [
		{
			title: "Email Me",
			link: "mailto:inwoo@hawaii.edu",
			isPrimary: true,
		},
		{
			title: "Schedule Meeting",
			link: "",
			isPrimary: false,
		},
	]
}

// SEARCH ENGINE
export const SEO = {
	// 50 - 60 char
	title: "In Woo Park | Graduate Research Assistant | System Operations | Help Desk",
	description: "A Graduate Research Assistant at the Telecommunications and Social Informatics Program.",
	image: profile.src,
}

export const links = {
	image: profile.src,
	title: "@inwoo",
	description: "Graduate Research Assistant | System Operations | Help Desk",
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