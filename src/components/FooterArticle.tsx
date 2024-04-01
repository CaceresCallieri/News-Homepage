import { FC } from 'react'

interface FooterArticleProps {
	image: string // The path to the image
	index: number
	title: string
	subtitle: string
}

const FooterArticle: FC<FooterArticleProps> = ({ image, index, title, subtitle }) => {
	const articleNumber = (index + 1).toString().padStart(2, "0") // Adds a leading zero if the number is less than 10

	return (
		<article>
			<img src={image} alt="Generically represents title" />
			<div className='footer-article-info'>
				<h3>{articleNumber}</h3>
				<h4>{title}</h4>	
				<p>{subtitle}</p>
			</div>
		</article>
	)
}

export default FooterArticle