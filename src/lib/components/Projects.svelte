<script lang="ts">
    import { portfolioData } from "$lib/data";
    import * as Card from "$lib/components/ui/card";
    import { Badge } from "$lib/components/ui/badge";
    import { ExternalLink } from "lucide-svelte";
</script>

<section id="projects" class="space-y-6">
    <h2 class="text-2xl font-bold border-b border-primary/30 pb-2">~/projects</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        {#each portfolioData.projects as project}
            <Card.Root class="bg-black/40 border-primary/20 hover:border-primary transition-colors group relative overflow-hidden">
                <div class="absolute inset-0 bg-primary/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                <Card.Header>
                    <Card.Title class="text-lg flex items-center justify-between">
                        {project.title}
                        <a href={project.link} target="_blank" aria-label="View Project" class="text-primary/50 hover:text-primary transition-colors z-10">
                            <ExternalLink size={18} />
                        </a>
                    </Card.Title>
                </Card.Header>
                <Card.Content class="space-y-4">
                    <p class="text-sm text-muted-foreground">{project.description}</p>
                    <div class="flex flex-wrap gap-2 z-10 relative">
                        {#each project.stack as tech}
                            <Badge variant="outline" class="border-primary/40 text-primary bg-background/50">{tech}</Badge>
                        {/each}
                    </div>
                </Card.Content>
            </Card.Root>
        {/each}
    </div>
</section>