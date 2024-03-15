"use client";
import "@fontsource/russo-one";
import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Service from "@/components/Service";
import Work from "@/components/Work";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Service/>
      <Work/>
      <Experience/>
      <Skills/>
    </>
  );
}
