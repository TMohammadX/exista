import Link from "next/link";

export default function () {
  return (
    <nav className="h-20 w-screen flex justify-between px-16 py-7 font-Aboreto items-center absolute z-10">
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
