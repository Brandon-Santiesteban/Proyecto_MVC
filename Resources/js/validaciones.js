function validarNombre(input, minLength, maxLength) {
    let nombre = input.value, valid = true
    if (nombre == "") {
        input.focus()
        console.log('Vacio');
        toastr["warning"](`Debe ingresar un Nombre`, "Proceso detenido", { timeOut: 2000 })
        toastr.options = {
            "closeButton": true,
            "progressBar": true,
            "preventDuplicates": false,
            "timeOut": "2000",
            "showEasing": "swing",
            "hideEasing": "linear",
            "showMethod": "fadeIn",
            "hideMethod": "fadeOut"
        }
        console.log('sigue vacio');
        valid = false
    } else if (nombre.length < minLength) {
        input.focus()
        toastr["warning"](`La cantidad de caracteres mínimos permitidos para el nombre son ${minLength}`, "Proceso detenido", { timeOut: 2000 })
        toastr.options = {
            "closeButton": true,
            "progressBar": true,
            "preventDuplicates": false,
            "onclick": null,
            "timeOut": "2000",
            "showEasing": "swing",
            "hideEasing": "linear",
            "showMethod": "fadeIn",
            "hideMethod": "fadeOut"
        }
        valid = false
    } else if (nombre.length > maxLength) {
        input.focus()
        toastr["warning"](`La cantidad de caracteres maximos permitidos para el nombre son ${maxLength}`, "Proceso detenido", { timeOut: 2000 })
        toastr.options = {
            "closeButton": true,
            "progressBar": true,
            "preventDuplicates": false,
            "onclick": null,
            "timeOut": "2000",
            "showEasing": "swing",
            "hideEasing": "linear",
            "showMethod": "fadeIn",
            "hideMethod": "fadeOut"
        }
        valid = false
    }
    return valid
}
function validarTelefonos(input, input2, minLength, maxLength) {
    let telFijo = input.value, telCel = input2.value, valid = true
    if (telFijo == "" && telCel == "") {
        input.focus()
        toastr["warning"](`Debe digitar por lo menos un teléfono de contacto`, "Proceso detenido", { timeOut: 2000 })
        toastr.options = {
            "closeButton": true,
            "progressBar": true,
            "preventDuplicates": false,
            "onclick": null,
            "timeOut": "2000",
            "showEasing": "swing",
            "hideEasing": "linear",
            "showMethod": "fadeIn",
            "hideMethod": "fadeOut"
        }
        valid = false
    }
    if (telFijo != "") {

        if (isNaN(telFijo)) {
            input.focus()
            toastr["warning"](`El teléfono fijo solo puede contener números`, "Proceso detenido", { timeOut: 2000 })
            toastr.options = {
                "closeButton": true,
                "progressBar": true,
                "preventDuplicates": false,
                "onclick": null,
                "timeOut": "2000",
                "showEasing": "swing",
                "hideEasing": "linear",
                "showMethod": "fadeIn",
                "hideMethod": "fadeOut"
            }
            valid = false
        } else if (telFijo.length < minLength) {
            input.focus()
            toastr["warning"](`La cantidad de caracteres minimos permitidos para el telefono fijo son ${minLength}`, "Proceso detenido", { timeOut: 2000 })
            toastr.options = {
                "closeButton": true,
                "progressBar": true,
                "preventDuplicates": false,
                "onclick": null,
                "timeOut": "2000",
                "showEasing": "swing",
                "hideEasing": "linear",
                "showMethod": "fadeIn",
                "hideMethod": "fadeOut"
            }
            valid = false
        } else if (telFijo.length > maxLength) {
            input.focus()
            toastr["warning"](`La cantidad de caracteres maximos permitidos para el  telefono fijo  son ${maxLength}`, "Proceso detenido", { timeOut: 2000 })
            toastr.options = {
                "closeButton": true,
                "progressBar": true,
                "preventDuplicates": false,
                "onclick": null,
                "timeOut": "2000",
                "showEasing": "swing",
                "hideEasing": "linear",
                "showMethod": "fadeIn",
                "hideMethod": "fadeOut"
            }
            valid = false
        }
    }
    if (telCel != "") {
        if (isNaN(telCel)) {
            input2.focus()
            toastr.warning(`El teléfono celular solo puede contener números`, "Proceso detenido", { timeOut: 2000 })
            toastr.options = {
                "closeButton": true,
                "progressBar": true,
                "preventDuplicates": false,
                "onclick": null,
                "timeOut": "2000",
                "showEasing": "swing",
                "hideEasing": "linear",
                "showMethod": "fadeIn",
                "hideMethod": "fadeOut"
            }
            valid = false
        } else if (telCel.length < minLength) {
            input2.focus()
            toastr["warning"](`La cantidad de caracteres minimos permitidos para el telefono celular son ${minLength}`, "Proceso detenido", { timeOut: 2000 })
            toastr.options = {
                "closeButton": true,
                "progressBar": true,
                "preventDuplicates": false,
                "onclick": null,
                "timeOut": "2000",
                "showEasing": "swing",
                "hideEasing": "linear",
                "showMethod": "fadeIn",
                "hideMethod": "fadeOut"
            }
            valid = false
        } else if (telCel.length > maxLength) {
            input2.focus()
            toastr["warning"](`La cantidad de caracteres maximos permitidos para el telefono celular son  ${maxLength}`, "Proceso detenido", { timeOut: 2000 })
            toastr.options = {
                "closeButton": true,
                "progressBar": true,
                "preventDuplicates": false,
                "onclick": null,
                "timeOut": "2000",
                "showEasing": "swing",
                "hideEasing": "linear",
                "showMethod": "fadeIn",
                "hideMethod": "fadeOut"
            }
            valid = false
        }
    }
    return valid
}