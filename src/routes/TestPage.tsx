import { useEffect } from "react";

const TestPage = () => {
  const handleCallbackResponse = (res: any) => {
    console.log(res.credential);
  };
  useEffect(() => {
    /*global google*/
    google.accounts.id.initialize({
      client_id:
        "1042653613547-54t2b8gkd3ukh21q55mpv3uqckrch4su.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });

    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      theme: "outline",
      size: "large",
    });
  }, []);
  return (
    <div>
      TestPage
      <div id='signInDiv'></div>
    </div>
  )
}

export default TestPage