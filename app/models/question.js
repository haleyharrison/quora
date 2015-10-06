import DS from 'ember-data';

export default DS.Model.extend({
  ask: DS.attr(),
  user: DS.attr(),
  notes: DS.attr(),
});
