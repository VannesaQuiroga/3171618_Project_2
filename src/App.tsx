import { useState } from 'react';
import { TourPackage } from './types';
import { Header } from './components/Header';
import { ItemForm } from './components/ItemForm';
import { ItemList } from './components/ItemList';
import './styles/App.css';
function App() {
  const [packages, setPackages] = useState<TourPackage[]>([]);
  const [editingId, setEditingId] = useState<number | null>(null);

  const addPackage = (newPackage: TourPackage) => {
    setPackages([...packages, { ...newPackage, id: Date.now() }]);
  };

  const deletePackage = (id: number) => {
    setPackages(packages.filter((p) => p.id !== id));
  };

  const updatePackage = (id: number, updated: TourPackage) => {
    setPackages(
      packages.map((p) =>
        p.id === id ? { ...updated, id } : p
      )
    );
    setEditingId(null);
  };

  return (
    <>
      <Header />
      <ItemForm
        addPackage={addPackage}
        updatePackage={updatePackage}
        editingId={editingId}
        packages={packages}
      />
      <ItemList
        packages={packages}
        deletePackage={deletePackage}
        setEditingId={setEditingId}
      />
    </>
  );
}

export default App;
