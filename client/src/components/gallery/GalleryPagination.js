import React from "react";
import { useSearchParams } from "react-router-dom";
import Button from "../../shared/components/ui/Button";
import ChervonDoubleLeft from "../../shared/images/ChervonDoubleLeft";
import ChervonDoubleRight from "../../shared/images/ChervonDoubleRight";
import "./GalleryPagination.css";

const GalleryPagination = ({ page, previous, next ,onOpenModal }) => {
  const [search, setSearch] = useSearchParams();

  const prevPageHandler = async () => {
    search.set("page", (page - 1).toString());
    setSearch(search, {
      replace: true,
    });
  };

  const nextPageHandler = async () => {
    search.set("page", (page + 1).toString());
    setSearch(search, {
      replace: true,
    });
  };

  return (
    <div className="pagination">
      <Button disabled={!previous} onClick={prevPageHandler}>
        <ChervonDoubleLeft/> Prev
      </Button>

      <Button className="center-button" onClick={()=>onOpenModal()}>Category</Button>

      <Button disabled={!next} onClick={nextPageHandler}>
        Next <ChervonDoubleRight/>
      </Button>
    </div>
  );
};

export default GalleryPagination;
