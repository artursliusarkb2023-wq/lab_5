export default function Contacts() {
  return (
    <section className="mt-8">
      <h2 className="text-lg font-semibold uppercase tracking-widest mb-6">Контакти</h2>

      <div className="flex flex-col gap-3 text-sm">

        <a
          href="mailto:arturslusar@gmail.com"
          className="flex items-center justify-between px-4 py-3 bg-black/5 rounded-md hover:bg-black hover:text-white transition"
        >
          <span>Email</span>
          <span className="text-xs">arturslusar@gmail.com</span>
        </a>

        <a
          href="https://github.com/artursliusarkb2023-wq"
          target="_blank"
          className="flex items-center justify-between px-4 py-3 bg-black/5 rounded-md hover:bg-black hover:text-white transition"
        >
          <span>GitHub</span>
          <span className="text-xs">github.com/artursliusarkb2023-wq</span>
        </a>

      </div>
    </section>
  );
}