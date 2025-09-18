import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Pagination from "./Pagination";
import { PaginationLabels } from "@/shared/constants/pagination.constants";

describe("Pagination component", () => {
  const onPageChange = jest.fn();

  beforeEach(() => {
    onPageChange.mockClear();
  });

  it("should not render if totalPages <= 1", () => {
    const { container } = render(
      <Pagination
        currentPage={1}
        totalPages={1}
        totalItems={10}
        itemsPerPage={10}
        onPageChange={jest.fn()}
      />
    );

    expect(container).toBeEmptyDOMElement();
  });

  it("renders navigation buttons", () => {
    render(
      <Pagination
        currentPage={2}
        totalPages={5}
        itemsPerPage={10}
        totalItems={50}
        onPageChange={onPageChange}
      />
    );

    expect(
      screen.getByRole("button", { name: PaginationLabels.first })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: PaginationLabels.previous })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: PaginationLabels.next })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: PaginationLabels.last })
    ).toBeInTheDocument();
  });

  it("renders pagination info text", () => {
    render(
      <Pagination
        currentPage={2}
        totalPages={5}
        totalItems={50}
        itemsPerPage={10}
        onPageChange={onPageChange}
      />
    );

    expect(
      screen.getByText(`${PaginationLabels.showing} 2 ${PaginationLabels.of} 5`)
    ).toBeInTheDocument();
  });

  it("calls onPageChange with the correct values", () => {
    render(
      <Pagination
        currentPage={2}
        totalPages={5}
        itemsPerPage={10}
        totalItems={50}
        onPageChange={onPageChange}
      />
    );

    fireEvent.click(screen.getByRole("button", { name: PaginationLabels.first }));
    expect(onPageChange).toHaveBeenCalledWith(1);

    fireEvent.click(screen.getByRole("button", { name: PaginationLabels.previous }));
    expect(onPageChange).toHaveBeenCalledWith(1);

    fireEvent.click(screen.getByRole("button", { name: PaginationLabels.next }));
    expect(onPageChange).toHaveBeenCalledWith(3);

    fireEvent.click(screen.getByRole("button", { name: PaginationLabels.last }));
    expect(onPageChange).toHaveBeenCalledWith(5);
  });

  it("disables buttons when on first or last page", () => {
    render(
      <Pagination
        currentPage={1}
        totalPages={5}
        itemsPerPage={10}
        totalItems={50}
        onPageChange={onPageChange}
      />
    );

    expect(
      screen.getByRole("button", { name: PaginationLabels.first })
    ).toBeDisabled();
    expect(
      screen.getByRole("button", { name: PaginationLabels.previous })
    ).toBeDisabled();
  });

  it("respects disabled prop", () => {
    render(
      <Pagination
        currentPage={1}
        totalPages={5}
        totalItems={50}
        itemsPerPage={10}
        onPageChange={onPageChange}
        disabled={true}
      />
    );

    const nextButton = screen.getByRole("button", { name: PaginationLabels.next });

    expect(nextButton).toBeDisabled();

    fireEvent.click(nextButton);
    expect(onPageChange).not.toHaveBeenCalled();
  });
});
