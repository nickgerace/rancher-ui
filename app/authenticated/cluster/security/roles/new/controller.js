import Controller from '@ember/controller';
import NewOrEdit from 'ui/mixins/new-or-edit';
import { get } from '@ember/object';

const ROLE_KINDS = [
  {
    id: 'User',
  },
  {
    id: 'Group',
  },
  // {
  //   id: 'Service Account',
  // },
  // {
  //   id: 'Principle',
  // },
]

export default Controller.extend(NewOrEdit, {
  primaryResource: null,
  kinds: ROLE_KINDS,
  actions: {
  },
  doneSaving() {
    this.transitionToRoute('authenticated.cluster.security.roles.index', get(this, 'model.cluster.id'))
  },
});
