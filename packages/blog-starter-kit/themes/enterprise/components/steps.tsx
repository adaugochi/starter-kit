import kwikpikApp from '../public/images/app.svg';
import Image from 'next/image';
import {appName} from "../utils/const";
import {DownloadButton} from "./downloadButton";
import FavoriteIcon from "../public/icons/favorite.svg"

function Steps() {
  return (
    <div className="steps-container">
      <div className="container">
        <div className="row gy-5">
          <div className="col-lg-5">
            <div>
              <Image src={FavoriteIcon} alt="favour" className="mb-3" width="32" height="32"/>
              <h4 className="steps-title mb-3">Your desires, your schedule, our pleasure! Get started quickly with these 3 easy steps...</h4>
              <ol className="pb-5 ps-3">
                <li className="steps-list">Download the {appName} app.</li>
                <li className="steps-list">Sign up or Login.</li>
                <li className="steps-list"> Choose your preferred service.</li>
              </ol>
              <DownloadButton className="pt-4 pb-0 mb-0"/>
            </div>
          </div>
          <div className="col-lg-7">
            <div>
              <Image src={kwikpikApp} className="img-fluid" alt="app" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Steps;
