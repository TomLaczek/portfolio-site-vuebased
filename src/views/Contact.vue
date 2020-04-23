<template>
    <div id="contact">
        <v-container>
            <v-snackbar
                v-model="submitPossitive"
                >
                {{ textPossitive }}
                <v-btn
                    color="pink"
                    text
                    @click="submitPossitive = false"
                >
                    Zamknij
                </v-btn>
            </v-snackbar>
            <v-snackbar
                v-model="submitError"
                >
                {{ textError }}
                <v-btn
                    color="pink"
                    text
                    @click="submitError = false"
                >
                    Zamknij
                </v-btn>
            </v-snackbar>
            <v-row class="justify-center">
                <h1>Kontakt</h1>
            </v-row>
            <v-row class="justify-center mb-2 pb-3">
                <v-col cols="12" sm="12" md="8" offset-md-2>
                    <ValidationObserver ref="observer" v-slot="{ handleSubmit, reset }">
                        <v-form ref="form" lazy-validation @submit.prevent="handleSubmit(submit)" @reset.prevent="reset">
                            <v-row class="justify-center">
                                <v-col cols="12" sm="12" md="6">
                                    <ValidationProvider v-slot="{ errors }" name="name" rules="required|alpha|min:3|max:15">
                                        <v-text-field
                                            label="Imię"
                                            :error-messages="errors"
                                            v-model="form.name"
                                            required
                                        ></v-text-field>
                                    </ValidationProvider>
                                </v-col>
                                <v-col cols="12" sm="12" md="6">
                                    <ValidationProvider v-slot="{ errors }" name="lastname" rules="required|alpha|min:3|max:15">
                                        <v-text-field
                                            label="Nazwisko"
                                            :error-messages="errors"
                                            v-model="form.lastname"
                                            required
                                        ></v-text-field>
                                    </ValidationProvider>
                                </v-col>
                                <v-col cols="12" sm="12" md="6">
                                    <ValidationProvider v-slot="{ errors }" name="email" rules="required|email">
                                        <v-text-field
                                            label="E-mail"
                                            :error-messages="errors"
                                            v-model="form.email"
                                            required
                                        ></v-text-field>
                                    </ValidationProvider>
                                </v-col>
                                <v-col cols="12" sm="12" md="6">
                                    <ValidationProvider v-slot="{ errors }" name="phone" rules="numeric|min:8|max:13">
                                        <v-text-field
                                            label="Telefon"
                                            :error-messages="errors"
                                            v-model="form.phone"
                                        ></v-text-field>
                                    </ValidationProvider>
                                </v-col>
                                <v-col cols="12" sm="12" md="12">
                                    <ValidationProvider v-slot="{ errors }" name="text" rules="required|alpha_spaces|min:10">
                                    <v-textarea
                                        label="Wiadomość"
                                        :error-messages="errors"
                                        v-model="form.note"
                                        required
                                    ></v-textarea>
                                    </ValidationProvider>
                                </v-col>
                                <v-col cols="12" sm="12" md="12">
                                    <v-btn text outlined class="rightBtn" type="submit">
                                        <span>Wyślij</span>
                                    </v-btn>
                                </v-col>
                            </v-row>
                        </v-form>
                    </ValidationObserver>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
<script>
import { required, email, max, min, alpha, alpha_spaces, numeric } from 'vee-validate/dist/rules'
import { extend, ValidationObserver, ValidationProvider, setInteractionMode } from 'vee-validate'
setInteractionMode('eager')
extend('required', {
    ...required,
    message: 'To pole nie może być puste',
})
extend('alpha', {
    ...alpha,
    message: 'Tylko litery...',
})
extend('alpha_spaces',{
    ...alpha_spaces,
    message: 'Użyłeś niedozwolonego znaku :)'
})
extend('numeric',{
    ...numeric,
    message:'Podaj tylko numer'
})
extend('max', {
    ...max,
    message: 'Maksymalnie {length} znaków. Spróbuj coś skrócić',
})
extend('min', {
    ...min,
    message: 'Chesz coś mi napisać? Pamiętaj minimum {length} znaki',
})
extend('email', {
    ...email,
    message: 'To nie jest e-mail',
})


export default {
    name:'contact',
    components: {
      ValidationProvider,
      ValidationObserver,
    },
    data(){
        const defaultForm = Object.freeze({
            name:'',
            lastname:'',
            email:'',
            phone:'',
            note:''
        }) 

        return{
            endpoint: "../../send_email.php",
            submitPossitive:false,
            textPossitive:'Mail został wysłany',
            textError:'Coś poszło nie tak',
            submitError:false,
            form: Object.assign({},defaultForm),
            defaultForm
        }
    },
    methods:{
          submit() {
            this.$refs.observer.validate()
            .then(success=>{
                if(success){
                    let postVars = {
                        email: this.form.email,
                        name: this.form.name,
                        phone: this.form.phone,
                        lastname: this.form.lastname,
                        message: this.form.note
                    };

                    const options = {
                        method:'POST',
                        headers:{
                            'Accept': '*',
                            'Content-Type': 'application/json;charset=UTF-8'
                        },
                        body:JSON.stringify(postVars)
                    }
                    
                    fetch(this.endpoint,options)
                    .then(()=> {
                        this.submitPossitive = true;
                        this.$refs.observer.reset()
                        this.$refs.form.reset()
                    })
                    .catch(()=> {
                        this.submitError = true;
                    })
                } else this.submitError = true;
            })
            .catch(()=> {
                this.submitError = true;
            })
        }
    }
}
</script>
<style>
    .rightBtn{
        float:right;
    }
</style>