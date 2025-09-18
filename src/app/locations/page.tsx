"use client";

import { useState } from "react";
import { LocationList } from "@/features/locations/components/List";
import { useLocations } from "@/features/locations/hooks/useLocations";

/** Components */
import Pagination from "@/shared/components/Pagination/Pagination";
import Input from "@/shared/components/Input/Input";
import { LinkButton } from "@/shared/components";

/** Icons */
import SearchIcon from "@/shared/components/icons/SearchIcon";
import ArrowLeftIcon from "@/shared/components/icons/ArrowLeftIcon";

export default function CharactersPage() {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const { locations, totalPages, loading, error } = useLocations(page, search);
  const ITEMS_PER_PAGE = Number(process.env.NEXT_PUBLIC_ITEMS_PER_PAGE) || 20;

  return (
    <main className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6 text-rick-blue-600">Locaciones</h1>

      <div className="flex gap-4 items-center flex-col sm:flex-row">
        <LinkButton
          href="/"
          target="_self"
          variant="danger"
        >
          <ArrowLeftIcon className="size-5 text-white" /> Volver al Inicio
        </LinkButton>
      </div>

      <div className="bg-white w-full my-6 flex items-center gap-2 border border-gray-300 rounded-lg px-3 shadow-sm hover:border-gray-400 focus-within:border-gray-800 focus-within:ring-1 focus-within:ring-gray-400 transition">
        <SearchIcon className="w-5 h-5 text-gray-500" />
        <span className="text-gray-300">|</span>
        <Input
          placeholder="Filtrar Locaciones..."
          value={search}
          onChange={(e) => {
            setPage(1);
            setSearch(e.target.value);
          }}
          className="flex-1 w-full max-w-full focus:outline-none focus:ring-0 focus:border-none shadow-none !ring-0 !outline-none !border-none text-gray-900 placeholder:text-gray-400"
        />
      </div>

      <div className="relative">
        {loading && (
          <div className="flex justify-center items-center mt-4 py-4 w-full h-auto">
            <div className="flex items-center space-x-2">
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-500"></div>
              <p className="text-gray-500">Cargando locaciones...</p>
            </div>
          </div>
        )}

        <LocationList locations={locations} />

        {!loading && locations.length === 0 && !error && (
          <p className="text-gray-500 mt-4">
            No se encontraron locaciones.
          </p>
        )}

        {error && (
          <p className="text-red-600 font-medium mt-4">
            {error}
          </p>
        )}
      </div>

      <Pagination
        currentPage={page}
        totalPages={totalPages}
        onPageChange={setPage}
        disabled={loading}
        size="md"
        variant="primary"
        totalItems={locations?.length ?? 0}
        itemsPerPage={ITEMS_PER_PAGE}
      />
    </main>
  );
}
