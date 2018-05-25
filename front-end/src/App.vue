<template>
  <v-app id="inspire">
      <v-toolbar color="indigo" dark fixed app>
        <v-toolbar-title>Application</v-toolbar-title>
      </v-toolbar>
      <v-content>
        <v-container fluid fill-height>
          <v-layout justify-center align-center>
          <Form/>
          </v-layout>
        </v-container>
      </v-content>
      <v-footer color="indigo" app>
        <span class="white--text">&copy; 2018</span>
      </v-footer>
    </v-app>
</template>

<script>
import Form from '@/components/Form.vue'

export default {
  name: 'App',
  components: {
    Form
  },
  data: () => ({

  })
}
</script>

<style>

</style>
