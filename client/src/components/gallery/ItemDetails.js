import React from "react";
import "./ItemDetails.css"

const ItemDetails = ({ hit }) => {
  return (
    <div className="item-details">
      <div>
        <p>
          <strong>Views:</strong>
        </p>
      </div>
      <div>
        <p>{hit.views}</p>
      </div>

      <div>
        <p>
          <strong>Downloads: </strong>
        </p>
      </div>

      <div>
        <p>{hit.downloads}</p>
      </div>

      <div>
        <p>
          <strong>Collections:</strong>
        </p>
      </div>

      <div>
        <p>{hit.collections}</p>
      </div>

      <div>
        <p>
          <strong>Likes: </strong>
        </p>
      </div>

      <div>
        <p>{hit.likes}</p>
      </div>

      <div>
        <p>
          <strong>Comments:</strong>
        </p>
      </div>

      <div>
        <p>{hit.comments}</p>
      </div>
    </div>
  );
};

export default ItemDetails;
