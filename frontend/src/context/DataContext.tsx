import { createContext, useContext, useState } from 'react';
import { feature } from '../assets/Feature'; // ✅ Ensure this path matches your file

interface DataContextType {
  features: typeof feature;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [features] = useState(feature); // ✅ Use the imported array
  console.log('feature', feature);
  return (
    <DataContext.Provider value={{ features }}>{children}</DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};
