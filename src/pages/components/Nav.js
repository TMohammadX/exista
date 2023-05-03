import Link from "next/link";

export default function () {
  return (
    <nav className="absolute z-50 flex items-center justify-between w-screen h-20 px-16 py-7 font-Aboreto">
      <Link href="/" className="text-xl font-bold cursor-pointer">
        MOHAMMAD .T
      </Link>
      <div className="flex gap-5">
        <Link href="/about" className="text-xs font-semibold">
          ABOUT
        </Link>
        <Link href="/contact" className="text-xs font-semibold">
          CONTACT
        </Link>
      </div>
    </nav>
  );
}
