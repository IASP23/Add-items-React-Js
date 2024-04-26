import { useState } from "react";

import "./App.css";

/* const INITIAL_ITEMS = [
  { id: crypto.randomUUID(), text: "Videojuegos" },
  { id: crypto.randomUUID(), text: "Peliculas" },
]; */

//JS  JavaScript es capaz de manejar tipos de manera dinámica (TIPADO DINAMICO)

function App() {
  const [items, setItems] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const item = formData.get("text");
    console.log(item);
    if (!item || item == null) return;
    const newItem = { id: crypto.randomUUID(), text: item };

    setItems((prevItems) => {
      return [...prevItems, newItem];
    });
    e.target.reset();
  };
  const handleDelete = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
  };

  return (
    <main>
      <aside>
        <h1>Prueba tecnica de React</h1>
        <h2>Añadir y eliminar elementos de una lista</h2>
        <form onSubmit={handleSubmit} aria-label="Agregar elementos a la lista">
          <label htmlFor="">
            Elemento a introducir
            <input
              type="
          text"
              role="textbox"
              name="text"
              required
              placeholder="Item"
            />
          </label>
          <button>Agregar elementos</button>
        </form>
      </aside>

      <section>
        <h2>Lista de elementos</h2>

        {items.length === 0 ? (
          <p>
            <span>No existen elementos </span>
          </p>
        ) : (
          <ul role="list">
            {items.map((item) => (
              <li key={item.id}>
                {item.text}
                {/* Funcion de callback --> Invocar una funcion en un momento especifico  */}
                <button onClick={() => handleDelete(item.id)}>Eliminar</button>
              </li>
            ))}
          </ul>
        )}
      </section>
    </main>
  );
}

export default App;
