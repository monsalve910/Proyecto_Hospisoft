const API = "http://localhost:3000/api/tipomedicamentos";

let modoEdicion = false;

let tipoMedicamentoEditando = null;
const tabla = document.getElementById("tiposTabla");

const btnNuevo = document.getElementById("btnNuevo");
const btnGuardar = document.getElementById("actualizarTipo");
const inputBuscar = document.getElementById("buscar");
const modal = document.getElementById("modal");
const tituloModal = document.getElementById("tituloModal");
const nombreInput = document.getElementById("nombre");

document.addEventListener("DOMContentLoaded", cargarTipos);

// inputBuscar.addEventListener("input", filtrarTipos);

/* ================= CARGAR MEDICAMENTOS ================= */

async function cargarTipos() {
  try {
    const res = await fetch(API);
    const tipos = await res.json();

    tabla.innerHTML = "";

    tipos.forEach((t) => {
      tabla.innerHTML += `
        <tr>
          <td>${t.id_tipo}</td>
          <td>${t.nombre_tipo}</td>
<td class="text-center">
  <button 
    class="btn btn-warning btn-sm mr-2"
    onclick="abrirModalEditar(${t.id_tipo})">
    Editar
  </button>

  <button 
    class="btn btn-danger btn-sm"
    onclick="eliminarTipo(${t.id_tipo})">
    Eliminar
  </button>
</td>
        </tr>
      `;
    });
  } catch (error) {
    // Swal.fire("Error", "No se pudieron cargar los tipos de medicamentos", "error");
  }
}

async function eliminarTipo(id) {
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
        "El tipo de medicamento fue eliminado correctamente",
        "success",
      );
      cargarTipos();
    } catch (error) {
      Swal.fire("Error", "No se pudo eliminar el tipo de medicamento", "error");
    }
  }
}

/* ================= CREAR TIPO MEDICAMENTO ================= */

async function guardarNuevoTipo() {
  try {
    const tipo = obtenerDatosFormulario();

    await fetch(API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(tipo),
    });

    await Swal.fire(
      "Éxito",
      "Tipo de medicamento creado correctamente",
      "success",
    );

    cerrarModal();
    cargarTipos();
  } catch (error) {
    Swal.fire("Error", "No se pudo crear el tipo de medicamento", "error");
  }
}

/* ================= MODAL EDITAR ================= */

async function abrirModalEditar(id) {
  try {
    modoEdicion = true;
    tipoMedicamentoEditando = id;

    fetch(`${API}/${id}`)
      .then((res) => res.json())
      .then((medicamento) => {
        document.getElementById("tituloModal").innerText =
          "Editar Tipo de Medicamento";
        document.getElementById("nombre").value = medicamento.nombre_tipo;
        btnGuardar.onclick = actualizarMedicamento;
        $("#modal").modal("show");
      });
  } catch (error) {
    Swal.fire("Error", "No se pudo cargar el tipo de medicamento", "error");
  }
}

/* ================= ACTUALIZAR MEDICAMENTO ================= */

async function actualizarMedicamento() {
  try {
   const datos = obtenerDatosFormulario();

    await fetch(`${API}/${tipoMedicamentoEditando}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(datos),
    });

    await Swal.fire(
      "Actualizado",
      "Tipo de medicamento actualizado correctamente",
      "success",
    );

    cerrarModal();
    cargarTipos();
  } catch (error) {
    Swal.fire("Error", "No se pudo actualizar el tipo de medicamento", "error");
  }
}

/* ================= ELIMINAR ================= */

async function eliminarMedicamento(id) {
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
        "El tipo de medicamento fue eliminado correctamente",
        "success",
      );

      cargarTipos();
    } catch (error) {
      Swal.fire("Error", "No se pudo eliminar el tipo de medicamento", "error");
    }
  }
}

/* ================= BUSCADOR ================= */

function filtrarTipos() {
  const texto = inputBuscar.value.toLowerCase();
  const filas = document.querySelectorAll("#tiposMedicamentosTabla tr");

  filas.forEach((fila) => {
    fila.style.display = fila.innerText.toLowerCase().includes(texto)
      ? ""
      : "none";
  });
}

/* ================= UTILIDADES ================= */

function obtenerDatosFormulario() {
  return {
    nombre_tipo: document.getElementById("nombre").value,
  };
}

function limpiarFormulario() {
  document.getElementById("nombre").value = "";
}

function cerrarModal() {
  $("#modal").modal("hide");
}

// se hara la funcion de crear el tipo de medicamento desde un formulario normal y no desde un modal

// crear tipo de medicamento desde un formulario normal
