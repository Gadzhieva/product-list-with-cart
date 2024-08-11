import Image from 'next/image';

interface DessertItem {
    name: string,
    imageDesktop: string,
    price: number,
}

const Desserts = () => {

    const dessertList: DessertItem[] = [
        {
            name: "Waffle with Berries",
            imageDesktop: "/images/image-waffle-desktop.jpg",
            price: 6.5,
        },
        {
            name: "Vanilla Bean Crème Brûlée",
            imageDesktop: "/images/image-creme-brulee-desktop.jpg",
            price: 7,
        },
        {
            name: "Macaron Mix of Five",
            imageDesktop: "/images/image-macaron-desktop.jpg",
            price: 8,
        },
        {
            name: "Classic Tiramisu",
            imageDesktop: "/images/image-tiramisu-desktop.jpg",
            price: 5.5,
        },
        {
            name: "Pistachio Baklava",
            imageDesktop: "/images/image-baklava-desktop.jpg",
            price: 4,
        },
        {
            name: "Lemon Meringue Pie",
            imageDesktop: "/images/image-meringue-desktop.jpg",
            price: 5,
        },
        {
            name: "Red Velvet Cake",
            imageDesktop: "/images/image-cake-desktop.jpg",
            price: 4.5,
        },
        {
            name: "Salted Caramel Brownie",
            imageDesktop: "/images/image-brownie-desktop.jpg",
            price: 5.5,
        },
        {
            name: "Vanilla Panna Cotta",
            imageDesktop: "/images/image-panna-cotta-desktop.jpg",
            price: 6.5,
        }
    ]

    const pounds = Intl.NumberFormat(
        'en-GB' ,
        {
             style: 'currency',
             currency: 'GBP',
        }
    )

    return (
        <div className="grid grid-cols-3 gap-4 mt-20 max-w-4xl m-auto px-20">
            <div className="col-span-2">
                <h1>Desserts</h1>
                <div className="grid grid-cols-3 gap-4 mt-5">
                    {dessertList.map((dessert, i) => {
                        return (
                            <div key={i}>
                                <Image
                                    width={200}
                                    height={200}
                                    src={dessert.imageDesktop}
                                    alt={dessert.name}
                                    className="rounded-lg"/>
                                <div className="-mt-4 text-center">
                                    <button
                                        type="button"
                                        className="bg-white border border-[#c83b0e] rounded-full w-32 h-8">
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
                                <p className="mt-2">{dessert.name}</p>
                                <p className="text-[#c83b0e]">{pounds.format(dessert.price)}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div>
                <h1>Your cart</h1>
            </div>
        </div>
    )
}

export default Desserts