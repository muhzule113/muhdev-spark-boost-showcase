import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { WHATSAPP_URL } from "@/data/site";
import ScrollReveal from "./ScrollReveal";

const schema = z.object({
  name: z.string().min(2, "Nama minimal 2 karakter"),
  service: z.string().min(1, "Pilih jenis layanan"),
  deadline: z.string().min(1, "Isi deadline"),
  description: z.string().min(10, "Deskripsi minimal 10 karakter"),
  fileLink: z.string().url("URL tidak valid").or(z.literal("")).optional(),
});

type FormData = z.infer<typeof schema>;

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", service: "", deadline: "", description: "", fileLink: "" },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      // 1. Kirim data ke Email via Web3Forms API
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "57294c6f-c048-4881-9e51-8ae8d4dbe1b9",
          subject: `Request Layanan Baru: ${data.service} dari ${data.name}`,
          from_name: data.name,
          Nama: data.name,
          "Jenis Layanan": data.service,
          Deadline: data.deadline,
          "Deskripsi Project": data.description,
          "Link File": data.fileLink || "Tidak dilampirkan",
        }),
      });

      const result = await response.json();
      if (result.success) {
        toast({
          title: "Request Terkirim! ✅",
          description: "Membuka WhatsApp untuk mengirim pesan...",
        });
        
        // 2. Format pesan untuk WhatsApp
        const waText = `Halo muhdev, saya ingin memesan layanan.
        
*Nama:* ${data.name}
*Layanan:* ${data.service}
*Deadline:* ${data.deadline}
*Deskripsi:* 
${data.description}
*Link File:* ${data.fileLink || "-"}

Mohon info lebih lanjut. Terima kasih!`;

        // 3. Arahkan ke WhatsApp
        const waLink = `https://wa.me/6285849326780?text=${encodeURIComponent(waText)}`;
        window.open(waLink, '_blank');
        
        form.reset();
      } else {
        throw new Error(result.message || "Gagal mengirim ke email");
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Gagal Mengirim Request ❌",
        description: "Terjadi kesalahan. Silakan coba lagi atau langsung klik tombol Chat WhatsApp di samping.",
      });
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20">
      <div className="container">
        <ScrollReveal>
          <h2 className="mb-2 text-center text-3xl font-bold md:text-4xl">Order Sekarang</h2>
          <p className="mb-12 text-center text-muted-foreground">Isi form di bawah atau langsung chat via WhatsApp</p>
        </ScrollReveal>

        <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-5">
          <ScrollReveal className="md:col-span-3">
            <div className="rounded-2xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField control={form.control} name="name" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nama</FormLabel>
                      <FormControl><Input placeholder="Nama Anda" className="rounded-xl" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <FormField control={form.control} name="service" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Jenis Layanan</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl><SelectTrigger className="rounded-xl"><SelectValue placeholder="Pilih layanan" /></SelectTrigger></FormControl>
                        <SelectContent>
                          <SelectItem value="web-dev">Web Development</SelectItem>
                          <SelectItem value="tugas-kuliah">Tugas Kuliah</SelectItem>
                          <SelectItem value="mobile-app">Mobile App</SelectItem>
                          <SelectItem value="lainnya">Lainnya</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <FormField control={form.control} name="deadline" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Deadline</FormLabel>
                      <FormControl><Input placeholder="Contoh: 7 hari, 20 Januari 2025" className="rounded-xl" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <FormField control={form.control} name="description" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Deskripsi Project</FormLabel>
                      <FormControl><Textarea placeholder="Jelaskan kebutuhan project Anda secara detail..." className="min-h-[100px] rounded-xl" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <FormField control={form.control} name="fileLink" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Link File (opsional)</FormLabel>
                      <FormControl><Input placeholder="https://drive.google.com/..." className="rounded-xl" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <Button type="submit" className="w-full rounded-2xl" disabled={isSubmitting}>
                    <Send className={`mr-2 h-4 w-4 ${isSubmitting ? "animate-pulse" : ""}`} />
                    {isSubmitting ? "Mengirim..." : "Kirim Request"}
                  </Button>
                </form>
              </Form>
            </div>
          </ScrollReveal>

          <ScrollReveal className="md:col-span-2" delay={0.2}>
            <div className="flex h-full flex-col items-center justify-center rounded-2xl border border-border/50 bg-card/50 p-6 text-center backdrop-blur-sm">
              <div className="mb-4 rounded-2xl bg-[#25D366]/10 p-4">
                <MessageCircle className="h-10 w-10 text-[#25D366]" />
              </div>
              <h3 className="mb-2 text-lg font-semibold">Prefer Chat Langsung?</h3>
              <p className="mb-4 text-sm text-muted-foreground">
                Konsultasi gratis dan response cepat via WhatsApp. Langsung diskusi kebutuhan Anda.
              </p>
              <Button asChild className="w-full rounded-2xl bg-[#25D366] text-white hover:bg-[#25D366]/90">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  Chat WhatsApp
                </a>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
