/*
1. Pozitif, Negatif ve Sıfır Kontrolü
Bir sayıyı alarak, sayının pozitif mi, negatif mi yoksa sıfır mı olduğunu kontrol 
eden bir fonksiyon yazın.
*/
function sayiKontrol(sayi) {
  if (sayi > 0) {
      return "Pozitif";
  } else if (sayi < 0) {
      return "Negatif";
  } else {
      return "Sıfır";
  }
}

// Örnek kullanım
console.log(sayiKontrol(10));  // Çıktı: Pozitif
console.log(sayiKontrol(-5));  // Çıktı: Negatif
console.log(sayiKontrol(0));   // Çıktı: Sıfır

/*
2. Harfin Büyük Mü Küçük Mü Olduğunu Kontrol Etme
Bir harf alarak, o harfin büyük mü küçük mü olduğunu kontrol eden bir fonksiyon yazın.
*/
function harfKontrol(harf) {
  if (harf >= 'A' && harf <= 'Z') {
      return "Büyük harf";
  } else if (harf >= 'a' && harf <= 'z') {
      return "Küçük harf";
  } else {
      return "Geçerli bir harf değil";
  }
}

// Örnek kullanım
console.log(harfKontrol('A')); // Çıktı: Büyük harf
console.log(harfKontrol('z')); // Çıktı: Küçük harf
console.log(harfKontrol('1')); // Çıktı: Geçerli bir harf değil

/*
3. Kelime Uzunluğunu Hesaplama
Kullanıcıdan bir kelime alarak, o kelimenin uzunluğunu döndüren bir fonksiyon yazın.
*/
function kelimeUzunlugu(kelime) {
  return kelime.length;
}
// Örnek kullanım
console.log(kelimeUzunlugu("javascript")); // Çıktı: 10

/*
4. Dizi Elemanlarının Toplamı
Bir dizi alarak, içindeki tüm sayıları toplayan ve sonucu döndüren bir fonksiyon yazın.
*/
function diziToplami(dizi) {
  let toplam = 0;
  for (let i = 0; i < dizi.length; i++) {
    toplam += dizi[i];
  }
  return toplam;
}
// Örnek kullanım
console.log(diziToplami([1, 5, 9, 10, 25, 30])); // Çıktı: 80

/*
5. En Büyük Sayıyı Bulma
Bir dizi içindeki en büyük sayıyı bulan bir fonksiyon yazın.
*/
function enBuyukSayi(dizi) {
  let enBuyuk = dizi[0];
  for (i = 1; i < dizi.length; i++) {
    if (dizi[i] > enBuyuk) enBuyuk = dizi[i];
  }
  return enBuyuk;
}
// Örnek kullanım
console.log(enBuyukSayi([1, 9, 5, 6, 23, 30, 2])); // Çıktı: 30

/*
6. Asal Sayı Kontrolü
Bir sayının asal olup olmadığını kontrol eden bir fonksiyon yazın.
*/
function asalMi(sayi) {
  if (sayi <= 1) return false; // 1 ve negatif sayılar asal değildir
  for (let i = 2; i <= Math.sqrt(sayi); i++) {
    if (sayi % i === 0) {
      return false; // Kendisi hariç başka bir sayıya bölünüyorsa asal değil
    }
  }
  return true; // Eğer hiçbir bölen bulunamazsa asaldır
}

// Örnek kullanım
console.log(asalMi(7)); // Çıktı: true
console.log(asalMi(10)); // Çıktı: false
console.log(asalMi(1)); // Çıktı: false

/*
7. Dizideki Tek Sayıları Bulma
Bir dizi alarak, o dizideki tek sayıları bulan bir fonksiyon yazın.
*/
function tekSayilariBul(dizi) {
  let tekSayilar = [];
  for (let i = 0; i < dizi.length; i++) {
    if (dizi[i] % 2 !== 0) {
      tekSayilar.push(dizi[i]);
    }
  }
  return tekSayilar;
}

// Örnek kullanım
console.log(tekSayilariBul([1, 2, 3, 4, 5, 6, 7])); // Çıktı: [1, 3, 5, 7]
