const only = (ele)=>
document.querySelector(ele);
const all = (ele)=>
document.querySelectorAll(ele);
const cre = (ele)=>
document.createElement(ele);
const chi = (father,child)=>
father.appendChild(child);

const carousel = only("#banner-section");
const moviescar = only("#next-sections");
const infos = only("#infos-section");
const header = only("header");
const bannerSpan = only("#banner-select");

const App = ()=>{
    
    const ScrollBar = ()=>{
        const banner_id = only("#banner-id");
        const {banners} = src;
        let random = parseInt(Math.random() * banners.length)
        banner_id.setAttribute("src",banners[random].banner_src);
    }
    
    const onClickArrow = ()=>{
       const arrow = all(".arrow");
       let position = moviescar.scrollLeft;
       arrow.forEach((element,id)=>{
          element.addEventListener("click",()=>{
                switch(id){
                    case 0:
                        moviescar.scroll({
                            left: position - 1000,
                        })
                    break;
                    case 1:
                        moviescar.scroll({
                            left: position + 1000,
                        })
                     break;
                }
          })
       })
    }

    const getImg = ()=>{
        const {banners,movies,infos} = src;
        movies.map(({movie_src})=>crtEle({
            type: "movie",
            src: movie_src,
        }));
        infos.map(({infos_src})=>crtEle({
            type: "info",
            src: infos_src,
        }))
        for(let i in banners){
            crtEle({
                type: "span",
            })
        }
    }
    //Cria elementos de acordo com o lenght
    //De determinado array
    const crtEle = ({type,src})=>{
        const img = cre("img");
        img.setAttribute("src",src)
        switch(type){
            case "banner":
                img.classList.add("banner");
                chi(carousel,img);
            break;
            case "movie":
                img.classList.add("movie");
                chi(moviescar,img);
            break;
            case "info":
                img.classList.add("movie");
                chi(infos,img);
                break;
            case "span":
                const span = cre("span");
                span.classList.add("banner-selected")
                chi(bannerSpan,span)
             break;
        }
    }

    setInterval(() => {
        ScrollBar();
    }, 5000);

    getImg();
    onClickArrow();

    return {
        ScrollBar,
    }
}
App();
