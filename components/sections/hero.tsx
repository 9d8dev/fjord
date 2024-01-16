import * as Craft from '@/components/craft/layout';
import Placeholder from '@/public/hero.webp';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import { badgeVariants } from '../ui/badge';

const Hero = () => {
	return (
		<Craft.Section className="border-b">
			<Craft.Container>
				<div className="not-prose flex flex-col gap-6">
					<Link
						href="https://github.com/9d8dev/fjord"
						className={`${badgeVariants({ variant: 'outline' })} w-fit`}
					>
						Star the Github Repo
						<ArrowRightIcon />
					</Link>
					<h1 className="text-primary-500 text-4xl md:text-6xl">
						Fjord is a headless WordPress template built with NextJS 14 and Tailwind CSS.
					</h1>
					<h2 className="text-xl md:text-3xl font-light">
						Fjord was created by{' '}
						<a className="hover:opacity-70 transition-all" href="https://bridger.to">
							Bridger Tower
						</a>{' '}
						and{' '}
						<a className="hover:opacity-70 transition-all" href="https://cameronyoungblood.com">
							Cameron Youngblood
						</a>{' '}
						to be used by{' '}
						<a className="hover:opacity-70 transition-all" href="https://alpinecodex.com">
							Alpine Codex
						</a>
						,{' '}
						<a className="hover:opacity-70 transition-all" href="https://ampry.com">
							Ampry
						</a>
						, and{' '}
						<a className="hover:opacity-70 transition-all" href="https://9d8.dev">
							9d8
						</a>
						.
					</h2>
					<div className="my-8 h-96 w-full overflow-hidden rounded-lg md:rounded-xl">
						<Image
							rel="preload"
							className="h-full w-full object-cover object-bottom"
							src={Placeholder}
							priority={true}
							width={1080}
							height={384}
							alt="hero image"
							placeholder="blur"
						/>
					</div>
				</div>
			</Craft.Container>
		</Craft.Section>
	);
};

export default Hero;
