const API = "http://localhost:3000/api/pacientes";

const tabla = document.getElementById("tablaPacientes");
const modal = document.getElementById("modal");
const btnNuevo = document.getElementById("btnNuevo");
const btnGuardar = document.getElementById("guardarPaciente");
const inputBuscar = document.getElementById("buscar");

document.addEventListener("DOMContentLoaded", cargarPacientes);
btnNuevo.addEventListener("click", abrirModalCrear);
inputBuscar.addEventListener("input", filtrarPacientes);

let modoEdicion = false;
let pacienteEditando = null;

/* ================= CARGAR PACIENTES ================= */

async function cargarPacientes() {
  try {
    const res = await fetch(API);
    const pacientes = await res.json();

    tabla.innerHTML = "";

    pacientes.forEach(p => {
      tabla.innerHTML += `
        <tr>
          <td>${p.nombre}</td>
          <td>${p.apellido}</td>
          <td>${p.documento}</td>
          <td>${p.telefono}</td>
          <td>${p.email}</td>
          <td>${p.direccion}</td>
          <td>${p.fechaNacimiento}</td>
          <td>
            <button onclick="abrirModalEditar(${p.id_paciente})">Editar</button>
            <button onclick="eliminarPaciente(${p.id_paciente})">Eliminar</button>
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

  document.getElementById("tituloModal").innerText = "Nuevo Paciente";
  limpiarFormulario();

  btnGuardar.onclick = guardarNuevoPaciente;

  $("#modal").modal("show");

}

/* ================= CREAR PACIENTE ================= */

async function guardarNuevoPaciente() {
  try {
    const paciente = obtenerDatosFormulario();

    await fetch(API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(paciente)
    });

    await Swal.fire("Éxito", "Paciente creado correctamente", "success");

    cerrarModal();
    cargarPacientes();

  } catch (error) {
    Swal.fire("Error", "No se pudo crear el paciente", "error");
  }
}

/* ================= MODAL EDITAR ================= */

async function abrirModalEditar(id) {
  try {
    modoEdicion = true;
    pacienteEditando = id;

    const res = await fetch(`${API}/${id}`);
    const paciente = await res.json();

    document.getElementById("tituloModal").innerText = "Editar Paciente";

    document.getElementById("nombre").value = paciente.nombre;
    document.getElementById("apellido").value = paciente.apellido;
    document.getElementById("documento").value = paciente.documento;
    document.getElementById("telefono").value = paciente.telefono;
    document.getElementById("email").value = paciente.email;
    document.getElementById("direccion").value = paciente.direccion;
    document.getElementById("fechaNacimiento").value = paciente.fechaNacimiento;

    btnGuardar.onclick = actualizarPaciente;

    $("#modal").modal("show");


  } catch (error) {
    Swal.fire("Error", "No se pudo cargar el paciente", "error");
  }
}

/* ================= ACTUALIZAR PACIENTE ================= */

async function actualizarPaciente() {
  try {
    const paciente = obtenerDatosFormulario();

    await fetch(`${API}/${pacienteEditando}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(paciente)
    });

    await Swal.fire("Actualizado", "Paciente actualizado correctamente", "success");

    cerrarModal();
    cargarPacientes();

  } catch (error) {
    Swal.fire("Error", "No se pudo actualizar el paciente", "error");
  }
}

/* ================= ELIMINAR ================= */

async function eliminarPaciente(id) {
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
        "El paciente fue eliminado correctamente",
        "success"
      );

      cargarPacientes();

    } catch (error) {
      Swal.fire("Error", "No se pudo eliminar el paciente", "error");
    }
  }
}

/* ================= BUSCADOR ================= */

function filtrarPacientes() {
  const texto = inputBuscar.value.toLowerCase();
  const filas = document.querySelectorAll("#tablaPacientes tr");

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
    documento: document.getElementById("documento").value,
    telefono: document.getElementById("telefono").value,
    email: document.getElementById("email").value,
    direccion: document.getElementById("direccion").value,
    fechaNacimiento: document.getElementById("fechaNacimiento").value
  };
}

function limpiarFormulario() {
  document.getElementById("nombre").value = "";
  document.getElementById("apellido").value = "";
  document.getElementById("documento").value = "";
  document.getElementById("telefono").value = "";
  document.getElementById("email").value = "";
  document.getElementById("direccion").value = "";
  document.getElementById("fechaNacimiento").value = "";
}

function cerrarModal() {
  $("#modal").modal("hide");
}

