<template>
  <div class="container">
    <div class="card">
      <div class="card-body">
        <h2 class="card-title">Registrar Usuario</h2>
        <form>
          <div class="form-group">
            <label for="usuario">Nombres:</label>
            <input
              type="text"
              class="form-control"
              id="nombres"
              placeholder="Ingrese sus nombres y apellidos"
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
            />
          </div>
          <div>
            <label for="usuario">Genero:</label>
            <select class="form-select" aria-label="Default select example">
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
            />
          </div>
          <br>
          <button type="submit" class="btn btn-primary">Registrar Usuario</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
</script>