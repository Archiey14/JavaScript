//OBJECT DESTRUCTING

const band={
    bandName : "coldplay",
    famousSong : "hymn to the weekend",
    year : 1968,
    anotherFamousSong : "yellow"
};

// const bandName = band.bandName;
// const famousSong = band.famousSong;

// const{bandName,famousSong} = band;


let {bandName , famousSong , ...rest}=band;

console.log(bandName);
console.log(famousSong);
console.log(rest);

