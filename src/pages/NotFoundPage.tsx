import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <>
      <h1>404 Not found</h1>
      <Link to="/">Return to Home</Link>
    </>
  );
}

export default NotFoundPage;
