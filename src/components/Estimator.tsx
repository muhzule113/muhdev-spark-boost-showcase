import { useState } from "react";
import { Calculator } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { estimatorServices, estimatorDifficulty, estimatorDeadline, calculateEstimate, type EstimatorResult } from "@/data/site";
import ScrollReveal from "./ScrollReveal";

const Estimator = () => {
  const [service, setService] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [deadline, setDeadline] = useState("");
  const [result, setResult] = useState<EstimatorResult | null>(null);

  const handleCalculate = () => {
    if (service && difficulty && deadline) {
      setResult(calculateEstimate(service, difficulty, deadline));
    }
  };

  return (
    <section className="py-20 border-b-2 border-foreground">
      <div className="container">
        <ScrollReveal>
          <h2 className="mb-2 text-center text-4xl font-extrabold md:text-5xl" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>Estimasi Harga</h2>
          <p className="mb-12 text-center text-muted-foreground font-medium">Hitung estimasi biaya dan waktu pengerjaan project Anda</p>
        </ScrollReveal>

        <ScrollReveal>
          <div className="mx-auto max-w-lg border-2 border-foreground bg-card p-8 shadow-brutal-sm">
            <div className="space-y-5">
              <div>
                <label className="mb-1.5 block text-sm font-bold">Jenis Layanan</label>
                <Select onValueChange={setService}>
                  <SelectTrigger className="rounded-none border-2 border-foreground">
                    <SelectValue placeholder="Pilih layanan" />
                  </SelectTrigger>
                  <SelectContent className="rounded-none border-2 border-foreground">
                    {estimatorServices.map((s) => (
                      <SelectItem key={s.value} value={s.value}>{s.label}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-bold">Tingkat Kesulitan</label>
                <Select onValueChange={setDifficulty}>
                  <SelectTrigger className="rounded-none border-2 border-foreground">
                    <SelectValue placeholder="Pilih tingkat kesulitan" />
                  </SelectTrigger>
                  <SelectContent className="rounded-none border-2 border-foreground">
                    {estimatorDifficulty.map((d) => (
                      <SelectItem key={d.value} value={d.value}>{d.label}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-bold">Deadline</label>
                <Select onValueChange={setDeadline}>
                  <SelectTrigger className="rounded-none border-2 border-foreground">
                    <SelectValue placeholder="Pilih deadline" />
                  </SelectTrigger>
                  <SelectContent className="rounded-none border-2 border-foreground">
                    {estimatorDeadline.map((d) => (
                      <SelectItem key={d.value} value={d.value}>{d.label}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <Button
                onClick={handleCalculate}
                disabled={!service || !difficulty || !deadline}
                className="w-full rounded-none border-2 border-foreground bg-foreground text-background font-bold shadow-brutal-sm hover:shadow-brutal hover:translate-x-[2px] hover:translate-y-[2px] transition-all disabled:opacity-50"
              >
                <Calculator className="mr-2 h-4 w-4" />
                Hitung Estimasi
              </Button>
            </div>

            {result && (
              <div className="mt-6 border-2 border-primary bg-primary/10 p-4">
                <div className="mb-3 grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Estimasi Harga</div>
                    <div className="text-xl font-extrabold text-primary" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>{result.priceRange}</div>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Estimasi Waktu</div>
                    <div className="text-xl font-extrabold text-primary" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>{result.timeRange}</div>
                  </div>
                </div>
                <p className="text-xs font-medium text-muted-foreground">{result.reason}</p>
              </div>
            )}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Estimator;
