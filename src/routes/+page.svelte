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
        Form,
        FormGroup,
        Label,
        Input
    } from '@sveltestrap/sveltestrap';

    const projects = [
        {
            title: 'Project Alpha',
            description: 'Full-stack web application using SvelteKit and PostgreSQL',
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

    const skills = [
        'JavaScript', 'TypeScript', 'Svelte', 'React',
        'Node.js', 'Python', 'Docker', 'AWS'
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

    let name = '';
    let email = '';
    let message = '';

    function handleSubmit() {
        console.log('Form submitted', { name, email, message });
    }
</script>

<Container>
    <header class="text-center my-5">
        <h1>Jane Doe</h1>
        <p class="lead">Full Stack Developer | Open Source Enthusiast</p>
    </header>

    <Row>
        <Col md="4">
            <Card class="mb-4">
                <CardBody>
                    <CardTitle>About Me</CardTitle>
                    <CardText>
                        Passionate developer with 5+ years of experience
                        in web technologies and cloud computing.
                    </CardText>
                </CardBody>
            </Card>

            <Card class="mb-4">
                <CardBody>
                    <CardTitle>Skills</CardTitle>
                    {#each skills as skill}
                        <Badge color="primary" class="me-2 mb-2">{skill}</Badge>
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

<!--
<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>
-->
