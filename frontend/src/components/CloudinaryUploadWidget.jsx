import { useEffect, useRef } from "react";

const CloudinaryUploadWidget = ({ uwConfig, setState }) => {
  const uploadWidgetRef = useRef(null);
  const uploadButtonRef = useRef(null);

  useEffect(() => {
    if (window.cloudinary && uploadButtonRef.current) {
      uploadWidgetRef.current = window.cloudinary.createUploadWidget(
        uwConfig,
        (error, result) => {
          if (!error && result && result.event === "success") {
            console.log("Upload successful:", result.info);
            setState(result.info.secure_url);
            // setState((prev) => [...prev, result.info.secure_url]);
          }
        }
      );

      const handleUploadClick = () => {
        if (uploadWidgetRef.current) {
          uploadWidgetRef.current.open();
        }
      };

      const buttonElement = uploadButtonRef.current;
      buttonElement.addEventListener("click", handleUploadClick);

      return () => {
        buttonElement.removeEventListener("click", handleUploadClick);
        document.body.style.overflow = "auto";
      };
    }
  }, [setState, uwConfig]);

  return (
    <button
      ref={uploadButtonRef}
      id="upload_widget"
      className="cloudinary-button"
    >
      Upload
    </button>
  );
};

export default CloudinaryUploadWidget;
