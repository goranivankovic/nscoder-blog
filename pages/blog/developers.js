
import 'bootstrap/dist/css/bootstrap.min.css';



import Footer from '../../components/Footer/Footer'

import Nav from './../../components/Nav/Navic'

import devStyles from './../../styles/Dev/Developer.module.css'


export default function developers(props) {
    return (
        <div>


            <Nav  />


            
            <div className={devStyles.main}>


                 {/* First Div  */}
                
                <div className={devStyles.firstDiv}>

                    <div className={devStyles.firstDivHeadline}>For Developers</div>

                    Your free Api


                </div>


             
                
                <div className={devStyles.secondDiv}>

                    <div className={devStyles.secondDivHeadline}>Introduction</div>

                  You can use our API to access all API endpoints, which can get information about Football. We have language bindings in C, Java, Javascript, NodeJs, Php, PowerShell, Python, Ruby, Shell! You can view code examples in the light area to the right, and you can look the examples.


                </div>





                 {/* Get SINGEL PALYER  */}


           <div className={devStyles.exampleHeadline}>EXAMPLE ONE  </div>
    
           <div className={devStyles.fourDiv}>

                   <div className={devStyles.fourDivLeft}>

                    <span>Exemple GET singl palyer</span>
                    <span> https://nscoder-blog.vercel.app/api/players/p1</span>


                     </div>

                     <div className={devStyles.fourDivRight}>

                   
                         {JSON.stringify(props.data[0])}
                   
                     </div>

            </div>

                
       

          
              {/* Get TOP 5  players */}
                 
           <div className={devStyles.exampleHeadline}>EXAMPLE TWO  </div>

               
                
                <div className={devStyles.fourDiv}>

                     <div className={devStyles.fourDivLeft}>

                    <span>Exemple GET top 5 players</span>
                    <span>  https://nscoder-blog.vercel.app/api/players/top5</span>


                     </div>

                     <div className={devStyles.fourDivRight}>

                   
                         {JSON.stringify(props.data[1])}
                   
                     </div>

            </div>






   {/* Get TOP 10  players */}
                  
           <div className={devStyles.exampleHeadline}>EXAMPLE THREE </div>


             
                <div className={devStyles.fourDiv}>

                     <div className={devStyles.fourDivLeft}>

                    <span>Exemple GET top 10 players</span>
                    <span>  https://nscoder-blog.vercel.app/api/players/top10</span>


                     </div>

                     <div className={devStyles.fourDivRight}>

                   
                         {JSON.stringify(props.data[2])}
                   
                     </div>

            </div>

              
                     
        

          
          

            </div>




   <Footer />



        </div>
    )
}



export async function getServerSideProps(context) {
    const res = await  fetch(`https://nscoder-blog.vercel.app/api/players/top10`)
    const data = await res.json()


    // console.log(data[5]);
  
  
    if (!data) {
      return {
        notFound: true,
      }
    }
  
    return {
      props: { data }, // will be passed to the page component as props
    }
  }

