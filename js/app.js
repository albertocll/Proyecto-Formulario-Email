document.addEventListener('DOMContentLoaded', function () {

    const email = {
        email: '',
        cc: '',
        asunto: '',
        mensaje: '',
    }


    //Seleccionar los elementos de la interfaz
    const inputEmail = document.querySelector('#email');
    const inputCC = document.querySelector('#cc');
    const inputAsunto = document.querySelector('#asunto');
    const inputMensaje = document.querySelector('#mensaje');
    const formulario = document.querySelector('#formulario');
    const btnSubmit = document.querySelector('#formulario button[type="submit"]');
    const btnReset = document.querySelector('#formulario button[type="reset"]');
    const spinner = document.querySelector('#spinner');

    //Asignar eventos
    inputEmail.addEventListener('input', validar);
    inputCC.addEventListener('input', validar);
    inputAsunto.addEventListener('input', validar);
    inputMensaje.addEventListener('input', validar);
    
    formulario.addEventListener('submit', enviarEmail)

    btnReset.addEventListener('click', function(e) {
        e.preventDefault();
        resetFormulario();
    });

    function enviarEmail(e){
        e.preventDefault();

        spinner.classList.add('flex');
        spinner.classList.remove('hidden');

        setTimeout(() => {
            spinner.classList.remove('flex');
            spinner.classList.add('hidden');

            resetFormulario();

            //Crear una alerta
            const alertaExito = document.createElement('P');
            alertaExito.classList.add('bg-green-500', 'text-white', 'p-2', 'text-center', 'rounded-lg', 'mt-10', 'font-bold', 'text-sm', 'uppercase');
            alertaExito.textContent = 'Mensaje enviado correctamente';

            formulario.appendChild(alertaExito);

            setTimeout(() => {
                alertaExito.remove();
            }, 3000)
        }, 3000);
    }

    function validar(e) {
        if(e.target.value.trim() === ''){
            if (e.target.id === 'cc') {
                email[e.target.name] = ''; 
                comprobarEmail();
                limpiarAlerta(e.target.parentElement); 
                return;
            }

           mostarAlerta(`El Campo ${e.target.id} es obligatorio`, e.target.parentElement);
           email[e.target.name] = '';
           comprobarEmail();
           return;
        } 

        if(e.target.id === 'email' && !validarEmail(e.target.value)) {
            mostarAlerta('El email no es válido', e.target.parentElement);
            email[e.target.name] = '';
            comprobarEmail();
            return;
        }
        
        limpiarAlerta(e.target.parentElement);

        //Asignar los valores
        email[e.target.name] = e.target.value.trim().toLowerCase();
        
        //Comprobar el objeto de email
        comprobarEmail();
    }

    function mostarAlerta(mensaje, referencia){
        limpiarAlerta(referencia);

        //Generar alerta en HTML
        const error = document.createElement('P');
        error.textContent = mensaje;
        error.classList.add('bg-red-600', 'text-white', 'p-2', 'text-center');

        //Inyectar el error al formulario
        referencia.appendChild(error);
    }

    function limpiarAlerta(referencia){
        //Comrpueba si ya existe una alerta
        const alerta = referencia.querySelector('.bg-red-600');
        if(alerta){
            alerta.remove();
        }
    }

    function validarEmail(email){
        const regex =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/ 
        const resultado = regex.test(email);
        return resultado;
    }

    function comprobarEmail() {
        const camposObligatorios = { ...email };
        delete camposObligatorios.cc;

        if(Object.values(camposObligatorios).includes('')) {
            btnSubmit.classList.add('opacity-50');
            btnSubmit.disabled = true;
            return;
        }
        btnSubmit.classList.remove('opacity-50');
        btnSubmit.disabled = false;

    }

    function resetFormulario(){
        // Reiniciar el Objeto
        email.email = '';
        email.cc = '';
        email.asunto = '';
        email.mensaje = '';

        formulario.reset();
        comprobarEmail();
    };
});


//Añade un campo extra llamado CC; para añadir  un destinatario extra
//Ese campo no es obligatorio; pero en caso de tener información debes validar que sea un email válido