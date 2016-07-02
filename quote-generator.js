$(document).ready(function() {
  function getQuote() {
    
  var quotes = ['Be yourself; everyone else is already taken',
                'So many books, so little time',
                'A room without books is like a body without a soul',
                'You only live once, but if you do it right, once is enough',
                'No one can make you feel inferior without your consent',
                'If you tell the truth, you don\'t have to remember anything',
                'A friend is someone who knows all about you and still loves you',
                'Always forgive your enemies; nothing annoys them so much',
                'Without music, life would be a mistake',
                'Success is not final, failure is not fatal: it is the courage to continue that counts'];
  
    var authors = ['― Oscar Wilde',
                   '― Frank Zappa',
                   '― Cicero',
                   '― Mae West',
                   '― Eleanor Roosevelt',
                   '― Mark Twain',
                   '― Elbert Hubbard',
                   '― Oscar Wilde',
                   '― Friedrich Nietzsche',
                   '― Winston S. Churchill'];

  
    var randQuoteNum =
      math.round(math.random()*quotes.length);

    var randQuotes = quotes[randQuoteNum];

    var randAuthors = authors[randQuoteNum];

    $(".quote").text(randQuotes);
    $(".author").text(randAuthors);  
}
    
  $("button").on("click", function() {
    getQuote(); 
  });
 });