var DataFile = function(){
    this.navigationBarLinks = ()=>{
        return ["GAMES", "WEB GAMES", "MOBILE APPS", "VIDEO GAMES"];
    }
    this.categoryTitles = ()=>{
        return ["Games - Web and video games - LEGO.com US", "Web Games - LEGO.com US", "Mobile Apps - LEGO.com US", "Video Games - LEGO.com US"];
    }
    this.categoryUrls = ()=>{
        return ["https://www.lego.com/en-us/games", "https://www.lego.com/en-us/games/webgames", "https://www.lego.com/en-us/games/apps", "https://www.lego.com/en-us/games/videogames"];
    }
    this.webGamesTitles = ()=>{
        return ["LEGO® Friends Heartlake Rush","LEGO® Star Wars Battle Run","“The Last Jedi” 360 Experience",
                "Bits and Bricks", "Out of Step", "Monster Jump","NINJAGO 5-IN-1 Minigames", "Stacky Stack", "Batman Movie 5-IN-1 Minigames",
                "LEGO SPEED CHAMPIONS", "Prison Island Interactive Video", "Mosaic Game","Sparkle Art", "Guardians of the Galaxy","Sunshine Ranch Game"];
    }
    this.mobileAppsTitles = ()=>{
        return [ 'LEGO® DUPLO® Train Connected App',
                 'LEGO® NINJAGO®: Ride Ninja – ninja combat on fast bikes!','LEGO® Star Wars™ Microfighters App','LEGO® Friends Heartlake Rush','LEGO® DUPLO® Town',
                 'The LEGO® BOOST app','LEGO® DIMENSIONS™','LEGO® Life','LEGO® DC Super Heroes Batman™ Beyond Gotham','THE LEGO® MOVIE™ mobile','LEGO® Juniors',
                 'LEGO® Batman™: DC Super Heroes','LEGO® MINDSTORMS® EV3 Programmer','LEGO® DC Super Heroes Mighty Micros app','My City 2 app','LEGO® NEXO KNIGHTS™ Merlok 2.0 app',
                 'LEGO® Elves Puzzle Game','LEGO® Creator Islands app','LEGO® TV','LEGO® Building Instructions app','LEGO® 3 D Catalogue','LEGO® In-Store Action','LEGO® DUPLO® Train',
                 'LEGO® MINDSTORMS® Fix Factory','LEGO® MINDSTORMS® Robot Commander' ];
    }

    this.videoGamesTitles = ()=>{
        return ['LEGO® Harry Potter™ Collection','LEGO® DC Super-Villains', 'LEGO® The Incredibles',
                'LEGO® Marvel(TM) Super Heroes 2', 'THE LEGO® NINJAGO® MOVIE™', 'THE LEGO® NINJAGO® MOVIE™',
                'LEGO® City: Undercover', 'LEGO® Worlds', 'LEGO® Batman™ 3', 'LEGO® Marvel’s Avengers',
                'LEGO® NINJAGO®: Shadow of Ronin™','LEGO® Marvel Super Heroes'];
    }

    this.webGamesSubtitles = ()=>{
        return ["LEGO® Friends","LEGO® Star Wars™","LEGO® Star Wars™","LEGO® Life","LEGO® Life","LEGO® City","LEGO® NINJAGO®","LEGO® Life","LEGO® The Batman Movie",
                "LEGO® Speed Champions","LEGO® City","LEGO® Disney™","LEGO® Disney™","LEGO® Marvel™ Super Heroes","LEGO® Friends"];
    }
    this.mobileAppsSubtitles = ()=>{
        return [ 'LEGO® DUPLO®','LEGO® NINJAGO®','LEGO® Star Wars™','LEGO® Friends','LEGO® DUPLO®','LEGO® BOOST','LEGO® DIMENSIONS™','LEGO® Life','LEGO® DC Comics™ Super Heroes','The LEGO® Movie',
                 'LEGO® Juniors','LEGO® DC Comics™ Super Heroes','LEGO® MINDSTORMS®','LEGO® DC Comics™ Super Heroes','LEGO® City','LEGO® NEXO KNIGHTS','LEGO® Elves',
                 'LEGO® Creator','LEGO® Life','LEGO® Technic','LEGOcom Home','LEGO® Minifigures','LEGO® DUPLO®','LEGO® MINDSTORMS®','LEGO® MINDSTORMS®' ]
    }
    this.videoGamesSubtitles = ()=>{
        return [ 'LEGO® Harry Potter™','LEGO® DC Comics™ Super Heroes','LEGO® Juniors','LEGO® Marvel™ Super Heroes','THE LEGO® NINJAGO® MOVIE™',
                 'LEGO® NINJAGO®','LEGO® City','LEGO® Worlds','LEGO® DC Comics™ Super Heroes','LEGO® Marvel™ Super Heroes','LEGO® NINJAGO®','LEGO® Marvel™ Super Heroes' ];
    }

    this.URLS = ()=>{
        return ["https://www.lego.com/en-us/games/webgames","https://www.lego.com/en-us/games/apps","https://www.lego.com/en-us/games/videogames"];
    }
};
module.exports = new DataFile();