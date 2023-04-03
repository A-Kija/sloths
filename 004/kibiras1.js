class Kibiras1 {

    static visiAkmenys = 0;

    static AKVK() {
        console.log('AKVK', this.visiAkmenys);
    }

    constructor() {
        this.akmenuKiekis = 0;
    }

    prideti1Akmeni() {
        this.akmenuKiekis++;
        this.constructor.visiAkmenys++;
    }

    pridetiDaugAkmenu(kiekis) {
        this.akmenuKiekis += kiekis;
        this.constructor.visiAkmenys += kiekis;
    }

    kiekPririnktaAkmenu() {
        console.log('%c ' + this.akmenuKiekis + ' ', 'background-color:gray;padding:10px;border-radius:20%;')
    }

    akmenuSkaiciusVisuoseKibiruose() {
        console.log('%c ' + this.constructor.visiAkmenys + ' ', 'background-color:yellow;padding:10px;border-radius:20%;')
    }
}


const k1 = new Kibiras1();
const k2 = new Kibiras1();
const k3 = new Kibiras1();

k1.prideti1Akmeni();

k3.pridetiDaugAkmenu(7);
k3.prideti1Akmeni();
k3.prideti1Akmeni();

k2.prideti1Akmeni();

k1.kiekPririnktaAkmenu();
k2.kiekPririnktaAkmenu();
k3.kiekPririnktaAkmenu();

k2.akmenuSkaiciusVisuoseKibiruose();

Kibiras1.AKVK();