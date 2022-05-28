//https://www.omdbapi.com/?t=thor&apikey=ef650941

function getMovie(){
   let title=document.getElementById('title').value;

   const url=`https://www.omdbapi.com/?t=${title}&apikey=ef650941`

fetch(url).then(function(res){
    return res.json()
}).then(function(res){
    append(res)
    console.log(res)
})
   

}


function append(data){
    let box=document.getElementById('box')
    box.innerHTML=null;
    
    
    
    
    let title=document.createElement('h1')
    title.innerText=`movie: ${data.Title}`;
    if(data.Title==undefined){
        let img=document.createElement('img');
        img.src='https://i.gifer.com/9kel.gif'

        let h1=document.createElement('h1')
        h1.innerText='Please Enter Valid Movie Name'
        box.append(img,h1)
        
        console.log('not found')
    }else{
        let lang=document.createElement('p')
    lang.innerText=`language: ${data.Language}`;

    let poster=document.createElement('img')
    poster.src=`${data.Poster}`

    let date=document.createElement('p')
    date.innerText=`Released: ${data.Released}`

    let rating=document.createElement('p')
    rating.innerText=`imdbRating: ${data.imdbRating}`
    // poster.style.width='100%';

    // console.log(title)
    // let inner_box=document.createElement('div')
    // inner_box.append(poster,title,lang)
    box.append(poster,title,date,lang,rating)

    }
    
    

    


    
}
