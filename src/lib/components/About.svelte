<script lang="ts">
    import { portfolioData } from "$lib/data";
</script>

<section id="about" class="space-y-4">
    <h2 class="text-2xl font-bold border-b border-primary/30 pb-2">/usr/bin/about</h2>
    <p class="text-muted-foreground leading-relaxed">
        {portfolioData.about}
    </p>
</section>