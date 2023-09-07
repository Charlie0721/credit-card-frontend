<template>
    <Navbar/>
  <div class="container">
    <div class="card">
      <div class="card-body">
        <h2 class="card-title">Registrar Usuario</h2>
        <form @submit.prevent="signupComponent.signup">
          <div class="form-group">
            <label for="usuario">Nombres:</label>
            <input
              type="text"
              class="form-control"
              id="nombres"
              placeholder="Ingrese sus nombres y apellidos"
              v-model="user.name"
            />
          </div>
          <div class="form-group">
            <label for="usuario">Correo Electrónico:</label>
            <input
              type="email"
              class="form-control"
              id="email"
              placeholder="Ingrese email"
              required
              v-model="user.email"
            />
          </div>
          <div class="form-group">
            <label for="usuario">Contraseña:</label>
            <input
              type="password"
              class="form-control"
              id="password"
              placeholder="Ingrese su contraseña"
              required
              v-model="user.password"
            />
          </div>
          <div>
            <label for="usuario">Genero:</label>
            <select
              class="form-select"
              aria-label="Default select example"
              v-model="user.gender"
            >
              <option value="M">Masculino</option>
              <option value="F">Femenino</option>
            </select>
          </div>
          <div class="form-group">
            <label for="usuario">Dirección:</label>
            <input
              type="text"
              class="form-control"
              id="direccion"
              placeholder="Ingrese su dirección"
              v-model="user.address"
            />
          </div>
          <br />
          <button type="submit" class="btn btn-primary">
            Registrar Usuario
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Navbar from '../../components/Navbar.vue'
import { ref } from "vue";
import { useSignupStore } from "../store/signup.store";
import Swal from "sweetalert2";
import { ISignup } from "../interfaces/signup.interface";
const signupStore = useSignupStore();

const user = ref<ISignup>({
  name: "",
  email: "",
  password: "",
  gender: "",
  address: "",
});

class SignupComponent {
  async signup() {
    const response = await signupStore.signup(user.value);
    await Swal.fire({
      title: "Confirmación!",
      text: `¡${response.data.name} registrado satisfactoriamente !`,
      icon: "success",
      confirmButtonText: "Aceptar",
    });
  }
}
const signupComponent = new SignupComponent();
</script>