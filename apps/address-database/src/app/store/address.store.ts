import { Name } from './../components/interfaces/name';
import { EntityState, EntityStore, StoreConfig, ActiveState } from '@datorama/akita';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface AddressState extends EntityState<Name, number>, ActiveState {}

@StoreConfig({ name: 'addresses' })
export class AddressStore extends EntityStore<AddressState> {
  constructor() {
    super() ;
  }
}
