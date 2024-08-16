'use client'
import { BasketProvider, basketReducer, useBasket } from '@/context';
import Image from 'next/image';
import { useState } from 'react';

interface DessertItem {
    name: string,
    shortName: string,
    imageDesktop: string,
    price: number,
}

const pounds = Intl.NumberFormat(
    'en-GB',
    {
        style: 'currency',
        currency: 'GBP',
    }
)

export const ProductTile = (props: DessertItem) => {
    const { state, setState } = useBasket()
    const { imageDesktop, name, shortName, price } = props
    
    const handleOnClick = () => {
        console.log(state)
        const newBasket = basketReducer(state, { type: 'ADD_TO_BASKET', payload: { id: "1", quantity: 10 } })
        setState(newBasket);

        console.log(state, newBasket);
    }

    return (
        <div>
            <Image
                width={200}
                height={200}
                src={imageDesktop}
                alt={name}
                className="rounded-lg" />
            <div className="-mt-4 text-center">
                <button
                    type="button"
                    className="bg-white border border-[#c83b0e] rounded-full w-32 h-8"
                    onClick={handleOnClick}>
                    <Image
                        width={0}
                        height={0}
                        src="/images/icon-add-to-cart.svg"
                        alt="Add to cart button"
                        className="inline-block w-5 h-auto"
                    />
                    <span className="inline-block align-middle ml-1"> Add to Cart</span>
                </button>
            </div>
            <p className="mt-2 text-[#847975] text-[10px]">{shortName}</p>
            <p>{name}</p>
            <p className="text-[#c83b0e]">{pounds.format(price)}</p>
        </div>
    )
}
