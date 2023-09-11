<template>
  <Navbar />
  <br />
  <div class="container">
    <div class="card">
      <div class="card-body">
        <!-- Formulario de Inicio de Sesión -->
        <h2 class="card-title">Iniciar Sesión</h2>
        <form @submit.prevent="loginComponent.loginUser">
          <div class="form-group">
            <label for="usuario">Email:</label>
            <input
              type="email"
              class="form-control"
              id="usuario"
              placeholder="Ingresa tu usuario"
              v-model="user.email"
            />
          </div>
          <div class="form-group">
            <label for="contrasena">Contraseña:</label>
            <input
              type="password"
              class="form-control"
              id="contrasena"
              placeholder="Ingresa tu contraseña"
              v-model="user.password"
            />
          </div>
          <br />
          <button type="submit" class="btn btn-primary">Iniciar Sesión</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import Navbar from "../../components/Navbar.vue";
import { useLoginStore } from "../store/login.store";
import Swal from "sweetalert2";
import router from "../../router/index";
import { ILogin } from "../interfaces/login.interface";
const loginStore = useLoginStore();
const user = reactive<ILogin>({
  email: "",
  password: "",
});

class LoginComponent {
  async loginUser() {
    if (user.email === "") {
      Swal.fire({
        title: "¡Atención!",
        text: "Debe digitar el usuario !",
        icon: "warning",
        confirmButtonText: "Aceptar",
      });
      user.email = "";
      user.password = "";
      return;
    }
    if (user.password === "") {
      Swal.fire({
        title: "¡Atención!",
        text: "Ingrese la contraseña !",
        icon: "warning",
        confirmButtonText: "Aceptar",
      });
      user.email = "";
      user.password = "";
      return;
    }

    const response = await loginStore.loginUser(user);
    let userId = response.data.userId;

    if (response.status === 201) {
      Swal.fire({
        title: "¡Confirmado!",
        text: `Usuario encontrado`,
        icon: "success",
        confirmButtonText: "Aceptar",
      });
      router.push(`/card-application/${userId}`);
    } else {
      user.email = "";
      user.password = "";
      return Swal.fire({
        title: "¡Atención!",
        text: `${loginStore.errorData}`,
        icon: "error",
        confirmButtonText: "Aceptar",
      });
    }
  }
}

const loginComponent = new LoginComponent();
</script>
