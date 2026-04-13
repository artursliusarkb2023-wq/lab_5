export default function Header({ toggleTheme }) {
  return (
    <div className="flex justify-between items-start">

      <div>
        <h1 className="text-6xl font-[Playfair_Display] font-semibold leading-[0.95] tracking-tight">
          Слюсар
          <br />
          Артур
        </h1>
      </div>

      <button
        onClick={() => {
          console.log("CLICK"); 
          toggleTheme();
        }}
        className="px-4 py-2 border border-black dark:border-white rounded-lg text-sm hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition"
      >
        Змінити тему
      </button>

    </div>
  );
}