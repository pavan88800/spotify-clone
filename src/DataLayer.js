import React, { createContext, useContext, useReducer } from 'react';

export const DataLayerContext = createContext();

export const DataLayer = ({ initailSatet, reducer, children }) => {
	return (
		//
		<DataLayerContext.Provider value={useReducer(reducer, initailSatet)}>{children}</DataLayerContext.Provider>
	);
};

export const useDataLayerValue = () => useContext(DataLayerContext);
