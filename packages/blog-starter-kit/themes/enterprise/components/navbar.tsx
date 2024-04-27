import { Search } from './searchbar';
import { SocialLinks } from './social-links';

export const Navbar = () => {
	return (
		<div className="grid grid-cols-1 items-center gap-5 py-5 text-sm md:grid-cols-2">
      <div>
        <h1 className="blog-head">Stay Informed with the Kwikpik Blog.</h1>
        <p className="blog-subtext mt-2">
          The Kwikpik blog provides you with industry-leading insights into the on-demand food, groceries,
          farm produce ordering, and the Delivery-as-a-Service sector and how you can leverage them for your
          business.
        </p>
      </div>
			<Search />
		</div>
	);
};
