import axios  from'axios';

const data = {
  letters: 'tjeuingrtsda',
  lengths: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  limit: 100
};

const url = 'https://fly.wordfinderapi.com/api/search?letters='+data.letters;

axios.get(url)
  .then(response => {
    let arrayWords = [];
    for(let i = 0; i < response.data.word_pages.length; i++){
        console.log(response.data.word_pages[i].word_list[0].word);
    }
  })
  .catch(error => {
    console.error('Error:', error);
  });