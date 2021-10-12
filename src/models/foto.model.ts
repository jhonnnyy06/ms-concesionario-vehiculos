import {belongsTo, Entity, model, property} from '@loopback/repository';
import {Vehiculo} from './vehiculo.model';

@model({
  settings: {
    foreignkeys: {
      fk_foto_id_Vehiculo: {
        name: 'fk_foto_id_vehiculo',
        entity: 'Vehiculo',
        Entitykey: 'id',
        foreignkey: 'vehiculoId',
      }
    },
  },
})
export class Foto extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  nombre: string;

  @belongsTo(() => Vehiculo)
  vehiculoId: number;

  constructor(data?: Partial<Foto>) {
    super(data);
  }
}

export interface FotoRelations {
  // describe navigational properties here
}

export type FotoWithRelations = Foto & FotoRelations;
