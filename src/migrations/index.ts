import * as migration_20260803_075626_initial from './20260803_075626_initial';
import * as migration_20260803_075648_seed_current_content from './20260803_075648_seed_current_content';

export const migrations = [
  {
    up: migration_20260803_075626_initial.up,
    down: migration_20260803_075626_initial.down,
    name: '20260803_075626_initial',
  },
  {
    up: migration_20260803_075648_seed_current_content.up,
    down: migration_20260803_075648_seed_current_content.down,
    name: '20260803_075648_seed_current_content'
  },
];
