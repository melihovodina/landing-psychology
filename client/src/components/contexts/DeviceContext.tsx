import React, { createContext, ReactNode } from 'react';
import { useMediaQuery } from 'react-responsive';

type DeviceContextType = {
  isMobile: boolean;
  isTablet: boolean;
};

const defaultValue: DeviceContextType = {
  isMobile: false,
  isTablet: false
};

const DeviceContext = createContext<DeviceContextType>(defaultValue);

interface DeviceProviderProps {
  children: ReactNode;
}

const DeviceProvider: React.FC<DeviceProviderProps> = ({ children }) => {
  const isMobile = useMediaQuery({ query: '(max-width: 719px)' });
  const isTablet = useMediaQuery({ query: '(min-width: 720px) and (max-width: 1200px)' })

  return (
    <DeviceContext.Provider value={{ isMobile, isTablet }}>
      {children}
    </DeviceContext.Provider>
  );
};

export { DeviceProvider, DeviceContext };