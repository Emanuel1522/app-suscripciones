import Swal from "sweetalert2";

export function redirectAlert(navigate, mensaje, ruta) {
  let timerInterval;
  Swal.fire({
    title: mensaje,
    html: "Será redireccionado en <b></b> milisegundos.",
    timer: 1500,
    icon: "success",
    didOpen: () => {
      Swal.showLoading();
      const timer = Swal.getPopup().querySelector("b");
      timerInterval = setInterval(() => {
        timer.textContent = `${Swal.getTimerLeft()}`;
      }, 100);
    },
    willClose: () => {
      clearInterval(timerInterval);
      navigate(ruta);
    },
  });
}

export function generalAlert(titulo, mensaje, icono) {
  Swal.fire({
    icon: icono,
    title: titulo,
    text: mensaje,
  });
}

export function confirmAlert(id, apiItems, getItems) {
  Swal.fire({
    title: "Estas seguro?",
    text: "No podrás revertir esto",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Si, eliminar!",
  }).then((result) => {
    if (result.isConfirmed) {
      fetch(apiItems + "/" + id, {
        method: "DELETE",
      }).then(() => {
        getItems();
      });
      Swal.fire({
        title: "Eliminado!!",
        text: "Tu suscripcion ha sido eliminado.",
        icon: "success",
      });
    }
  });
}

export function tokenGenerator() {
  let token =
    "token_" +
    Math.random().toString(36).substring(2) +
    "-" +
    Math.random().toString(36).substring(2);
  return token;
}
