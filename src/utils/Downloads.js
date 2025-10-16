import { downloadImage } from './download-image';

const DownloadIcon = ({ width = 20, height = 20, className = "", fill = "currentColor" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 20 20" className={className}>
    <path fill={fill} d="M13 8V2H7v6H2l8 8l8-8h-5zM0 18h20v2H0v-2z" />
  </svg>
)

const DownloadImageButton = ({url, image}) => (
  <a className="mr-8" onClick={() => downloadImage(url, image)} style={{cursor: 'pointer'}}>
    <u><strong>Baixar imagem</strong></u>
  </a>
)

export {DownloadIcon, DownloadImageButton};
