import { ButtonVariant, ButtonSize } from "@/shared/components/Button/Button.types";

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
