import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
// import Service from '@ember/service';

module('Unit | Route | index', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:index');
    assert.ok(route);
  });
  // test('model calls findAll', function(assert) {
  //   const expected = true;
  //   const findAll = this.stub();
  //   findAll.returns(expected);
  //   this.register(
  //     'service:dc',
  //     Service.extend({
  //       findAll: findAll,
  //     })
  //   );
  //   const route = this.subject();
  //   const actual = route.model();
  //   assert.equal(actual, expected);
  //   assert.ok(findAll.calledOnce);
  // });
  // test('it transitions straight away if there is only one datacenter', function(assert) {
  //   const route = this.subject();
  //   const transitionTo = this.stub(route, 'transitionTo');
  //   const get = this.stub();
  //   get.returns(1);
  //   route.afterModel({ get: get });
  //   get.returns(2);
  //   route.afterModel({ get: get });
  //   assert.ok(transitionTo.calledOnce);
  // });
});
