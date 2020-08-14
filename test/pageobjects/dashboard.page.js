const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class DashboardPage extends Page {
    /**
     * define selectors using getter methods
     */
   //Son como variable mas no funciones
     get noArticlesLabel () {return $('div=No articles are here... yet.')};
     get yourFeedTap() {return $('.nav-link=Your Feed')};
     get globalFeedTap(){return $('.nav-link=Global Feed')};
    //Usando selector q sirve para los childs de un grupo Tag por ejm para listas dos doallres
    // get articlesRows() {return $$('//article-list/article-preview')};
    //Concatenacion usando dos tipos de selectiores distontos
    get articlesRows() {return $('<article-list />').$$('<article-preview />')};
    get articlesRowsReadMore() {return $('<article-list />').$$('<article-preview />')[1].$('span=Read more...')};
 
//Hacer publicos pa verlos en otras claser 
    getNoArticlesLabel(){
        return this.noArticlesLabel;
    }

    getYourFeedTap (){
        return this.yourFeedTap;
    }

    getGlobalFeedTap(){
        return this.globalFeedTap;
    }

    getArticlesList(){
        return this.articlesRows;
    }
    getReadMoreAnchor(){
        return this.articlesRowsReadMore;
    }


}

module.exports = new DashboardPage();
