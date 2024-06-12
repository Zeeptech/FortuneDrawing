import fortunes from "./fortunes.js";


class Draw {
    static fortunesIndex = fortunes.length;
    static currentFortune;
    static prvFortune;
    static fortuneArrayIndex = 0;

    static init(){
        document.getElementById("drawFortuneButton").addEventListener("click", this.drawFortune.bind(this));
        document.getElementById("copy").addEventListener("click",this.changeBttn.bind(this));
    }

    static updatePage(){
        document.getElementById("fortuneText").innerHTML = this.currentFortune;
        document.getElementById("fortuneBox").style.display = "block"
        document.getElementById("copy").style.display = "block";
        document.getElementById("copied").style.display = "none";
        document.getElementById("copiedTxt").style.display ="none";

    }

    static drawFortune() {
        let randomIndex = Math.floor(Math.random() * this.fortunesIndex);
        let randomFortune = fortunes[randomIndex];
    
        if (randomFortune !== this.prvFortune) {
            this.currentFortune = randomFortune;
            this.updatePage()

        } else {
            if(fortunes.length > 1){
                this.drawFortune();
            }
        }
       
        this.prvFortune = this.currentFortune;
    }

    static changeBttn() {
        document.getElementById("copy").style.display = "none";
        document.getElementById("copied").style.display = "block";
        document.getElementById("copiedTxt").style.display ="block";
        navigator.clipboard.writeText(this.currentFortune);
    }

}
 -
Draw.init();
