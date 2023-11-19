"use client"

import { useState } from "react";
import { PhotoItem } from "./components/Photoitem";
import { photoList } from "./data/photoList";
import { Modal } from "./components/Modal";

const Page = () => {
  // fazer o modal com state passo6
  const [showModal, setShowModal] = useState(false);
  // saber o que vai aparecer no modal, quando clicar foto especifica
  // salvar para saber a imagem que vai exibir no modal, p isso armazena em uma state; passo7
  const [imageOfModal, setImageOfModal] = useState('');
  // cria função para abri o modal, vai receber o id da foto que quer exibir passo8
  // passa essa função para o onCLick exibir, vamos achar a foto com base no id
  const openModal = (id: number) => {
    const photo = photoList.find(item => item.id === id);
    if(photo) {
      setImageOfModal(photo.url);
      setShowModal(true);
    }
  }

  //Criar uma função para fechar o modal passo10
  const closeModal = () => {
    setShowModal(false);
  }


  return (
    <div className="mx-2">
      <h1 className="text-center text-3xl font-bold my-10">Fotos Intergalacticas</h1>

      <section className="container max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {photoList.map(item => (
          <PhotoItem      //passei o componente para exibir uma foto PhotoItem passo5
            key={item.id}
            photo={item}
            onClick={() => {openModal(item.id)}}
          />
        ))}
      </section>

// criar o próprio componente de modal passo9
    {showModal &&
      <Modal image={imageOfModal} closeModal={closeModal}/>
    }
    </div>
  );
}

export default Page;

