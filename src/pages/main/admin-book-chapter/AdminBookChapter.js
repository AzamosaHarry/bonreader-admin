import { useNavigate, useParams } from "react-router-dom";
import "./admin-book-chapter.css";
import { useEffect, useState } from "react";
import { useGetChapterContent } from "../../../redux/actions/bookActions";
import Loading from "../../../component/splash/loading/Loading";

function AdminBookChapter() {
  const getChapterContent = useGetChapterContent();
  const navigate = useNavigate();
  const { id, chapterId } = useParams();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [chapter, setChapter] = useState(null);

  const handleGetChapterContent = async () => {
    try {
      setLoading(true);
      const response = await getChapterContent({
        novelId: id,
        chapterId: chapterId,
      });

      if (response?.payload) {
        setErrorMessage("");
        setChapter(response.payload);
        return;
      } else {
        setErrorMessage(response.message);
      }
    } catch (error) {
      setErrorMessage(error.response.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleGetChapterContent();
  }, []);

  return (
    <div className="ad__novel">
      {loading ? (
        <Loading />
      ) : (
        <div className="bp__section__two">
          <h1
            className="bp__section__two__chapter"
            style={{ display: "flex", justifyContent: "center" }}
          >
            {`Chapter ${parseFloat(chapter?.chapter)}: ${chapter?.title}`}
          </h1>
          {/* <span className="bp__section__two__info">
          <p>Word Count: 917</p>
          <p>Released: 12-08-2023</p>
        </span> */}
          <div
            className="bp__section__two__text"
            dangerouslySetInnerHTML={{ __html: chapter?.content }}
          ></div>
          <span>
            <button onClick={() => navigate(-1)}>CLOSE CHAPTER</button>
          </span>
        </div>
      )}
    </div>
  );
}

export default AdminBookChapter;
