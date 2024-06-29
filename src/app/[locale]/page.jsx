"use client";
import { useLocale } from "next-intl";
export default function Home() {
  const lang = useLocale();
  console.log(lang);
  return <div>{lang === "en" ? "hello" : "مرحبا"}</div>;
}
