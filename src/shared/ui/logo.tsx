"use client";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";

export default function Logo() {
  const isMoreThan600 = useMediaQuery({
    query: "(min-width: 600px)",
  });

  return (
    <Link href="/" suppressHydrationWarning className=" text-2xl font-semibold">
      {isMoreThan600 ? "WBM tic tac toe" : "WBM TTO"}
    </Link>
  );
}
