import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion: false,
  actions: {
    questionFormShow() {
      this.set('addNewQuestion', true);
    },

    save() {
      var params = {
        user: this.get('user'),
        ask: this.get('ask'),
        notes: this.get('notes'),
      };
      this.set('addNewQuestion', false),
      this.sendAction('save', params);
    }
  }
});
