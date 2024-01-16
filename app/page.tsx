import * as Craft from '@/components/craft/layout';
import Balancer from 'react-wrap-balancer';
import Hero from '@/components/sections/hero';
import CTA from '@/components/sections/cta';

export default function Home() {
	return (
		<Craft.Main>
			<Hero />

			<Craft.Section>
				<Craft.Container>
					<h2 className="!mt-0">
						<Balancer>
							Craft was created by{' '}
							<a className="not-prose" href="https://bridger.to">
								Bridger
							</a>{' '}
							and{' '}
							<a className="not-prose" href="https://cameronyoungblood.com">
								{' '}
								Cameron
							</a>{' '}
							at <a href="https://9d8.dev">9d8</a> and <a href="https://alpine.dev">Alpine Codex</a>
							.
						</Balancer>
					</h2>
					<p>
						Fjord is built around the idea of a headless WordPress backend with a NextJS frontend.
						It makes use of the WordPress REST API to fetch data and NextJS to render the frontend.
					</p>
					<h3>Key Features</h3>
					<ul>
						<li>
							Automatic Typographic styling use a modified version of{' '}
							<a href="https://tailwindcss.com/docs/typography-plugin">Tailwind Typography</a>
						</li>
						<li>
							Components and design system by <a href="https://craftui.com">Craft UI</a> and{' '}
							<a href="https://ui.shadcn.com">shadcn/ui</a>
						</li>
						<li>Cached articles and revalidation via Next JS</li>
					</ul>
					<blockquote>
						<p>
							Fjord has been a game changer for our team. We&apos;ve been able to build sites faster
							than ever before.
						</p>
					</blockquote>
				</Craft.Container>
			</Craft.Section>

			<CTA />
		</Craft.Main>
	);
}
