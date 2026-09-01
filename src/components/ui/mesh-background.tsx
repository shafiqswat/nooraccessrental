export function MeshBackground({ className }: { className?: string }) {
  return (
    <div className={className} aria-hidden="true">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-400/8 rounded-full blur-[100px] animate-pulse-soft" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gold/8 rounded-full blur-[80px] animate-pulse-soft" style={{ animationDelay: "1.5s" }} />
    </div>
  );
}
