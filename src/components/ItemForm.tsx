import { useState, useEffect } from 'react';
import { TourPackage } from '../types';

interface Props {
  addPackage: (pkg: TourPackage) => void;
  updatePackage: (id: number, pkg: TourPackage) => void;
  editingId: number | null;
  packages: TourPackage[];
}

export const ItemForm = ({
  addPackage,
  updatePackage,
  editingId,
  packages,
}: Props) => {
  const [formData, setFormData] = useState<TourPackage>({
    id: 0,
    title: '',
    destination: '',
    price: 0,
    durationDays: 0,
    available: true,
  });

  useEffect(() => {
    if (editingId !== null) {
      const pkg = packages.find((p) => p.id === editingId);
      if (pkg) setFormData(pkg);
    }
  }, [editingId, packages]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]:
        type === 'checkbox'
          ? checked
          : name === 'price' || name === 'durationDays'
          ? Number(value)
          : value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.title.trim() || !formData.destination.trim()) {
      alert('Campos requeridos');
      return;
    }

    if (editingId) {
      updatePackage(editingId, formData);
    } else {
      addPackage(formData);
    }

    setFormData({
      id: 0,
      title: '',
      destination: '',
      price: 0,
      durationDays: 0,
      available: true,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="title"
        placeholder="Título"
        value={formData.title}
        onChange={handleChange}
      />

      <input
        name="destination"
        placeholder="Destino"
        value={formData.destination}
        onChange={handleChange}
      />

          <input
      name="price"
      type="number"
      placeholder="Precio"
      value={formData.price || ''}
      onChange={handleChange}
    />

    <input
      name="durationDays"
      type="number"
      placeholder="Duración"
      value={formData.durationDays || ''}
      onChange={handleChange}
    />

      <label>
        Disponible
        <input
          name="available"
          type="checkbox"
          checked={formData.available}
          onChange={handleChange}
        />
      </label>

      <button type="submit">
        {editingId ? 'Actualizar' : 'Agregar'}
      </button>
      {editingId && (
  <button
    type="button"
    onClick={() => {
      setFormData({
        id: 0,
        title: '',
        destination: '',
        price: 0,
        durationDays: 0,
        available: true,
      });
    }}
  >
    Cancelar
  </button>
)}
    </form>
  );
};
