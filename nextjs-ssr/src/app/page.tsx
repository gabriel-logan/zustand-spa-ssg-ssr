import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-100 dark:bg-zinc-900 p-6">
      <main className="w-full max-w-xl bg-white dark:bg-zinc-800 p-10 rounded-2xl shadow-lg flex flex-col gap-6">
        <h1 className="text-3xl font-bold text-zinc-800 dark:text-zinc-100">
          Home
        </h1>

        <div className="flex flex-col gap-3">
          <Link
            href="/page1"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            Go to Page 1
          </Link>

          <Link
            href="/page2"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            Go to Page 2
          </Link>
        </div>
      </main>
    </div>
  );
}
