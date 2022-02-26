function faktorial(angka)
{
    //Input angka yang akan dihitung
    var angka = parseInt(prompt('Masukkan Angka: '));
    //Hitung angka faktorial
    var faktor = 1;
    for (var i = 1; i<=angka; i++) {
        faktor *= i;
    }
    //Hasil dari Faktorial
    hasil = alert(`Hasil faktorial dari angka ${angka} yaitu ${faktor}`);
    tanya = confirm('Apakah anda ingin menghitung angka yang lain?');
    //Ulang menghitung angka
        if (tanya == true){
            faktorial(angka);
        } else {
            alert ('Terima kasih sudah berkunjung');
            return false;
        }
}
faktorial();
