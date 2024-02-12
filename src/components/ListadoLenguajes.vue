<template>
  <v-card class="listado">
    <v-card-title>
      Password Materiales Intercambiables
      <v-card-text>
        <v-simple-table>
        <template>
          <thead>
            <tr>
              <th class="text-left">Usuario</th>
              <th class="text-left">Nombre</th>
              <th class="text-left">Password</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in usu" :key="item.usuario">
              <td class="registro">{{ item.usuario }}</td>
              <td class="registro">{{ item.nombre }}</td>
              <td class="registro"><input type="password" value="">{{item.password}}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
      </v-card-text>

    </v-card-title>
  </v-card>
</template>
  
<script>
  //importando Vuex
  import { mapState } from 'vuex';

  export default {
    name: 'ListadoLenguajes',
    computed :{
      ...mapState(['usu'])
    }
  }
</script>

<style>
  .listado{
    font-family: 'Roboto',sans-serif;
  }
  .v-data-table{
    border: .5px solid #44444499;
    border-radius: 5px;
  }
  .v-card{
    box-shadow: none !important;
    border: .5px solid rgb(101, 101, 101) !important;
    border-radius: 5px !important;
  }
  .v-card__title{
    color: #00000099;
  }
  .text-left{
    height: 38px !important;
    font-size: 1em !important;
    font-weight: 600;
  }
  .registro{
    height: 30px !important;
    color: #00000099;
    font-weight: 400;
  }
  
  /* .header{
    box-shadow: none !important; 
    background-color: #FFF !important;
    border-bottom: .5px solid grey !important;
  }
  .container{
    max-width: 100% !important;
    border: .5px solid #313131 !important; 
    padding: 0 !important;; 
    
    border-radius: 5px !important;
  }
  .text-left{
    padding: 0 !important;
    height: 30px !important;
  }
  
  .listado{
    font-family: 'Roboto',sans-serif;
    box-shadow: none !important;
    border: .5px solid #313131 !important;
    margin: 10px !important;
  } */
</style>
