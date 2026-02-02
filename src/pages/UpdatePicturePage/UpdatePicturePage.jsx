import { NavLink, useNavigate, useParams } from "react-router-dom";
import Container from "../../components/Container/Container";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getPictureById,
  updatePicture,
} from "../../redux/jewellery/jewelleryOperations";

import styles from "../AddPicture/AddPicturePage.module.css";
import UpdatePicture from "../../components/UpdatePicture/UpdatePicture";
import { SuccessToast } from "../../utils/successToast";
import { ErrorToast } from "../../utils/errorToast";
import { isLoading } from "../../redux/jewellery/jewellerySelectors";
import Loader from "../../components/Loader/Loader";

const UpdatePicturePage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loading = useSelector(isLoading);

  useEffect(() => {
    dispatch(getPictureById(id));
  }, [id, dispatch]);

  const handleSubmit = async (values, actions) => {
    const formData = new FormData();
    formData.append("pictureUrl", values.pictureUrl);
    formData.append("title", values.title);
    formData.append("desc", values.desc);
    formData.append("descFr", values.descFr);
    formData.append("descNl", values.descNl);
    try {
      await dispatch(updatePicture({ pictureId: id, formData })).unwrap();
      actions.resetForm();
      SuccessToast("Picture updated successfully!");
      navigate("/");
    } catch (error) {
      ErrorToast(
        error.message || "Failed to update picture. Please try again.",
      );
    }
  };

  const onReturnButton = () => {
    navigate("/");
  };

  return (
    <div>
      {loading && <Loader />}
      <header className="header">
        <div className={styles.navlink}>
          <button onClick={() => onReturnButton()} className="button">
            return
          </button>
        </div>
        {/* <LanguageSelector /> */}
      </header>
      <Container>
        <UpdatePicture handleSubmit={handleSubmit} />
      </Container>
    </div>
  );
};

export default UpdatePicturePage;
