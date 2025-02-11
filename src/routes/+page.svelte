<style>
    .badges-container {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem; /* Adjust the gap as needed */
        max-width: 60%; /* Adjust the max-width as needed */
    }

    .buttons-container {
        display: flex;
        gap: 0.5rem; /* Adjust the gap as needed */
    }
</style>

<script>
    import {
        Container,
        Row,
        Col,
        Card,
        CardBody,
        CardTitle,
        CardText,
        Button,
        Badge,
        Nav,
        NavItem,
        NavLink, Icon
    } from '@sveltestrap/sveltestrap';

    const projects = [
        {
            title: 'Electronic Medical Record',
            description: 'Fork of a full-stack web application for hospital management and patient recordings using Spring Boot, Angular, and PostgreSQL',
            technologies: ['Java', 'Spring Boot', 'PostgreSQL', 'Hibernate/JPA', 'Lombok', 'Maven', 'Thymeleaf', 'HTML', 'CSS', 'Docker'],
            repoLink: 'https://github.com/Historia-Clinica-La-Rioja/historia_clinica_LR',
            demoLink: 'https://hsi.larioja.gob.ar/'
        },
        {
            title: 'Listario',
            description: 'Full-stack web app for note taking with categories, tags and exporting options; in development',
            technologies: ['Go', 'Iris', 'PostgreSQL', 'GORM', 'SvelteKit'],
            repoLink: 'https://github.com/RLRama/listario-backend',
            demoLink: '#'
        },
        {
            title: 'Models and Systems Simulation final project',
            description: 'Simple Python project for solving queue simulations; allows parameterizing',
            technologies: ['Python', 'Streamlit', 'SimPy', 'NumPy', 'Pandas'],
            repoLink: 'https://github.com/RLRama/myss-p',
            demoLink: 'https://myss-tp-cn.streamlit.app/'
        }
    ];

    const skills = {
        languages: [
            'Java',
            'Go',
            'SQL',
            'Python',
            'HTML',
            'CSS'
        ],
        frameworks: [
            'Spring Boot',
            'Iris',
            'Streamlit',
        ],
        devTools: [
            'Docker',
            'Git',
            'PostgreSQL',
            'MongoDB',
            'Redis',
            'Agile',
            'Metabase',
            'JetBrains IDEs',
            'Visual Studio Code'
        ],
        platforms: [
            'Linux',
            'Windows'
        ]
    };

    const languageSkills = [
        {
            language: 'English',
            proficiency: 'Professional Working Proficiency'
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
            description: 'Expanded a REST API using Spring Boot and PostgreSQL to add new functionalities (approx. twice) for a hospital management and patient record system. Maintained Metabase boards and reports. Perform database operations (update and add tables and entries).'
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
            period: '2019 - expected Dec. 2025'
        },
        {
            institution: 'Manuel Belgrano Private Institute',
            degree: 'Office automation technician',
            period: '2017 - 2018'
        }
    ];

    const certifications = [
        {
            title: 'HCIA-AI',
            issuer: 'Huawei Seeds for the Future',
            year: '2024'
        },
        {
            title: 'HCIA-CLOUD',
            issuer: 'Huawei Seeds for the Future',
            year: '2024'
        },
        {
            title: 'English Certificate (C2 Proficient)',
            issuer: 'EF SET',
            year: '2023'
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
</script>

<Container>
    <header class="text-center my-5">
        <h1>Ramiro Ignacio Rios Lopez</h1>
        <p class="lead">Backend Software Developer</p>

        <div class="d-flex justify-content-center my-3">
            <Button
                    color="primary"
                    class="me-2"
                    href="https://drive.google.com/uc?export=download&id=1-L7-vZ7CN4bGTIPy1FTxAHsuiGm40Qbk"
            >
                Download Resume (PDF | EN)
            </Button>
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
                        Passionate developer with 1.5+ years of experience
                        in APIs and databases.
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
                            <Badge color="primary" class="me-2 mb-2">{skill}</Badge>
                        {/each}
                    </div>
                    <div class="mb-2">
                        <strong>Frameworks</strong>
                        {#each skills.frameworks as skill}
                            <Badge color="secondary" class="me-2 mb-2">{skill}</Badge>
                        {/each}
                    </div>
                    <div class="mb-2">
                        <strong>Dev Tools</strong>
                        {#each skills.devTools as skill}
                            <Badge color="info" class="me-2 mb-2">{skill}</Badge>
                        {/each}
                    </div>
                    <div>
                        <strong>Platforms</strong>
                        {#each skills.platforms as skill}
                            <Badge color="success" class="me-2 mb-2">{skill}</Badge>
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
                        </div>
                    {/each}
                </CardBody>
            </Card>
        </Col>

        <Col md="8">
            <h2>Projects</h2>
            {#each projects as project}
                <Card class="mb-3">
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

    <footer class="text-center my-5">
        <p>© 2025 Ramiro Ignacio Rios Lopez</p>
    </footer>
</Container>