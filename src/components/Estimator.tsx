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
    <section className="py-20">
      <div className="container">
        <ScrollReveal>
          <h2 className="mb-2 text-center text-3xl font-bold md:text-4xl">Estimasi Harga</h2>
          <p className="mb-12 text-center text-muted-foreground">Hitung estimasi biaya dan waktu pengerjaan project Anda</p>
        </ScrollReveal>

        <ScrollReveal>
          <div className="mx-auto max-w-lg rounded-2xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm">
            <div className="space-y-4">
              <div>
                <label className="mb-1.5 block text-sm font-medium">Jenis Layanan</label>
                <Select onValueChange={setService}>
                  <SelectTrigger className="rounded-xl">
                    <SelectValue placeholder="Pilih layanan" />
                  </SelectTrigger>
                  <SelectContent>
                    {estimatorServices.map((s) => (
                      <SelectItem key={s.value} value={s.value}>{s.label}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium">Tingkat Kesulitan</label>
                <Select onValueChange={setDifficulty}>
                  <SelectTrigger className="rounded-xl">
                    <SelectValue placeholder="Pilih tingkat kesulitan" />
                  </SelectTrigger>
                  <SelectContent>
                    {estimatorDifficulty.map((d) => (
                      <SelectItem key={d.value} value={d.value}>{d.label}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium">Deadline</label>
                <Select onValueChange={setDeadline}>
                  <SelectTrigger className="rounded-xl">
                    <SelectValue placeholder="Pilih deadline" />
                  </SelectTrigger>
                  <SelectContent>
                    {estimatorDeadline.map((d) => (
                      <SelectItem key={d.value} value={d.value}>{d.label}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <Button
                onClick={handleCalculate}
                disabled={!service || !difficulty || !deadline}
                className="w-full rounded-2xl"
              >
                <Calculator className="mr-2 h-4 w-4" />
                Hitung Estimasi
              </Button>
            </div>

            {result && (
              <div className="mt-6 rounded-xl border border-primary/20 bg-primary/5 p-4">
                <div className="mb-3 grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-xs text-muted-foreground">Estimasi Harga</div>
                    <div className="text-lg font-bold text-primary">{result.priceRange}</div>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">Estimasi Waktu</div>
                    <div className="text-lg font-bold text-primary">{result.timeRange}</div>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground">{result.reason}</p>
              </div>
            )}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Estimator;
