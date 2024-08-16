import { ProductTile } from '../components/product-tile/';

interface DessertItem {
    name: string,
    shortName: string,
    imageDesktop: string,
    price: number,
}

const Desserts = () => {

    const dessertList: DessertItem[] = [
        {
            name: "Waffle with Berries",
            shortName: "Waffle",
            imageDesktop: "/images/image-waffle-desktop.jpg",
            price: 6.5,
        },
        {
            name: "Vanilla Bean Crème Brûlée",
            shortName: "Crème Brûlée",
            imageDesktop: "/images/image-creme-brulee-desktop.jpg",
            price: 7,
        },
        {
            name: "Macaron Mix of Five",
            shortName: "Macaron",
            imageDesktop: "/images/image-macaron-desktop.jpg",
            price: 8,
        },
        {
            name: "Classic Tiramisu",
            shortName: "Tiramisu",
            imageDesktop: "/images/image-tiramisu-desktop.jpg",
            price: 5.5,
        },
        {
            name: "Pistachio Baklava",
            shortName: "Baklava",
            imageDesktop: "/images/image-baklava-desktop.jpg",
            price: 4,
        },
        {
            name: "Lemon Meringue Pie",
            shortName: "Pie",
            imageDesktop: "/images/image-meringue-desktop.jpg",
            price: 5,
        },
        {
            name: "Red Velvet Cake",
            shortName: "Cake",
            imageDesktop: "/images/image-cake-desktop.jpg",
            price: 4.5,
        },
        {
            name: "Salted Caramel Brownie",
            shortName: "Brownie",
            imageDesktop: "/images/image-brownie-desktop.jpg",
            price: 5.5,
        },
        {
            name: "Vanilla Panna Cotta",
            shortName: "Panna Cotta",
            imageDesktop: "/images/image-panna-cotta-desktop.jpg",
            price: 6.5,
        }
    ]

    return (
        <div className="grid grid-cols-3 gap-4 mt-20 max-w-4xl m-auto px-20">
            <div className="col-span-2">
                <h1>Desserts</h1>
                <div className="grid grid-cols-3 gap-4 mt-5">
                    {dessertList.map((dessert, i) => {
                        return <ProductTile key={i} {...dessert}/>
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