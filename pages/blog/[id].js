import {Container,Row,Col,Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Flag from 'react-world-flags'
import Link from 'next/link'
import Navic from '../../components/Nav/Navic';
import idStyle from '../../styles/Id/Id.module.css'

import Footer from '../../components/Footer/Footer'



export default function Post(props) {



    return (
        <div>
          <Navic />

          <div className={idStyle.main}>


                 {/* FirstDiv */}

            <div className={idStyle.firstDiv}>

               {/* Headline Div */}

              <div className={idStyle.headline}># {props.data.id}  {props.data.name} ({props.data.club.team}) <Flag code={ props.data.club.countryName } className={idStyle.flag}  />
              </div>
         
             {/* Year Div */}
             
              <div className={idStyle.year}>

                In 2021 : <span className="text-danger">{props.data.stats.goals}</span> goals  , <span className="text-danger">{props.data.stats.assists}</span> assists , Trophy won : <span className="text-danger">{props.data.stats.trophys}</span>

              </div>


              {/* Team Div */}

              <div className={idStyle.team}>
              
               Team : {props.data.club.team} , Country :  {props.data.club.country}
              
              </div>


              {/* Points Div */}


              <div className={idStyle.points}>

                 Points in voting : <span className="text-danger">{props.data.points}</span>

              </div>


              {/* Ranking Div */}


              <div className={idStyle.ranking}>
                Actual ranking :<span className="text-primary"> {props.data.id}</span> st 
              </div>


                {/* Main Text Div */}

                <div className={idStyle.firstDivText}>

                   {props.data.message}

                </div>


                <a href={props.data.website} className={idStyle.button} target="_blank" rel="noreferrer" > Website</a>

          
            </div>

         

              </div>
    
         

                  <Footer />
                 

           


            
        </div>
    )
}






// export async function getServerSideProps() {
//   const res = await fetch('http://localhost:3000/api/players/top10')
//   const posts = await res.json()



//   const paths = posts.map((post) => ({
//     params: {id: post.id.toString()},
//   }))


//   return { paths, fallback: false }


   
//   }


  export async  function  getServerSideProps({params}) {
    const res = await fetch(`https://nscoder-blog.vercel.app/api/players/p${params.id}`)
    const data = await res.json()
  
    if (!data) {
      return {
        notFound: true,
      }
    }
  
    return {
      props: {data}
    }
  }
  
  





