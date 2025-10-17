document.addEventListener("DOMContentLoaded", () => {
  const mensajeContainer = document.getElementById("mensaje-api");
  const btnCargar = document.getElementById("btn-cargar");

  btnCargar.addEventListener("click", async () => {
    mensajeContainer.textContent = "Cargando...";
    try {
      const res = await fetch(`${API_BASE_URL}/api/saludo`);
      if (!res.ok) throw new Error("Error en la respuesta del servidor");
      const data = await res.json();
      mensajeContainer.textContent = data.mensaje;
    } catch (err) {
      mensajeContainer.textContent = "Error al conectar con el backend.";
      mensajeContainer.style.color = "red";
      console.error(err);
    }
  });
});
