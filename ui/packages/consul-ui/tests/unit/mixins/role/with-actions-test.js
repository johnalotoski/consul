import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import Route from 'consul-ui/routes/dc/acls/roles/index';

import Mixin from 'consul-ui/mixins/role/with-actions';

module('Unit | Mixin | role/with actions', function (hooks) {
  setupTest(hooks);

  hooks.beforeEach(function () {
    this.subject = function () {
      const MixedIn = Route.extend(Mixin);
      this.owner.register('test-container:role/with-actions-object', MixedIn);
      return this.owner.lookup('test-container:role/with-actions-object');
    };
  });

  // Replace this with your real tests.
  test('it works', function (assert) {
    const subject = this.subject();
    assert.ok(subject);
  });
});
