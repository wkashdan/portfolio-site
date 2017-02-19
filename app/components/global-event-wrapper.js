import Ember from 'ember';

export default Ember.Component.extend({

  classNames: ['nofocus-styles', 'full-height'],
  attributeBindings: ['tabindex'],
  tabindex: -1,

  didInsertElement() {
    this.element.focus();
  },

  keyPress(event) {
    console.log(event);
  }
});
