import { useEffect, useState } from "react";
import { useSearchParams, useParams, useNavigate } from "react-router-dom";
import { createApiClient } from "../core/api";
import MoonLoader from "react-spinners/MoonLoader";
import GalleryItem from "./gallery/GalleryItem";
import GalleryPagination from "./gallery/GalleryPagination";
import Modal from "../shared/components/ui/Modal";
import Select from "react-select";
import "./Gallery.css";

const api = createApiClient();

const options = [
  { value: "animal", label: "Animal" },
  { value: "sport", label: "Sport" },
  { value: "work", label: "Work" },
];

const Gallery = () => {
  const [data, setData] = useState({});
  const [isLoading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { category } = useParams();

  useEffect(() => {
    (async () => {
      const search = Object.fromEntries([...searchParams]);
      setLoading(true);
      try {
        console.log(category);
        const data = await api.getPixabayHits(category, search);
        console.log(data);
        setData(data);
      } catch (err) {
        console.log(err);
      }
      setLoading(false);
    })();
  }, [searchParams, category]);

  const openModalHandler = () => setShowModal(true);
  const closeModalHandler = () => setShowModal(false);

  const selectHandler = (selected) => {
    navigate(`/${selected.value}`);
    closeModalHandler();
  };

  return (
    <section className="section-gallery">
      <GalleryPagination
        page={data.page}
        next={data.next}
        previous={data.previous}
        onOpenModal={openModalHandler}
      />

      <Modal
        show={showModal}
        onCancel={closeModalHandler}
        header="Select Photos type"
      >
        <Select value={category} onChange={selectHandler} options={options} />
      </Modal>

      {isLoading && (
        <div className="center">
          <MoonLoader color="#253658" />
        </div>
      )}

      {!isLoading && data.results?.length === 0 && (
        <div className="center">No results found.</div>
      )}

      {!isLoading && data.results?.length > 0 && (
        <div className="gallery">
          {data.results.map((hit) => {
            return <GalleryItem key={hit.id} hit={hit} />;
          })}
        </div>
      )}
    </section>
  );
};

export default Gallery;
