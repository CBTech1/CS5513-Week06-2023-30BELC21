import Link from 'next/link';
import Conception from '../components/layout';
import { getSortedList, } from '../lib/data-firebase';

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
       <h1> Some professions from the names below </h1>
            <div className="navbar navbar-light bg-light">
          <a class="navbar-brand" href="https://cs5513-week06-2023-30belc21.srjcethanwilde.repl.co/persons/MfdFsMx9dHUZUocBjc9l">Developer</a>
          <a class="navbar-brand" href="https://cs5513-week06-2023-30belc21.srjcethanwilde.repl.co/persons/qfyti8vOxx85XhyXufk6">Engineer
</a>
           <a class="navbar-brand" href="https://cs5513-week06-2023-30belc21.srjcethanwilde.repl.co/persons/lu7U1hmSvzmX6tQ6r1DZ">Golfer</a>
              <a class="navbar-brand" href="https://cs5513-week06-2023-30belc21.srjcethanwilde.repl.co/persons/j5iugXrmxIfUoy5pkzN8">Videographer</a>
      </div>
      <br></br>
        <h2> (Data from Firebase) Names in my list:</h2>
 <div className="list-group">
        {AllMaterial && AllMaterial.map(
            ({id, name}) => (
              <Link key={id} href={`/persons/${id}`} className="list-group-item list-group-item-action list-group-item-dark">
                {name}
              </Link>
            )
          )
        }
      </div>
    </Conception>
  );
}

