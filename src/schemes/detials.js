import { schema } from 'normalizr';


const classes = new schema.Entity('classInfoBox', {}, {
  idAttribute: 'time'
});

export const CLASSINFOBOX = [ classInfoBox ];