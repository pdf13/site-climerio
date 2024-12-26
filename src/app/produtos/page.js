import data from '../../data/products.json';

import Link from 'next/link';
import slugify from '../../utils/slugify';

export default function ProductCatalog() {
    const categories = new Set(data.flatMap(product => product.category));

    console.log(Array.from(categories).sort())

    const Item = ({ slug, name }) =>
        <Link href={`/produtos/${slug}`}>
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
                Array
                    .from(categories)
                    .sort()
                    .map((category, index) => <Item slug={slugify(category)} name={category} key={index} />)
            }
        </div>
    );
}
