import { Link } from "react-router-dom";
import { toast } from "react-toastify";

function Home() {
  return (
    <main>
      <section className="container my-10">
        <h1 className="text-4xl mb-3">Home Page</h1>
        <button
          className="btn my-3 text-lg text-[#a1ffa1]"
          onClick={() => toast.success("Successful")}
        >
          click me to view an success toast
        </button>
        <br />
        <button
          className="btn my-3 text-lg text-[orange]"
          onClick={() => toast.error("Error")}
        >
          click me to view an error toast
        </button>
        <br />
        <button className="btn my-3 text-lg text-[#ff6a6a]">
          <Link to="/efwaeqff">click me to view the 404 page</Link>
        </button>
      </section>
    </main>
  );
}

export default Home;
