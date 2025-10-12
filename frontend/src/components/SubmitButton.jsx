import { useFormStatus } from "react-dom";

const SubmitButton = ({ submitType }) => {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="bg-teal-600 text-white px-4 py-4 rounded-md cursor-pointer"
    >
      {pending ? "Submitting..." : submitType}
    </button>
  );
};

export default SubmitButton;
