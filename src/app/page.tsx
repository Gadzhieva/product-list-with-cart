import Image from 'next/image';

interface DessertItem {
    name: string,
    imageDesktop: string,
}

const Desserts = () => {

    const dessertList: DessertItem[] = [
        {
            name: "Waffle with Berries",
            imageDesktop: "/images/image-waffle-desktop.jpg",
        },
        {
            name: "Vanilla Bean Crème Brûlée",
            imageDesktop: "/images/image-creme-brulee-desktop.jpg",
        },
        {
            name: "Macaron Mix of Five",
            imageDesktop: "/images/image-macaron-desktop.jpg",
        },
        {
            name: "Classic Tiramisu",
            imageDesktop: "/images/image-tiramisu-desktop.jpg",
        },
        {
            name: "Pistachio Baklava",
            imageDesktop: "/images/image-baklava-desktop.jpg",
        },
        {
            name: "Lemon Meringue Pie",
            imageDesktop: "/images/image-meringue-desktop.jpg",
        },
        {
            name: "Red Velvet Cake",
            imageDesktop: "/images/image-cake-desktop.jpg",
        },
        {
            name: "Salted Caramel Brownie",
            imageDesktop: "/images/image-brownie-desktop.jpg",
        },
        {
            name: "Vanilla Panna Cotta",
            imageDesktop: "/images/image-panna-cotta-desktop.jpg",
        }
    ]

    return (
        <div className="grid grid-cols-3 gap-4 m-20">
            <div className="col-span-2">
                <h1>Desserts</h1>
                <div className="grid grid-cols-3 gap-4 mt-5">
                    {dessertList.map((dessert, i) => {
                        return (
                            <div key={i}>
                                <Image width={200} height={200} src={dessert.imageDesktop}/>
                                <p>{dessert.name}</p>
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