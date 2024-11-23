import { FaBookBookmark } from "react-icons/fa6";
import "./admin-novel-single.css";
import { FaUserEdit } from "react-icons/fa";
import defaultBookCover from "../../../assets/images/defaultBookCover.png";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  useGetNovel,
  useGetNovelChapters,
} from "../../../redux/actions/bookActions";
import { IoBookSharp } from "react-icons/io5";
import Loading from "../../../component/splash/loading/Loading";
import NoResult from "../../../component/splash/no-result/NoResult";

function AdminNovelsSingle() {
  const navigate = useNavigate();
  const getNovel = useGetNovel();
  const getNovelChapters = useGetNovelChapters();
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [novel, setNovel] = useState(null);
  const [chapters, setChapters] = useState([]);

  const handleGetNovel = async () => {
    try {
      setLoading(true);
      const response = await getNovel(id);

      if (response?.payload) {
        setErrorMessage("");
        setNovel(response.payload);
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

  const handleGetNovelChapters = async () => {
    try {
      setLoading(true);
      const response = await getNovelChapters(id);

      if (response?.payload) {
        setErrorMessage("");
        setChapters(response.payload.results);
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
    handleGetNovel();
    handleGetNovelChapters();
  }, []);

  return (
    <div className="ad__novel__single">
      <section className="ad__novel__single__section__one">
        <div className="ad__novel__single__start">
          <img
            src={novel?.cover_image ? novel.cover_image : defaultBookCover}
            alt=""
          />
        </div>
        <div className="ad__novel__single__end">
          {loading ? (
            <Loading />
          ) : !novel ? (
            <p>Error</p>
          ) : (
            <>
              <h1>{novel?.title}</h1>
              <span>
                <FaBookBookmark />
                <h3>{novel?.genres[0]}</h3>
              </span>
              <span>
                <IoBookSharp />
                <h3>{`${novel?.num_chapters} Chapters`}</h3>
              </span>
              <span>
                <FaUserEdit />
                <h3>{novel?.author?.name}</h3>
              </span>
            </>
          )}
        </div>
      </section>
      <section className="ad__novel__single__section__two">
        <h1>Latest chapter(s)</h1>
        {loading ? (
          <Loading />
        ) : chapters?.length == 0 ? (
          <NoResult />
        ) : (
          <>
            {chapters?.map((chapter) => (
              <div
                className="ad__novel__single__section__two__block"
                onClick={() =>
                  navigate(
                    `/novels/${id}/chapter/${parseFloat(chapter.chapter)}`
                  )
                }
              >
                <h1>{`Chapter ${parseFloat(chapter.chapter)}`}</h1>
                {/* <h3>{chapter.title}</h3> */}
                <span>
                  <p>{`Title: ${chapter.title}`}</p>
                  <div>
                    <button
                      style={{ backgroundColor: "#d4edda", color: "#155724 " }}
                    >
                      APPROVE
                    </button>
                    <button
                      style={{ backgroundColor: "#f8d7da", color: "#721c24" }}
                    >
                      REJECT
                    </button>
                  </div>
                </span>
              </div>
            ))}
          </>
        )}
      </section>
    </div>
  );
}

export default AdminNovelsSingle;
