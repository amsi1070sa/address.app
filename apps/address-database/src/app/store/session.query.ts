import { QueryEntity } from '@datorama/akita';
import { AddressStore, AddressState } from './address.store';

export class AddressesQuery extends QueryEntity<AddressState> {
  constructor(protected store: AddressStore) {
    super(store);
  }
}
