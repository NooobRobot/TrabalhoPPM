<template>
  <q-page class="bg-grey-3 column">
    <div class="row q-pa-sm bg-primary">
       <q-input 
      v-model="newTask"
      @keyup.enter="addTask"
      class="col"
      square
      filled
      bg-color="white"      
      placeholder="Adicionar Tarefa" 
      dense>

        <template v-slot:append>
          <q-btn 
          @click="addTask"
          round 
          dense 
          flat 
          icon="add" />
        </template>
      </q-input>
    </div>
    <q-list 
    class="bg-white"
    separator
    bordered
    >
      <!--
        Rendering a <label> tag (notice tag="label")
        so QCheckboxes will respond to clicks on QItems to
        change Toggle state.
        Template da documentacao abaixo.
        Também há a lógica de front end
        :class task done atribui TRUE aos itens selecionados e cor/estilo

      -->

      <q-item 

      v-for="(task, index) in tasks"
      :key="task.title"
      @click="task.done = !task.done"
      :class="{'done bg-blue-1' : task.done}"
      clickable
      v-ripple>
        <q-item-section avatar>

          <q-checkbox 
          v-model="task.done" 
          class="no-pointer-events"
          color="primary" />

        </q-item-section>

        <q-item-section>

 <!--adiciona a descreicao das tarefas dinamicamente e deleta pelo index/ methods no exporte default
      -->
          <q-item-label>{{task.title}}</q-item-label>

        </q-item-section>

        
        <q-item-section v-if="task.done"
        side>
          <q-btn 
          @click.stop="deleteTasks (index)"
          flat 
          round 
          dense 
          color="primary" 
          icon="delete" />
        </q-item-section>
      </q-item>
    </q-list>
    <div v-if="!tasks.length" class="no-tasks absolute-center text-center">
      <q-icon 
      name="check"
      size="100px"
      color="primary" />
      <div class="text-h5 text-primary text-center">
        Lista vazia
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  data (){
    return{
      newTask: '',
      tasks: [
       // {
       //   title: 'xxx',
       //   done: false
       // },
       // {
       //   title: 'yyy',
       //   done: false
       // },
       // {
       //   title: 'zzz',
       //   done: false
       // }
      ]
    }
  },
  methods: {
    deleteTasks(index){
       this.$q.dialog({
        title: 'Confirmar',
        message: 'Deletar tarefa ?',
        cancel: true,
        persistent: true
      }).onOk(() => {
        this.tasks.splice(index, 1)
        this.$q.notify('Tarefa Deletada')
      
      })
    },
    addTask(){
      this.tasks.push({
        title: this.newTask,
        done: false
      })
      this.newTask = ''
    }
  }

}
</script>

<style lang="scss">
  .done{
    .q-item__label{
      text-decoration: line-through;
      color: #bbb;
    }
  }
  .no-tasks{
    opacity: 0.5;
  }
</style>
