<template>
  <v-container>
    <v-layout row>
  <v-form>
    <v-select
    :items="RatingOptions"
    v-model="rating"
    label="Select"
    data-vv-name="select"
    required
    ></v-select>
    <v-select
    :items="MethodOptions"
    v-model="method"
    label="Select"
    data-vv-name="select"
    required
    ></v-select>
    <v-select
    :items="StrainOptions"
    v-model="strain"
    label="Select"
    data-vv-name="select"
    required
    ></v-select>
    <v-select
    :items="DurationOptions"
    v-model="duration"
    label="Select"
    data-vv-name="select"
    required
    ></v-select>
    <v-text-field
      v-model="amount"
      :counter="10"
      label="Amount"
      required
    ></v-text-field>
   <v-text-field
     v-model="notes"
     :counter="10"
     label="Notes"
     required
   ></v-text-field>
    <v-btn @click="postForm" color="success">Success</v-btn>
 </v-form>
 
</v-layout>
</v-container>
</template>

<script>
export default {
  name: 'Form',
  staticUrl: '',
  serverUrl: '',
  mounted() {
    //LIST
    fetch()
    .then(function(response) {
      return response.json()
    })
    .then(function(data) {
      console.log(data)
      this.updateData(data.rating , RatingOptions)
      this.updateData(data.method , MethodOptions)
      this.updateData(data.strain , StrainOptions)
      this.updateData(data.amount , AmountOptions)
      this.updateData(data.duration , DurationOptions)
    })
    .catch(function(err) {
      console.log(err.message)
    })
  },
  data: () => ({
    //EmptyData
    rating: '',
    method: '',
    strain: '',
    amount: '',
    duration: '',
    select: null,
    notes: '',
    //Fetch Data
    RatingOptions: [],
    MethodOptions: [],
    StrainOptions: [],
    AmountOptions: [],
    DurationOptions: []
      }),
  methods: {
  postForm() {
    //Create
    fetch(this.serverUrl, {
    method: "POST",
    headers: new Headers({
      "content-type": "application/json"
    }),
    body: JSON.stringify({
      rating: this.rating,
      method: this.method,
      strain: this.strain,
      amount: this.amount,
      duration: this.duration,
      notes: this.notes
    })
  })
  .then(function(response){
    return response.json()
  })
  .then(function(data){
    console.log(data)
  })
  },
  updateData(dataArray, dataLocation){
    dataArray = this.dataLocation
  },
   deleteData(item, url) {
     //Delete
    return fetch(url + '/' + item, {
      method: 'delete'
    })
    .then(response => response.json());
  },
  putData(url, updateObject) {
    //Update
    fetch(url, {
  method: 'PUT', // or 'PUT'
  body: JSON.stringify({updateObject}), // data can be `string` or {object}!
  headers:{
    'Content-Type': 'application/json'
  }
}).then(res => res.json())
.catch(error => console.error('Error:', error))
.then(response => console.log('Success:', response))
},
  //Make sure id is a string
  readData(url, id){
    fetch(url + id)
    .then(function(response) {
      return response.json()
    })
    .then(function(data) {
      console.log(data)
  })
}
}
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
