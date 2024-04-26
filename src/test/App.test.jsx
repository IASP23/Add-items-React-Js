import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "../App";
import userEvent from "@testing-library/user-event";

describe("<App />", () => {
  test("Should add item", async () => {
    /* Crer el usuario  */
    const user = userEvent.setup();
    /* Renderizar la app  , veria */
    render(<App />);

    /* Buscar el input */ /* Conocer la semantica */
    const input = screen.getByRole("textbox");
    expect(input).toBeDefined();

    /* Buscar el formulario */
    const form = screen.getByRole("form"); /* Aria-label --> forzar el rol */
    expect(form).toBeDefined();

    /* Buscar dentro del formulario */
    const button = form.querySelector("button");
    expect(button).toBeDefined;

    /* Lo que hara el usuario  */
    await user.type(input, "Libros");
    await user.click(button);

    const list = screen.getByRole("list");
    expect(list).toBeDefined;

    screen.debug();
  });
});

/*  */

/*   test("should work", () => {
    render(<App />);
    screen.debug();

    expect(screen.getByText("Prueba tecnica de React")).toBeDefined();
  });
}); */

/*Para que sirven los test ?
Que test harias ?  
e2e  --> etowend pruebas de extremo a extremo 
*/
