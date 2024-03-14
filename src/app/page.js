"use client";
import "@fontsource/russo-one";
import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Service from "@/components/Service";
import Work from "@/components/Work";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Service/>
      <Work/>
    </>
  );
}
