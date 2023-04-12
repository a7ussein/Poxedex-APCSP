/*
* The purpose of this program is to imitate the behavior of a Poxedex
* Coded by:
*       Ahmed
*       Colin 
*       Nio
*/

var BackColor1;
var BackColor2ask;
var BackColor2 ;

// DataBase:
var  pokemonNames = [
  "Bulbasaur", "Ivysaur", "Venusaur", "Charmander", "Charmeleon", "Charizard", "Squirtle", "Wartortle", "Blastoise", "Caterpie",
  "Metapod","Butterfree","Weedle","Kakuna","Beedrill","Pidgey","Pidgeotto","Pidgeot","Rattata","Raticate",
  "Spearow","Fearow","Ekans","Arbok","Pikachu","Raichu","Sandshrew","Sandslash","Nidoran♀","Nidorina","Nidoqueen","Nidoran♂",
  "Nidorino","Nidoking","Clefairy","Clefable","Vulpix","Ninetales","Jigglypuff","Wigglytuff","Zubat","Golbat","Oddish",
  "Gloom","Vileplume","Paras","Parasect","Venonat","Venomoth","Diglett","Dugtrio","Meowth","Persian","Psyduck","Golduck",
  "Mankey","Primeape","Growlithe","Arcanine","Poliwag","Poliwhirl","Poliwrath","Abra","Kadabra","Alakazam","Machop",
  "Machoke","Machamp","Bellsprout","Weepinbell","Victreebel","Tentacool","Tentacruel","Geodude","Graveler","Golem",
  "Ponyta","Rapidash","Slowpoke","Slowbro","Magnemite","Magneton","Farfetch\"d","Doduo","Dodrio","Seel","Dewgong",
  "Grimer","Muk","Shellder","Cloyster","Gastly","Haunter","Gengar","Onix","Drowzee","Hypno","Krabby","Kingler",
  "Voltorb","Electrode","Exeggcute","Exeggutor","Cubone","Marowak","Hitmonlee","Hitmonchan","Lickitung","Koffing",
  "Weezing","Rhyhorn","Rhydon","Chansey","Tangela","Kangaskhan","Horsea","Seadra", "Goldeen", "Seaking", "Staryu", 
  "Starmie", "Mr. Mime", "Scyther", "Jynx", "Electabuzz", "Magmar", "Pinsir", "Tauros", "Magikarp", "Gyarados",
  "Lapras", "Ditto", "Eevee", "Vaporeon", "Jolteon", "Flareon","Porygon", "Omanyte", "Omastar","Kabuto", "Kabutops", "Aerodactyl", "Snorlax",
  "Articuno", "Zapdos", "Moltres", "Dratini", "Dragonair", "Dragonite", "Mewtwo", "Mew"];
  
var primary = ["grass", "grass", "grass", "fire", "fire", "fire", "water", "water", "water", "bug", "bug", "bug", "bug", "bug", "bug",
    "normal", "normal", "normal", "normal", "normal", "normal", "normal", "poison", "poison", "electric", "electric", "ground", "ground",
    "poison", "poison", "poison", "poison", "poison", "poison", "fairy", "fairy", "fairy", "fire", "fire", "normal", "normal", "poison",
    "poison", "grass", "grass", "grass", "bug", "bug", "bug", "bug", "ground", "ground", "normal", "normal", "water", "water","fighting",
    "fighting","fire","fire","water","water","water","psychic","psychic","psychic","fighting","fighting","fighting","grass","grass","grass",
    "water","water","rock","rock","rock","fire","fire","water","water", "electric","electric","normal","noraml","normal","water","water",
    "poison","poison","water","water","ghost","ghost","ghost","rock","psychic","psychic","water","water","electric","electric","grass","grass",
    "ground","ground","fighting","fighting","normal","poison","poison","ground","ground","normal","grass","normal","water","water","water","water",
    "water","water","psychic","bug","ice","electric","fire","bug","normal","water","water","water","normal","normal","water","electric","fire",
    "normal","rock","rock","rock","rock","rock","normal","ice","electric","fire","dragon","dragon","dragon","psychic","psychic"];
    
