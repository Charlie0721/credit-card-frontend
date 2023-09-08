<template>
    <Navbar/>
    <br>
  <div class="container">
    <div class="card">
      <div class="card-body">
        <h2>Solicitud de Tarjeta de Crédito</h2>
        <form>
          <div class="form-group">
            <label for="nombre">Nombre Completo:</label>
            <input
              type="text"
              class="form-control"
              id="nombre"
              placeholder="Ingresa tu nombre completo"
            />
          </div>
          <div class="form-group">
            <label for="correo">Correo Electrónico:</label>
            <input
              type="email"
              class="form-control"
              id="correo"
              placeholder="Ingresa tu correo electrónico"
            />
          </div>
          <div class="form-group">
            <label for="ingresos">Ingresos Mensuales:</label>
            <input
              type="number"
              class="form-control"
              id="ingresos"
              placeholder="Ingresa tus ingresos mensuales"
            />
          </div>
          <div class="form-group">
            <label for="documento">Número de Documento:</label>
            <input
              type="text"
              class="form-control"
              id="documento"
              placeholder="Ingresa tu número de documento"
            />
          </div>
          <br>
          <button type="submit" class="btn btn-primary">
            Enviar Solicitud
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

import Navbar from '../../components/Navbar.vue'

</script>