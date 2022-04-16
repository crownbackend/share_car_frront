<template>
  <div class="container p-5">
    <form @submit="onSubmit">
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input type="email" class="form-control" v-model="dataForm.email" id="exampleInputEmail1" aria-describedby="emailHelp">
        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input type="password" v-model="dataForm.password" class="form-control" id="exampleInputPassword1">
      </div>
      <div class="mb-3 form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1">
        <label class="form-check-label" for="exampleCheck1">Check me out</label>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
      {{errors}}
    </form>
  </div>
</template>


<script>
import RegisterApi from "@/service/RegisterApi";

export default {
  name: 'RegisterPage',
  data() {
    return {
      dataForm: {
        email: '',
        password: ''
      },
      errors: []
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
