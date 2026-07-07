<script lang="ts">
    import Hero from "$lib/components/Hero.svelte";
    import About from "$lib/components/About.svelte";
    import Experience from "$lib/components/Experience.svelte";
    import Education from "$lib/components/Education.svelte";
    import Projects from "$lib/components/Projects.svelte";
    import Skills from "$lib/components/Skills.svelte";
    import Contact from "$lib/components/Contact.svelte";
</script>

<div class="min-h-screen bg-background relative flex flex-col items-center selection:bg-primary/30">
    <!-- CRT Scanline & Grain Overlay -->
    <div class="pointer-events-none fixed inset-0 z-50 h-full w-full bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] opacity-15"></div>

    <!-- Main Content constraints -->
    <main class="w-full max-w-4xl px-6 py-16 md:py-24 space-y-24 z-10">
        <Hero />
        <About />
        <Experience />
        <Education />
        <Projects />
        <Skills />
        <Contact />
    </main>

    <footer class="w-full max-w-4xl px-6 py-8 text-center text-sm text-primary/40 border-t border-primary/10 z-10">
        EOF
    </footer>
</div>