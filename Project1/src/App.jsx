import './App.css';
import Cards from './components/Cards.jsx';

const App = () => {

  return (
    <div className="App">
      <h1>The Feminist Feature</h1>
      <h2>Connecting The World To Wondrous Women</h2>
      <div className="cards-grid"> {/* This allows me to redo the cards in a grid structure. */}
        <Cards
          title="Ada Lovelace"
          description="Ada Lovelace was an English mathematician and writer, known for her work on Charles Babbage's early mechanical general-purpose computer, the Analytical Engine. She is often considered the first computer programmer."
          image="/images/AdaLovelace.png"
          link="https://www.youtube.com/watch?v=uBbVbqRvqTM"
        />

        <Cards
          title="Soujourner Truth"
          description={
            <>
              Sojourner Truth was an African-American abolitionist, known for her powerful speeches, most famously <i>Ain't I A Woman?</i>. During the Civil War, Truth helped recruit black troops for the Union Army. After the war she continued to fight on behalf of women and African Americans until her death.
            </>
          }
          image="/images/SojournerTruth.jpg"
          link="https://www.youtube.com/watch?v=0sn8CUyvG2k"
        />

        <Cards
          title="Ada Lovelace"
          description="Ada Lovelace was an English mathematician and writer, known for her work on Charles Babbage's early mechanical general-purpose computer, the Analytical Engine. She is often considered the first computer programmer."
          image="/images/AdaLovelace.png"
          link="https://www.youtube.com/watch?v=uBbVbqRvqTM"
        />
        
        <Cards
          title="Soujourner Truth"
          description={
            <>
              Sojourner Truth was an African-American abolitionist, known for her powerful speeches, most famously <i>Ain't I A Woman?</i>. During the Civil War, Truth helped recruit black troops for the Union Army. After the war she continued to fight on behalf of women and African Americans until her death.
            </>
          }
          image="/images/SojournerTruth.jpg"
          link="https://www.youtube.com/watch?v=0sn8CUyvG2k"
        />

        <Cards
          title="Ada Lovelace"
          description="Ada Lovelace was an English mathematician and writer, known for her work on Charles Babbage's early mechanical general-purpose computer, the Analytical Engine. She is often considered the first computer programmer."
          image="/images/AdaLovelace.png"
          link="https://www.youtube.com/watch?v=uBbVbqRvqTM"
        />
        
        <Cards
          title="Soujourner Truth"
          description={
            <>
              Sojourner Truth was an African-American abolitionist, known for her powerful speeches, most famously <i>Ain't I A Woman?</i>. During the Civil War, Truth helped recruit black troops for the Union Army. After the war she continued to fight on behalf of women and African Americans until her death.
            </>
          }
          image="/images/SojournerTruth.jpg"
          link="https://www.youtube.com/watch?v=0sn8CUyvG2k"
        />
      </div>
    </div>
  )
}

export default App