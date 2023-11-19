import { Photo } from "../types/Photo";

// Fazer as props da img passo4

type Props = {
    photo: Photo;
    onClick: () => void;
};

// Criar arquivo PhotoItem na pasta components. Criar componente especifico
// para colocar cada uma das fotos, ja que vamos repetir photolist.map,
// é interessante colocar dentro de um componente passo3


export const PhotoItem = ({ photo, onClick}: Props) => {
    return (
        <div onClick={onClick} className="cursor-pointer hover:opacity-80">
            <img src={`/assets/${photo.url}`} alt="" className="w-full"/>
        </div>
    );
};