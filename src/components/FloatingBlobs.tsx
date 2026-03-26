const FloatingBlobs = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="absolute -top-40 -right-40 w-96 h-96 blob-shape gradient-primary opacity-[0.04] animate-float-slow" />
      <div className="absolute top-1/3 -left-32 w-80 h-80 blob-shape opacity-[0.03] animate-float-delayed" style={{ background: 'linear-gradient(135deg, hsl(179 98% 24%), hsl(45 100% 51%))' }} />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 blob-shape gradient-primary opacity-[0.03] animate-float" />
      <div className="absolute top-2/3 left-1/3 w-48 h-48 rounded-full opacity-[0.02] animate-float-slow" style={{ background: 'hsl(45 100% 51%)' }} />
    </div>
  );
};

export default FloatingBlobs;
