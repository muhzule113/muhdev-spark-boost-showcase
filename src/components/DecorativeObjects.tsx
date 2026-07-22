const DecorativeObjects = () => (
  <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
    {/* Soft dot grid base */}
    <div className="deco-dot-grid absolute inset-0 opacity-50" />

    {/* ── Large filled circles ── */}
    <div
      className="deco-circle-solid"
      style={{ left: '-90px', top: '120px', width: '320px', height: '320px', backgroundColor: 'var(--pink)', opacity: 0.9 }}
    />
    <div
      className="deco-circle-solid"
      style={{ right: '-60px', top: '480px', width: '240px', height: '240px', backgroundColor: 'var(--yellow)' }}
    />
    <div
      className="deco-circle-solid"
      style={{ left: '8%', top: '1350px', width: '180px', height: '180px', backgroundColor: 'var(--blue)', opacity: 0.85 }}
    />
    <div
      className="deco-circle-solid"
      style={{ right: '12%', top: '2050px', width: '220px', height: '220px', backgroundColor: 'var(--teal)', opacity: 0.9 }}
    />
    <div
      className="deco-circle-solid"
      style={{ left: '45%', top: '2800px', width: '200px', height: '200px', backgroundColor: 'var(--purple)', opacity: 0.9 }}
    />

    {/* ── Outlined circles ── */}
    <div className="deco-circle" style={{ left: '14%', top: '760px', width: '150px', height: '150px' }} />
    <div className="deco-circle" style={{ right: '18%', top: '1180px', width: '190px', height: '190px', borderColor: 'var(--pink)' }} />
    <div className="deco-circle" style={{ left: '50%', top: '1750px', width: '130px', height: '130px', borderColor: 'var(--purple)' }} />
    <div className="deco-circle" style={{ right: '8%', top: '2400px', width: '160px', height: '160px', borderColor: 'var(--teal)' }} />

    {/* ── Rotated solid squares ── */}
    <div
      className="deco-rect-solid"
      style={{ right: '10%', top: '220px', width: '80px', height: '80px', backgroundColor: 'var(--yellow)', transform: 'rotate(15deg)' }}
    />
    <div
      className="deco-rect-solid"
      style={{ left: '5%', top: '550px', width: '60px', height: '60px', backgroundColor: 'var(--teal)', transform: 'rotate(-10deg)' }}
    />
    <div
      className="deco-rect-solid"
      style={{ right: '20%', top: '900px', width: '50px', height: '50px', backgroundColor: 'var(--pink)', transform: 'rotate(30deg)' }}
    />
    <div
      className="deco-rect-solid"
      style={{ left: '18%', top: '1500px', width: '70px', height: '70px', backgroundColor: 'var(--purple)', transform: 'rotate(20deg)' }}
    />
    <div
      className="deco-rect-solid"
      style={{ right: '6%', top: '1800px', width: '55px', height: '55px', backgroundColor: 'var(--blue)', transform: 'rotate(-15deg)' }}
    />
    <div
      className="deco-rect-solid"
      style={{ right: '15%', top: '1600px', width: '35px', height: '35px', backgroundColor: 'var(--teal)', transform: 'rotate(20deg)' }}
    />
    <div
      className="deco-rect-solid"
      style={{ left: '8%', top: '2400px', width: '45px', height: '45px', backgroundColor: 'var(--yellow)', transform: 'rotate(-10deg)' }}
    />

    {/* ── Outlined rotated squares ── */}
    <div
      className="deco-rect"
      style={{ left: '30%', top: '380px', width: '70px', height: '70px', transform: 'rotate(12deg)', borderColor: 'var(--pink)' }}
    />
    <div
      className="deco-rect"
      style={{ right: '15%', top: '1300px', width: '50px', height: '50px', transform: 'rotate(-20deg)', borderColor: 'var(--yellow)' }}
    />
    <div
      className="deco-rect"
      style={{ left: '6%', top: '1900px', width: '60px', height: '60px', transform: 'rotate(25deg)', borderColor: 'var(--blue)' }}
    />

    {/* ── Plus signs / crosses ── */}
    <div className="absolute left-[62%] top-[950px] flex h-10 w-10 items-center justify-center" aria-hidden="true">
      <div className="absolute h-10 w-2 bg-foreground" />
      <div className="absolute h-2 w-10 bg-foreground" />
    </div>
    <div className="absolute right-[7%] top-[1700px] flex h-8 w-8 items-center justify-center" aria-hidden="true">
      <div className="absolute h-8 w-1.5" style={{ backgroundColor: 'var(--pink)' }} />
      <div className="absolute h-1.5 w-8" style={{ backgroundColor: 'var(--pink)' }} />
    </div>
    <div className="absolute left-[20%] top-[1100px] flex h-6 w-6 items-center justify-center" aria-hidden="true">
      <div className="absolute h-6 w-1.5" style={{ backgroundColor: 'var(--purple)' }} />
      <div className="absolute h-1.5 w-6" style={{ backgroundColor: 'var(--purple)' }} />
    </div>
    <div className="absolute right-[40%] top-[2200px] flex h-7 w-7 items-center justify-center" aria-hidden="true">
      <div className="absolute h-7 w-1.5" style={{ backgroundColor: 'var(--teal)' }} />
      <div className="absolute h-1.5 w-7" style={{ backgroundColor: 'var(--teal)' }} />
    </div>

    {/* ── Diagonal lines ── */}
    <div
      className="deco-line"
      style={{ left: '18%', top: '250px', height: '2px', width: '140px', backgroundColor: 'hsl(var(--foreground))', transform: 'rotate(-12deg)', opacity: 0.3 }}
    />
    <div
      className="deco-line"
      style={{ right: '20%', top: '600px', height: '2px', width: '180px', backgroundColor: 'hsl(var(--foreground))', transform: 'rotate(6deg)', opacity: 0.3 }}
    />
    <div
      className="deco-line"
      style={{ left: '8%', top: '1200px', height: '2px', width: '100px', backgroundColor: 'var(--pink)', transform: 'rotate(-6deg)', opacity: 0.5 }}
    />

    {/* ── Vertical accent lines ── */}
    <div className="deco-line" style={{ left: '3%', top: '400px', height: '280px', width: '2px', backgroundColor: 'hsl(var(--foreground))', opacity: 0.12 }} />
    <div className="deco-line" style={{ right: '33%', top: '0px', height: '200px', width: '2px', backgroundColor: 'hsl(var(--foreground))', opacity: 0.12 }} />
  </div>
);

export default DecorativeObjects;
