import { TourPackage } from '../types';
import { ItemCard } from './ItemCard';

interface Props {
  packages: TourPackage[];
  deletePackage: (id: number) => void;
  setEditingId: (id: number) => void;
}

export const ItemList = ({
  packages,
  deletePackage,
  setEditingId,
}: Props) => {
  return (
    <div>
      {packages.map((pkg) => (
        <ItemCard
          key={pkg.id}
          pkg={pkg}
          deletePackage={deletePackage}
          setEditingId={setEditingId}
        />
      ))}
    </div>
  );
};
