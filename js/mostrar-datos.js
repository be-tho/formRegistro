Vue.component('mostrar-datos', {
    props: ['registro'],
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
        }
    },
    template: /*html*/`
        <div class="justify-content-center mx-auto bg-white py-4 segundavista col">
            <h2 class="col-12 text-center mb-4">Tu registro fue un EXITO!</h2>
            <p class="text-center">Tus datos registrados son:</p>
            <div class="col-12 text-center datos-registro">
                <ul>
                    <li v-for="(value, key) in registro">
                        <strong>{{key}}:</strong> {{value}}
                    </li>
                </ul>
            </div>
            <div class="cont-form-btn justify-content-around text-center">                            
                <input type="submit" value="Login" class="form-btn" @click="logeoFinal">
            </div>
        </div>`, 
});