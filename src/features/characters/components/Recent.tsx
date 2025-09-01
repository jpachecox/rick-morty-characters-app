"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Result } from '@/shared/types/domain';
import { getRecentCharacters } from "@/shared/utils/recentCharacters";

export default function RecentCharacters() {
    const [recent, setRecent] = useState<Result[]>([]);

    useEffect(() => {
        const stored = getRecentCharacters();
        setRecent(stored);
    }, []);

    if (recent.length === 0) {
        return null;
    }

    return (
        <section className="mt-8">
        <h2 className="text-2xl font-bold text-rick-blue-600 mb-4">
            Últimos personajes visitados
        </h2>
        <div className="flex gap-4 overflow-x-auto pb-2">
            {recent.map((char) => (
                <Link
                    key={char.id}
                    href={`/characters/${char.id}`}
                    className="flex flex-col items-center min-w-[120px] rounded-lg shadow-md bg-white p-2 hover:scale-105 transition-transform"
                >
                    <Image
                        src={char.image!}
                        alt={char.name!}
                        width={100}
                        height={100}
                        className="size-40 rounded-full"
                    />
                    <p className="mt-2 text-sm text-gray-700 text-center font-medium">
                        {char.name}
                    </p>
                </Link>
            ))}
        </div>
        </section>
    );
}
