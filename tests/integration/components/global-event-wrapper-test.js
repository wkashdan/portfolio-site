import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('global-event-wrapper', 'Integration | Component | global event wrapper', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{global-event-wrapper}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#global-event-wrapper}}
      template block text
    {{/global-event-wrapper}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
