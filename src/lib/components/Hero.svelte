<script lang="ts">
    import { Button } from "$lib/components/ui/button";
    import { portfolioData } from "$lib/data";
    import { Terminal, Download } from "lucide-svelte";
    import Logo from "$lib/components/Logo.svelte";
    import Linkedin from "$lib/components/icons/Linkedin.svelte";
    import Github from "$lib/components/icons/Github.svelte";
</script>

<section class="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
    <div class="flex items-start gap-6">
        <Logo class="hidden sm:block animate-pulse duration-1000" />

        <div class="space-y-4">
            <div class="inline-flex items-center gap-2 px-3 py-1 border border-primary/30 bg-primary/10 text-sm">
                <Terminal size={16} />
                <span>SYSTEM.READY</span>
            </div>

            <h1 class="text-4xl md:text-6xl font-bold tracking-tight">
                {portfolioData.name}
            </h1>
        </div>
    </div>

    <p class="text-xl text-primary/80 max-w-2xl">
        > {portfolioData.role}_
    </p>

    <div class="flex flex-wrap gap-4 pt-4">
        <Button href="#contact" class="hover:shadow-[0_0_15px_rgba(16,185,129,0.5)] transition-shadow">
            Initialize Contact
        </Button>

        <div class="flex flex-wrap gap-2">
            <Button variant="outline" href={portfolioData.resumeUrlEn} target="_blank" class="gap-2">
                <Download size={16} />
                [EN] Resume
            </Button>
            <Button variant="outline" href={portfolioData.resumeUrlEs} target="_blank" class="gap-2">
                <Download size={16} />
                [ES] CV
            </Button>

            <Button
              variant="outline"
              href="https://github.com/RLRama"
              target="_blank"
              rel="noopener noreferrer"
              class="gap-2 border-primary/40 text-primary hover:bg-primary/10"
            >
                <Github size={16} />
                git://github
            </Button>

            <Button
              variant="outline"
              href="https://www.linkedin.com/in/rlrama"
              target="_blank"
              rel="noopener noreferrer"
              class="gap-2 border-primary/40 text-primary hover:bg-primary/10"
            >
                <Linkedin size={16} />
                lnks://linkedin
            </Button>
        </div>
    </div>
</section>