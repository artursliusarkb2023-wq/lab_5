export default function Experience() {
  return (
    <section>
      <h2 className="text-xl font-semibold uppercase tracking-widest mb-8">Навички</h2>

      <div className="space-y-8">

        <div>
          <p className="text-sm font-semibold mb-3">Програмування</p>
          <div className="flex flex-wrap gap-2">
            {['C++','HTML','CSS'].map((s) => (
              <span key={s} className="px-3 py-1 text-xs border border-black/50 rounded-full bg-black/5 hover:bg-black hover:text-white transition">
                {s}
              </span>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold mb-3">Мережі</p>
          <div className="flex flex-wrap gap-2">
            {['TCP/IP','DNS'].map((s) => (
              <span key={s} className="px-3 py-1 text-xs border border-black/50 rounded-full bg-black/5 hover:bg-black hover:text-white transition">
                {s}
              </span>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold mb-3">Інструменти</p>
          <div className="flex flex-wrap gap-2">
            {['Git','VS Code','Linux CLI', 'Nmap', 'Wireshark'].map((s) => (
              <span key={s} className="px-3 py-1 text-xs border border-black/50 rounded-full bg-black/5 hover:bg-black hover:text-white transition">
                {s}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}