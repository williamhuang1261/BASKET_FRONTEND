import { AxiosError } from "axios";
import useError from "../hooks/useError";
import { createHttpService } from "../services/http-service";
import { useQueryClient } from "@tanstack/react-query";
import ErrorBar from "../components/General/Miscellaneous/ErrorBar";

/**
 * @description Test page for development and debugging purposes
 * @returns {JSX.Element} Test page with any content for testing
 */
const TestPage = () => {
  const queryClient = useQueryClient();
  const service = createHttpService("/test", { "x-auth-token": "0" });
  const errorHandler = useError();

  const fn = async () => {
    try {
      const res = await queryClient.fetchQuery({
        queryKey: ["test"],
        queryFn: () => service.get(""),
      });
      console.log(res);
    } catch (err) {
      errorHandler(err as AxiosError);
    }
  };

  return (
    <div className="p-3">
      <ErrorBar size={'Container'}/>
      <div className="text-green">Hi</div>
      <button onClick={fn}>Click me</button>
    </div>
  );
};

export default TestPage;
