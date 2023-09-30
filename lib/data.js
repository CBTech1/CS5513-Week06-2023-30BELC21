import fs from 'fs';
import path from 'path';

const dataRoute = path.join( process.cwd(), 'data' );

export function getSortedList(){
  
const InfoRoute = path.join(dataRoute, 'persons.json');

const JsonChaine = fs.readFileSync(InfoRoute, 'utf8');

const JsonTing = JSON.parse(JsonChaine);

JsonTing.sort(
function(a,b){
  return a.name.localeCompare(b.name);
}
);

  return JsonTing.map(
     function(item){
      return {
        id: item.id.toString(),
        name: item.name
      };
    }
  );
}


export function getEachInfo(){
const InfoRoute = path.join(dataRoute, 'persons.json');

const JsonChaine = fs.readFileSync(InfoRoute, 'utf8');

const JsonTing = JSON.parse(JsonChaine);
  
return JsonTing.map(
     function(item){
      return {
        params: {
        id: item.id.toString()
        }
      };
    }
  );
}

export async function getData(idRequested){
  const InfoRoute = path.join(dataRoute, 'persons.json');

const JsonChaine = fs.readFileSync(InfoRoute, 'utf8');

const JsonTing = JSON.parse(JsonChaine);

  const objMatch = JsonTing.filter(
    function(obj){
      return obj.id.toString() === idRequested;
    }
  );

  let objReturned;
  if(objMatch.length > 0){
    objReturned = objMatch[0];   
    
     const InfoRoute2 = path.join(dataRoute, 'hobbies.json');
    
    const JsonChaine2 = fs.readFileSync(InfoRoute2 , 'utf8');
    
    const JsonTing2 = JSON.parse(JsonChaine2);

    const objMatch2 = JsonTing2.filter(
    function(obj){
      return obj.owner.toString() === idRequested;
    }
  );

    objReturned.hobbies = objMatch2; 
  }
  else{
    objReturned = {};
  }

  return objReturned;
}