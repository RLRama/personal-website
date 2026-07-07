<script lang="ts">
    import { portfolioData } from "$lib/data";
</script>

<section id="experience" class="space-y-6">
    <h2 class="text-2xl font-bold border-b border-primary/30 pb-2">cat /var/log/experience.log</h2>

    <div class="space-y-8 pl-2 border-l border-primary/20">
        {#each portfolioData.experience as job}
            <div class="relative pl-6 space-y-2">
                <div class="absolute w-3 h-3 bg-background border border-primary left-[-6.5px] top-1.5 rounded-none"></div>

                <div class="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1">
                    <h3 class="text-lg font-bold text-primary">{job.role}</h3>
                    <span class="text-sm text-primary/60 font-mono">[{job.period}]</span>
                </div>
                <p class="text-muted-foreground font-semibold">@ {job.company}</p>
                <p class="text-sm text-primary/80 mb-2">{job.description}</p>

                <ul class="space-y-2 pt-2">
                    {#each job.bullets as bullet}
                        <li class="text-sm text-muted-foreground flex items-start gap-2">
                            <span class="text-primary/50 select-none shrink-0 whitespace-nowrap mt-0.5">-></span>
                            <span>{bullet}</span>
                        </li>
                    {/each}
                </ul>
            </div>
        {/each}
    </div>
</section>