Vue.component ('register',{
    data(){
        return{
            nombre: '',
            apellido: '',
            correo: '',
            password: '',
            confipassword:'',
            errores: [],
            listError: false,
            juegos: [],
            juego: false,
            registro: [],
            verForm: false,
            inputName: '',
            consolas: ['nes', 'game boy', 'game boy advance', 'nintendo 64', 'game boy color', 'gamecube', 'wii', 'play station 1', 'xbox',  'play station 4', 'nintendo switch',],
            onconsolas: [],
        }
    },
    methods: {
        validregister(e){
            if (this.nombre === '' || !isNaN(this.nombre)) {
                this.errores.push('Nombre incorrecto');
            } 
            if (this.apellido === '' || !isNaN(this.apellido)) {
                this.errores.push('Apellido incorrecto');
            } 
            if (this.correo === '' || !isNaN(this.correo)) {
                this.errores.push('Correo incorrecto');
            }
            if (this.password === '' || this.password !== this.confipassword) {
                this.errores.push('Las contraseñas no coinciden');
            }
            if (this.juegos.length === 0) {
                this.errores.push('Elija un juego por favor');
            }
            if (this.errores.length > 0){
                this.listError = !this.listError;
                setTimeout(() => {
                    this.listError = !this.listError; 
                    this.errores = [];
                }, 5000);
                e.preventDefault();
            }
            if(this.errores.length == 0){
                this.registro = {
                    nombre: this.nombre,
                    apellido: this.apellido,
                    correo: this.correo,
                    juegos: this.juegos,
                }
                e.preventDefault();
                setTimeout(() => {
                this.$emit('dato-registro', this.registro);
                this.$emit('dato-correo', this.correo);
                this.$emit('dato-password', this.password);
                this.$emit('dato-ver', this.verForm);
                this.$emit('dato-consolas', this.onconsolas);
                document.body.classList.remove('dark');
                document.body.classList.add('light');
            }, 2000);
            }
        },
        darktheme() {
            const checkbox = document.getElementById('check');
            checkbox.addEventListener('change', (e) => {
               if (e.target.checked) {
                  document.body.classList.remove('light');
                  document.body.classList.add('dark');
               } else {
                  document.body.classList.remove('dark');
                  document.body.classList.add('light');
               }
            })
         },
        limpiar(){
            this.nombre = "";
            this.apellido = "";
            this.correo = "";
            this.password = "";
            this.confipassword = "";
            this.errores = [];
            this.juegos = [];
            consolaElegida = [];
        },
        filtro(){
            return this.consolas.filter( consolas =>  consolas.toLowerCase().includes( this.inputName.toLowerCase() ));
        }
    },
    template: /*html*/`
    <div class="row cont-principal col mx-auto pb-4 app align-items-center">
        <h2 class="col-md-9 text-center my-3">!Qué bueno verte aquí!</h2>
        <div class="dark-mode col-md-3 text-center justify-content-center">
            <input type="checkbox" name="check" id="check" />
            <label for="check" class="toggle" @click="darktheme"></label>
        </div>
        <p class="col-12 mb-3">Configuremos su cuenta en solo un par de pasos</p>
        <div class="col-sm-12 mx-auto"> 
            <form action="" method="post" enctype="multipart/form-data" @submit="validregister">
                <div>
                    </div>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="inputEmail4">Nombre</label>
                        <input type="text" class="form-control" id="nombre" placeholder="Nombre" v-model="nombre">
                    </div>
                    <div class="form-group col-md-6">
                        <label for="inputPassword4">Apellido</label>
                        <input type="text" class="form-control" id="apellido" placeholder="Apellido" v-model="apellido">
                    </div>
                </div>
                <div class="form-group">
                    <label for="mail">Correo</label>
                    <input type="email" class="form-control" id="mail" name="mail" placeholder="Correo" v-model="correo">
                </div>                   
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="password">Contraseña</label>
                        <input type="password" class="form-control" id="password" name="password" placeholder="Escriba su contraseña" v-model="password">
                    </div>
                    <div class="form-group col-md-6">
                        <label for="confirmar">Confirmar</label>
                        <input type="password" class="form-control" id="confirmar" name="confirmar" placeholder="Confirmar contraseña" v-model="confipassword">
                    </div>
                </div>
                <div class="form-group mx-auto text-center">
                    <h3>¿Que juego te gusta más?</h3>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="fram1" value="Call of Duty" v-model="juegos">
                        <label class="form-check-label" for="fram1">Call of Duty</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="fram2" value="Fortnite" v-model="juegos">
                        <label class="form-check-label" for="fram2">Fortnite</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="fram3" value="League of Legend" v-model="juegos">
                        <label class="form-check-label" for="fram3">League of legend</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="fram4" value="Diablo III" v-model="juegos">
                        <label class="form-check-label" for="fram4">Diablo III</label>
                    </div>
                </div>
                <div class="form-group mx-auto text-center">
                    <div class="form-group">
                        <h3 class="col">Gran premio</h3>
                        <label for="search" class="col text-left">Selecciona tu consola : (No es Obligatorio)</label>
                        <input type="text" class="form-control" placeholder="Buscar por nombre de consola" v-model.trim="inputName">
                    </div>
                    <div class="form-check form-check-inline" v-for="(dato, index) in filtro()">
                        <input class="form-check-input" type="checkbox" :id="index" :value="dato" v-model="onconsolas">
                        <label class="form-check-label" :for="index">{{dato}}</label>
                    </div>
                </div>
                <div :class="{error: errores.length > 0}" v-if="listError">
                    <div>
                       <p>Algunos datos no son validos:</p>
                       <ul>
                          <li v-for="error in errores">{{ error }}</li>
                       </ul>
                    </div>
                </div>
                <div class="cont-form-btn justify-content-around">
                    <input type="button" value="Limpiar" class="btn-clear" @click="limpiar">                                 
                    <input type="submit" value="enviar" class="form-btn">                                 
                </div>
            </form>
        </div>    
    </div>`
})