
//criar as props para o modal com as coisas que precisa passo12
type Props = {
    image: string;
    closeModal: () => void;
}

//Criar o novo arquivo para abri o modal, mas ja o colocamos na page passo11
//Colocar os fragments para ter duas areas distintas, primeira area da imagem
// 2 area o X para fechar passo13
// Coloca o Onclick modal para fechar tanto na img quanto no X passo14
export const Modal = ({image, closeModal}: Props) => {
    return (
        <>
            <div onClick={closeModal} className="fixed left-0 top-0 right-0 bottom-0 flex justify-center items-center bg-black/90">
                <img src={`/assets/${image}`} alt="" className="max-w-screen max-h-screen" />
            </div>
            <div onClick={closeModal} className="fixed top-5 right-5 w-10 h-10 cursor-pointer text-white text-5xl">
                X   
            </div>
        </>
    );
}