import Link from 'next/link';
import data from '../../data/factory.json';

export default function FabricCatalog() {
    const Item = ({ slug, name }) =>
        <Link href={`/fabricas/${slug}`}>
            <div className="card glass shadow-xl">
                {/* <figure>
            <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="car!" />
        </figure> */}
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    {/* <p>How to park your car at your garage?</p> */}
                </div>
            </div>
        </Link>

    return (
        <div className="grid grid-cols-4 gap-4">
            {
            data
                .sort((a, b) => a.name.localeCompare(b.name))
                .map((factory, index) => <Item slug={factory.slug} name={factory.name} key={index}/>)
            }
        </div>
    );
}
