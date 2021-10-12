import {belongsTo, Entity, hasMany, model, property} from '@loopback/repository';
import {CategoriaVehiculo} from './categoria-vehiculo.model';
import {Categoria} from './categoria.model';
import {Foto} from './foto.model';
import {Marca} from './marca.model';
import {Proveedor} from './proveedor.model';

@model({
  settings: {
    foreignKeys: {
      fk_vehiculo_id_proveedor: {
        name: 'fk_vehiculo_id_proveedor',
        entity: 'Proveedor',
        entityKey: 'id',
        foreignKey: 'proveedorId',
      },
      fk_vehiculo_id_marca: {
        name: 'fk_vehiculo_id_marca',
        entity: 'Marca',
        entityKey: 'id',
        foreignKey: 'marcaId',
      },
    },
  },
})
export class Vehiculo extends Entity {
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
  color: string;

  @property({
    type: 'number',
    required: true,
  })
  modelo: number;

  @property({
    type: 'string',
    required: true,
  })
  serie_chasis: string;

  @property({
    type: 'string',
    required: true,
  })
  serie_motor: string;

  @property({
    type: 'number',
    required: true,
  })
  precio: number;

  @property({
    type: 'number',
    required: true,
  })
  descuento: number;

  @property({
    type: 'boolean',
    default: true,
  })
  estado?: boolean;

  @belongsTo(() => Marca, {name: 'tiene_marca'})
  marcaId: number;

  @hasMany(() => Categoria, {through: {model: () => CategoriaVehiculo}})
  categorias: Categoria[];

  @hasMany(() => Foto)
  fotos: Foto[];

  @belongsTo(() => Proveedor)
  proveedorId: number;

  constructor(data?: Partial<Vehiculo>) {
    super(data);
  }
}

export interface VehiculoRelations {
  // describe navigational properties here
}

export type VehiculoWithRelations = Vehiculo & VehiculoRelations;
