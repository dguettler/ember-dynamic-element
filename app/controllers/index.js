import Controller from '@ember/controller';
import { computed } from '@ember/object'

const DEFAULT_STATUS_OPTIONS = [
  'Option 1',
  'Option 2'
];

export default Controller.extend({

  statusOptions: computed(function() {
    return DEFAULT_STATUS_OPTIONS;
  })

});
