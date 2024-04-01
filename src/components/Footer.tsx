import FooterArticle from "./FooterArticle"

import imageRetroPc from '../assets/image-retro-pcs.jpg'
import imageTopLaptops from '../assets/image-top-laptops.jpg'
import imageGamingGrowth from '../assets/image-gaming-growth.jpg'

interface Article {
	image: string
	title: string
	subtitle: string
}

const articles: Article [] = [
	{
		image: imageRetroPc,
		title: "Reviving Retro PCs",
		subtitle: "What happens when old PCs are given modern upgrades?"
	},
	{
		image: imageTopLaptops,
		title: "Top 10 Laptops of 2022",
		subtitle: "Our best picks for various needs and budgets."
	},
	{
		image: imageGamingGrowth,
		title: "The Growth of Gaming",
		subtitle: "How the pandemic has sparked fresh opportunities."
	}
]

const Footer = () => {
	return (
		<footer>
			{articles.map((article, index) => (
				<FooterArticle key={article.title} index={index} {...article} />
			))}
		</footer>
	)
}

export default Footer