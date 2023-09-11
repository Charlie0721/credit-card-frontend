<template>
  <Navbar />
  <br />
  <div class="container">
    <div class="card">
      <div class="card-body">
        <h2>Solicitud de Tarjeta de Crédito</h2>
        <form @submit.prevent="creditCardAppicationComponent.createAppication">
          <div class="form-group">
            <label for="nombre">Nombres y apellidos:</label>
            <input
              type="text"
              class="form-control"
              id="nombre"
              placeholder="Ingresa tu nombre completo"
              v-model="cardAppication.full_name"
            />
          </div>
          <div class="form-group">
            <label for="correo">Correo Electrónico:</label>
            <input
              type="email"
              class="form-control"
              id="correo"
              placeholder="Ingresa tu correo electrónico"
              v-model="cardAppication.email"
            />
          </div>
          <div class="form-group">
            <label for="ingresos">Ingresos Mensuales:</label>
            <input
              type="number"
              class="form-control"
              id="ingresos"
              placeholder="Ingresa tus ingresos mensuales"
              v-model="cardAppication.monthly_income"
            />
          </div>
          <div class="form-group">
            <label for="documento">Número de Documento:</label>
            <input
              type="text"
              class="form-control"
              id="documento"
              placeholder="Ingresa tu número de documento"
              v-model="cardAppication.nit"
            />
          </div>
          <br />
          <button type="submit" class="btn btn-primary">
            Enviar Solicitud
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import Navbar from "../../components/Navbar.vue";
import { useCreditCardApplicationStore } from "../store/credit-card-application.store";
import { CreditCardApplicationInterface } from "../interfaces/card-application.interface";
import Swal from "sweetalert2";
import router from "../../router/index";
const creditCardAppicationStore = useCreditCardApplicationStore();
const route = useRoute();

const cardAppication = ref<CreditCardApplicationInterface>({
  userId: Number(route.params.userId),
  monthly_income: 0,
  nit: "",
  full_name: "",
  email: "",
});

class CreditCardAppicationComponent {
  async createAppication() {
    const response = await creditCardAppicationStore.createApplication(
      cardAppication.value
    );

    if (response?.data.cardAppicationId > 0) {
      Swal.fire({
        title: "¡Confirmacion!",
        text: `Se ha creado la solicitud con el número: ${response?.data.cardAppicationId} satisfactoriamente`,
        icon: "success",
        confirmButtonText: "Aceptar",
      });
      this.cleanForm();
      router.push(`/confirm-request`);
    }
  }

  private cleanForm() {
    const userApplicatyion = cardAppication.value;

    userApplicatyion.email = "";
    userApplicatyion.full_name = "";
    userApplicatyion.nit = "";
    userApplicatyion.monthly_income = 0;
  }
}
const creditCardAppicationComponent = new CreditCardAppicationComponent();
</script>