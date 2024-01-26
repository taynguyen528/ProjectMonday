import "../assets/styles/signup.css";
import imgSignup2 from "../assets/img/img-signup-2.png";
import imgLogo from "../assets/img/logoMonday.png";
import { useNavigate } from "react-router-dom";
import ButtonContinue from "../components/ButtonContinue";
import ButtonBack from "../components/ButtonBack";

function LastQuestion() {
  const navigate = useNavigate();
  const handleNext = () => {
    navigate("/InviteMember");
  };
  const handleBack = () => {
    navigate("/Question2");
  };
  return (
    <>
      <div className="questionPage">
        <div className="question">
          <div className="question__wrap">
            <img src={imgLogo} className="imgLastQuestion"></img>
            <div className="answerBlock">
              <h1>One last question, how did you hear about us?</h1>
              <form>
                <div className="wrapInput">
                  <input
                    type="checkbox"
                    id="software-review-sites"
                    name="hear-about"
                    value="software-review-sites"
                  />
                  <label for="software-review-sites">Soft review sites</label>
                </div>
                <div className="wrapInput">
                  <input
                    type="checkbox"
                    id="friend-colleague"
                    name="hear-about"
                    value="Friend / Colleague"
                  />
                  <label for="friend-colleague">Friend / Colleague</label>
                </div>
                <div className="wrapInput">
                  <input
                    type="checkbox"
                    id="social-media"
                    name="hear-about"
                    value="Social media"
                  />
                  <label for="social-media">
                    Social media (Facebook, Instagram, Reddit, etc.)
                  </label>
                </div>
                <div className="wrapInput">
                  <input
                    type="checkbox"
                    id="Billboard / Public transit ad"
                    name="Billboard / Public transit ad"
                    value="Friend / Colleague"
                  />
                  <label for="Billboard / Public transit ad">
                    Billboard / Public transit ad
                  </label>
                </div>

                <div className="wrapInput">
                  <input
                    type="checkbox"
                    id="YouTube ad"
                    name="YouTube ad"
                    value="YouTube ad"
                  />
                  <label for="YouTube ad">YouTube ad</label>
                </div>
                <div className="wrapInput">
                  <input
                    type="checkbox"
                    id="Linkedin"
                    name="Linkedin"
                    value="Linkedin"
                  />
                  <label for="Linkedin">Linkedin</label>
                </div>

                <div className="wrapInput">
                  <input
                    type="checkbox"
                    id="Consultant"
                    name="Consultant"
                    value="Consultant"
                  />
                  <label for="Consultant">Consultant</label>
                </div>
                <div className="wrapInput">
                  <input
                    type="checkbox"
                    id="Social media (Facebook, Instagram, Reddit,...)"
                    name="Social media (Facebook, Instagram, Reddit,...)"
                    value="Social media (Facebook, Instagram, Reddit,...)"
                  />
                  <label for="Social media (Facebook, Instagram, Reddit,...)">
                    Social media (Facebook, Instagram, Reddit,...)
                  </label>
                </div>

                <div className="wrapInput">
                  <input
                    type="checkbox"
                    id="Search engine(Google, Bing, etc,...)"
                    name="Search engine(Google, Bing, etc,...)"
                    value="Search engine(Google, Bing, etc,...)"
                  />
                  <label for="Search engine(Google, Bing, etc,...)">
                    Search engine(Google, Bing, etc,...)
                  </label>
                </div>
                <div className="wrapInput">
                  <input
                    type="checkbox"
                    id="TV / Streaming service"
                    name="TV / Streaming service"
                    value="TV / Streaming service"
                  />
                  <label for="TV / Streaming service">
                    TV / Streaming service
                  </label>
                </div>

                <div className="wrapInput">
                  <input
                    type="checkbox"
                    id="audio-ad"
                    name="hear-about"
                    value="Audio ad (Podcast, Spotify)"
                  />
                  <label for="audio-ad">Audio ad (Podcast, Spotify)</label>
                </div>

                <div className="wrapInput">
                  <input
                    type="checkbox"
                    id="Other"
                    name="Other"
                    value="Other"
                  />
                  <label for="Other">Other</label>
                </div>
              </form>
            </div>
            <div className="group_action" style={{ marginTop: "30px" }}>
              <ButtonBack onClick={handleBack}></ButtonBack>
              <ButtonContinue onClick={handleNext}></ButtonContinue>
            </div>
          </div>
          <div className="signup__img">
            <img src={imgSignup2} alt="img_signup"></img>
          </div>
        </div>
      </div>
    </>
  );
}

export default LastQuestion;
