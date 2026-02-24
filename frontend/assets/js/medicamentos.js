const API = "http://localhost:3000/api/medicamentos";

let modoEdicion = false;
let medicamentoEditando = null;
const tabla = document.getElementById("medicamentosTabla");
const modal = document.getElementById("modal");
const btnNuevo = document.getElementById("btnNuevo");
const btnGuardar = document.getElementById("guardarMedicamento");
const inputBuscar = document.getElementById("buscar");

document.addEventListener("DOMContentLoaded", cargarMedicamentos);
btnNuevo.addEventListener("click", abrirModalCrear);
inputBuscar.addEventListener("input", filtrarMedicamentos);

/* ================= CARGAR MEDICAMENTOS ================= */

async function cargarMedicamentos() {
  try {
    const res = await fetch(API);
    const medicamentos = await res.json();

    tabla.innerHTML = "";

    medicamentos.forEach((m) => {
      tabla.innerHTML += `
        <tr>
          <td>${m.nombre}</td>
          <td>${m.descripcion}</td>
          <td>${m.stock}</td>
          <td>${m.precio}</td>
<td class="text-center">
  <button 
    class="btn btn-warning btn-sm mr-2"
    onclick="abrirModalEditar(${m.id_medicamento})">
    Editar
  </button>

  <button 
    class="btn btn-danger btn-sm"
    onclick="eliminarMedicamento(${m.id_medicamento})">
    Eliminar
  </button>
</td>

        </tr>
      `;
    });
  } catch (error) {
    // Swal.fire("Error", "No se pudieron cargar los pacientes", "error");
  }
}

/* ================= MODAL CREAR ================= */

function abrirModalCrear() {
  modoEdicion = false;
  pacienteEditando = null;

  document.getElementById("tituloModal").innerText = "Nuevo medicamento";
  limpiarFormulario();

  btnGuardar.onclick = guardarNuevoMedicamento;

  $("#modal").modal("show");
}

/* ================= CREAR MEDICAMENTO ================= */

async function guardarNuevoMedicamento() {
  try {
    const medicamento = obtenerDatosFormulario();

    await fetch(API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(medicamento),
    });

    await Swal.fire("Éxito", "Medicamento creado correctamente", "success");

    cerrarModal();
    cargarMedicamentos();
  } catch (error) {
    Swal.fire("Error", "No se pudo crear el medicamento", "error");
  }
}

/* ================= MODAL EDITAR ================= */

async function abrirModalEditar(id) {
  try {
    modoEdicion = true;
    medicamentoEditando = id;

    const res = await fetch(`${API}/${id}`);
    const medicamento = await res.json();

    document.getElementById("tituloModal").innerText = "Editar Medicamento";

    document.getElementById("nombre").value = medicamento.nombre;
    document.getElementById("descripcion").value = medicamento.descripcion;
    document.getElementById("stock").value = medicamento.stock;
    document.getElementById("precio").value = medicamento.precio;

    btnGuardar.onclick = actualizarMedicamento;

    $("#modal").modal("show");
  } catch (error) {
    Swal.fire("Error", "No se pudo cargar el medicamento", "error");
  }
}

/* ================= ACTUALIZAR MEDICAMENTO ================= */

async function actualizarMedicamento() {
  try {
    const medicamento = obtenerDatosFormulario();

    await fetch(`${API}/${medicamentoEditando}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(medicamento),
    });

    await Swal.fire(
      "Actualizado",
      "Medicamento actualizado correctamente",
      "success",
    );

    cerrarModal();
    cargarMedicamentos();
  } catch (error) {
    Swal.fire("Error", "No se pudo actualizar el medicamento", "error");
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
        "El medicamento fue eliminado correctamente",
        "success",
      );

      cargarMedicamentos();
    } catch (error) {
      Swal.fire("Error", "No se pudo eliminar el medicamento", "error");
    }
  }
}

/* ================= BUSCADOR ================= */

function filtrarMedicamentos() {
  const texto = inputBuscar.value.toLowerCase();
  const filas = document.querySelectorAll("#medicamentosTabla tr");

  filas.forEach((fila) => {
    fila.style.display = fila.innerText.toLowerCase().includes(texto)
      ? ""
      : "none";
  });
}

/* ================= UTILIDADES ================= */

function obtenerDatosFormulario() {
  return {
    nombre: document.getElementById("nombre").value,
    descripcion: document.getElementById("descripcion").value,
    stock: document.getElementById("stock").value,
    precio: document.getElementById("precio").value,
  };
}

function limpiarFormulario() {
  document.getElementById("nombre").value = "";
  document.getElementById("descripcion").value = "";
  document.getElementById("stock").value = "";
  document.getElementById("precio").value = "";
}

function cerrarModal() {
  $("#modal").modal("hide");
}
