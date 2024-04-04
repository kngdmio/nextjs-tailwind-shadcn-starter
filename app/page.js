"use client";

import * as React from "react";
import Navbar from "@/components/utilities/navbar";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="p-20">
        <h1>Home</h1>
        <Button>Click me</Button>
      </div>
    </main>
  );
}
