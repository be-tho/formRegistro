Vue.component('mostrar-datos', {
    props: ['registro', 'onconsolas'],
    data() {
        return {
            login: false
        }
    },
    methods: {
        logeoFinal(e) {
            this.login = !this.login;
            this.$emit('ver-login', this.login);
            document.getElementsByClassName('segundavista')[0].style.display = 'none';
            e.preventDefault();
        },
        reiniciar(){
            location.reload();
        }
    },
    template: /*html*/`
        <div class="justify-content-center mx-auto bg-white py-4 segundavista col">
            <h2 class="col-12 text-center mb-4">Tu registro fue un EXITO!</h2>
            <p class="text-center">Tus datos registrados son:</p>
            <div class="col-12 text-center datos-registro">
                <ul>
                    <li v-for="(value, index) in registro">
                        <template v-if="index == 'juegos'">
                            <ol class="p-0"> 
                                <strong>Juegos: </strong>
                                <li v-for="juegos in registro.juegos">{{juegos}}</li>
                            </ol>
                        </template>
                        <template v-else>
                            <strong>{{index}}:</strong> {{value}}
                        </template>
                    </li>
                    <span class="col text-white bg-black" style="background: #00ad5f;">Consolas Elegidas: </span>
                    <template v-for="dato in onconsolas">
                        <li>{{dato}}</li>
                    <template>
                </ul>
            </div>
            <div class="cont-form-btn justify-content-around text-center">
                <input type="button" value="Reiniciar" class="btn-clear" @click="reiniciar">              
                <input type="submit" value="Login" class="form-btn" @click="logeoFinal">
            </div>
        </div>`, 
});