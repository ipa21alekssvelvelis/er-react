import "../App.css";
import image from "../assets/er.png"

function Ralfs(){
 return(
     <article>
      <h1>
      <br></br><br></br>
Entītija Entity:
UML atbilstošais elements: Klase
Skaidrojums: Entītija attēlo datu objektu, tāpat kā UML klase attēlo programmatūras objektu vai konceptu. Klase var saturēt
atribūtus un metodes, lai raksturotu šo objektu. "Darbinieks" klase būtu piemērs UML klasei.
<br></br><br></br>
Atribūts Attribute:
UML atbilstošais elements: Klases atribūti
Skaidrojums: Atribūti klases ietvaros ir informācijas elementi, kas raksturo konkrētās īpašības vai dati, kas pieder entītijai klasei. "Vārds", "Uzvārds" un "Amats" būtu piemēri UML klases atribūtiem "Darbinieks".
<br></br><br></br>
Attiecība Relationship:
UML atbilstošais elements: Asociācija
Skaidrojums: Attiecība starp entītijām, kas norāda, kā tās ir savstarpēji saistītas, atbilst UML asociācijai. "Strādā" vai "Pieder" attiecības var tikt attēlotas kā asociācijas starp klātienēm.
<br></br><br></br>
Primārā atslēga Primary Key:
UML atbilstošais elements: Nav tieša UML atbilstība
Skaidrojums: Primārā atslēga datu bāzēs tiek izmantota, lai viennozīmīgi identificētu katru entītijas ierakstu, bet UML tieši neietver šādu elementu. Tomēr, to var iekļaut klases atribūtos kā identifikatoru.
<br></br><br></br>
Ārējā atslēga Foreign Key:
UML atbilstošais elements: Nav tieša UML atbilstība
Skaidrojums: Ārējā atslēga ir atribūts datu bāzēs, kas saista divas tabulas entītijas. UML tieši neietver šādu elementu, bet ārējo atslēgu var norādīt kā asociācijas vai klases atribūtu attiecībā uz citām klasēm.
</h1> 
    <img src={image} className="er"></img>

     </article>
  );

}
export default Ralfs;