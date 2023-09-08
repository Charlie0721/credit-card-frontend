<template>
  <Navbar />
  <br />
  <div class="container">
    <div class="card">
      <div class="card-body">
        <h2 class="card-title">Editar usuario</h2>
        <form @submit.prevent="updateUserComponent.updateUser">
          <div class="form-group">
            <label for="usuario">Nombres:</label>
            <input
              type="text"
              class="form-control"
              id="nombres"
              placeholder="Ingrese sus nombres y apellidos"
              v-model="updateUser.name"
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
              v-model="updateUser.email"
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
              v-model="updateUser.password"
            />
          </div>
          <div>
            <label for="usuario">Genero:</label>
            <select
              class="form-select"
              aria-label="Default select example"
              v-model="updateUser.gender"
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
              v-model="updateUser.address"
            />
          </div>
          <br />
          <button type="submit" class="btn btn-primary">Editar Usuario</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onBeforeMount } from "vue";
import { useRoute } from "vue-router";
import router from "../../router/index";
import { useSignupStore } from "../store/signup.store";
import Swal from "sweetalert2";
import { IUpdateUser } from "../interfaces/signup.interface";
import Navbar from "../../components/Navbar.vue";
const route = useRoute();
const signupStore = useSignupStore();
const updateUser = ref<IUpdateUser>({
  name: undefined,
  email: undefined,
  password: undefined,
  gender: undefined,
  address: undefined,
});
onBeforeMount(async () => {
  await updateUserComponent.getUser();
});
class UpdateUserComponent {
  userId: number = Number(route.params.userId);

  async getUser() {
    const response = await signupStore.getOne(this.userId);
    updateUser.value = { ...response };
  }
  async updateUser() {
    const response = await signupStore.update(this.userId, updateUser.value);
    if (response.status === 200) {
      Swal.fire({
        title: "¡Confirmacion!",
        text: "Usuario actualizado satisfactoriamente !",
        icon: "success",
        confirmButtonText: "Aceptar",
      });
      setTimeout(() => {
        router.push(`/users`);
      }, 2000);
    }
  }
}
const updateUserComponent = new UpdateUserComponent();
</script>