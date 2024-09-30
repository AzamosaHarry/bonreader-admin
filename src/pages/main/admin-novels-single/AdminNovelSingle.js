import { FaBookBookmark } from "react-icons/fa6";
import "./admin-novel-single.css";
import { ImBookmarks } from "react-icons/im";
import { FaTags } from "react-icons/fa";
import image1 from "../../../assets/home__hero__image.png";
import { useNavigate } from "react-router-dom";

function AdminNovelsSingle() {
  const navigate = useNavigate();
  return (
    <div className="ad__novel__single">
      <section className="ad__novel__single__section__one">
        <div className="ad__novel__single__start">
          <img src={image1} alt="" />
        </div>
        <div className="ad__novel__single__end">
          <h1>Almost perfect partner</h1>
          <span>
            <FaBookBookmark />
            <h3> Romance</h3>
          </span>
          <span>
            <ImBookmarks />
            <h3>1,255 Chapters</h3>
          </span>
          <span>
            <FaTags />
            <h3>Shally Popy</h3>
          </span>
        </div>
      </section>
      <section className="ad__novel__single__section__two">
        <h1>Latest chapter(s)</h1>
        <div
          className="ad__novel__single__section__two__block"
          onClick={() => navigate("chapter/1255")}
        >
          <h1>Chapter 1255</h1>
          <h3>The part of the reason</h3>
          <span>
            <p>
              After recent divorcée Julie has sworn off romance to focus on her
              marketing career, her friends finally convince her to cautiously
              dip a toe back in by trying online dating. To Julie's surprise,
              she seems to hit it off with Blake, a charming architect. But over
              time, red flags appear revealing that Blake is still secretly
              obsessed with and harboring hopes to reunite with his ex, Lila.
            </p>
            <div>
              <button style={{ background: "#669933" }}>APPROVE</button>
              <button style={{ background: "red" }}>REJECT</button>
            </div>
          </span>
        </div>
        <div
          className="ad__novel__single__section__two__block"
          onClick={() => navigate("chapter/1254")}
        >
          <h1>Chapter 1254</h1>
          <h3>The part of the reason</h3>
          <span>
            <p>
              After recent divorcée Julie has sworn off romance to focus on her
              marketing career, her friends finally convince her to cautiously
              dip a toe back in by trying online dating. To Julie's surprise,
              she seems to hit it off with Blake, a charming architect. But over
              time, red flags appear revealing that Blake is still secretly
              obsessed with and harboring hopes to reunite with his ex, Lila.
            </p>
            <div>
              <button style={{ background: "#669933" }}>APPROVE</button>
              <button style={{ background: "red" }}>REJECT</button>
            </div>
          </span>
        </div>
      </section>
    </div>
  );
}

export default AdminNovelsSingle;
