const DecorativeObjects = () => (
  <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
    <div className="deco-dot-grid absolute inset-0 opacity-40" />

    {/* Large filled circles */}
    <div className="deco-circle-solid" style={{ left: '-100px', top: '100px', width: '340px', height: '340px', backgroundColor: 'var(--teal)', opacity: 0.15 }} />
    <div className="deco-circle-solid" style={{ right: '-70px', top: '500px', width: '280px', height: '280px', backgroundColor: 'var(--indigo)', opacity: 0.12 }} />
    <div className="deco-circle-solid" style={{ left: '6%', top: '1400px', width: '200px', height: '200px', backgroundColor: 'var(--blue)', opacity: 0.1 }} />
    <div className="deco-circle-solid" style={{ right: '10%', top: '2100px', width: '240px', height: '240px', backgroundColor: 'var(--teal)', opacity: 0.12 }} />
    <div className="deco-circle-solid" style={{ left: '40%', top: '2900px', width: '200px', height: '200px', backgroundColor: 'var(--purple)', opacity: 0.1 }} />

    {/* Outlined circles */}
    <div className="deco-circle" style={{ left: '12%', top: '780px', width: '160px', height: '160px', borderColor: 'var(--teal)', opacity: 0.3 }} />
    <div className="deco-circle" style={{ right: '16%', top: '1200px', width: '200px', height: '200px', borderColor: 'var(--indigo)', opacity: 0.25 }} />
    <div className="deco-circle" style={{ left: '48%', top: '1800px', width: '140px', height: '140px', borderColor: 'var(--purple)', opacity: 0.2 }} />

    {/* Rotated solid rects */}
    <div className="deco-rect-solid rounded-lg" style={{ right: '10%', top: '200px', width: '70px', height: '70px', backgroundColor: 'var(--yellow)', opacity: 0.7, transform: 'rotate(15deg)' }} />
    <div className="deco-rect-solid rounded-lg" style={{ left: '4%', top: '580px', width: '55px', height: '55px', backgroundColor: 'var(--teal)', opacity: 0.25, transform: 'rotate(-10deg)' }} />
    <div className="deco-rect-solid rounded-lg" style={{ right: '22%', top: '950px', width: '45px', height: '45px', backgroundColor: 'var(--indigo)', opacity: 0.2, transform: 'rotate(30deg)' }} />
    <div className="deco-rect-solid rounded-lg" style={{ left: '16%', top: '1550px', width: '60px', height: '60px', backgroundColor: 'var(--purple)', opacity: 0.2, transform: 'rotate(20deg)' }} />
    <div className="deco-rect-solid rounded-lg" style={{ right: '5%', top: '1850px', width: '50px', height: '50px', backgroundColor: 'var(--blue)', opacity: 0.2, transform: 'rotate(-15deg)' }} />

    {/* Plus signs */}
    <div className="absolute left-[60%] top-[980px] flex h-8 w-8 items-center justify-center">
      <div className="absolute h-8 w-1.5 rounded-full" style={{ backgroundColor: 'var(--navy)', opacity: 0.15 }} />
      <div className="absolute h-1.5 w-8 rounded-full" style={{ backgroundColor: 'var(--navy)', opacity: 0.15 }} />
    </div>
    <div className="absolute right-[8%] top-[1750px] flex h-7 w-7 items-center justify-center">
      <div className="absolute h-7 w-1.5 rounded-full" style={{ backgroundColor: 'var(--teal)', opacity: 0.3 }} />
      <div className="absolute h-1.5 w-7 rounded-full" style={{ backgroundColor: 'var(--teal)', opacity: 0.3 }} />
    </div>
    <div className="absolute left-[18%] top-[1150px] flex h-6 w-6 items-center justify-center">
      <div className="absolute h-6 w-1 rounded-full" style={{ backgroundColor: 'var(--indigo)', opacity: 0.25 }} />
      <div className="absolute h-1 w-6 rounded-full" style={{ backgroundColor: 'var(--indigo)', opacity: 0.25 }} />
    </div>

    {/* Diagonal lines */}
    <div className="deco-line rounded-full" style={{ left: '16%', top: '280px', height: '2px', width: '120px', backgroundColor: 'var(--navy)', transform: 'rotate(-12deg)', opacity: 0.08 }} />
    <div className="deco-line rounded-full" style={{ right: '18%', top: '650px', height: '2px', width: '160px', backgroundColor: 'var(--navy)', transform: 'rotate(6deg)', opacity: 0.08 }} />
  </div>
);

export default DecorativeObjects;
