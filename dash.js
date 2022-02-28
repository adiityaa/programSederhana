//Menyisipkan dash (-) diantara bilangan genap
function dash(angka){
    //masukan angka
    var input = prompt(angka);
    //ubah integer ke string
    var string = input.toString();
    //string menjadi array
    result = [string[0]];
    for (i=1; i<string.length; i++){
        //jika index ke i - 1 % 2 = 0 dan index i%2 = 0
        if (string[i]%2 == 0  && string[i -1]%2 == 0){
            //sisipkan dash(-)
            result.push('-', string[i]);
        } else{
            //jika selain itu jangan sisipkan apapun
            result.push(string[i]);
        }
    }
    //tampilkan hasil dan hapus , dengan join
    document.write(result.join(''));
    document.write('</br>');
} dash();