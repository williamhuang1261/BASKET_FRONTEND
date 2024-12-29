
import { createHttpService } from "../services/http-service";

import { useQuery } from "@tanstack/react-query";

const TestPage = () => {

  const service = createHttpService("/test", { "x-auth-token": "1" });

  const fn = () => {
    return service
      .get("")
      .then((res) => {
        console.log(res.data);
        return null;
      })
      .catch((err) => {
        console.log("An error occured", err);
        return null;
      });
  };

  useQuery({ queryKey: ["test"], queryFn: fn, staleTime: Infinity });

  return (
    <div className="p-3">
      <div className="text-green">Hi</div>
    </div>
  );
};

export default TestPage;
