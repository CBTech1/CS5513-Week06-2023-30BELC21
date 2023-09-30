import app from "./firebase-app";
import { getFirestore, collection, getDocs, doc, getDoc } from "firebase/firestore";

const db = getFirestore(app);

// function returns names and ids for all json objects in array, sorted by name property
export async function getSortedList() {
  const snapshot = await getDocs( collection(db, "Persons") );
  const JsonTing = snapshot.docs.map(
    (d) => (
      {
        id: d.id,
        ...d.data() // captures email: and name: 
      }
    )
  );
  
  // sort json array by name property
  JsonTing.sort(
    function(a,b) {
      return a.name.localeCompare(b.name);
    }
  );

  // use map() on array to extract just id + name properties into new array of obj values
  return JsonTing.map(
    function(item) {
      return {
        id: item.id.toString(),
        name: item.name
      };
    }
  );
  
}

export async function getEachInfo(){
const snapshot = await getDocs( collection(db, "Persons") );
  const JsonTing = snapshot.docs.map(
    (d) => (
      {
        id: d.id
      }
    )
  );

  // use map() on array to extract just id + name properties into new array of obj values
  return JsonTing.map(
    function(item) {
      return {
        params: {
          id: item.id.toString()
        }
      };
    }
  );
}

export async function getData(idRequested){
  const docRef = doc(db, "Persons", idRequested);
  const d = await getDoc(docRef);

  let objReturned;
  if (!d.exists) {
    objReturned = {};
  } else {
    objReturned = d.data();
  }

  // return object value found
  return objReturned;
  }
