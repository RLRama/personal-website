<script lang="ts">
    import { portfolioData } from "$lib/data";
    import * as Card from "$lib/components/ui/card";
</script>

<section id="education" class="space-y-6">
    <h2 class="text-2xl font-bold border-b border-primary/30 pb-2">./fetch_certs.sh</h2>

    <div class="grid grid-cols-1 gap-4">
        {#each portfolioData.education as edu}
            <Card.Root class="bg-black/40 border-primary/20 rounded-none">
                <Card.Header class="pb-2">
                    <div class="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1">
                        <Card.Title class="text-lg text-primary">{edu.degree}</Card.Title>
                        <span class="text-sm text-primary/60 border border-primary/30 px-2 py-0.5 bg-primary/5">
							STATUS: {edu.period}
						</span>
                    </div>
                    <p class="text-sm font-semibold text-muted-foreground">{edu.institution}</p>
                </Card.Header>
                <Card.Content>
                    <p class="text-sm text-muted-foreground leading-relaxed">
                        > {edu.details}
                    </p>
                </Card.Content>
            </Card.Root>
        {/each}
    </div>
</section>