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
        Badge
    } from '@sveltestrap/sveltestrap';

    const projects = [
        {
            title: 'Project Alpha',
            description: 'Full-stack web application using SvelteKit and PostgreSQL',
            technologies: ['SvelteKit', 'PostgreSQL', 'Docker'],
            githubLink: '#'
        },
        {
            title: 'Project Beta',
            description: 'Mobile-first responsive dashboard',
            technologies: ['React', 'Redux', 'Tailwind CSS'],
            githubLink: '#'
        }
    ];

    const skills = [
        'JavaScript', 'TypeScript', 'Svelte', 'React',
        'Node.js', 'Python', 'Docker', 'AWS'
    ];
</script>

<Container>
    <header class="text-center my-5">
        <h1>Ramiro Ignacio Rios Lopez</h1>
        <p class="lead">Backend Developer | Open Source Enthusiast</p>
    </header>

    <Row>
        <Col md="4">
            <Card class="mb-4">
                <CardBody>
                    <CardTitle>About Me</CardTitle>
                    <CardText>
                        Passionate developer with 1.5+ years of experience
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
                            <Button
                                    color="primary"
                                    href={project.githubLink}
                                    target="_blank"
                            >
                                View on GitHub
                            </Button>
                        </div>
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
