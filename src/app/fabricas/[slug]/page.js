'use client';

import 'react-photo-view/dist/react-photo-view.css';

import data from '../../../data/factory.json';
import { notFound } from 'next/navigation';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { useParams } from 'next/navigation';
import { DownloadImageButton } from '../../../utils/Downloads';
import Image from 'next/image'; // TODO: use latter to optimize


export default function FabricDetail() {
    const params = useParams()
    const slug = params.slug

    const factory = data.find((factory) => factory.slug === slug);

    if (!factory) {
        return notFound();
    }

    const Item = ({image}) =>
        <PhotoView src={image}><img src={image} className="shadow-lg mb-8 rounded-xl"/></PhotoView>

    return (
        <article className='prose mb-8 max-w-none'>
            <h1>{factory.name}</h1>

            {factory.description && <p>{factory.description}</p>}

            <PhotoProvider
                toolbarRender={({ images, index }) => {
                    return (<DownloadImageButton
                        url={window.location.origin}
                        image={images[index]?.src}
                        key={index}
                    />)
                }}>
                {factory.images.map((image, index) => <Item image={image} index={index} key={index}/>)}
            </PhotoProvider>
        </article>
    )
}
