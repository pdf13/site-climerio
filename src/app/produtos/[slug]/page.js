'use client';

import 'react-photo-view/dist/react-photo-view.css';

import { useRouter } from 'next/navigation';
import data from '../../../data/products.json';
import { notFound } from 'next/navigation';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { useParams } from 'next/navigation';
import slugify from '../../../utils/slugify';
import Image from 'next/image'; // TODO: use latter to optimize

function intersect(a, b) {
    var setB = new Set(b);
    return [...new Set(a)].filter(x => setB.has(x));
}

function getFileName(filepath) {
    return (filepath || '').split('/').pop();
}

function updateUrlHash(visible, index, state, router) {
    if (!visible) {
        router.push('', undefined, { shallow: true })
        return
    }

    const product = state?.images?.[index].src
    router.push(`#${getFileName(product)}`, undefined, { shallow: true })
}

export default function ProductDetail() {
    const params = useParams();
    const router = useRouter();
    const slug = params.slug;

    const products = data.filter((product) => product.category.some(category => slug === slugify(category)));

    if (!products || products.length === 0) {
        return notFound();
    }

    const category = products[0].category.find(category => slug === slugify(category));

    console.log(products)

    const Card = ({ product }) =>
        <PhotoView src={product.image}>
            <div className="card glass shadow-xl">
                <figure>
                    <img src={product.image} alt={product.name} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{product.name}</h2>
                    {product.description && <p>{product.description}</p>}
                    <div className="card-actions justify-end">
                        {product.tags &&
                        product.tags.map((tag, index) =>
                            <div className="badge badge-neutral" key={index}>{tag}</div>
                        )}
                    </div>
                </div>
            </div>
        </PhotoView>

    return (
        <>
            <article className='prose mb-8 max-w-none'>
                <h1>{category}</h1>
            </article>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <PhotoProvider
                 onVisibleChange={(visible, index, state) => updateUrlHash(visible, index, state, router)}>
                    {products.map((product, index) => <Card product={product} key={index} />)}
                </PhotoProvider>
            </div>
        </>
    )
}
