// categories is the main data structure for the app; it looks like this:

//  [
//    { title: "",
//      clues: [
//        {question: "", answer: 4, showing: null},
       
//        ...
//      ],
//    },
//    { title: "Literature",
//      clues: [
//        {question: "Hamlet Author", answer: "Shakespeare", showing: null},
//        {question: "Bell Jar Author", answer: "Plath", showing: null},
//        ...
//      ],
//    },
//    ...
//  ]

let categories = [];


/** Get NUM_CATEGORIES random category from API.
 */
//  * Returns array of category ids
//  */



async function getCategoryIds() {

    const res = await axios.get('http://jservice.io//api/categories?count=100');
    const id = res.data.map(cat => ({
          id: cat.id,
        
       
    }))
    
    let sortedIDs = _.sampleSize(id, [n=6]);
    
    return sortedIDs

    

/** Return object with data about a category:
 *
 *  Returns { title: "Math", clues: clue-array }
 *
 * Where clue-array is:
 *   [
 *      {question: "Hamlet Author", answer: "Shakespeare", showing: null},
 *      {question: "Bell Jar Author", answer: "Plath", showing: null},
 *      ...
 *   ]
 */
 }
 const ids = await getCategoryIds();

//  console.log(ids);

//  console.log(categories);

async function getCategory(ids) {
    
        let res = await axios.get('http://jservice.io//api/clues')
            params: {
                category: ids
            }

           let catData = res.data.map(clues => ({
            title: clues.title,
            question: clues.question, 
            answer: clues.answer, 
            showing: null, 
           }))
        
           return catData;
        } 
     
      
 
const catData = await getCategory(ids);

    // https://www.htmlgoodies.com/beyond/css/working_w_tables_using_jquery.html

    // https://www.geeksforgeeks.org/how-to-add-table-row-in-a-table-using-jquery/
    
   
    const container = $('document.body').append('<div id "container">hello</div>');   
    // $(document.createElement('DIV')) 
/** Fill the HTML table#jeopardy with the categories & cells for questions.
 *
 * - The <thead> should be filled w/a <tr>, and a <td> for each category
 * - The <tbody> should be filled w/NUM_QUESTIONS_PER_CAT <tr>s,
 *   each with a question for each category in a <td>
 *   (initally, just show a "?" where the question/answer would go.)
 */

async function fillTable(container, catData) {

    var table = $("<table/>").addClass('CSSTableGenerator');
    $.each(catData, function(rowIndex, r) {
        var row = $("<tr/>");
        $.each(r, function(colIndex, c) { 
            row.append($("<t"+(rowIndex == 0 ?  "h" : "d")+"/>").text(c));
        });
        table.append(row);
    });
    return container.append(table);


}

/** Handle clicking on a clue: show the question or answer.
 *
 * Uses .showing property on clue to determine what to show:
 * - if currently null, show question & set .showing to "question"
 * - if currently "question", show answer & set .showing to "answer"
 * - if currently "answer", ignore click
 * */

function handleClick(evt) {
}

/** Wipe the current Jeopardy board, show the loading spinner,
 * and update the button used to fetch data.
 */

function showLoadingView() {

}

/** Remove the loading spinner and update the button used to fetch data. */

function hideLoadingView() {
}

/** Start game:
 *
 * - get random category Ids
 * - get data for each category
 * - create HTML table
 * */

async function setupAndStart() {
}

/** On click of start / restart button, set up game. */

// TODO

/** On page load, add event handler for clicking clues */