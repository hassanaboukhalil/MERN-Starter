import { toast } from "react-toastify";

function Home() {
  return (
    <main>
      <section className="container my-10">
        <h1 className="text-4xl mb-3">Home Page</h1>
        <button
          className="btn my-3"
          onClick={() => toast.success("Successful")}
        >
          click me to view a toast that you should return in success
        </button>
        <br />
        <button className="btn my-3" onClick={() => toast.error("Error")}>
          click me to view a toast that you should return in error
        </button>
      </section>
    </main>
  );
}

export default Home;
