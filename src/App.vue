<template>
  <PageHeader title="Welcome, John Smith 👋" />

  <!-- <section class="section">
    <h1 class="title is-size-4">Smjena - 12.7. 2022.</h1>
    <AddAgent @click="addRow" text="AddAgent" class="is-primary" />
    <AddAgent text="Remove agent" class="is-danger" />
    <table class="table">
      <thead>
        <tr>
          <th><abbr title="Level">Level</abbr></th>
          <th><abbr title="Ime">Ime</abbr></th>
          <th><abbr title="Zaduženje">Zaduženje</abbr></th>
          <th><abbr title="Komentar">Komentar</abbr></th>
        </tr>
      </thead>
      <Agents v-bind:agents="agents" />
    </table>
  </section> -->
  <TutorialList  msg='Parent prop'/>
</template>

<script>
import PageHeader from './components/PageHeader';
import AddAgent from './components/AddAgent';
import Agents from './components/Agents';
import TutorialList from './components/TutorialList';

export default {
  name: 'App', 
  components: {
    PageHeader,
    AddAgent,
    Agents,
    TutorialList
  },

  // creating a data() function
  data() {
    return {
      agents: [
        {
                id: 1,
        name: 'Filip',
      },
      {
        id: 2,
        name: 'Djoni',
        new: true,
      },
      {
        id: 3,
        name: 'Marica',
      }
      ],
    };
  },
  methods: {
    logThis(){
      console.log('click');
    }
  }
};
</script>

<style></style>
