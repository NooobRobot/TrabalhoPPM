<template>
  <q-page class="q-pa-lg">
  <div class="fit column no-wrap justify-center items-center">
    <q-item-section class="q-pt-lg q-pa-sm">
      <span class="text-weight-bolder" style="font-size: 25px">Contatos</span>
    </q-item-section>
    <q-card class="q-mb-lg" style="width: 100%">
      <q-card-section class="row">
        <div class="col-12 ">
          <q-input outlined dense v-model="nome" label="Nome" @blur="$v.nome.$touch()" :error="$v.nome.$error"/>
        </div>
        <div class="col-12">
          <q-input outlined dense v-model="idade" label="Idade" @blur="$v.idade.$touch()" :error="$v.idade.$error"/>
        </div>
        <div class="col-12">
          <q-input outlined dense v-model="email" label="E-mail" @blur="$v.email.$touch()" :error="$v.email.$error"/>
        </div>
        <div class="col-12">
          <q-input outlined dense v-model="cpf" label="CPF" @blur="$v.cpf.$touch()" :error="$v.cpf.$error"/>
        </div>
        <div class="fit row justify-end">
          <q-btn style="width: auto !important" color="primary" label="Salvar" class="col-2 q-mt-md" @click="saveItem"/>
        </div>
      </q-card-section>
    </q-card>

    <q-item-section class="q-pa-sm">
      <span class="text-weight-bolder" style="font-size: 25px">Lista de contatos</span>
    </q-item-section>

    <q-card style="width: 100%">
      <q-card-section class="fit row" v-if="listItems.length > 0">
        <q-list dense bordered class="rounded-borders fit">
          <q-item clickable v-ripple v-for="(item, i) in listItems" :key="i" @click="selectItem(item, i)">
            <q-item-section>
              {{ item.nome }}
            </q-item-section>
            <q-item-section>
              {{ item.idade }}
            </q-item-section>
            <q-item-section>
              {{ item.email }}
            </q-item-section>
            <q-item-section>
              {{ item.cpf }}
            </q-item-section>
            <q-item-section avatar>
              <q-btn round flat dense color="red-7" icon="delete" @click="deleteItem(i)"/>
            </q-item-section>
          </q-item>
        </q-list>
      </q-card-section>
      <q-item-section class="q-pa-md" v-if="listItems.length === 0">
        <span class="text-weight-bolder">Não existe itens cadastrados</span>
      </q-item-section>
    </q-card>
  </div>
  </q-page>
</template>

<script>

import { required } from 'vuelidate/lib/validators'

export default {
  data () {
    return {
      nome: null,
      idade: null,
      email: null,
      cpf: null,
      editingMode: null,
      indexItemEditing: null,
      listItems: []
    }
  },

  validations: {
    nome: { required },
    idade: { required },
    email: { required },
    cpf: { required }
  },

  mounted () {
  },

  methods: {
    saveItem () {
      this.$v.$touch()

      if (this.$v.$invalid) {
        alert('Preencha os campos obrigatórios!')
        return false
      }

      this.$v.$reset()

      if (!this.editingMode) {
        let obj = {
          nome: this.nome,
          idade: this.idade,
          email: this.email,
          cpf: this.cpf
        }

        this.listItems.push(obj)
      } else {
        let i = this.indexItemEditing

        this.listItems[i].nome = this.nome
        this.listItems[i].idade = this.idade
        this.listItems[i].email = this.email
        this.listItems[i].cpf = this.cpf
      }

      this.editingMode = false
      this.clearFields()
    },

    selectItem (item, index) {
      this.editingMode = true
      this.indexItemEditing = index

      this.nome = item.nome
      this.idade = item.idade
      this.email = item.email
      this.cpf = item.cpf
    },

    deleteItem (index) {
      this.listItems.splice(index, 1)

      this.clearFields()
      this.editingMode = false
    },

    clearFields () {
      this.nome = null
      this.idade = null
      this.email = null
      this.cpf = null
    }
  }

}

</script>

<style>
</style>
