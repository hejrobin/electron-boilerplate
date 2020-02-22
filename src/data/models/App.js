import { Record } from 'immutable';
import { schema } from 'normalizr';

const defs = {
	networkStatus: window.navigator.onLine,
};

const appSchema = new schema.Entity('app');

const Model = Record(defs, 'App');

export default class extends Model {
	static defs = defs;
	static schema = appSchema;
}
