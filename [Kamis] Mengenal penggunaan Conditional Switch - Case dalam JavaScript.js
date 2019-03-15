var tanggal = 21;
var bulan = 5;
var tahun = 1945;

switch(bulan) {
    case 1:   { if(tanggal > 31) tanggal = "Tanggal salah!!!";
      bulan = "Januari"; break;}
    case 2:   { if(tanggal > 28) tanggal = "Tanggal salah!!!";
      bulan = "Februari"; break; }
    case 3:   { if(tanggal > 31) tanggal = "Tanggal salah!!!";
      bulan = "Maret"; break; }
    case 4:   { if(tanggal > 30) tanggal = "Tanggal salah!!!";
      bulan = "April"; break; }
    case 5:   { if(tanggal > 31) tanggal = "Tanggal salah!!!";
    bulan = "Mei"; break; }
    case 6:   { if(tanggal > 30) tanggal = "Tanggal salah!!!";
    bulan = "Juni"; break; }
    case 7:   { if(tanggal > 31) tanggal = "Tanggal salah!!!";
    bulan = "Juli"; break; }
    case 8:   { if(tanggal > 31) tanggal = "Tanggal salah!!!";
    bulan = "Agustus"; break; }
    case 9:   { if(tanggal > 30) tanggal = "Tanggal salah!!!";
    bulan = "September"; break; }
    case 10:   { if(tanggal > 31) tanggal = "Tanggal salah!!!";
    bulan = "Oktober"; break; }
    case 11:   { if(tanggal > 30) tanggal = "Tanggal salah!!!";
    bulan = "November"; break; }
    case 12:   { if(tanggal > 31) tanggal = "Tanggal salah!!!";
    bulan = "Desember"; break; }
    default:  { if(tanggal > 31) tanggal = "Tanggal salah!!!";
    bulan = "Bulan salah!!!"; }
  }
  if(tahun > 2019) tahun = "Anda penjelajah waktu???"
  console.log(tanggal, bulan, tahun);