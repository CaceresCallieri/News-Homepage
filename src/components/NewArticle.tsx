import { FC } from 'react'

interface NewArticleProps {
    title: string
    subtitle: string
}

const NewArticle: FC<NewArticleProps> = ({ title, subtitle }) => {
    return (
        <article>
            <h4>{title}</h4>
            <p>{subtitle}</p>
        </article>
    )
}

export default NewArticle