var species= ["the seed pokemon", "the seed pokemon", "the seed pokemon", "the lizard pokemon",
    "the flame pokemon", "the flame pokemon", "the tiny turtle pokemon", "the turtle pokemon",
    "the shellfish pokemon", "the worm pokemon", "the cocoon pokemon", "the butterfly pokemon",
    "the hairy bug pokemon", "the cocoon pokemon", "the poison bee pokemon", "the tiny bird pokemon",
    "the bird pokemon", "the bird pokemon", "the mouse pokemon", "the mouse pokemon", "the tiny bird pokemon",
    "the beak pokemon", "the snake pokemon", "the cobra pokemon", "the mouse pokemon", "the mouse pokemon",
    "the mouse pokemon", "the mouse pokemon", "the poison pin pokemon", "the poison pin pokemon",
    "the drill pokemon", "the poison pin pokemon", "the poison pin pokemon", "the drill pokemon", 
    "the fairy pokemon", "the fairy pokemon", "the fox pokemon", "the fox pokemon", "the balloon pokemon",
    "the balloon pokemon", "the bat pokemon", "the bat pokemon", "the weed pokemon", "the weed pokemon",
    "the flower pokemon", "the mushroom pokemon", "the mushroom pokemon", "the insect pokemon", 
    "the poison moth pokemon", "the mole pokemon", "the mole pokemon", "the scratch cat pokemon", 
    "the classy cat pokemon", "the duck pokemon", "the duck pokemon", "the pig monkey pokemon",
    "the pig monkey pokemon", "the puppy pokemon", "the legendary pokemon", "the tadpole pokemon",
    "the tadpole pokemon", "the tadpole pokemon", "the psi pokemon", "the psi pokemon", 
    "the psi pokemon", "the superpower pokemon", "the superpower pokemon", "the superpower pokemon",
    "the flower pokemon", "the flycatcher pokemon", "the flycatcher pokemon", "the jellyfish pokemon",
    "the jellyfish pokemon", "the rock pokemon", "the rock pokemon", "the megaton pokemon", 
    "the fire horse pokemon", "the fire horse pokemon", "the dopey pokemon", "the hermit crab pokemon",
    "the magnet pokemon", "the magnet pokemon", "the wild duck pokemon", "the twin bird pokemon",
    "the triple bird pokemon", "the sea lion pokemon", "the sea lion pokemon", "the sludge pokemon",
    "the sludge pokemon", "the bivalve pokemon", "the bivalve pokemon", "the gas pokemon", 
    "the gas pokemon", "the shadow pokemon", "the rock snake pokemon", "the hypnosis pokemon",
    "the hypnosis pokemon", "the river crab pokemon", "the pincer pokemon", "the ball pokemon", 
    "the ball pokemon", "the egg pokemon", "the coconut pokemon", "the lonely pokemon", 
    "the bone keeper pokemon", "the kicking pokemon", "the punching pokemon", "the licking pokemon",
    "the poison gas pokemon", "the poison gas pokemon", "the spikes pokemon", "the drill pokemon",
    "the egg pokemon", "the vine pokemon", "the parent pokemon", "the dragon pokemon", "the dragon pokemon",
    "the goldfish pokemon", "the goldfish pokemon", "the star shape pokemon", "the mysterious pokemon",
    "the barrier pokemon", "the mantis pokemon", "the human shape pokemon", "the electric pokemon", 
    "the spitfire pokemon", "the stag beetle pokemon", "the wild bull pokemon", "the fish pokemon",
    "the atrocious pokemon", "the transport pokemon", "the transform pokemon", "the evolution pokemon",
    "the bubble jet pokemon", "the lightning pokemon", "the flame pokemon", "the virtual pokemon",
    "the spiral pokemon", "the spiral pokemon", "the shellfish pokemon", "the shellfish pokemon", 
    "the fossil pokemon", "the sleeping pokemon", "the freeze pokemon", "the electric pokemon", 
    "the flame pokemon", "the dragon pokemon", "the dragon pokemon", "the dragon pokemon",
    "the genetic pokemon", "the new species pokemon"];
    
var secondary =["poison", "poison", "poison", "null", "null", "flying"];
    
var yesOrNo = ["y","y","y","n","n","y"];


