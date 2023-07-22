import Link from "next/link";


export default function PreOrder() {
  return (
    <div className="group">
      <div className="absolute transition-all duration-200 rounded-full -inset-px bg-gradient-to-r from-gradient-orange to-gradient-pink group-hover:shadow-lg group-hover:shadow-orange-500/50"></div>
      <Link
        href="/"
        title="predorder"
        className="relative inline-flex items-center justify-center px-6 py-1 text-sm font-light text-white bg-black border border-transparent rounded-[3.75rem]"
        role="button"
      >
        Preorder
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6 ml-2 text-white transition-all duration-200 transform group-hover:translate-x-1"
        >
          <path
            fillRule="evenodd"
            d="M16.72 7.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 010 1.06l-3.75 3.75a.75.75 0 11-1.06-1.06l2.47-2.47H3a.75.75 0 010-1.5h16.19l-2.47-2.47a.75.75 0 010-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </Link>
    </div>
  );
}
