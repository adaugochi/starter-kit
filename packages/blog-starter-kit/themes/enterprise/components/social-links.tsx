import Link from 'next/link';
import { useAppContext } from './contexts/appContext';
import {FacebookSVG, GithubSVG, HashnodeSVG, InstagramSVG, LinkedinSVG, RssSVG, XSVG, YoutubeSVG} from './icons';

export const SocialLinks = ({ isSidebar }: { isSidebar?: boolean }) => {
	const { publication } = useAppContext();
	const hasSocialLinks = !Object.values(publication.links!).every((val) => val === '');

	return (
		<>
			<div
				className={`flex flex-row flex-wrap gap-1 text-slate-600 dark:text-neutral-300 md:flex-nowrap ${
					isSidebar ? 'justify-start' : ''
				}`}
			>
				{hasSocialLinks && (
					<>
						{publication.links?.twitter && (
							<a
								href={publication.links.twitter}
								target="_blank"
								rel="noopener noreferrer"
								aria-label="Find us on Twitter, external website, opens in new tab"
								className="flex flex-row items-center justify-center rounded-full border-gray border-slate-200 p-2"
							>
								<XSVG className="h-5 w-5 stroke-current text-white" />
							</a>
						)}
						{publication.links?.github && (
							<a
								href={publication.links.github}
								target="_blank"
								rel="noopener noreferrer"
								aria-label="Find us on Github, external website, opens in new tab"
								className="flex flex-row items-center justify-center rounded-full border-gray border-slate-200 p-2"
							>
								<GithubSVG className="h-5 w-5 stroke-current text-white" />
							</a>
						)}
						{publication.links?.linkedin && (
							<a
								href={publication.links.linkedin}
								target="_blank"
								rel="noopener noreferrer"
								aria-label="Find us on Linkedin, external website, opens in new tab"
								className="flex flex-row items-center justify-center rounded-full border-gray border-slate-200 p-2"
							>
								<LinkedinSVG className="h-5 w-5 stroke-current text-white" />
							</a>
						)}
					</>
				)}

				<Link
					prefetch={false}
					href={`https://youtube.com/@kwikpik`}
					target="_blank"
					rel="noopener noreferrer"
					aria-label="Open blog XML Feed, opens in new tab"
					className="flex flex-row items-center justify-center rounded-full border-gray border-slate-200 p-2"
				>
					<YoutubeSVG className="h-5 w-5 stroke-current text-white" />
				</Link>
        <Link
          prefetch={false}
          href={`https://facebook.com/kwikpik.io`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open blog XML Feed, opens in new tab"
          className="flex flex-row items-center justify-center rounded-full border-gray border-slate-200 p-2"
        >
          <FacebookSVG className="h-5 w-5 stroke-current text-white" />
        </Link>
        <Link
          prefetch={false}
          href={`https://instagram.com/kwikpik.io`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open blog XML Feed, opens in new tab"
          className="flex flex-row items-center justify-center rounded-full border-gray border-slate-200 p-2"
        >
          <InstagramSVG className="h-5 w-5 stroke-current text-white" />
        </Link>
			</div>
		</>
	);
};