//Functions
function Category(num, pokemonNames){
        var text = new Text(pokemonNames[num - 1]);
        var text2 = new Text(species[num - 1], "12pt arial");
        var text3 = new Text("Dex Number: "+num, "8pt arial");
        text3.setPosition(110, 300);
        add(text3);
        text2.setPosition(110, 210);
        add(text2);
        text.setPosition(110, 190);
        add(text);
}

function PokeColor(x){
    BackColor1 = primary[x-1];
    BackColor2ask = yesOrNo[x-1];
    BackColor2 = secondary[x-1];
    return BackColor1;
    return BackColor2ask;
    return BackColor2;
    }
    
function start(){
    var num = readInt("Choose a number from 1-150 ");
    
    // safety error message cuz why not? :>
    for(var i = 0; i < 1; i++){
    if(num > 151 || num <1){
        num = readInt("Invalid input, Choose a number from 1-151 ");
        i = i - 1;
    }else{
        num = num;
    }
}

    
    PokeColor(num)
    
    //time for the pokemon typing background color
    //listing colors to types
    if (BackColor1 == "water") {
        BackColor1 = "#6390F0";
    } else if (BackColor1 == "fire") {
        BackColor1 = "#EE8130";
    } else if (BackColor1 == "normal") {
        BackColor1 = "#A8A77A";
    } else if (BackColor1 == "grass") {
        BackColor1 = "#7AC74C";
    } else if (BackColor1 == "electric") {
        BackColor1 = "#F7D02C";
    } else if (BackColor1 == "ice") {
        BackColor1 = "#96D9D6";
    } else if (BackColor1 == "fighting") {
        BackColor1 = "#C22E28";
    } else if (BackColor1 == "poison") {
        BackColor1 = "#A33EA1";
    } else if (BackColor1 == "ground") {
        BackColor1 = "#cc4e01";
    } else if (BackColor1 == "flying") {
        BackColor1 = "#A98FF3";
    } else if (BackColor1 == "psychic") {
        BackColor1 = "#F95587";
    } else if (BackColor1 == "bug") {
        BackColor1 = "#A6B91A";
    } else if (BackColor1 == "rock") {
        BackColor1 = "#B6A136";
    } else if (BackColor1 == "ghost") {
        BackColor1 = "#735797";
    } else if (BackColor1 == "dark") {
        BackColor1 = "#705746";
    } else if (BackColor1 == "dragon") {
        BackColor1 = "#6F35FC";
    } else if (BackColor1 == "steel") {
        BackColor1 = "#B7B7CE";
    } else if (BackColor1 == "fairy") {
        BackColor1 = "#D685AD";
    }
   
  //------------------------------------------------------------------------------------------
    //var BackColor2ask = readLine("does the pokemon have a secondary type? y/n ");
    if (BackColor2ask == "y") {
        //var BackColor2 = readLine("what is the pokemons secondary type color? (please dont capitalize) ");
            if (BackColor2 == "water") {
                    BackColor2 = "#6390F0";
                } else if (BackColor2 == "fire") {
                    BackColor2 = "#EE8130";
                } else if (BackColor2 == "normal") {
                    BackColor2 = "#A8A77A";
                } else if (BackColor2 == "grass") {
                    BackColor2 = "#7AC74C";
                } else if (BackColor2 == "electric") {
                    BackColor2 = "#F7D02C";
                } else if (BackColor2 == "ice") {
                    BackColor2 = "#96D9D6";
                } else if (BackColor2 == "fighting") {
                    BackColor2 = "#C22E28";
                } else if (BackColor2 == "poison") {
                    BackColor2 = "#A33EA1";
                } else if (BackColor2 == "ground") {
                    BackColor2 = "#cc4e01";
                } else if (BackColor2 == "flying") {
                    BackColor2 = "#A98FF3";
                } else if (BackColor2 == "psychic") {
                    BackColor2 = "#F95587";
                } else if (BackColor2 == "bug") {
                    BackColor2 = "#A6B91A";
                } else if (BackColor2 == "rock") {
                    BackColor2 = "#B6A136";
                } else if (BackColor2 == "ghost") {
                    BackColor2 = "#735797";
                } else if (BackColor2 == "dark") {
                    BackColor2 = "#705746";
                } else if (BackColor2 == "dragon") {
                    BackColor2 = "#6F35FC";
                } else if (BackColor2 == "steel") {
                    BackColor2 = "#B7B7CE";
                } else if (BackColor2 == "fairy") {
                    BackColor2 = "#D685AD";
                }
        var backBlock2 = new Rectangle(getWidth()/2, getHeight());
        backBlock2.setColor(BackColor2);
        backBlock2.move(+getWidth()/2, 0);
        add(backBlock2);
        var bB1W = getWidth()/2;
    } else {
            var bB1W = getWidth();
        }
    var backBlock1 = new Rectangle(bB1W, getHeight());
    backBlock1.setColor(BackColor1);
    add(backBlock1);
    
    //back index
    var rbBar = new Rectangle(20, getHeight());
    rbBar.setPosition(getWidth()-20, 0);
    var rBar = new Rectangle(15, getHeight());
    rBar.setPosition(getWidth()-15, 0);
    rBar.setColor("red");
    add(rbBar);
    add(rBar);
    
    //top index
    var topBar = new Rectangle(getWidth(), 55);
    add(topBar);
    var slantBar = new Rectangle(getWidth()/2.5, 105);
    add(slantBar);
    var tri = new Polygon();
    tri.addPoint(160, 55);
    tri.addPoint(160, 105);
    tri.addPoint(260, 55);
    add(tri);
    
    //divide for black outline
    
    var topBar = new Rectangle(getWidth(), 50);
    topBar.setColor("red");
    add(topBar);
    var slantBar = new Rectangle(getWidth()/2.5, 100);
    slantBar.setColor("red");
    add(slantBar);
    var tri = new Polygon();
    tri.addPoint(160, 50);
    tri.addPoint(160, 100);
    tri.addPoint(260, 50);
    tri.setColor("red");
    add(tri);
    var blk = new Circle(35);
    blk.setPosition(75,50);
    blk.setColor("#dedede");
    add(blk);
    var blu = new Circle(32);
    blu.setPosition(75,50);
    blu.setColor("teal")
    add(blu);
    var sha = new Circle(25);
    sha.setPosition(70,45);
    sha.setColor("lightBlue")
    add(sha);
    
    //top 3 dots outlines
    var dotRB = new Circle(10);
    dotRB.setPosition(140, 20);
    add(dotRB);
    var dotYB = new Circle(10);
    dotYB.setPosition(170, 20);
    add(dotYB);
    var dotGB = new Circle(10);
    dotGB.setPosition(200, 20);
    add(dotGB);
    
    //top 3 dots
    var dotR = new Circle(8);
    dotR.setPosition(140, 20);
    dotR.setColor("red");
    add(dotR);
    var dotY = new Circle(8);
    dotY.setPosition(170, 20);
    dotY.setColor("yellow");
    add(dotY);
    var dotG = new Circle(8);
    dotG.setPosition(200, 20);
    dotG.setColor("lime");
    add(dotG);
    //the top of the screen(ends here)
    
    //screen case for the display
    var screenCase =  new Polygon();
    screenCase.addPoint(80, 140);
    screenCase.addPoint(320, 140);
    screenCase.addPoint(320, 340);
    screenCase.addPoint(100, 340);
    screenCase.addPoint(80, 320);
    screenCase.addPoint(80, 160);
    screenCase.setColor("#dedede");
    add(screenCase);
    
    //the screen to display on
    var screen = new Rectangle(200, 150);
    screen.setPosition(100, 160);
    screen.setColor("#50ad5d");
    add(screen);
    
    //detailing
    var dotRB2 = new Circle(9);
    dotRB2.setPosition(120, 325);
    add(dotRB2);
    
    var dotR2 = new Circle(7);
    dotR2.setPosition(120, 325);
    dotR2.setColor("red");
    add(dotR2);
    
    var bary = 316
    for (var i = 0; i < 4; i++){
        var bar = new Rectangle(40,2);
        bar.setPosition(250,bary);
        bary = bary + 5
        add(bar);
    }


  
Category(num, pokemonNames);

}



