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
const getCategoryIds = async () => {
    const response = await axios.get(`https://jservice.io/api/"`, {
      params: { count: 100 },
    });
    const categoryIDs = response.data.map((category) => category.id);
    return _.sampleSize(categoryIDs, categoryCount);
  };
  
  const getCategory = async (categoryID) => {
    const response = await axios.get(`https://jservice.io/api/category`, {
      params: { id: `${categoryID}` },
    });
    const category = response.data;
    const allClues = category.clues;
    const fiveRandomClues = _.sampleSize(allClues, cluesCount);
    const cluesFormatted = fiveRandomClues.map((clue) => ({
      question: clue.question,
      answer: clue.answer,
      showing: null,
    }));
    return { title: category.title, clues: cluesFormatted };
  };

        

    // https://www.htmlgoodies.com/beyond/css/working_w_tables_using_jquery.html

    // https://www.geeksforgeeks.org/how-to-add-table-row-in-a-table-using-jquery/
    
   
      
    // const container = $( "<div id=><p>Hello</p></div>" ).appendTo(class="table table-bordered border-primary)
/** Fill the HTML table#jeopardy with the categories & cells for questions.
 *
 * - The <thead> should be filled w/a <tr>, and a <td> for each category
 * - The <tbody> should be filled w/NUM_QUESTIONS_PER_CAT <tr>s,
 *   each with a question for each category in a <td>
 *   (initally, just show a "?" where the question/answer would go.)
 */

async function fillTable(categories) {

    // var table = $("<table/>").addClass('CSSTableGenerator');
    // $.each(catData, function(rowIndex, r) {
    //     var row = $("<tr/>");
    //     $.each(r, function(colIndex, c) { 
    //         row.append($("<t"+(rowIndex == 0 ?  "h" : "d")+"/>").text(c));
    //     });
    //     table.append(row);
    // });
    // return container.append(table);


}
// const table = (fillTable(conatiner, catData));
// console.log(fillTable);


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