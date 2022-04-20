<template>
  <div class="container p-5">
    <form @submit="onSubmit">
      <div class="mb-3">
        <label for="firstname" class="form-label">Nom</label>
        <input class="form-control" type="text" v-model="dataForm.firstName" placeholder="Nom" id="firstname" aria-label="default input example">
        <div class="input-errors" v-for="error of v$.dataForm.firstName.$errors" :key="error.$uid">
          <div class="error-msg">{{ error.$message }}</div>
        </div>
      </div>
      <div class="mb-3">
        <label for="lastname" class="form-label">Prénom</label>
        <input class="form-control" type="text" v-model="dataForm.lastName" placeholder="Prénom" id="lastname" aria-label="default input example">
        <div class="input-errors" v-for="error of v$.dataForm.lastName.$errors" :key="error.$uid">
          <div class="error-msg">{{ error.$message }}</div>
        </div>
      </div>
      <div class="mb-3">
        <label for="date">Date de naissance</label>
        <Datepicker placeholder="Date de naissance" v-model="dataForm.age" autoApply locale="fr" id="date" cancelText="Annuler" selectText="Selectionnez"></Datepicker>
        <div class="input-errors" v-for="error of v$.dataForm.age.$errors" :key="error.$uid">
          <div class="error-msg">{{ error.$message }}</div>
        </div>
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">Adresse mail</label>
        <input type="email" class="form-control" v-model="dataForm.email" placeholder="Mail" id="email" aria-describedby="emailHelp">
        <div class="input-errors" v-for="error of v$.dataForm.email.$errors" :key="error.$uid">
          <div class="error-msg">{{ error.$message }}</div>
        </div>
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Mot de passe</label>
        <input type="password" v-model="dataForm.password" placeholder="Mot de passe" class="form-control" id="exampleInputPassword1">
        <div class="input-errors" v-for="error of v$.dataForm.password.$errors" :key="error.$uid">
          <div class="error-msg">{{ error.$message }}</div>
        </div>
      </div>
      <div class="mb-3 form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1">
        <label class="form-check-label" for="exampleCheck1">Accepeter les terms d'utilisation</label>
      </div>
      <button :disabled="v$.dataForm.$invalid" type="submit" class="btn btn-primary">Envoyer</button>
    </form>
  </div>
</template>


<script>
import RegisterApi from "@/service/RegisterApi";
import Datepicker from '@vuepic/vue-datepicker';
import useVuelidate from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'

export default {
  name: 'RegisterPage',
  components: { Datepicker },
  setup () {
    return { v$: useVuelidate() }
  },
  data() {
    return {
      dataForm: {
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        age: null,
      }
    }
  },
  validations () {
    return {
      dataForm: {
        email: {required, email},
        password: {required},
        firstName: {required},
        lastName: {required},
        age: {required},
      },
    }
  },
  methods: {
    validateEmail(email)
    {
      var re = /\S+@\S+\.\S+/;
      return re.test(email);
    },
    onSubmit(e) {
      e.preventDefault()
      if(this.validateEmail(this.dataForm.email)) {
        if(this.dataForm.password) {
          RegisterApi.registerUser(this.dataForm).then(response => {
            console.log(response);
          }).catch(error => {
            console.log(error)
          })
        } else {
          this.errors.push('Mot de passe non valide')
        }
      } else {
        this.errors.push('Email non valide')
      }
    }
  }
}
</script>

<style>

</style>
