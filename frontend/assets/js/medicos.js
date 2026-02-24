const API = "http://localhost:3000/api/medicos";

const tabla = document.getElementById("tablaMedicos");
const modal = document.getElementById("modal");
const btnNuevo = document.getElementById("btnNuevo");
const btnGuardar = document.getElementById("guardarMedico");
const inputBuscar = document.getElementById("buscar");

document.addEventListener("DOMContentLoaded", cargarMedicos);
btnNuevo.addEventListener("click", abrirModalCrear);
inputBuscar.addEventListener("input", filtrarMedicos);

let modoEdicion = false;
let medicoEditando = null;

/* ================= CARGAR MEDICOS ================= */

async function cargarMedicos() {
  try {
    const res = await fetch(API);
    const medicos = await res.json();

    tabla.innerHTML = "";

    medicos.forEach(m => {
      tabla.innerHTML += `
        <tr>
          <td>${m.nombre}</td>
          <td>${m.apellido}</td>
          <td>${m.especialidad}</td>
          <td>${m.telefono}</td>
          <td>${m.email}</td>
          <td>

            <button onclick="abrirModalEditar(${m.id_medico})">Editar</button>
            <button onclick="eliminarMedico(${m.id_medico})">Eliminar</button>
          </td>
        </tr>
      `;
    });

  } catch (error) {
    // Swal.fire("Error", "No se pudieron cargar los medicos", "error");
  }
}

/* ================= MODAL CREAR ================= */

function abrirModalCrear() {
  modoEdicion = false;
  medicoEditando = null;

  document.getElementById("tituloModal").innerText = "Nuevo Medico";
  limpiarFormulario();

  btnGuardar.onclick = guardarNuevoMedico;

  $("#modal").modal("show");

}

/* ================= CREAR MEDICO ================= */

async function guardarNuevoMedico() {
  try {
    const medico = obtenerDatosFormulario();

    await fetch(API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(medico)
    });

    await Swal.fire("Éxito", "Medico creado correctamente", "success");

    cerrarModal();
    cargarMedicos();

  } catch (error) {
    Swal.fire("Error", "No se pudo crear el medico", "error");
  }
}

/* ================= MODAL EDITAR ================= */

async function abrirModalEditar(id) {
  try {
    modoEdicion = true;
    medicoEditando = id;

    const res = await fetch(`${API}/${id}`);
    const medico = await res.json();

    document.getElementById("tituloModal").innerText = "Editar Medico";

    document.getElementById("nombre").value = medico.nombre;
    document.getElementById("apellido").value = medico.apellido;
        document.getElementById("especialidad").value = medico.especialidad;
    document.getElementById("telefono").value = medico.telefono;
    document.getElementById("email").value = medico.email;


    btnGuardar.onclick = actualizarMedico;

    $("#modal").modal("show");


  } catch (error) {
    Swal.fire("Error", "No se pudo cargar el paciente", "error");
  }
}

/* ================= ACTUALIZAR MEDICO ================= */

async function actualizarMedico() {
  try {
    const medico = obtenerDatosFormulario();

    await fetch(`${API}/${medicoEditando}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(medico)
    });

    await Swal.fire("Actualizado", "Medico actualizado correctamente", "success");

    cerrarModal();
    cargarMedicos();

  } catch (error) {
    Swal.fire("Error", "No se pudo actualizar el medico", "error");
  }
}

/* ================= ELIMINAR ================= */

async function eliminarMedico(id) {
  const result = await Swal.fire({
    title: "¿Estás seguro?",
    text: "No podrás revertir esta acción",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#d33",
    cancelButtonColor: "#3085d6",
    confirmButtonText: "Sí, eliminar",
    cancelButtonText: "Cancelar"
  });

  if (result.isConfirmed) {
    try {
      await fetch(`${API}/${id}`, { method: "DELETE" });

      await Swal.fire(
        "Eliminado",
        "El Medico fue eliminado correctamente",
        "success"
      );

      cargarMedicos();

    } catch (error) {
      Swal.fire("Error", "No se pudo eliminar el medico", "error");
    }
  }
}

/* ================= BUSCADOR ================= */

function filtrarMedicos() {
  const texto = inputBuscar.value.toLowerCase();
  const filas = document.querySelectorAll("#tablaMedicos tr");

  filas.forEach(fila => {
    fila.style.display = fila.innerText.toLowerCase().includes(texto)
      ? ""
      : "none";
  });
}

/* ================= UTILIDADES ================= */

function obtenerDatosFormulario() {
  return {
    nombre: document.getElementById("nombre").value,
    apellido: document.getElementById("apellido").value,
    especialidad: document.getElementById("especialidad").value,
    telefono: document.getElementById("telefono").value,
    email: document.getElementById("email").value,
  };
}

function limpiarFormulario() {
  document.getElementById("nombre").value = "";
  document.getElementById("apellido").value = "";
  document.getElementById("especialidad").value = "";
  document.getElementById("telefono").value = "";
  document.getElementById("email").value = "";

}

function cerrarModal() {
  $("#modal").modal("hide");
}

