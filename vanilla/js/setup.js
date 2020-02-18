function the_header(){
    let my_main, my_header, nav, nav_anchor;
    my_main = document.querySelector('main');
    my_header = document.createElement('header');
    header_nav = document.createElement('nav');
    my_header.appendChild(header_nav);
    my_main.appendChild(my_header)
    console.log(my_header)
    return my_header;
}

function header_content(){
    let header_nav, nav_anchor; 
    let route_list = ['/index.html', '/presentation.html', '/form.html', '/news.html', '/duplex.html'];
    let text_list = ['Accueil', "l'Équipe", "L'Inscription", "les News", "l'Instantané"]
    header_nav = document.querySelector('header>nav')
    for (let i = 0; i<route_list.length; i++){
        nav_anchor = document.createElement('a')
        nav_anchor.setAttribute('href', route_list[i])
        nav_anchor.textContent = text_list[i];
        header_nav.appendChild(nav_anchor);
    }
}

function the_footer(){
    let my_footer, section, social_div, contact_div
    contact_div = document.createElement('div')
    social_div = document.createElement('div')
    section = document.createElement('section')
    my_footer = document.createElement('footer')
    my_footer.appendChild(section)
    section.appendChild(social_div)
    section.appendChild(contact_div)
    
    return my_footer
}
function footer_div(){
    divs = document.querySelectorAll('footer>section>div');
    divs.forEach(div, function(){
        div.appendChild(document.createElement('h3'))
        div.appendChild(document.createElement('p'))
    })
}

function footer_content(){
    let  my_footer, h3, p, a, titles, infos, my_social_links
    
    p = document.createElement('p')
    h3 = document.createElement('h3')
    titles = ['Réseaux Sociaux', 'Contact']
    infos = ['Cédric Montanuy', 'Concepteur Développeur Informatique', 'GRETACDA2020@gmail.com', '06 01 02 03 04', 'Licenced to Code']
    my_social_links = ['https://fr.linkedin.com/in/cedric_montanuy', 'http://fr.viadeo.com/fr/profile/cedric_montanuy', 'https://www.facebook.com/cedric_montanuy']
    my_footer = the_footer()
    let social_div = my_footer.querySelector('section>div:first-child')
    social_div.className = 
    social_div.appendChild(h3)
    h3.textContent = "Réseaux Sociaux"
    social_div.appendChild(p)
    for (let i=0; i<my_social_links.length; i++){
        let a = document.createElement('a')
        a.setAttribute('href', my_social_links[i])
        a.setAttribute('target', '_blank')
        p.appendChild(a)
    }
    let contact_div = my_footer.querySelector('section>div:last-child')
    let contact_title = document.createElement('h3')
    let contact_p = document.createElement('p')
    contact_title.textContent = 'Contact'
    contact_p.innerHTML = `Cédric Montanuy
                        <br/>Concepteur développeur informatique
                        <br><a href="mailto:GRETACDA2020@gmail.com">GRETACDA2020@gmail.com</a>
                        <br>06 01 02 03 04
                        <br>Licence to code`
    contact_div.appendChild(contact_title)
    contact_div.appendChild(contact_p)

    contact_div.setAttribute('class', 'footerdiv')
    social_div.setAttribute('class', 'footerdiv')
    document.querySelector('body').appendChild(my_footer)
}   

// the_header()
// the_footer()
// header_content()
// footer_content()


function the_article(){
    let my_article, article_intro, article_title, article_presentation, article_section, news_list;
    let structure = [my_article, article_intro, article_section, article_title, article_presentation, news_list]
    let elementnames = ['article','section','section','h1', 'p', 'ul']
    my_article = document.createElement('article')
    article_intro = document.createElement('section')
    article_section = document.createElement('section')
    article_presentation = document.createElement('p')
    article_title = document.createElement('h1')
    news_list = document.createElement('ul')
    article_intro.appendChild(article_title);
    article_intro.appendChild(article_presentation);
    article_section.appendChild(news_list);
    my_article.appendChild(article_intro);
    my_article.appendChild(article_section);
    document.querySelector('main').appendChild(my_article)
    return my_article;
}



// function semantic(){
//     let my_main, my_header, my_footer, my_article, my_aside; 
//     my_main = document.querySelector('main');
    
//     my_header = the_header()
//     my_article = the_article();
//     my_aside = document.createElement('aside');
//     my_footer = document.createElement('footer');
    
//     my_main.appendChild(my_header);
//     my_main.appendChild(my_article);
//     my_main.appendChild(my_footer);
//     my_main.appendChild(my_aside);
// }



function index_intro(){
    let greetings = document.createElement('h1')
    let user = document.cookie.split(";")[0]

    console.log(user)
    greetings.textContent = `Bonjour Cédric`
    let article_title, article_presentation;
    article_title = document.querySelector('article>section>h1');
    article_presentation = document.querySelector('article>section>p');
    article_title.textContent = "La Promo GRETA CDA 2020"
    article_presentation.textContent = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
}

function index_article(){
    let my_article = document.querySelector('article')
    // let section = document.
}

function news_intro(){
    // header_content()
    let article_title, article_presentation;
    article_title = document.querySelector('article>section>h1');
    article_presentation = document.querySelector('article>section>p');
    my_date = new Date();
    document.write (my_date)
    article_title.textContent = `Au sommaire aujourd'hui ${my_date.getDate()} ${my_date.getMonth()} ${my_date.getFullYear()}`;
    article_presentation.textContent = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
}

// function duplex_intro(){
//     header_content()
//     let article_title, article_presentation;
//     article_title = document.querySelector('article>section>h1');
//     article_presentation = document.querySelector('article>section>p');
//     article_title.textContent = "Une connexion vers une API websocket"
//     article_presentation.textContent = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
// }

function news(){
    let news_list = document.querySelector('article>section>ul');
    let my_feed, piece_title, piece_link, piece_description;
    piece_button = document.createElement('button');
    piece_button.textContent = 'Effacer';
    piece_link = document.createElement('a')
    piece_description = document.createElement('p')
    my_feed = new XMLHttpRequest()
    my_feed.open('get', 'https://www.bfmtv.com/rss/politique/', true)
    my_feed.onreadystatechange = function(){
        if (my_feed.readyState == 4 && my_feed.status == 200){
            //console.log(my_feed.responseXML);
            console.log(my_feed.responseXML.documentElement.innerHTML)
            let aItems = my_feed.responseXML.documentElement.getElementsByTagName('item');
            console.log(aItems[0])
            let li, title, a;
            console.log(`longueur ${aItems.length}`);
            for (let i = 0; i < aItems.length; i++) {
                // Récupère les noeuds enfants des ITEMS
                title = aItems[i].getElementsByTagName('title')[0];
                // console.log(title.length);
                // console.log(title.textContent);
                link= aItems[i].getElementsByTagName('link')[0];
                // console.log(link.textContent);
                li = document.createElement('li');
                a = document.createElement('a');
                a.setAttribute('href', link.textContent)
                a.textContent = title.textContent
                li.appendChild(a);
                li.appendChild(piece_button)
                news_list.appendChild(li)
            }
        }
    }
    my_feed.send()
}

// function form(){
//     header_content()
// }
// function team(){

// }

// console.log(document.cookie)