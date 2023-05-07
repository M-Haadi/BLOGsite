    const date_time = document.querySelector('.date-time');
    const currdate= new Date().toLocaleDateString();
    let currhours=new Date().getHours();
    let currmin = new Date().getMinutes();
    let currsec=new Date().getSeconds();

    const all_divs=document.querySelectorAll('.all'); //all divs to set the back ground color black/white when clicked on toggle darkmode.
    const toggle= document.querySelector('.toggle-btn');
    const ul_links= document.querySelector('.news-links');
   const cards=document.querySelectorAll('.card')
   const light_dark_btn= document.querySelector('.light-dark-mode-btn');
    setInterval(()=>{
        if(currhours>=12){
        currsec=new Date().getSeconds();
        date_time.innerHTML = `${currdate} ${currhours}:${currmin}:${currsec} PM`;
        }
        else if(currhours<12){
        currsec=new Date().getSeconds();
        date_time.innerHTML = `${currdate} ${currhours}:${currmin}:${currsec}AM`;
        }

    },1000)
        
        let flag = false;
        toggle.addEventListener('click',()=>{
            if(flag==false){
                ul_links.style.display="block";
                flag=true;
            }
            else if(flag){
            ul_links.style.display="none";
            flag=false;
            }
        })



        light_dark_btn.addEventListener('click',()=>{
            all_divs.forEach(div=>{
                if(div.style.backgroundColor=="black"){
                div.style.backgroundColor="aliceblue"
                light_dark_btn.innerHTML="Dark mode";
                }
                else{
                    div.style.backgroundColor="black"
                    light_dark_btn.innerHTML="Light mode";

                }
            })
          
        })

//         const options = { };
//         const observer = new IntersectionObserver((entries,observer)=>{

//    entries.forEach(entry=>{
// console.log(entry)

//    })


//         },options);

//         observer.observe(ul_links)

