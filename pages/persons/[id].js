import Conception from '../../components/layout';
import { getEachInfo, getData } from '../../lib/data-firebase';

export async function getStaticProps( {params} ){
  const itemData = await getData(params.id);
  return{
    props:{
      itemData
    }
  };
}

export async function getStaticPaths(){
 const paths = await getEachInfo();
  return{
    paths,
    fallback:false
    };
}

export default function Entry({itemData}){
  return(
      <Conception>
<article className="card col-6">
  <div className="card-body">
    <h4 className="card-title">name: {itemData.name}</h4>
    <h5 className="card-subtitle mb-2 text-muted">age: {itemData.age}</h5>
    <p className="card-text">profession: {itemData.profession}</p>
    <h6>Hobbies: </h6> 
    <ol>
      {itemData.hobbies && itemData.hobbies.map(
            ({id, hobby}) => (
             <li key={id}>
               {hobby}
             </li>
            )
          )
        }
      </ol>
  </div>
</article>
      </Conception>
  );
}