<script lang="ts">
    import { portfolioData } from "$lib/data";
</script>

<section id="skills" class="space-y-6">
    <h2 class="text-2xl font-bold border-b border-primary/30 pb-2">./printenv SKILLS</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        {#each portfolioData.skills as group}
            <div class="space-y-3">
                <h3 class="text-primary/70 uppercase text-sm font-bold tracking-wider">[{group.category}]</h3>
                <ul class="space-y-2">
                    {#each group.items as skill}
                        <li class="flex items-center gap-2 text-sm before:content-['>'] before:text-primary/50">
                            {skill}
                        </li>
                    {/each}
                </ul>
            </div>
        {/each}
    </div>
</section>