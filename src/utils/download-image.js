const downloadImage = (path, imageName) => {
    const link = document.createElement('a');
    link.href = path+imageName;
    link.download = imageName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

export { downloadImage };
