export default function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-md lg:max-w-none">
      <div className="grid-bg pointer-events-none absolute inset-0 rounded-3xl" />
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-surface shadow-[0_0_0_1px_rgba(132,182,255,0.08)]">
        <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-accent/70" />
          <p className="ml-2 text-xs text-zinc-500">app/page.tsx</p>
        </div>
        <pre className="overflow-x-auto p-5 text-[13px] leading-7 text-zinc-300">
          <code>
            <span className="text-zinc-500">{"// Product-focused frontend"}</span>
            {"\n"}
            <span className="text-accent">const</span>
            {" profile = {\n"}
            {"  role: "}
            <span className="text-emerald-300">&quot;Frontend Developer&quot;</span>
            {",\n"}
            {"  stack: ["}
            <span className="text-emerald-300">&quot;React&quot;</span>
            {", "}
            <span className="text-emerald-300">&quot;Next.js&quot;</span>
            {", "}
            <span className="text-emerald-300">&quot;TypeScript&quot;</span>
            {"],\n"}
            {"  builds: ["}
            <span className="text-emerald-300">&quot;web apps&quot;</span>
            {", "}
            <span className="text-emerald-300">&quot;dashboards&quot;</span>
            {"]\n"}
            {"}\n\n"}
            <span className="text-accent">export default</span>
            {" function Work() {\n"}
            {"  "}
            <span className="text-accent">return</span>
            {" <Product />\n"}
            {"}"}
          </code>
        </pre>
      </div>
      <div className="pointer-events-none absolute -right-6 -top-6 hidden h-24 w-24 rounded-full border border-accent/20 lg:block" />
      <div className="pointer-events-none absolute -bottom-8 -left-8 hidden h-16 w-16 rotate-12 border border-white/10 lg:block" />
    </div>
  )
}
