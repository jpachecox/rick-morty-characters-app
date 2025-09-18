"use client";

import { useEffect } from "react";
import { useParams } from "next/navigation";
import { useLocation } from "@/features/locations/hooks/useLocation";

/** Components */
import { LinkButton } from "@/shared/components";
import { Info } from "@/features/locations/components/Info";
import { Stat } from "@/features/locations/components/Stat";
import { Resident } from "@/features/locations/components/Resident";
import { Heading } from '@/shared/components';

/** Icons */
import BuildingIcon from "@/shared/components/icons/BuildingIcon";
import LocationIcon from "@/shared/components/icons/LocationIcon";
import CalendarIcon from "@/shared/components/icons/CalendarIcon";
import UsersIcon from "@/shared/components/icons/UsersIcon";
import HashtagIcon from "@/shared/components/icons/HashtagIcon";
import ArrowLeftIcon from "@/shared/components/icons/ArrowLeftIcon";
import HomeIcon from "@/shared/components/icons/HomeIcon";
import SearchIcon from "@/shared/components/icons/SearchIcon";
import WarningIcon from "@/shared/components/icons/WarningIcon";

export default function LocationDetailPage() {
  const params = useParams();
  const id = params?.id as string;
  const { location, loading, error } = useLocation(id);

  useEffect(() => {}, [location]);

  if (loading) {
    return (
      <div className="container mx-auto py-8">
        <div className="flex justify-center items-center min-h-[400px]">
          <div className="flex items-center space-x-3">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
            <p className="text-blue-500 text-lg">Cargando locación...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto py-8">
        <div className="flex flex-col items-center justify-center min-h-[400px] space-y-4">
          <WarningIcon className="size-6 text-red-500" />
          <p className="text-red-500 text-lg text-center">{error}</p>
          <LinkButton
            href="/locations"
            target="_self"
            rel="noopener noreferrer"
            variant="secondary"
          >
            Volver a Locaciones
          </LinkButton>
        </div>
      </div>
    );
  }

  if (!location) {
    return (
      <div className="container mx-auto py-8">
        <div className="flex flex-col items-center justify-center min-h-[400px] space-y-4">
          <SearchIcon className="size-8 text-sky-600" />
          <p className="text-gray-500 text-lg">No se encontró la locación.</p>
          <LinkButton
            href="/locations"
            target="_self"
            rel="noopener noreferrer"
            variant="primary"
          >
            Volver a Locaciones
          </LinkButton>
        </div>
      </div>
    );
  }

  return (
    <main className="container mx-auto py-8 px-4">
      {/* Header con navegación */}
      <div className="mb-8">
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          <LinkButton
            href="/locations"
            target="_self"
            rel="noopener noreferrer"
            variant="secondary"
            size="sm"
          >
            <ArrowLeftIcon className="w-5 h-5 text-gray-500" /> Volver a Locaciones
          </LinkButton>
          
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <span>Locación #{location.id}</span>
            <span>•</span>
            <span>Creado: {location.created ? new Date(location.created).toLocaleDateString() : "Fecha desconocida"}</span>
          </div>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Header de la locación */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
            <div>
              <Heading level="h1" className="text-4xl font-bold mb-2">{location.name}</Heading>
              
              <div className="flex flex-wrap gap-2">
                <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
                  {location.type}
                </span>
                <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
                  {location.dimension}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Información detallada */}
        <div className="p-4">
          <div className="grid grid-cols-12 gap-6">
            {/* Columna izquierda (8/12) */}
            <div className="col-span-12 md:col-span-9">
              <Heading level="h2" color="secondary" margin="sm">Información</Heading>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Info
                  icon={<BuildingIcon className="w-8 h-8 text-sky-700" />}
                  label="Tipo"
                  value={location.type}
                />
                <Info
                  icon={<LocationIcon className="w-8 h-8 text-sky-700" />}
                  label="Dimensión"
                  value={location.dimension}
                />
                <Info
                  icon={<CalendarIcon className="w-8 h-8 text-sky-700" />}
                  label="Fecha de creación"
                  value={location.created ? new Date(location.created).toLocaleDateString('es-ES', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                  }) : "Fecha desconocida"}
                />
              </div>
            </div>

            {/* Columna derecha (4/12) */}
            <div className="col-span-12 md:col-span-3">
              <Heading level="h2" color="secondary" margin="sm">Estadisticas</Heading>
              <div className="grid grid-cols-2 gap-4">
                <Stat
                  number={location.residents?.length || 0}
                  label="Residentes"
                  icon={<UsersIcon className="w-8 h-8 text-sky-700" />}
                />
                <Stat
                  number={location.id}
                  label="ID"
                  icon={<HashtagIcon className="w-8 h-8 text-sky-700" />}
                />
              </div>
            </div>
          </div>

          {/* Lista de residentes */}
          {location.residents && location.residents.length > 0 && (
            <div className="mt-2">
              <div className="flex justify-between items-center w-full bg-light-800 rounded-t-lg mb-4">
                <Heading level="h2" color="secondary" margin="none" className="flex items-center group-hover:text-white">Residentes</Heading>
                <div className="flex col items-center text-gray-600 group-hover:text-white">
                  <UsersIcon className="size-5 mr-3" /> {location.residents.length} 
                </div>
              </div>
              
              {location.residents.length === 0 ? (
                <div className="text-center py-8 text-gray-500">
                  <div className="text-4xl mb-2"><HomeIcon className="w-6 h-6 text-gray-600" /></div>
                  <p>No hay residentes conocidos en esta locación.</p>
                </div>
              ) : (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {location.residents.map((residentUrl, index) => {
                    const residentId = residentUrl.split("/").pop();
                    return (
                      <Resident
                        key={residentUrl}
                        id={residentId}
                        index={index + 1}
                      />
                    );
                  })}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
