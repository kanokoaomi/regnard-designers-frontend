import { toast } from "react-hot-toast";

export const ErrorToast = (message) => {
  toast.error(message, {
    style: {
      background: "#ffffff",
      color: "#EF5050",
      padding: "10px 16px",
      borderRadius: "8px",
      border: "1px solid #efca01",
      fontFamily: "'Montserrat', sans-serif",
      marginRight: "24px",
      marginTop: "24px",
    },
  });
};
