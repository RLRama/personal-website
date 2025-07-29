<svelte:head>
    <title>Ramiro Ignacio Rios Lopez</title>
</svelte:head>

<style>
    .badges-container {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        max-width: 60%;
    }

    .buttons-container {
        display: flex;
        gap: 0.5rem;
    }
</style>

<script>
    import {
        Badge,
        Button, ButtonGroup,
        Card,
        CardBody,
        CardText,
        CardTitle,
        Col,
        Container,
        Form,
        FormGroup,
        Icon, Image,
        Input,
        Label,
        Nav,
        NavItem,
        NavLink,
        Row,
        ThemeToggler, Tooltip
    } from '@sveltestrap/sveltestrap';
    import emr_thumbnail from '$lib/assets/emr_thumbnail.png'
    import listario_thumbnail from '$lib/assets/listario_thumbnail.png'
    import myss_thumbnail from '$lib/assets/myss_thumbnail.png'
    import hcia_ai_certificate from '$lib/assets/hcia_ai_certificate.jpeg'
    import hcia_cloud_certificate from '$lib/assets/hcia_cloud_certificate.jpeg'

    const projects = [
        {
            id: 'emr',
            title: 'Electronic Medical Record',
            description: 'Collaborating in a fork of a full-stack web application for hospital management and patient recordings using Spring Boot, Angular, and PostgreSQL',
            technologies: ['Java', 'Spring Boot', 'PostgreSQL', 'Hibernate/JPA', 'Lombok', 'Maven', 'Thymeleaf', 'HTML', 'CSS', 'Docker'],
            repoLink: 'https://github.com/Historia-Clinica-La-Rioja/historia_clinica_LR',
            demoLink: 'https://hsi.larioja.gob.ar/',
            img: emr_thumbnail,
        },
        {
            id: 'listario',
            title: 'Listario',
            description: 'Full-stack web app for task management: including categories, priorities, notifications, etc. (in development)',
            technologies: ['Go', 'Iris', 'PostgreSQL', 'GORM', 'SvelteKit', 'JWT', 'Swagger UI'],
            repoLink: 'https://github.com/RLRama/listario-backend',
            demoLink: 'https://listario.vercel.app/',
            img: listario_thumbnail,
        },
        {
            id: 'simulation',
            title: 'Models and Systems Simulation final project',
            description: 'Simple Python project for solving queue simulations; allows parameterizing',
            technologies: ['Python', 'Streamlit', 'SimPy', 'NumPy', 'Pandas'],
            repoLink: 'https://github.com/RLRama/myss-p',
            demoLink: 'https://myss-tp-cn.streamlit.app/',
            img: myss_thumbnail,
        }
    ];

    const skills = {
        languages: [
            'Java',
            'Go',
            'SQL',
            'Python',
            'HTML',
            'CSS',
            'JS'
        ],
        frameworks: [
            'Spring Boot',
            'Iris',
            'Streamlit',
            'SvelteKit/Svelte'
        ],
        devTools: [
            'Docker',
            'Git',
            'PostgreSQL',
            'MongoDB',
            'Redis',
            'Agile',
            'Metabase',
            'Goland',
            'IntelliJ',
            'WebStorm',
            'Visual Studio/VS Code'
        ],
        platforms: [
            'Linux',
            'Windows'
        ]
    };

    const languageSkills = [
        {
            language: 'English',
            proficiency: 'Professional working proficiency'
        },
        {
            language: 'Spanish',
            proficiency: 'Native'
        }
    ];

    const workExperience = [
        {
            company: 'Ministry of Public Health (La Rioja, Argentina)',
            role: 'Backend developer',
            period: 'Apr. 2023 - Present',
            description: 'Expanded a REST API using Spring Boot and PostgreSQL. Wrote 4K+ lines of clean layered code. Maintained Metabase boards and reports. Performed database operations (update and add tables and entries). Writing a new extensions with Go and Svelte.'
        },
        {
            company: 'Freelance professional',
            role: 'IT technician',
            period: '2014 - Present',
            description: 'Diagnosed and repaired hardware and software problems for +100 clients. Assembled and configured custom computer systems. Stayed current with industry trends.'
        }
    ];

    const education = [
        {
            institution: 'National University of La Rioja, Argentina',
            degree: 'Bachelor of Information Systems Engineering',
            period: 'Mar. 2019 - expected Dec. 2025'
        },
        {
            institution: 'Manuel Belgrano Private Institute',
            degree: 'Office automation technician',
            period: 'Mar. 2017 - Dec. 2018'
        }
    ];

    const certifications = [
        {
            title: 'HCIA-AI',
            issuer: 'Huawei Seeds for the Future',
            year: '2024',
            link: hcia_ai_certificate
        },
        {
            title: 'HCIA-CLOUD',
            issuer: 'Huawei Seeds for the Future',
            year: '2024',
            link: hcia_cloud_certificate
        },
        {
            title: 'English Certificate (C2 Proficient)',
            issuer: 'EF SET',
            year: '2023',
            link: "https://cert.efset.org/gYXwA3"
        },
    ];

    const socialLinks = [
        {
            platform: 'LinkedIn',
            url: 'https://www.linkedin.com/in/rlrama/',
            icon: 'linkedin'
        },
        {
            platform: 'GitHub',
            url: 'https://github.com/RLRama',
            icon: 'github'
        },
        {
            platform: 'Gitlab',
            url: 'https://gitlab.com/rl.ramiro11',
            icon: 'gitlab'
        },
        {
            platform: 'Email',
            url: 'mailto:rl.ramiro11@gmail.com',
            icon: 'envelope'
        }
    ];

    const resumeUrls = {
        en: "https://drive.google.com/uc?export=download&id=1-L7-vZ7CN4bGTIPy1FTxAHsuiGm40Qbk",
        es: "https://drive.google.com/uc?export=download&id=1-M6OZEWUiIn0XCtD5PWSXvFhM8yeDmQh"
    }

    let validated = false;

