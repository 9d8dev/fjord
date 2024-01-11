import * as Craft from '@/components/craft/layout';
import { Badge } from '@/components/ui/badge';

export default function SecondaryHero({
	title,
	subtitle,
	children,
	className
}: {
	title: string;
	subtitle?: string;
	children?: React.ReactNode;
	className?: string;
}) {
	return (
		<Craft.Section className="border-b">
			<Craft.Container>
				<div className="not-prose">
					<Badge variant="outline">{subtitle}</Badge>
					<h2 className="text-4xl mt-4 mb-6">{title}</h2>
					<p>{children}</p>
				</div>
			</Craft.Container>
		</Craft.Section>
	);
}
