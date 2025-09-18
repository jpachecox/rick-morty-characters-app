"use client";

import React from "react";
import Button from "@/shared/components/Button/Button";
import { PaginationProps } from "@/shared/types/pagination";
import { PaginationLabels } from "@/shared/constants/pagination.constants";

const Pagination: React.FC<PaginationProps> = ({
    currentPage,
    totalPages,
    onPageChange,
    disabled = false,
    isLoading = false,
    labels = PaginationLabels,
    size = "md",
    variant = "secondary",
    showFirstLastButtons = true,
}) => {

    if (totalPages <= 1) return null;

    return (
        <div className="flex justify-center items-center gap-2 mt-10">
            <hr />
            {showFirstLastButtons && (
                <Button
                    variant={variant}
                    size={size}
                    disabled={disabled || isLoading || currentPage === 1}
                    onClick={() => onPageChange(1)}
                >
                    {labels.first}
                </Button>
            )}

            <Button
                variant={variant}
                size={size}
                disabled={disabled || isLoading || currentPage === 1}
                onClick={() => onPageChange(Math.max(1, currentPage - 1))}
            >
                {labels.previous}
            </Button>

            <span className="p-2 text-sm font-medium text-black/80">
                {labels.showing} {currentPage} {labels.of} {totalPages}
            </span>

            <Button
                variant={variant}
                size={size}
                disabled={disabled || isLoading || currentPage === totalPages}
                onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
            >
                {labels.next}
            </Button>

            {showFirstLastButtons && (
                <Button
                    variant={variant}
                    size={size}
                    disabled={disabled || isLoading || currentPage === totalPages}
                    onClick={() => onPageChange(totalPages)}
                >
                    {labels.last}
                </Button>
            )}
        </div>
    );
};

Pagination.displayName = 'Pagination';

export default Pagination;
