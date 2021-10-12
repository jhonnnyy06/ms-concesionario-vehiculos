import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    foreignKeys: {
      fk_cat_veh_id_vehiculo: {
        name: 'fk_cat_veh_id_vehiculo',
        entity: 'Vehiculo',
        entityKey: 'id',
        foreignKey: 'vehiculoId',
      },
      fk_cat_veh_id_categoria: {
        name: 'fk_cat_veh_id_categoria',
        entity: 'Categoria',
        entityKey: 'id',
        foreignKey: 'categoriaId',
      },
    },
  },
})
export class CategoriaVehiculo extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'number',
  })
  vehiculoId?: number;

  @property({
    type: 'number',
  })
  categoriaId?: number;

  constructor(data?: Partial<CategoriaVehiculo>) {
    super(data);
  }
}

export interface CategoriaVehiculoRelations {
  // describe navigational properties here
}

export type CategoriaVehiculoWithRelations = CategoriaVehiculo & CategoriaVehiculoRelations;
