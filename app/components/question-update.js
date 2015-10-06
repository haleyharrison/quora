import Ember from 'ember';

export default Ember.Component.extend({

  updateQuestionForm: false,
    actions: {
      updateQuestionForm() {
        this.set('updateQuestionForm', true);
      },
      update(question) {
        var params = {
          user: this.get('user'),
          ask: this.get('ask'),
          notes: this.get('notes'),
        };
        this.set('updateQuestionForm', false);
        this.sendAction('update', question, params);
      }
    }

});
