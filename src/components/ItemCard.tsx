import { TourPackage } from '../types';

interface Props {
  pkg: TourPackage;
  deletePackage: (id: number) => void;
  setEditingId: (id: number) => void;
}

export const ItemCard = ({
  pkg,
  deletePackage,
  setEditingId,
}: Props) => {
  return (
    <div>
      <h3>{pkg.title}</h3>
      <p>Destino: {pkg.destination}</p>
      <p>Precio: ${pkg.price}</p>
      <p>Duración: {pkg.durationDays} días</p>
      <p>
        Estado: {pkg.available ? 'Disponible' : 'No disponible'}
      </p>

      <button onClick={() => setEditingId(pkg.id)}>
        Editar
      </button>

      <button onClick={() => deletePackage(pkg.id)}>
        Eliminar
      </button>
    </div>
  );
};
