import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import logo from "../logo.svg";
import "../App.css";

const FoodDetail = () => {
  let { foodSlug } = useParams();
  const [detail, setDetail] = useState(null);

  const getDetail = async () => {
    try {
      const response = await axios.get(`article-detail-by-slug/${foodSlug}`);
      const { success, message, data } = response.data;

      if (success) {
        setDetail(data);
      } else {
        alert(message);
      }
    } catch (error) {
      alert(JSON.stringify(error));
    }
  };

  useEffect(() => {
    axios.defaults.baseURL =
      "https://8340fa0f-4afd-43b9-8593-2a23fcfa580c.mock.pstmn.io/";

    getDetail();
  }, []);

  return (
    <div>
      <div className="box-container">
        <img src={logo} className="box-logo" alt="logo" />
        <p className="box-text">Logo React</p>
        <div style={{ clear: "both" }} />
      </div>
      <h1>{detail?.title}</h1>
      <h4>{detail?.subtitle}</h4>
      <div dangerouslySetInnerHTML={{ __html: detail?.content }} />
    </div>
  );
};

export default FoodDetail;
