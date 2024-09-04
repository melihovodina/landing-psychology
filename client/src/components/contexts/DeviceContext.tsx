import React, { createContext, ReactNode } from 'react';
import { useMediaQuery } from 'react-responsive';

type DeviceContextType = {
  isMobile: boolean;
};

const defaultValue: DeviceContextType = {
  isMobile: false
};

const DeviceContext = createContext<DeviceContextType>(defaultValue);

interface DeviceProviderProps {
  children: ReactNode;
}

const DeviceProvider: React.FC<DeviceProviderProps> = ({ children }) => {
  const isMobile = useMediaQuery({ query: '(max-width: 720px)' });

  return (
    <DeviceContext.Provider value={{ isMobile }}>
      {children}
    </DeviceContext.Provider>
  );
};

export { DeviceProvider, DeviceContext };