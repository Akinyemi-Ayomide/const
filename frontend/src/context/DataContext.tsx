import { createContext, useContext, useState } from 'react';
import featureData from '../assets/features'; // ✅ Ensure this path matches your file

interface DataContextType {
  features: typeof featureData;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [features] = useState(featureData); // ✅ Use the imported array

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
