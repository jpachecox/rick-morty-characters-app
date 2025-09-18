import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

// Importa todos los íconos automáticamente
import * as Icons from "./index";

describe("Icons", () => {
  it("deben renderizarse correctamente", () => {
    Object.entries(Icons).forEach(([name, Icon]) => {
      const { container } = render(<Icon data-testid={name} />);
      const svgElement = container.querySelector("svg");
      expect(svgElement).toBeInTheDocument();
    });
  });

  it("deben aceptar props como width, height y className", () => {
    Object.entries(Icons).forEach(([name, Icon]) => {
      const { getByTestId } = render(
        <Icon
          data-testid={name}
          width={32}
          height={32}
          className="text-blue-500"
        />
      );
      const svg = getByTestId(name);

      expect(svg).toHaveAttribute("width", "32");
      expect(svg).toHaveAttribute("height", "32");
    });
  });
});
