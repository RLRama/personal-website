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
            title: 'Historia Clínica Electrónica',
            description: 'Fork of a full-stack web application using Spring Boot, Angular, and PostgreSQL',
            technologies: ['SvelteKit', 'PostgreSQL', 'Docker'],
            githubLink: '#',
            demoLink: '#'
        },
        {
            title: 'Project Beta',
            description: 'Mobile-first responsive dashboard',
            technologies: ['React', 'Redux', 'Tailwind CSS'],
            githubLink: '#',
            demoLink: '#'
        }
    ];

    const skills = {
        languages: [
            'JavaScript',
            'TypeScript',
            'Python',
            'Java',
            'SQL'
        ],
        frameworks: [
            'React',
            'Svelte',
            'Node.js',
            'Express',
            'Django'
        ],
        devTools: [
            'Docker',
            'Kubernetes',
            'Git',
            'Jenkins',
            'Webpack'
        ],
        cloudPlatforms: [
            'AWS',
            'Google Cloud',
            'Azure'
        ]
    };

    const languageSkills = [
        {
            language: 'English',
            proficiency: 'Native'
        },
        {
            language: 'Spanish',
            proficiency: 'Professional Working Proficiency'
        },
        {
            language: 'French',
            proficiency: 'Elementary Proficiency'
        }
    ];

    const workExperience = [
        {
            company: 'TechCorp Inc.',
            role: 'Senior Full Stack Developer',
            period: '2021 - Present',
            description: 'Led development of scalable web applications and microservices architecture.'
        },
        {
            company: 'StartUp Solutions',
            role: 'Web Developer',
            period: '2019 - 2021',
            description: 'Developed and maintained responsive web applications for diverse client base.'
        }
    ];

    const education = [
        {
            institution: 'Tech University',
            degree: 'Master of Computer Science',
            period: '2017 - 2019'
        },
        {
            institution: 'State College',
            degree: 'Bachelor of Computer Engineering',
            period: '2013 - 2017'
        }
    ];

    const certifications = [
        {
            title: 'AWS Certified Solutions Architect',
            issuer: 'Amazon Web Services',
            year: '2022'
        },
        {
            title: 'Certified Kubernetes Administrator (CKA)',
            issuer: 'Cloud Native Computing Foundation',
            year: '2021'
        }
    ];

    const socialLinks = [
        {
            platform: 'LinkedIn',
            url: '#',
            icon: 'linkedin'
        },
        {
            platform: 'GitHub',
            url: '#',
            icon: 'github'
        },
        {
            platform: 'Twitter',
            url: '#',
            icon: 'twitter-x'
        }
    ];
</script>

<Container>
    <header class="text-center my-5">
        <h1>Jane Doe</h1>
        <p class="lead">Full Stack Developer | Open Source Enthusiast</p>

        <div class="d-flex justify-content-center my-3">
            <Button
                    color="primary"
                    class="me-2"
            >
                Download Resume (PDF)
            </Button>
            <Button
                    color="secondary"
            >
                Download Resume (DOCX)
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
                    <CardTitle>About Me</CardTitle>
                    <CardText>
                        Passionate developer with 5+ years of experience
                        in web technologies and cloud computing.
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
                        <strong>Cloud Platforms</strong>
                        {#each skills.cloudPlatforms as skill}
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
                            <div>
                                {#each project.technologies as tech}
                                    <Badge color="secondary" class="me-2">{tech}</Badge>
                                {/each}
                            </div>
                            <div>
                                <Button
                                        color="primary"
                                        href={project.githubLink}
                                        target="_blank"
                                        class="me-2"
                                >
                                    GitHub
                                </Button>
                                <Button
                                        color="success"
                                        href={project.demoLink}
                                        target="_blank"
                                >
                                    Live Demo
                                </Button>
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
        <p>© 2024 Jane Doe | Built with SvelteKit</p>
    </footer>
</Container>