</script>

<Container>
    <header class="text-center my-5">
        <h1>Ramiro Ignacio Rios Lopez</h1>
        <p class="lead">Software Developer</p>

        <div class="d-flex justify-content-center my-3">
            <ButtonGroup>
                <Button
                        color="primary"
                        href={resumeUrls.en}
                >
                    Download Resume (EN)
                </Button>
                <Button
                        color="primary"
                        href={resumeUrls.es}
                >
                    Download Resume (ES)
                </Button>
            </ButtonGroup>
        </div>

        <div class="d-flex justify-content-center my-3">
            <ThemeToggler let:currentColorMode let:toggleColorMode>
                <Button color="secondary" on:click={() => toggleColorMode()}>
                    Toggle theme: {currentColorMode}
                </Button>
            </ThemeToggler>
        </div>

        <Nav class="justify-content-center">
            {#each socialLinks as link}
                <NavItem>
                    <NavLink href={link.url} target="_blank">
                        <Icon name={link.icon} />
                    </NavLink>
                </NavItem>
            {/each}
        </Nav>
    </header>

    <Row>
        <Col md="4">
            <Card class="mb-4">
                <CardBody>
                    <CardTitle>About me</CardTitle>
                    <CardText>
                        Passionate developer with 2+ years of experience
                        specializing in APIs, databases, and server-side architecture.
                        Committed to creating efficient, scalable solutions.
                        Outside work, I enjoy gaming, weightlifting, and reading.
                    </CardText>
                </CardBody>
            </Card>

            <Card class="mb-4">
                <CardBody>
                    <CardTitle>Technical Skills</CardTitle>
                    <div class="mb-2">
                        <strong>Languages</strong>
                        {#each skills.languages as skill}
                            <Badge color="light" class="me-2 mb-2">{skill}</Badge>
                        {/each}
                    </div>
                    <div class="mb-2">
                        <strong>Frameworks</strong>
                        {#each skills.frameworks as skill}
                            <Badge color="light" class="me-2 mb-2">{skill}</Badge>
                        {/each}
                    </div>
                    <div class="mb-2">
                        <strong>Dev Tools</strong>
                        {#each skills.devTools as skill}
                            <Badge color="light" class="me-2 mb-2">{skill}</Badge>
                        {/each}
                    </div>
                    <div class="mb-2">
                        <strong>Platforms</strong>
                        {#each skills.platforms as skill}
                            <Badge color="light" class="me-2 mb-2">{skill}</Badge>
                        {/each}
                    </div>
                </CardBody>
            </Card>

            <Card class="mb-4">
                <CardBody>
                    <CardTitle>Language Proficiency</CardTitle>
                    {#each languageSkills as lang}
                        <div class="mb-2">
                            <strong>{lang.language}</strong>
                            <p class="text-muted mb-0">{lang.proficiency}</p>
                        </div>
                    {/each}
                </CardBody>
            </Card>

            <Card class="mb-4">
                <CardBody>
                    <CardTitle>Certifications</CardTitle>
                    {#each certifications as cert}
                        <div class="mb-2">
                            <strong>{cert.title}</strong>
                            <p class="text-muted mb-0">{cert.issuer} - {cert.year}</p>
                            <Badge href={cert.link} target="_blank" color="primary">View</Badge>
                        </div>
                    {/each}
                </CardBody>
            </Card>
        </Col>

        <Col md="8">
            <h2>Projects</h2>
            {#each projects as project}
                <Card class="mb-3">
                    <Image
                    alt="This project's thumbnail"
                    fluid
                    thumbnail
                    src={project.img}
                    />
                    <CardBody>
                        <CardTitle>{project.title}</CardTitle>
                        <CardText>{project.description}</CardText>
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="badges-container">
                                {#each project.technologies as tech}
                                    <Badge color="secondary">{tech}</Badge>
                                {/each}
                            </div>
                            <div class="buttons-container">
                                {#if project.repoLink && project.repoLink !== '#'}
                                    <Button color="primary" href={project.repoLink} target="_blank">
                                        Source Code
                                    </Button>
                                {/if}
                                {#if project.demoLink && project.demoLink !== '#'}
                                    <Button color="success" href={project.demoLink} target="_blank">
                                        Live Demo
                                    </Button>
                                {/if}
                            </div>
                        </div>
                    </CardBody>
                </Card>
            {/each}

            <h2 class="mt-4">Work Experience</h2>
            {#each workExperience as job}
                <Card class="mb-3">
                    <CardBody>
                        <CardTitle>{job.role} at {job.company}</CardTitle>
                        <CardText class="text-muted">{job.period}</CardText>
                        <CardText>{job.description}</CardText>
                    </CardBody>
                </Card>
            {/each}

            <h2 class="mt-4">Education</h2>
            {#each education as edu}
                <Card class="mb-3">
                    <CardBody>
                        <CardTitle>{edu.degree}</CardTitle>
                        <CardText class="text-muted">{edu.institution}</CardText>
                        <CardText>{edu.period}</CardText>
                    </CardBody>
                </Card>
            {/each}
        </Col>
    </Row>

    <h2 class="mt-4 text-center">Contact Me</h2>
    <Row class="justify-content-center mb-5">
        <Col md="6">
            <Card>
                <CardBody>
                    <Form {validated} action="https://formspree.io/f/manqddwz" method="POST">
                        <FormGroup>
                            <Label for="name">Name</Label>
                            <Input
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="Your name"
                                    required
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="email">Email</Label>
                            <Input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="your.email@example.com"
                                    required
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="message">Message</Label>
                            <Input
                                    type="textarea"
                                    name="message"
                                    id="message"
                                    rows={3}
                                    placeholder="Your message here..."
                                    required
                            />
                        </FormGroup>
                        <div class="text-center">
                            <Button type="submit" id="submitBtn" color="primary">Send Message</Button>
                            <Tooltip
                                    animation
                                    delay={0}
                                    id=""
                                    isOpen={false}
                                    placement="top"
                                    target="submitBtn"
                            >After clicking 'Send Message', you'll be redirected to Formspree to confirm your submission.</Tooltip>
                        </div>
                    </Form>
                </CardBody>
            </Card>
        </Col>
    </Row>

    <footer class="text-center my-5">
        <p>© 2025 Ramiro Ignacio Rios Lopez</p>
    </footer>
</Container>