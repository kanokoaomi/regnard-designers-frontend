import { toast } from "react-hot-toast";

export const SuccessToast = (message) => {
  toast.success(message, {
    style: {
      background: "white",
      color: "black",
      padding: "10px 16px",
      borderRadius: "8px",
      zIndex: "999",
      border: "1px solid #efca01",
      fontFamily: "'Montserrat', sans-serif",
      marginRight: "24px",
      marginTop: "24px",
    },
  });
};
