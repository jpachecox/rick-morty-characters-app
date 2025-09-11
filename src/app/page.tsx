"use client";

import LinkButton from "@/shared/components/LinkButton/LinkButton";
import RecentCharacters from "@/features/characters/components/Recent";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <LinkButton
            href="/characters"
            target="_self"
            rel="noopener noreferrer"
            variant="danger"
          >
            Ver todos los Personajes
          </LinkButton>
        </div>
        
        <RecentCharacters />
        
      </main>
    </div>
  );
}
