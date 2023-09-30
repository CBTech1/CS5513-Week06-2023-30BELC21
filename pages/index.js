import Link from 'next/link';
import Conception from '../components/layout';
import { getSortedList } from '../lib/data-firebase';
//import { newStuff } from '../libdeux/dataTwo';

export async function getStaticProps(){
  const AllMaterial = await getSortedList();
   // const AllMaterialTwo = newStuff();
      return{
    props:{AllMaterial}
  };
}


export default function Home({AllMaterial}){
  return(
    <Conception house>
   <strong> <p>salut mon amie, cest next.js ici. </p></strong>
        <h2> (Original file) Names in my list:</h2>
 <div className="list-group">
        {AllMaterial && AllMaterial.map(
            ({id, name}) => (
              <Link key={id} href={`/persons/${id}`} className="list-group-item list-group-item-action">
                {name}
              </Link>
            )
          )
        }
      </div>
    </Conception>
  );
}


//code from a different file other json file
/*
    <h1> Some professions from different JS file but</h1>
      <h1> using the same json file with new bootstrap classname</h1>
            <div className="navbar navbar-light bg-light">
        {AllMaterialTwo && AllMaterialTwo.map(
            ({id, name}) => (
             <Link key={id} href = {`/${id}`} className = "navbar-brand">
               {name}
             </Link>
            )
          )
        }
      </div>

  */