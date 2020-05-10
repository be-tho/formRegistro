Vue.component('ingresar', {
    props: ['oncorreo', 'onpassword', 'login'],
    data() {
        return {
            correo: '',
            password: '',
            loginErrores: [],
            loginListErrores: false,
            ingresoCorrecto: false,
        }
    },
    methods:{
        validLogin(e){
            if(this.correo === '' || this.correo != this.oncorreo){
                this.loginErrores.push('Correo incorrecto o vacio');
            }
            if(this.password === '' || this.password != this.onpassword){
                this.loginErrores.push('Contraseña incorrecta o vario');
            }
            if (this.loginErrores.length > 0){
                this.loginListErrores = !this.loginListErrores;
                btnEnviar[0].style.display = none;
                setTimeout(() => {
                    this.loginListErrores = !this.loginListErrores;
                    loginErrores = [];
                }, 3000);
                e.preventDefault();
            } 
            if (this.loginErrores.length == 0){
                document.getElementsByClassName('btn-enviar')[0].style.display = 'none';
                this.ingresoCorrecto = true;
                e.preventDefault()
                setTimeout(() => {
                    location.reload();
                }, 4200);
            }
        }
    },
    template: /*html*/`
        <div class="row bg-white col mx-auto justify-content-center py-4" v-show="this.login === true">
            <h2 class="col-12">Login</h2>
            <aside class="col-12">
                <form action="" method="post" enctype="multipart/form-data" @submit="validLogin">
                    <div class="form-group">
                        <label for="login-correo">Correo de Usuario</label>
                        <input type="email" class="form-control" id="login-nombre" v-model="correo" placeholder="Escriba su correo">
                    </div>
                    <div class="form-group">
                        <label for="login-confirmar">Contraseña</label>
                        <input type="password" class="form-control" id="login-confirmar" v-model="password" placeholder="Contraseña">
                    </div>
                    <div :class="{error : loginErrores.length > 0}" v-if="loginListErrores">
                        <div >
                           <p>Algunos datos no son validos:</p>
                           <ul>
                              <li v-for="error in loginErrores">{{ error }}</li>
                           </ul>
                        </div>
                    </div>
                    <div v-show="this.ingresoCorrecto" class="ingresoCorrecto col-12 text-center mx-auto p-3 mb-2">
                        <h3>Ingreso Correcto</h3>
                        <p>Muchas gracias por registrarte con nosotros.</p>
                    </div>
                    <div class="cont-form-btn justify-content-around text-center btn-enviar">                            
                        <input type="submit" value="enviar" class="form-btn">
                    </div>
                </form>
            </aside>
        </div>`
})