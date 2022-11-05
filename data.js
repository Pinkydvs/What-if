//There is a favMovies variable in the project repository's data.js file and its value is the array from the previous project's (My Top 4 Movies) favMovies variable's array.

let favMovies = {title: ["Game of Thrones", "The War of the Roses", "The Game", "Warcraft"],  year: [2011, 1989, 1997, 2016], rating: [9.2, 6.8, 7.7, 6.7], 
description: ["Nine noble families fight for control over the lands ofWesteros, while an ancient enemy returns after being dormant for millennia.", "A married couple tries everything to drive each other out of the house in a vicious divorce battle.", "After a wealthy San Francisco banker is given an opportunity to participate in a mysterious game, his life is turned upside down as he begins to question if it might really be a concealed conspiracy to destroy him.", "As an Orc horde invades the planet Azeroth using a magic portal, a few human heroes and dissenting Orcs must attempt to stop the true evil behind this war."],
directors: ["David Benioff", "Danny DeVito", "David Fincher", "Duncan Jones"], writers: ["David Benioff & George R.R. Martin", "Warren Adler & Michael Leeson", "John Brancato & Michael Ferris", "Charles Leavitt & Duncan Jones"],
stars: ["Peter Dinklage, Lena Headey, Emilia Clarke, Kit Harington", "	Michael Douglas, Kathleen Turner, Danny DeVito", "Michael Douglas, Sean Penn, Deborah Kara Unger", "Travis Fimmel, Paula Patton, Ben Foster"], 
genres: ["Action, Adventure, Drama", "Comedy, Romance", "Drama, Mystery, Thriller", "Action, Adventure,Fantasy"]};

//Use for of loop and one console.log() inside of it to make all the movie titles appear in the terminal.
for(let title of favMovies.title)
{ 
  console.log(title);
}

//Do the same task but now with a for loop.
for(let i=0; i<(favMovies.title).length; i++) 
  {console.log(favMovies.title[i]);}

//Calculate the average rate with the help of a loop.
let averageRate=0;
for(let j=0; j<(favMovies.rating).length; j++)
  {averageRate+=favMovies.rating[j];}
console.log(averageRate/(favMovies.rating).length);

//Newest movie
let newestMovie=favMovies.year[0];
for(let k=1; k<(favMovies.year).length; k++)
  {if (newestMovie<=favMovies.year[k])
      {newestMovie=favMovies.year[k];}
  }
console.log(newestMovie);

//console log all the stars of the movies.
let starsByMovies=" ";
for (let l=0; l<(favMovies.title).length; l++)
  {starsByMovies+=favMovies.title[l];
   for (let m=0; m<(favMovies.stars).length; m++)
       {if (l==m)
            {starsByMovies+=favMovies.stars[m];}
        }
  }
console.log(starsByMovies);
