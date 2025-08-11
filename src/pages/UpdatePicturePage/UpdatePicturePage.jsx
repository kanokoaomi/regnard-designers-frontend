import { NavLink, useNavigate, useParams } from "react-router-dom";
import Container from "../../components/Container/Container";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  getPictureById,
  updatePicture,
} from "../../redux/jewellery/jewelleryOperations";

import styles from "../AddPicture/AddPicturePage.module.css";
import UpdatePicture from "../../components/UpdatePicture/UpdatePicture";
import { SuccessToast } from "../../utils/successToast";
import { ErrorToast } from "../../utils/errorToast";

const UpdatePicturePage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getPictureById(id));
  }, [id, dispatch]);

  const handleSubmit = async (values, actions) => {
    const formData = new FormData();
    formData.append("pictureUrl", values.pictureUrl);
    formData.append("title", values.title);
    formData.append("desc", values.desc);
    try {
      await dispatch(updatePicture({ pictureId: id, formData })).unwrap();
      actions.resetForm();
      SuccessToast("Picture updated successfully!");
      navigate("/");
    } catch (error) {
      ErrorToast(
        error.message || "Failed to update picture. Please try again."
      );
    }
  };

  return (
    <div>
      <header className="header">
        <NavLink className={styles.navlink} to={"/"}>
          <button className="button">return</button>
        </NavLink>
        {/* <LanguageSelector /> */}
      </header>
      <Container>
        <UpdatePicture handleSubmit={handleSubmit} />
      </Container>
    </div>
  );
};

export default UpdatePicturePage;
