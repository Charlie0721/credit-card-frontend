<template>
  <Navbar />
  <br />
  <div class="container">
    <div class="card">
      <div class="card-body">
        <h2 class="card-title">Estado de Solicitud</h2>
        <form @submit.prevent="checkStatusComponent.checkStatus">
          <div class="form-group">
            <label for="numero-solicitud">Número de Solicitud:</label>
            <input
              type="number"
              class="form-control"
              id="numero-solicitud"
              placeholder="Ingresa el número de solicitud"
              v-model="checkByNumber.applicationId"
              required
            />
          </div>
          <br />
          <button type="submit" class="btn btn-primary">
            Consultar Estado
          </button>
        </form>
        <!-- Mostrar el estado de la solicitud después de consultar -->
        <div id="resultado-solicitud" class="mt-3" v-if="resultMessage !== ''">
          <div class="alert alert-primary" role="alert">
            Señor@: {{ checkStatusComponent.fullName }}
            {{ resultMessage }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts" >
import { ref } from "vue";
import { CreditCardApplicationCheckStatusInterface } from "../interfaces/card-application.interface";
import { useCreditCardApplicationStore } from "../store/credit-card-application.store";
import { useRoute } from "vue-router";
const route = useRoute();
import Navbar from "../../components/Navbar.vue";
const creditCardApplicationStore = useCreditCardApplicationStore();
const checkByNumber = ref<CreditCardApplicationCheckStatusInterface>({
  applicationId: 0,
});
const resultMessage = ref("");

class CheckStatusComponent {
  private userId: number = Number(route.params.userId);
  // message: string = "";
  fullName: string = "";

  async checkStatus() {
    const response = await creditCardApplicationStore.check(
      this.userId,
      checkByNumber.value
    );
    if (response?.data.message !== "") {
      this.fullName = response?.data.full_name;
      resultMessage.value = response?.data.message;
      return;
    }
  }
}

const checkStatusComponent = new CheckStatusComponent();
</script>