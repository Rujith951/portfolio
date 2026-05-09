import {
	mobile,
	backend,
	creator,
	web,
	javascript,
	typescript,
	html,
	css,
	sassy,
	mui,
	gsap,
	reactjs,
	nextJs,
	redux,
	tailwind,
	nodejs,
	// mongodb,
	git,
	// figma,
	docker,
	sketch,
	sustlabs,
	carrent,
	jobit,
	tripguide,
	tharra,
	health,
	movies,
	tmdb,
	emc,
	credilinq,
} from "../assets";

export const navLinks = [
	{
		id: "about",
		title: "About",
	},
	{
		id: "work",
		title: "Work",
	},
	{
		id: "contact",
		title: "Contact",
	},
];

const services = [
	{
		title: "Web Developer",
		icon: web,
	},
	{
		title: "React Native Developer",
		icon: mobile,
	},
	{
		title: "Backend Developer",
		icon: backend,
	},
];

const technologies = [
	{
		name: "HTML 5",
		icon: html,
	},
	{
		name: "CSS 3",
		icon: css,
	},
	{
		name: "Sassy",
		icon: sassy,
	},
	{
		name: "MUI",
		icon: mui,
	},
	{
		name: "GSAP",
		icon: gsap,
	},
	{
		name: "JavaScript",
		icon: javascript,
	},
	{
		name: "TypeScript",
		icon: typescript,
	},
	{
		name: "React JS",
		icon: reactjs,
	},
	// {
	// 	name: "Next JS",
	// 	icon: nextJs,
	// },
	{
		name: "Redux Toolkit",
		icon: redux,
	},
	{
		name: "Tailwind CSS",
		icon: tailwind,
	},
	{
		name: "Node JS",
		icon: nodejs,
	},
	// {
	// 	name: "MongoDB",
	// 	icon: mongodb,
	// },
	{
		name: "git",
		icon: git,
	},
	// {
	// 	name: "figma",
	// 	icon: figma,
	// },
	{
		name: "docker",
		icon: docker,
	},
];

const experiences = [
	{
		title: "React.js Developer",
		company_name: "Sketch Brahma Technologies",
		icon: sketch,
		iconBg: "#383E56",
		date: "February 2024 - May 2025",
		points: [
			"Developing and maintaining web applications using React.js and other related technologies.",
			"Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
			"Implementing responsive design and ensuring cross-browser compatibility.",
			"Participating in code reviews and providing constructive feedback to other developers.",
		],
	},
	{
		title: "Web Developer",
		company_name: "Sustlabs",
		icon: sustlabs,
		iconBg: "#383E56",
		date: "August 2025 - Present",
		points: [
			"Developing and maintaining web applications using Next.js and other related technologies.",
			"Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
			"Implementing a product for energy consumption and ensuring cross-browser compatibility.",
			"Participating in code reviews and providing constructive feedback to other developers.",
		],
	},
];

const testimonials = [
	{
		testimonial:
			"I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
		name: "Sara Lee",
		designation: "CFO",
		company: "Acme Co",
		image: "https://randomuser.me/api/portraits/women/4.jpg",
	},
	{
		testimonial:
			"I've never met a web developer who truly cares about their clients' success like Rick does.",
		name: "Chris Brown",
		designation: "COO",
		company: "DEF Corp",
		image: "https://randomuser.me/api/portraits/men/5.jpg",
	},
	{
		testimonial:
			"After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
		name: "Lisa Wang",
		designation: "CTO",
		company: "456 Enterprises",
		image: "https://randomuser.me/api/portraits/women/6.jpg",
	},
];

const projects = [
	{
		name: "Energy Management Console",
		description:
			"Developed a scalable energy monitoring and management platform using Next.js, and MUI. Built dashboards to visualize real-time energy consumption, device performance, and analytics data. Integrated REST APIs for live data updates, implemented reusable components, optimized application performance, and ensured seamless user experience across devices.",
		tags: [
			{
				name: "Next.js",
				color: "blue-text-gradient",
			},
			{
				name: "restapi",
				color: "green-text-gradient",
			},
			{
				name: "MUI",
				color: "pink-text-gradient",
			},
		],
		image: emc,
		source_code_link: "https://emc.staging.sustlabs.com/onboarding/login",
		comp: sustlabs,
	},
	{
		name: "Credilinq.ai",
		description:
			"Contributed to the development of responsive and user-friendly web pages for Credilinq.ai using React.js and SCSS. Worked on building and enhancing two key pages with reusable components, optimized UI performance, and ensured cross-browser compatibility while maintaining clean and scalable code.",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "scss",
				color: "pink-text-gradient",
			},
		],
		image: credilinq,
		source_code_link: "https://credilinq.ai/",
		comp: sketch,
	},
	{
		name: "Tharra",
		description:
			"Tharra is a brand of spirits. Tharra crafts unique spirits infused with iconic Indian ingredients, such as Jamun, Paani, and Bael. Tech Stack: ReactJS, SCSS. Features: Responsive, location Based Search, Animations, Google Analytics, Email Updates, Contact Us.",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "scss",
				color: "pink-text-gradient",
			},
		],
		image: tharra,
		source_code_link: "https://tharra.co/",
		comp: sketch,
	},
	{
		name: "Health-Asyst",
		description:
			" Asyst is a React-based desktop application designed for hospital receptionists to efficiently track and manage patient details. It streamlines the check-in process, ensuring seamless patient registration, data retrieval, and appointment management.",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "restapi",
				color: "green-text-gradient",
			},
			{
				name: "scss",
				color: "pink-text-gradient",
			},
		],
		image: health,
		source_code_link: "https://checkin-asyst.vercel.app/",
		comp: sketch,
	},
	{
		name: "Movies Bucket",
		description:
			"Developed a movie browsing application using Next.js and SCSS for a responsive UI. Integrated TMDB API to fetch movie data and implemented debouncing for efficient search functionality. Added pagination for seamless navigation and incorporated user login/logout functionality for personalized experiences. Built a user-friendly platform for discovering and exploring movies.",
		tags: [
			{
				name: "Next.js",
				color: "blue-text-gradient",
			},
			{
				name: "restapi",
				color: "green-text-gradient",
			},
			{
				name: "tailwind",
				color: "pink-text-gradient",
			},
		],
		image: movies,
		source_code_link: "https://applyo-roan.vercel.app/login",
	},
	{
		name: "Tmdb",
		description:
			"Developed a movie browsing application using React and SCSS for a responsive UI. Integrated TMDB API to fetch movie data and implemented debouncing for efficient search functionality. Added pagination for seamless navigation and incorporated user login/logout functionality for personalized experiences. Built a user-friendly platform for discovering and exploring movies.",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "restapi",
				color: "green-text-gradient",
			},
			{
				name: "tailwind",
				color: "pink-text-gradient",
			},
		],
		image: tmdb,
		source_code_link: "https://tmdb-movies-ui.vercel.app",
	},
];

export { services, technologies, experiences, testimonials, projects };
