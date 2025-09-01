import { ButtonVariant, ButtonSize } from "@/components/Button/Button.types";

/**
 * Respuesta de la API de Rick and Morty
 */
export interface ApiResponse<T> {
  info: {
    count: number
    pages: number
    next: string | null
    prev: string | null
  }
  results: T[]
}

export interface PaginationProps {
  currentPage: number
  totalItems: number
  itemsPerPage: number
  totalPages: number
  onPageChange: (page: number) => void
  onPageSizeChange?: (pageSize: number) => void
  pageSizeOptions?: number[]
  maxPageButtons?: number
  showItemsInfo?: boolean
  showPageSizeSelector?: boolean
  showFirstLastButtons?: boolean
  isLoading?: boolean
  disabled?: boolean
  labels?: {
    previous?: string
    next?: string
    first?: string
    last?: string
    itemsPerPage?: string
    showing?: string
    of?: string
    items?: string
  }
  size?: ButtonSize;
  variant?: ButtonVariant;
}

export interface PaginationState {
    currentPage: number
    pageSize: number
    totalItems: number
    totalPages: number
}

export interface PaginationConfig<T = unknown> {
    initialPage?: number
    initialPageSize?: number
    pageSizeOptions?: number[]
    fetchData?: (page: number) => Promise<ApiResponse<T>>
}

export interface PaginatedResponse<T> {
    data: T[]
    pagination: {
        page: number
        pageSize: number
        totalItems: number
        totalPages: number
        hasNext: boolean
        hasPrevious: boolean
    }
}

export interface PaginationParams {
  page: number
  limit: number
  offset?: number
}

export interface UsePaginationReturn {
    pagination: PaginationState
    paginationProps: PaginationProps
    getPageNumbers: () => number[]
    getStartIndex: () => number
    getEndIndex: () => number
}
