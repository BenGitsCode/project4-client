import Ember from 'ember';

export default Ember.Route.extend({
  model (params) {
    return this.get('store').findRecord('memory', params.id);
  },

  actions: {
    updateMemory (data) {
      this.get('store').findRecord('memory', data.id)
      .then((memory) => {
        memory.name = data.name;
        memory.description = data.description;
        memory.cohort = data.cohort;
        memory.date =  data.date;
        memory.save();
      })
       .then(() => this.transitionTo('about'));

     },
  },
});
