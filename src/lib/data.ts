export const portfolioData = {
	name: 'Ramiro Ignacio Rios Lopez',
	role: 'Information Systems Engineer & Full-Stack Developer',
	about:
		'Software Engineer with 3+ years of experience specializing in backend architecture, robust RESTful APIs, and relational databases. Proven track record of scaling critical public-sector health systems and building full-stack products for global markets. Adept at navigating both structured enterprise environments and fast-paced startup lifecycles. Certified in Cloud & AI solutions with native Spanish and C2 English fluency.',
	resumeUrlEn: 'https://drive.google.com/uc?export=download&id=1KHRxwvCZPunF9ZRuIh_DEc4nYOXWhpDm',
	resumeUrlEs: 'https://drive.google.com/uc?export=download&id=1LL-d-4q5phnJbJIgbr14OQ8AOVlWaxxA',
	experience: [
		{
			role: 'Full-Stack Software Engineer',
			company: 'Contract / Freelance',
			period: '2025 — Present',
			description:
				'Architected and delivered end-to-end production web applications from scratch for institutional clients.',
			bullets: [
				'Engineered a reporting system ("Ciudad Reporta") using a high-performance Go backend, SvelteKit dashboard, and PostgreSQL.',
				'Designed a secure portal for a Biochemists association with 150+ associates, automating registration and migrating legacy FoxPro data.',
				'Built a legacy data-parsing engine for an Odontologists organization with 150+ associates, completely eliminating manual invoice retrieval and printing workflows for the administration.',
				'Translated complex stakeholder requirements into clean database schemas and scalable software architectures.'
			]
		},
		{
			role: 'Software Engineer',
			company: 'Ensolvers',
			period: 'September 2025 — April 2026',
			description:
				'Maintained and shipped full-stack features for global B2B SaaS products like Hyros (MarketHero) and Hirelens.',
			bullets: [
				'Scaled core product features utilizing Java, Spring Boot, React, and MySQL under rapid release cycles.',
				'Managed application containerization and optimized local development workflows using Docker, AWS, and Vite.',
				'Partnered with international, cross-functional teams in an agile environment to deliver production-ready code.'
			]
		},
		{
			role: 'Software Developer',
			company: 'Ministry of Health of La Rioja',
			period: 'April 2023 — Present',
			description:
				'Scaling the backend infrastructure of the public health record system (HSI) serving the entire province.',
			bullets: [
				'Architected and deployed critical new endpoints for a high-throughput enterprise RESTful API built on Java and Spring Framework.',
				'Modernized legacy architecture by systematically refactoring monolithic, high-complexity classes, significantly improving codebase maintainability and onboarding times.',
				'Shipped 4,000+ lines of production code, implementing core reporting engines and healthcare assessment modules.'
			]
		},
		{
			role: 'IT Technician & Entrepreneur',
			company: 'Hardware Startup',
			period: '2020 — Present',
			description:
				'Founded and operated a local hardware retail and systems optimization micro-enterprise.',
			bullets: [
				'Managed end-to-end technical logistics, hardware assembly, and OS optimization for 100+ clients.',
				'Directed inventory sourcing, component testing, and competitive pricing strategies for a self-sustaining side hustle.'
			]
		}
	],
	education: [
		{
			degree: 'B.S. in Information Systems Engineering',
			institution: 'National University of La Rioja',
			period: '2019 — 2026',
			details:
				"Focus on software development quality cycles and ISO/CMMI standards. Thesis project: 'Ciudad Reporta' — a comprehensive backend (Go) and frontend (SvelteKit) City Maintenance Reporting System."
		},
		{
			degree: 'C2 Proficient (English)',
			institution: ' EF Education First',
			period: '2023',
			details: 'EFSET English Certificate (Score: 77/100)'
		},
		{
			degree: 'Huawei Seeds for the Future 2024 – Program Graduate',
			institution: 'Huawei',
			period: '2024',
			details: 'HCIA AI, Cloud & 5G'
		},
		{
			degree: 'HCIA-Cloud Training & Exam Certificate',
			institution: 'Huawei',
			period: '2024',
			details: 'Huawei Global Training Center (2024)'
		},
		{
			degree: 'HCIA-AI Training & Exam Certificate',
			institution: 'Huawei',
			period: '2024',
			details: 'Huawei Global Training Center (2024)'
		}
	],
	skills: [
		{ category: 'Backend', items: ['Java', 'Go', 'Spring Boot', 'Gin Gonic', 'REST APIs'] },
		{ category: 'Frontend', items: ['SvelteKit', 'TypeScript', 'React', 'Angular'] },
		{ category: 'Data', items: ['PostgreSQL', 'MySQL', 'GORM'] },
		{ category: 'DevOps', items: ['Docker', 'AWS', 'Debian/Linux', 'Git'] }
	],
	projects: [
		{
			title: 'HSI Extension',
			description:
				'Forked and scaled a provincial electronic health record system, refactoring legacy code and building critical data engines.',
			stack: ['Java', 'Spring Boot', 'JPA/Hibernate', 'PostgreSQL'],
			link: 'https://hsi.larioja.gob.ar/'
		},
		{
			title: 'CiudadReporta',
			description:
				'A comprehensive City Maintenance Reporting System. Architected the backend reporting pipelines and built a reactive client-side dashboard.',
			stack: ['Go', 'SvelteKit', 'Tailwind', 'PostgreSQL'],
			link: 'https://ciudadreporta.netlify.app/'
		},
		{
			title: 'Biochemists Web Portal',
			description:
				'Full-stack self-management platform designed for the professional organization. Engineered an automated registration system, handled PDF settlements, and executed legacy FoxPro data migrations.',
			stack: ['Go', 'SvelteKit', 'TypeScript', 'PostgreSQL'],
			link: 'https://colbioq-lr.vercel.app/'
		},
		{
			title: 'Odontologists Web Dashboard',
			description:
				'Self-managed portal facilitating secure access to payment orders and professional financial reports via robust TXT parsing pipelines.',
			stack: ['Gin', 'GORM', 'SvelteKit', 'shadcn'],
			link: 'https://circodont-lr.vercel.app'
		}
	]
};
