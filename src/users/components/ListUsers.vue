<template>
  <Navbar />
  <br>
  <div class="container">
      <h1>todos los usuarios</h1>
    
    <table class="table table-bordered" v-if="signupStore.allUsers.length>0">
      <thead>
        <tr>
          <th scope="col">id</th>
          <th scope="col">Nombres</th>
          <th scope="col">Email</th>
          <th scope="col">Genero</th>
          <th scope="col">Direccion</th>
          <th scope="col">Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in signupStore.allUsers" :key="user.userId">
          <td>{{ user.userId }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.gender }}</td>
          <td>{{ user.address }}</td>
          <td>
            <button class="btn btn-danger" @click="listUserComponent.deleteUser(user.userId)">
              <i class="bi bi-trash3-fill"></i></button
            ><button class="btn btn-warning" @click=" listUserComponent.goToEdit(user.userId)">
              <i class="bi bi-pencil-fill"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts" setup >
import { onMounted } from "vue";
import { useSignupStore } from "../store/signup.store";
import Navbar from "../../components/Navbar.vue";
import router from '../../router/index';
import Swal from "sweetalert2";
const signupStore = useSignupStore();

onMounted(async () => {
 await listUserComponent.getAllUsers();
});
class ListUsersComponent {
  async getAllUsers() {
    return await signupStore.getAll();
  }
  goToEdit(userId:number){
    router.push( `/users/edit-user/${userId}`)
  }
  async deleteUser(userId:number){
   const response= await signupStore.delete(userId);
   if(response.data.affectedRows===1){
    Swal.fire({
        title: "¡Confirmacion!",
        text: "Usuario Eliminado !",
        icon: "success",
        confirmButtonText: "Aceptar",
      });
   }
   await this.getAllUsers()
  }
}
const listUserComponent = new ListUsersComponent();
</script>