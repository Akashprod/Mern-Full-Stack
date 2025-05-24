import React from "react";
import { useNavigation } from "react-router-dom";

const SubmitBtn = ({ text }) => {
  const navigate = useNavigation();
  const isSubmitting = navigate.state === "submitting";

  return (
    <button
      type="submit"
      disabled={isSubmitting}
      className="btn btn-primary btn-block mb-4"
    >
      {isSubmitting ? (
        <span className="loading loading-spinner"> Sending...</span>
      ) : (
        text || "Submit"
      )}
    </button>
  );
};

export default SubmitBtn;
