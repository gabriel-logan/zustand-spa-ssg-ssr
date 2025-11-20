"use client";

import Link from "next/link";
import { useCountStore } from "@/stores/countStore";

export default function Page2() {
  const { count, setCount } = useCountStore();

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-100 dark:bg-zinc-900 p-6">
      <main className="w-full max-w-xl bg-white dark:bg-zinc-800 p-10 rounded-2xl shadow-lg flex flex-col gap-6">
        <h1 className="text-3xl font-bold text-zinc-800 dark:text-zinc-100">
          Page 2
        </h1>

        <div className="flex flex-col gap-4 items-start">
          <button
            className="px-4 py-2 cursor-pointer bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
            onClick={() => setCount(count + 1)}
          >
            count is {count}
          </button>

          <Link
            href="/page1"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            Go to Page 1
          </Link>
        </div>
      </main>
    </div>
  );
}
