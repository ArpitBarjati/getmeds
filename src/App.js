import React, { useContext } from "react";
import { Medicines } from "./medicines";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Pathh } from "./index";
import { Link } from "react-router-dom";

const App = ({ wow }) => {
  const d = new Date();
  return (
    <div className="container">
      <div className="row">
        <>
          {Medicines.map((prop) => {
            return <Card {...prop} {...wow} key={prop.id}></Card>;
          })}
        </>
      </div>
    </div>
  );
};
const Card = ({ url, name, price, id, arr, changearr, d, para }) => {
  const { vall, cval } = useContext(Pathh);
  const addit = (name, id, url, price) => {
    changearr(() => {
      const val = parseInt(new Date().getTime(), 10);
      arr.push({ url, id, name, price, val, para });
      return arr;
    });
  };
  return (
    <>
      <div className="col" style={{ padding: "1rem" }}>
        <div className="card" style={{ width: "18rem" }}>
          <img
            src={url}
            className="card-img-top"
            height="300px"
            width="300px"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{para}</p>
            <p>
              <b>
                <span>Rs </span>
                {price}
                <span></span>
              </b>
            </p>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                addit(name, id, url, price, para);
                cval(vall + 1);
              }}
            >
              add to cart
            </button>
            <Link style={{ marginLeft: "3rem" }} to={`/item/${id}`}>
              know more
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
