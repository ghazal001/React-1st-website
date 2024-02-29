import CoreConcept from "./CoreConcept.jsx";
import { CORE_CONCEPTS } from "../data.js";

export default function CoreConcepts(){
    return(
        <section id="core-concepts">
        <h2>Core Concepts</h2>
        <ul>
        {/*the concepts of configuring a component like title and description is PROP
            and the parameter prop will be an object that have these prop in each coreconcept*/}
        
        {/* we will always use this map to display all of our list */}
        {CORE_CONCEPTS.map((conceptsItem)=>
        <CoreConcept key={conceptsItem.title}{...conceptsItem}/>)}

        {/* <CoreConcept 
        title={CORE_CONCEPTS[0].title}
        description={CORE_CONCEPTS[0].description}
        image={CORE_CONCEPTS[0].image}
          /> */}
          {/* <CoreConcept{...CORE_CONCEPTS[1]}/> */}
        {/* <CoreConcept{...CORE_CONCEPTS[1]}/>
        <CoreConcept{...CORE_CONCEPTS[2]}/>
          <CoreConcept{...CORE_CONCEPTS[3]}/> */}

        </ul>
        </section>
    );
}