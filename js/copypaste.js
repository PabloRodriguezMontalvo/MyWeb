function CopiarEmail(){


const texto = "pablo.rodriguez@tajamar365.com";

navigator.clipboard.writeText(texto)
  .then(() => {
    toastr.info('¡Copiado el e-mail al portapapeles!');

    console.log("El texto se ha copiado al portapapeles correctamente.");
  })
  .catch((error) => {
    console.error("No se ha podido copiar el texto al portapapeles:", error);
  });
}