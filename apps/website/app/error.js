"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background">
      <h2 className="text-4xl font-bold">Something went wrong!</h2>
      <p className="mt-4 text-lg text-muted-foreground">
        An error occurred while processing your request
      </p>
      <div className="mt-8 flex gap-4">
        <button
          onClick={() => reset()}
          className="px-4 py-2 rounded-md bg-primary text-white hover:bg-primary/90"
        >
          Try again
        </button>
        <Link
          href="/"
          className="px-4 py-2 rounded-md bg-secondary text-white hover:bg-secondary/90"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
