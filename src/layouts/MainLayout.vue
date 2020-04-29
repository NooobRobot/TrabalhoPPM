<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar  style="height: 192px;">
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          Evento X
        </q-toolbar-title>

        <div>{{todaysDate}}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
        v-model="leftDrawerOpen"
        show-if-above
        :width="250"
        :breakpoint="600"
      >
        <q-scroll-area style="height: calc(100% - 192px); margin-top: 192px; border-right: 1px solid #ddd">
          <q-list padding>
            <q-item to="/" exact clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="list" />
              </q-item-section>

              <q-item-section>
                Tarefas
              </q-item-section>
            </q-item>

            

            <q-item to="/ajuda" exact clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="help" />
              </q-item-section>

              <q-item-section>
                O Evento
              </q-item-section>
            </q-item>

            <q-item to="/dados" exact clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="assignment_ind" />
              </q-item-section>

              <q-item-section>
                Confirmados
              </q-item-section>
            </q-item>

            <q-item to="/map" exact clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="map" />
              </q-item-section>

              <q-item-section>
                Localização
              </q-item-section>
            </q-item>

            
          </q-list>
        </q-scroll-area>

        <q-img class="absolute-top" style="height: 192px; background: rgb(31, 131, 89);">
          <div class="absolute-bottom bg-transparent" style="text-align: center;">
            <q-avatar size="56px" class="q-mb-sm">
              <img src="https://img2.gratispng.com/20180131/kgw/kisspng-giraffe-arabic-alphabet-giraffe-5a71f9ca77d7a3.6281866315174189544909.jpg">
            </q-avatar>
            <div class="text-weight-bold">Rafael Cavalcanti</div>
            <div>@rafaelcavalcanti</div>
          </div>
        </q-img>
      </q-drawer>


    <q-page-container>
      <keep-alive>
        <router-view />
      </keep-alive>      
    </q-page-container>
  </q-layout>
</template>

<script>
import { date } from 'quasar'
import EssentialLink from 'components/EssentialLink'

export default {
  name: 'MainLayout',

  

  data () {
    return {
      leftDrawerOpen: false,
      essentialLinks: [
        {
          title: 'Docs',
          caption: 'quasar.dev',
          icon: 'school',
          link: 'https://quasar.dev'
        },
        {
          title: 'Github',
          caption: 'github.com/quasarframework',
          icon: 'code',
          link: 'https://github.com/quasarframework'
        },
        {
          title: 'Discord Chat Channel',
          caption: 'chat.quasar.dev',
          icon: 'chat',
          link: 'https://chat.quasar.dev'
        },
        {
          title: 'Forum',
          caption: 'forum.quasar.dev',
          icon: 'record_voice_over',
          link: 'https://forum.quasar.dev'
        },
        {
          title: 'Twitter',
          caption: '@quasarframework',
          icon: 'rss_feed',
          link: 'https://twitter.quasar.dev'
        },
        {
          title: 'Facebook',
          caption: '@QuasarFramework',
          icon: 'public',
          link: 'https://facebook.quasar.dev'
        },
        {
          title: 'Quasar Awesome',
          caption: 'Community Quasar projects',
          icon: 'favorite',
          link: 'https://awesome.quasar.dev'
        }
      ] 
    }    
  },
  computed: {
      todaysDate(){
        let timeStamp = Date.now()
        return date.formatDate(timeStamp, 'dddd D MMMM')
      }
    }
}
</script>
