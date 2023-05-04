import React, { useState } from "react";
import Modal from "../../shared/components/ui/Modal";
import "./GalleryItem.css";
import ItemDetails from "./ItemDetails";

const GalleryItem = ({ hit }) => {
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const openModalHandler = () => setShowModal(true);
  const closeModalHandler = () => setShowModal(false);

  return (
    <>
      <Modal show={showModal} onCancel={closeModalHandler} header="Details">
        <ItemDetails hit={hit} />
      </Modal>
      <figure className="gallery-item" onClick={openModalHandler}>
        <img
          src={hit.largeImageURL}
          alt={hit.tags}
          onLoad={() => setIsLoading(true)}
          style={isLoading ? {} : { display: "none" }}
        />
      </figure>
    </>
  );
};

export default GalleryItem;
