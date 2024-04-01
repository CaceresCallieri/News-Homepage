import NewArticle from "./NewArticle"

const NewSection = () => {
  return (
    <aside>
        <h3>New</h3>
        <NewArticle title="Hydrogen VS Electric Cars" subtitle="Will hydrogen-fueled cars ever catch up to EVs?" />
        <div className="separator" />
        <NewArticle title="The Downsides of AI Artistry" subtitle="What are the possible adverse effects of on-demand AI image generation?" />
        <div className="separator" />
        <NewArticle title="Is VC Funding Drying Up?" subtitle="Private funding by VC firms is down 50% YOY. We take a look at what that means." />
    </aside>
  )
}

export default NewSection