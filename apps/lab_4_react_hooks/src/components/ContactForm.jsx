import { useEffect, useState } from "react";

export default function ContactForm() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 60000); 

    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-[#1e1e1e] text-black dark:text-white p-6 rounded-xl w-[400px] relative shadow-lg">

        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-2 right-3 text-lg"
        >
          ✕
        </button>

        <h2 className="text-lg font-semibold mb-4">
          Зворотний зв'язок
        </h2>

        <form
          action="https://formspree.io/f/xkopdpjo"
          method="POST"
          className="flex flex-col gap-3"
        >
          <input
            type="text"
            name="name"
            placeholder="Ім'я"
            required
            className="border p-2 rounded bg-white dark:bg-[#2a2a2a] dark:border-[#444]"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="border p-2 rounded bg-white dark:bg-[#2a2a2a] dark:border-[#444]"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Телефон"
            required
            className="border p-2 rounded bg-white dark:bg-[#2a2a2a] dark:border-[#444]"
          />

          <textarea
            name="message"
            placeholder="Повідомлення"
            required
            className="border p-2 rounded bg-white dark:bg-[#2a2a2a] dark:border-[#444]"
          />

          <button
            type="submit"
            className="bg-black text-white dark:bg-white dark:text-black p-2 rounded mt-2"
          >
            Відправити
          </button>
        </form>

      </div>
    </div>
  );
}
