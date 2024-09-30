import { useNavigate } from "react-router-dom";
import "./admin-book-chapter.css";

function AdminBookChapter() {
  const navigate = useNavigate();

  return (
    <div className="ad__novel">
      <div className="bp__section__two">
        <h1
          className="bp__section__two__chapter"
          style={{ display: "flex", justifyContent: "center" }}
        >
          Chapter 1: The part of the reason
        </h1>
        <span className="bp__section__two__info">
          <p>Word Count: 917</p>
          <p>Released: 12-08-2023</p>
        </span>
        <p className="bp__section__two__text">
          Julie slipped on a silky emerald dress and glanced in the mirror, a
          wave of nerves hitting her. She still felt hesitant about this dating
          app business but her best friend Carla had finally convinced her to
          give it one real try. <br />
          “You’re ready to dip your toe back in, Jules! What about that hottie I
          liked for you, Brendan?” Carla had fired off a flurry of happy face
          emojis until Julie relented and agreed to the match. Julie couldn’t
          recall the last time she had put such effort into a date outfit. One
          date post divorce wouldn’t hurt... Brendan had suggested a trendy
          Mexican restaurant downtown. <br />
          As Julie entered, her red heels clicked rhythmically. She spotted
          Brendan by the bar, nursing a half-finished beer and laughing with the
          bartender. Her breath caught a bit, struck by how handsome he appeared
          in a sharp blue suit that accentuated his athletic build. Brendan’s
          warm brown eyes lit up as he saw Julie, flashing a bright smile.
          “Wow...you look beautiful!” Brendan said effusively, leaning in for a
          polite but slightly awkward first date hug. His cologne smelled woodsy
          and expensive. Over spicy margaritas and empanadas, easy conversation
          flowed discussing their marketing jobs, favorite sports teams, and
          travels. Brendan was charming and thoughtful, genuinely listening when
          Julie described her passion for animal rescue efforts. She found
          herself gradually relaxing. <br />
          But as they moved to the dance floor for some salsa dancing, Brendan
          turned suddenly quiet and distracted. Was she being too forward? He
          checked his watch a few too many times, seemingly impatient. Two fast
          songs in, Brendan abruptly stopped dancing. “Hey, I hate to do this
          but I just remembered an early client call I have to prep for
          tomorrow.” Julie stood in stunned silence, the rejection hitting her
          squarely. “Oh...okay, well—" Brendan’s tall frame was already halfway
          to the exit calling, “I really enjoyed this Julie but gotta run. Let’s
          do it again sometime!” The blaring music faded and Julie slowly
          shuffled back to their table, grabbing her clutch with hot tears
          threatening to spill over. What happened? Everything seemed perfectly
          lovely just minutes earlier. <br />A familiar tightness gripped her
          chest, the post-divorce wounds reopening. A sympathetic waiter
          appeared. “Can I call you an Uber, ma'am?” “No, I’ll be alright,
          thanks.” Julie sighed. Guess she wasn’t ready for Brendan or any
          romantic complications after all.{" "}
        </p>
        <span>
          <button onClick={() => navigate(-1)}>CLOSE CHAPTER</button>
        </span>
      </div>
    </div>
  );
}

export default AdminBookChapter;
