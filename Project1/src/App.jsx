import './App.css';
import Cards from './components/Cards.jsx';

const App = () => {

  return (
    <div className="App">
      <h1 className='mainHeader'>The Feminist Feature</h1>
      <h1 className='subHeader'><br/> The World Of <br/> Wondrous Women</h1>
      <div className="cards-grid"> {/* This allows me to redo the cards in a grid structure. */}
        <Cards
          title="Ada Lovelace"
          description="An English mathematician and writer, known for her work on Charles Babbage's early mechanical general-purpose computer, the Analytical Engine. She is often considered the first computer programmer."
          image="/images/AdaLovelace.png"
          link="https://www.youtube.com/watch?v=uBbVbqRvqTM"
        />

         <Cards
          title="Chien-Shiung Wu"
          description={
            <>
              An Chinese-American experimental physicist who made significant contributions to the field of nuclear physics. Best known for her work on the Manhattan Project and for providing crucial evidence for the theory of parity violation.
            </>
          }
          image="/images/ChienShiungWu.jpg"
          link="https://www.youtube.com/watch?v=TgAty6YSepM"
        />
       
        <Cards
          title="Marie Curie"
          description={
            <>
              Marie Curie was a Polish-born physicist and chemist who conducted pioneering research on radioactivity. She was the first woman to win a Nobel Prize and is best known for her discovery of the elements radium and polonium.
            </>
          }
          image="/images/MarieCurie.jpg"
          link="https://www.youtube.com/watch?v=w6JFRi0Qm_s"
        />

        <Cards
          title="Grace Hopper"
          description={
            <>
              Grace Hopper was an American computer scientist and United States Navy rear admiral. She was a pioneer in developing computer technology and is best known for her work on the COBOL programming language.
            </>
          }
          image="/images/GraceHopper.png"
          link="https://www.youtube.com/watch?v=1LR6NPpFxw4"
        />

           <Cards
          title="Soujourner Truth"
          description={
            <>
              An African-American abolitionist, known for her powerful speeches, most famously "Ain't I A Woman?". During the Civil War Truth helped recruit black troops for the Union Army; she continued to fight on behalf of women and African Americans until her death.
            </>
          }
          image="/images/SojournerTruth.jpg"
          link="https://www.youtube.com/watch?v=0sn8CUyvG2k"
        />

        <Cards
          title="Lise Meitner"
          description={
            <>
              An Austrian-Swedish physicist who worked on nuclear physics and radioactivity. She was part of the team that discovered nuclear fission, and her contributions were crucial to the understanding of atomic structure.
            </>
          }
          image="/images/LiseMeitner.jpg"
          link="https://www.youtube.com/watch?v=IUny0vzqSJM"
        />

         <Cards
          title="Katherine Johnson"
          description={
            <>
              An African-American mathematician whose calculations of orbital mechanics were critical to the success of the first U.S. manned spaceflights. She worked for NASA and was known for her contributions to the early years of the U.S. space program.
            </>
          }
          image="/images/KatherineJohnson.png"
          link="https://www.youtube.com/watch?v=E4j_LpKzcZQ"
        />

         <Cards
          title="Hypatia of Alexandria"
          description={
            <>
              A Greek philosopher, mathematician, and astronomer in Egypt. One of the earliest female mathematicians, known for her work in mathematics and astronomy, and she taught philosophy and astronomy at the Neoplatonic school in Alexandria.
            </>
          }
          image="/images/HypatiaOfAlexandria.jpg"
          link="https://www.youtube.com/watch?v=gQ5_ohn3fP0"
        />

        <Cards
          title="Sophie Germain"
          description={
            <>
              A French mathematician, physicist, and philosopher. She made significant contributions to number theory and elasticity theory. She became the first woman to win a prize from the French Academy of Sciences.
            </>
          }
          image="/images/SophieGermain.jpg"
          link="https://www.youtube.com/watch?v=ILhNhhkrOwg"
        />
  
       
        <Cards
          title="Mary Wollstonecraft"
          description={
            <>
              An English writer, philosopher, and advocate of women's rights. She is best known for her work "A Vindication of the Rights of Woman," in which she argues for the education and empowerment of women.
            </>
          }
          image="/images/MaryWollstonecraft.jpg"
          link="https://www.youtube.com/watch?v=_6nyX1c5jjw"
        />

        <Cards
          title="Clara Barton"
          description={
            <>
              A pioneering nurse who founded the American Red Cross. She was known for her work during the Civil War, where she provided care for wounded soldiers on the battlefield. 
            </>
          }
          image="/images/ClaraBarton.jpg"
          link="https://www.youtube.com/watch?v=SLwvH-k9JeU"
        />
        
        <Cards
          title="Florence Nightingale"
          description={
            <>
              Florence Nightingale was an English social reformer and statistician, and the founder of modern nursing. She is best known for her work during the Crimean War, where she organized care for wounded soldiers and established sanitary conditions in hospitals.
            </>
          }
          image="/images/FlorenceNightingale.jpg"
          link="https://www.youtube.com/watch?v=B94Zf4Vye3Y"
        />

      </div>
    </div>
  )
}

export default App