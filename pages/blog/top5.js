import {Container,Row,Col,Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navic from '../../components/Nav/Navic';
import Flag from 'react-world-flags'
import Link from 'next/link'

import top5Styles from '../../styles/Top5/Top5.module.css'


import Footer from '../../components/Footer/Footer';




 function Top5(props) {


    return (
        <div>
            <Navic />
            
            <div className={top5Styles.main}>



                {props.data.map((el)=>

              <div className={top5Styles.firstDiv} key={el.id}>

               {/* Headline Div */}

              <div className={top5Styles.headline}># {el.id}  {el.name} ({el.club.team}) <Flag code={ el.club.countryName } className={top5Styles.flag}  />
              </div>
         
             {/* Year Div */}
             
              <div className={top5Styles.year}>

                In 2021 : <span className="text-danger">{el.stats.goals}</span> goals  , <span className="text-danger">{ el.stats.assists}</span> assists , Trophy won : <span className="text-danger">{el.stats.trophys}</span>

              </div>


              {/* Team Div */}

              <div className={top5Styles.team}>
              
               Team : {el.club.team} , Country :  {el.club.country}
              
              </div>


              {/* Points Div */}


              <div className={top5Styles.points}>

                 Points in voting : <span className="text-danger">{el.points}</span>

              </div>


              {/* Ranking Div */}


              <div className={top5Styles.ranking}>
                Actual ranking :<span className="text-primary"> {el.id}</span> st 
              </div>


                {/* Main Text Div */}

                <div className={top5Styles.firstDivText}>

                   {el.message}

                </div>


                <a href={el.website} className={top5Styles.button} target="_blank" rel="noreferrer"> Website</a>

          
            </div>

                 )}

                 

            </div>

               




    

          <Footer />
      




          
           
          


            
        </div>
    )
}


export async function getServerSideProps(context) {
    const res = await  fetch(`https://nscoder-blog.vercel.app/api/players/top5`)
    const data = await res.json()
  
  
    if (!data) {
      return {
        notFound: true,
      }
    }
  
    return {
      props: { data }, // will be passed to the page component as props
    }
  }
  export default Top5;