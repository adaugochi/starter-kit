import Link from 'next/link';
import Image from 'next/image';
import { Container } from './container';
import { useAppContext } from './contexts/appContext';
import { SocialLinks } from './social-links';
import {appName} from "../utils/const";
import hederaLogo from "../public/logos/hedera-logo.svg";
import logoWhite from "../public/logos/logo-white.svg";

export const Footer = () => {
	const { publication } = useAppContext();
	const PUBLICATION_LOGO = publication.preferences.logo;
	return (
		<footer className="border-t py-20 bg-dark ">
			<Container className="px-5">
				{PUBLICATION_LOGO ? (
					<div className="mb-20 flex w-full flex-row justify-center">
						<Link
							href={'/'}
							aria-label={`${publication.title} home page`}
							className="flex flex-row items-center gap-5"
						>
              <Image src={logoWhite} alt="brand logo" width="100" height="28" quality={100} />
						</Link>
					</div>
				) : (
					<p className="mb-20 text-center text-xl font-semibold text-slate-900 dark:text-slate-50 md:text-4xl">
						{publication.title}
					</p>
				)}
				<div className="grid w-full grid-cols-3 gap-5 md:grid-cols-6 lg:grid-cols-5">
					<div className="col-span-1 grid grid-cols-4 gap-5 md:col-span-4 lg:col-span-3">
						<div className="col-span-full md:col-span-2 lg:col-span-1">
							<p className="mb-2 footer-title">
								COMPANY
							</p>
							<ul className="flex flex-col gap-1 footer-list">
                <li>
                  <Link href="/about" target="_blank">About us</Link>
                </li>
                <li>
                  <Link href="/blog" target="_blank">Blog</Link>
                </li>
                <li>
                  <Link href="/careers" target="_blank">Careers</Link>
                </li>
                <li>
                  <Link href="/sdg" target="_blank">Sustainability and Climate</Link>
                </li>
                <li>
                  <Link href="/financial-inclusion" target="_blank">Financial Inclusion</Link>
                </li>
                <li>
                  <Link href="/market-access" target="_blank">Market Access</Link>
                </li>
                <li>
                  <Link href="/gender-equality" target="_blank">Gender Equality</Link>
                </li>
                <li>
                  <Link href="/hedera" target="_blank">
                    <span>{appName} and Hedera</span>
                  </Link>
                </li>
							</ul>
						</div>
						<div className="col-span-full md:col-span-2 lg:col-span-1">
							<p className="mb-2 footer-title">Products</p>
							<ul className="flex flex-col gap-1 footer-list">
                <li>
                  <Link href="https://merchant.kwikpik.io/" target="_blank">
                    Merchant app
                  </Link>
                </li>
                <li>
                  <Link href="https://business.kwikpik.io/signup" target="_blank">
                    Business app
                  </Link>
                </li>
                <li>
                  <Link href="https://business.kwikpik.io/" target="_blank">
                    {appName} for Business
                  </Link>
                </li>
                <li className="mt-5">
                  <Image src={hederaLogo} alt="hedera logo" width={70} height={32} />
                </li>
							</ul>
						</div>
						<div className="col-span-full md:col-span-2 lg:col-span-1">
							<p className="mb-2 footer-title">Help</p>
							<ul className="flex flex-col gap-1 footer-list">
                <li>
                  <Link href="/faq" target="_blank">FAQs</Link>
                </li>
                <li>
                  <Link href="/contact" target="_blank">Contact us</Link>
                </li>
							</ul>
						</div>
						<div className="col-span-1">
							<p className="mb-2 footer-title">Legal</p>
							<ul className="flex flex-col gap-1 footer-list">
                <li>
                  <Link href="/terms-and-conditions" target="_blank">Terms & conditions</Link>
                </li>
                <li>
                  <Link href="/privacy-policy" target="_blank">Privacy policy</Link>
                </li>
                <li>
                  <Link href="/cookie-policy" target="_blank">Cookie policy</Link>
                </li>
                <li>
                  <Link href="/insurance-policy" target="_blank">Insurance policy</Link>
                </li>
							</ul>
						</div>
					</div>
					<div className="col-span-2 flex flex-col items-end gap-5 text-right text-slate-600 dark:text-neutral-300 md:text-left">
						<SocialLinks />
						<p className="text__light-gray fs-12">&copy; 2024 {appName}. All Rights Reserved.</p>
					</div>
				</div>
			</Container>
		</footer>
	);
};
