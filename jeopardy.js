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

// let categories = [];


/** Get NUM_CATEGORIES random category from API.
 */
//  * Returns array of category ids
//  */

const getCategoryIds = async () => {
    const response = await axios.get(`https://jservice.io/api/categories`, {
      params: { count: 100 },
    });
    const categoryIDs = response.data.map((category) => category.id);
    return _.sampleSize(categoryIDs, 6);
  };
  
  const getCategory = async (categoryID) => {
    const response = await axios.get(`https://jservice.io/api/category`, {
      params: { id: `${categoryID}` },
    });
    const category = response.data;
    const allClues = category.clues;
    const fiveRandomClues = _.sampleSize(allClues, 5);
    const cluesFormatted = fiveRandomClues.map((clue) => ({
      question: clue.question,
      answer: clue.answer,
      showing: null,
    }));
    return { title: category.title, clues: cluesFormatted };
  };

// async function getCategoryIds() {
//     /** Return object with data about a category:
//      *
//      *  Returns { title: "Math", clues: clue-array }
//      *
//      * Where clue-array is:
//      *   [
//      *      {question: "Hamlet Author", answer: "Shakespeare", showing: null},
//      *      {question: "Bell Jar Author", answer: "Plath", showing: null},
//      *      ...
//      *   ]
//      */
//   
// }
 

  
// 

//     
      
    const container = $( "<div id=container></div>" ).appendTo( "body" );


    const button = $( "<button type=button class=btn btn-primary>Restart Game</button>" ).appendTo( "body" );

   

    

    
 


    // /** Fill the HTML table#jeopardy with the categories & cells for questions.
//  *
//  * - The <thead> should be filled w/a <tr>, and a <td> for each category
//  * - The <tbody> should be filled w/NUM_QUESTIONS_PER_CAT <tr>s,
//  *   each with a question for each category in a <td>
//  *   (initally, just show a "?" where the question/answer would go.)
//  */


async function fillTable(catTitles, clues1) {
  


  // redo 
  // use backticks with ${variable name}
  // use each or array.forEach(element => {
    
  // });




let html = '';
html +='<table style="width: 300px;" border="6" cellpadding="5">';
html += '<thead>';
html +='<tr>';
html +='<td class=titles>&nbsp;</td>';
html +='<td class=titles>&nbsp;</td>';
html +='<td class=titles>&nbsp;</td>';
html +='<td class=titles>&nbsp;</td>';
html +='<td class=titles>&nbsp;</td>';
html +='<td class=titles>&nbsp;</td>';
html +='</tr>';
html +='</thead>';
html +='<tbody>';
html +='<tr>';
html +='<td class=1clue>&nbsp;</td>';
html +='<td class=2clue>&nbsp;</td>';
html +='<td class=3clue>&nbsp;</td>';
html +='<td class=4clue>&nbsp;</td>';
html +='<td class=5clue>&nbsp;</td>';
html +='<td class=6clue>&nbsp;</td>';
html +='</tr>';
html +='<tr>';
html +='<td class=1clue>&nbsp;</td>';
html +='<td class=2clue>&nbsp;</td>';
html +='<td class=3clue>&nbsp;</td>';
html +='<td class=4clue>&nbsp;</td>';
html +='<td class=5clue>&nbsp;</td>';
html +='<td class=6clue>&nbsp;</td>';
html +='</tr>';
html +='<tr>';
html +='<td class=1clue>&nbsp;</td>';
html +='<td class=2clue>&nbsp;</td>';
html +='<td class=3clue>&nbsp;</td>';
html +='<td class=4clue>&nbsp;</td>';
html +='<td class=5clue>&nbsp;</td>';
html +='<td class=6clue>&nbsp;</td>';
html +='</tr>';
html +='<tr>';
html +='<td class=1clue>&nbsp;</td>';
html +='<td class=2clue>&nbsp;</td>';
html +='<td class=3clue>&nbsp;</td>';
html +='<td class=4clue>&nbsp;</td>';
html +='<td class=5clue>&nbsp;</td>';
html +='<td class=6clue>&nbsp;</td>';
html +='</tr>';
html +='<tr>';
html +='<td class=1clue>?&nbsp;</td>';
html +='<td class=2clue>&nbsp;</td>';
html +='<td class=3clue>&nbsp;</td>';
html +='<td class=4clue>&nbsp;</td>';
html +='<td class=5clue>&nbsp;</td>';
html +='<td class=6clue>&nbsp;</td>';
html +='</tr>';
html +='</tbody>';
html +='</table>';

$('#container').append(html);

// $('#titles').text(catTitles[0]);
// $('#titles2').text(catTitles[1]);
// $('#titles3').text(catTitles[2]);
// $('#titles4').text(catTitles[3]);
// $('#titles5').text(catTitles[4]);
// $('#titles6').text(catTitles[5]);

// $('#1clue1').text(clues1[0][0].question);
// $('#1clue2').text(clues1[0][1].question);
// $('#1clue3').text(clues1[0][2].question);
// $('#1clue4').text(clues1[0][3].question);
// $('#1clue5').text(clues1[0][4].question);

$('tbody td').text('?');

$('thead td').each(function(index){
  $(this).text(catTitles[index]);
  

  $('.1clue').each(function(i){
    $(this).text(clues1[0][i].question);
  });
  $('.2clue').each(function(i){
    $(this).text(clues1[1][i].question);
  });
  $('.3clue').each(function(i){
    $(this).text(clues1[2][i].question);
  });
  $('.4clue').each(function(i){
    $(this).text(clues1[3][i].question);
  });
  $('.5clue').each(function(i){
    $(this).text(clues1[4][i].question);
  });
  $('.6clue').each(function(i){
    $(this).text(clues1[5][i].question);
  });
});

};


 
   




/** Handle clicking on a clue: show the question or answer.
 *
 * Uses .showing property on clue to determine what to show:
 * - if currently null, show question & set .showing to "question"
 * - if currently "question", show answer & set .showing to "answer"
 * - if currently "answer", ignore click
 * */

// function handleClick(evt) {

 
  
      // $(.tbody).on('click', 'td', handleClick()){
      //   $(this).each(function(i){

      //     if ($(this).text(clues1.showing) === 'null'){
      //      $(this).text(clues1.question)
      //     };
       
      //     else{
      //     ignore click
      //    }
      //     });




    
     
 



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

  const ids = await getCategoryIds();
  console.log(ids);

  const categoryID  = await getCategory(ids);
         
  console.log(categoryID);
  const cat2 = await getCategory(ids[1]);
  console.log(cat2);
  const cat3 = await getCategory(ids[2]);
  console.log(cat3);
  const cat4 = await getCategory(ids[3]);
  console.log(cat4);
  const cat5 = await getCategory(ids[4]);
  console.log(cat5);
  const cat6 = await getCategory(ids[5]);
  console.log(cat6);

  let categories = {categoryID, cat2, cat3, cat4, cat5, cat6};
  console.log(categories)
  let cattTitles = [categoryID.title, cat2.title, cat3.title, cat4.title, cat5.title, cat6.title];
  console.log(cattTitles);
  let clues =[categoryID.clues, cat2.clues, cat3.clues, cat4.clues, cat5.clues, cat6.clues];
  console.log(clues);


  const fills = fillTable(cattTitles, clues);
  console.log (fills);

  // handleClick()



  // $('#button').click(function(clues){
  //   $('#1clue1').text({clues.question});
};
  


const btn = document.querySelector('button');
btn.addEventListener('click', function(event){
  setupAndStart();
});


  


/** On click of start / restart button, set up game. */

// TODO

/** On page load, add event handler for clicking clues */