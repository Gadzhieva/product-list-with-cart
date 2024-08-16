'use client'
import { createContext, useContext, useState, SetStateAction, Dispatch } from "react";

type Action =
    | { type: 'ADD_TO_BASKET', payload: { id: string, quantity: number, } };

export interface BasketItem {
    [id: string]: {
        quantity: number,
    }
}

const BasketContext = createContext({
    state: [] as BasketItem[],
    setState: (_: BasketItem[]) => { },
})

export const basketReducer = (state: BasketItem[], action: Action): BasketItem[] => {
    const id = action.payload.id;
    switch (action.type) {
        case 'ADD_TO_BASKET':
            return { ...state, [id]: action.payload.quantity };
    }
}

export const BasketProvider = ({ children }: any) => {
    const [state, setState] = useState([] as BasketItem[]);

    return (
        <BasketContext.Provider value={{
            state, setState
        }}>
            {children}
        </BasketContext.Provider>
    );
};

export const useBasket = () => useContext(BasketContext);
