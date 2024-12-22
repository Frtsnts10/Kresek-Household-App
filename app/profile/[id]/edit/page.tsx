"use client";

import React from "react";

export default function EdtProfile() {
  return (
    <main className="flex flex-col">
      {/* Header */}
      <section
        className="sticky top-0 z-10 bg-[var(--background)] p-4 flex flex-row justify-between items-center border-b pb-4"
        style={{ borderBottom: "1px solid var(--border-gray)" }}>
        <h1 className="text-[24px] font-bold">Edit User</h1>
      </section>
    </main>
  );
}
