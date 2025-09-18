import React from "react";
import Link from "next/link";
import { Heading } from '@/shared/components';
import ArrowRightIcon from "@/shared/components/icons/ArrowRightIcon";
import HashtagIcon from "@/shared/components/icons/HashtagIcon";

type ResidentProps = {
  id?: string;
  index?: number;
};

export const Resident: React.FC<ResidentProps> = ({ id, index }) => {
  return (
    <Link
        href={`/characters/${id}`}
        className="p-4 bg-white w-full cursor-pointer shadow-sm transition-all duration-300 group hover:bg-[#202127] rounded-lg border border-gray-200"
    >
      <div className="flex items-center space-x-3">
        {/* Avatar index */}
        <div className="size-8 bg-purple-800 group-hover:bg-purple-400 rounded-full flex items-center justify-center text-white text-sm font-semibold mr-0! px-3">
          {index}
        </div>

        {/* Info */}
        <div className="flex flex-col w-full ml-2">
          <div className="flex justify-between items-center w-full">
            <Heading level="h5" color="light" margin="sm" className="flex items-center group-hover:text-white">Personaje</Heading>
            <div className="flex col items-center text-gray-600 group-hover:text-white">
              <HashtagIcon className="size-4" /> {id}
            </div>
          </div>
          <p className="flex items-center text-xs text-gray-600 group-hover:text-white">Ver detalles <ArrowRightIcon className="size-4 text-gray-600 group-hover:text-white pl-1" /></p>
        </div>
      </div>
    </Link>
  );
};
