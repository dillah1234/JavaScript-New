var nilai = 74
var kehadiran =72 
var totalpertemuan = 100
var presentasekehadiran = kehadiran/totalpertemuan*100


if (nilai >=85) {
 console.log("katagori a");
  if (presentasekehadiran >= 75) {
    console.log("lulus");
  } else{
    console.log("tidak lulus");
  }

} else if (nilai >70 && nilai <=85) {
    console.log("katagori b");
    if (presentasekehadiran >75) {
        console.log("lulus");
    }else {
        console.log("tidak lulus");
    }

}  else if (nilai >=50 && nilai <=70) {
    console.log("katagori c");
    if (presentasekehadiran >75) {
        console.log("lulus");
    }else {
        console.log("tidak lulus");
    }

} else if (nilai <50) {
    console.log("tidak lulus");
    if (presentasekehadiran >75) {
        console.log("lulus");
    }
}     