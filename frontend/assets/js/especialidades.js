const API = "http://localhost:3000/api/especialidades";

const tabla = document.getElementById("tablaEspecialidades");
const modal = document.getElementById("modal");
const btnNuevo = document.getElementById("btnNuevo");
const btnGuardar = document.getElementById("guardarEspecialidad");
const inputBuscar = document.getElementById("buscar");

document.addEventListener("DOMContentLoaded", cargarEspecialidades);
btnNuevo.addEventListener("click", abrirModalCrear);
inputBuscar.addEventListener("input", filtrarEspecialidades);

let modoEdicion = false;
let especialidadEditando = null;

/* ================= CARGAR ESPECIALIDADES ================= */

async function cargarEspecialidades() {
  try {
    const res = await fetch(API);
    const especialidades = await res.json();

    tabla.innerHTML = "";

    especialidades.forEach((e) => {
      tabla.innerHTML += `
        <tr>
          <td>${e.id_especialidad}</td>
          <td>${e.nombre_especialidad}</td>
          <td>
            <button class="btn btn-warning btn-sm mr-2" onclick="abrirModalEditar(${e.id_especialidad})">Editar</button>
            <button class="btn btn-danger btn-sm" onclick="eliminarEspecialidad(${e.id_especialidad})">Eliminar</button>
          </td>
        </tr>
      `;
    });

  } catch (error) {
    console.error("Error cargando especialidades:", error);
  }
}

/* ================= MODAL CREAR ================= */

function abrirModalCrear() {
  modoEdicion = false;
  especialidadEditando = null;

  document.getElementById("tituloModal").innerText = "Nueva Especialidad";
  limpiarFormulario();

  btnGuardar.onclick = guardarNuevaEspecialidad;

  $("#modal").modal("show");
}

/* ================= CREAR ================= */

async function guardarNuevaEspecialidad() {
  try {
    const especialidad = obtenerDatosFormulario();

    await fetch(API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(especialidad),
    });

    await Swal.fire("Éxito", "Especialidad creada correctamente", "success");

    cerrarModal();
    cargarEspecialidades();

  } catch (error) {
    Swal.fire("Error", "No se pudo crear la especialidad", "error");
  }
}

/* ================= MODAL EDITAR ================= */

async function abrirModalEditar(id) {
  try {
    modoEdicion = true;
    especialidadEditando = id;

    const res = await fetch(`${API}/${id}`);
    const especialidad = await res.json();

    document.getElementById("tituloModal").innerText = "Editar Especialidad";
    document.getElementById("nombre").value = especialidad.nombre_especialidad;

    btnGuardar.onclick = actualizarEspecialidad;

    $("#modal").modal("show");

  } catch (error) {
    Swal.fire("Error", "No se pudo cargar la especialidad", "error");
  }
}

/* ================= ACTUALIZAR ================= */

async function actualizarEspecialidad() {
  try {
    const especialidad = obtenerDatosFormulario();

    await fetch(`${API}/${especialidadEditando}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(especialidad),
    });

    await Swal.fire(
      "Actualizado",
      "Especialidad actualizada correctamente",
      "success"
    );

    cerrarModal();
    cargarEspecialidades();

  } catch (error) {
    Swal.fire("Error", "No se pudo actualizar la especialidad", "error");
  }
}

/* ================= ELIMINAR ================= */

async function eliminarEspecialidad(id) {
  const result = await Swal.fire({
    title: "¿Estás seguro?",
    text: "No podrás revertir esta acción",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#d33",
    cancelButtonColor: "#3085d6",
    confirmButtonText: "Sí, eliminar",
    cancelButtonText: "Cancelar",
  });

  if (result.isConfirmed) {
    try {
      await fetch(`${API}/${id}`, { method: "DELETE" });

      await Swal.fire(
        "Eliminado",
        "La Especialidad fue eliminada correctamente",
        "success"
      );

      cargarEspecialidades();

    } catch (error) {
      Swal.fire("Error", "No se pudo eliminar la especialidad", "error");
    }
  }
}

/* ================= BUSCADOR ================= */

function filtrarEspecialidades() {
  const texto = inputBuscar.value.toLowerCase();
  const filas = document.querySelectorAll("#tablaEspecialidades tr");

  filas.forEach((fila) => {
    fila.style.display = fila.innerText.toLowerCase().includes(texto)
      ? ""
      : "none";
  });
}

/* ================= UTILIDADES ================= */

function obtenerDatosFormulario() {
  return {
    nombre_especialidad: document.getElementById("nombre").value,
  };
}

function limpiarFormulario() {
  document.getElementById("nombre").value = "";
}

function cerrarModal() {
  $("#modal").modal("hide");
}