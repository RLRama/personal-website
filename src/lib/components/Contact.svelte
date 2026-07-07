<script lang="ts">
    import { Button } from "$lib/components/ui/button";
    import { Input } from "$lib/components/ui/input";
    import { Textarea } from "$lib/components/ui/textarea";
    import { Label } from "$lib/components/ui/label";
    import { Send } from "lucide-svelte";
    // Import the public environment variable
    import { PUBLIC_WEB3FORMS_ACCESS_KEY } from "$env/static/public";

    let result = $state("");
    let isSubmitting = $state(false);

    async function handleSubmit(event: Event) {
        event.preventDefault();
        isSubmitting = true;
        result = "Transmitting data...";

        const form = event.target as HTMLFormElement;
        const formData = new FormData(form);

        // Use the imported variable here
        formData.append("access_key", PUBLIC_WEB3FORMS_ACCESS_KEY);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });
            const data = await response.json();

            if (data.success) {
                result = "[SUCCESS]: Message packet delivered.";
                form.reset();
            } else {
                result = `[ERROR]: ${data.message}`;
            }
        } catch (error) {
            result = `[FATAL]: ${error}`;
        } finally {
            isSubmitting = false;
        }
    }
</script>

<section id="contact" class="space-y-6 border border-primary/20 bg-black/20 p-6 md:p-8">
    <h2 class="text-2xl font-bold border-b border-primary/30 pb-2">ping --contact</h2>

    <form onsubmit={handleSubmit} class="space-y-4 max-w-lg">
        <div class="space-y-2">
            <Label for="name">ID_STRING (Name)</Label>
            <Input type="text" id="name" name="name" required class="bg-transparent border-primary/30 focus-visible:ring-primary/50" />
        </div>
        <div class="space-y-2">
            <Label for="email">RETURN_ADDR (Email)</Label>
            <Input type="email" id="email" name="email" required class="bg-transparent border-primary/30 focus-visible:ring-primary/50" />
        </div>
        <div class="space-y-2">
            <Label for="message">PAYLOAD (Message)</Label>
            <Textarea id="message" name="message" required rows={4} class="bg-transparent border-primary/30 focus-visible:ring-primary/50 resize-none" />
        </div>

        <Button type="submit" disabled={isSubmitting} class="w-full sm:w-auto gap-2">
            {#if isSubmitting}
                Executing...
            {:else}
                <Send size={16} />
                Execute Transmit
            {/if}
        </Button>

        {#if result}
            <p class="text-sm pt-2 {result.includes('ERROR') || result.includes('FATAL') ? 'text-destructive' : 'text-primary'}">
                > {result}
            </p>
        {/if}
    </form>
</section>