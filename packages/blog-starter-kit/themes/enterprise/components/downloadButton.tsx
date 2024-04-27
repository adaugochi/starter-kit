import Image from 'next/image';
import * as ga from '../lib/ga';
import appleButton from '../public/images/apple_btn.svg';
import googleButton from '../public/images/google_btn.svg';

type Props = {
  className: string;
};

export const DownloadButton =  ({className}: Props) => {
  const track = ({appType}: { appType: any }) => {
    ga.event({
      action: 'download_app',
      params: {
        event_label: appType,
        event_category: 'download_app'
      }
    });
  };

  return (
    <div className={`d-flex gap-3 ${className}`}>
      {/*<a href="javascript:void(0)" className="me-2 pe-2" data-bs-toggle="tooltip" data-bs-html="true" title="<b>COMING SOON !!!</b>">*/}
      <a href="https://apps.apple.com/app/kwik-pik/id6447007329" target="_blank" rel="noreferrer">
        <Image src={appleButton} quality={100} alt="Download on app store" onClick={() => track({appType: 'app_store_download'})} />
      </a>
      <a href="https://play.google.com/store/apps/details?id=io.kwikpik.app" target="_blank" rel="noreferrer">
        <Image src={googleButton} quality={100} alt="Download on google playstore" onClick={() => track({appType: 'google_playstore_download'})} />
      </a>
    </div>
  );
}
