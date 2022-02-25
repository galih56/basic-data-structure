/*
https://www.freecodecamp.org/news/linked-lists-in-technical-interviews/
https://www.youtube.com/watch?v=Hj_rA0dhr2I
*/

/*
Linked List (A bunch of nodes linked together)
Terbuat dari banyak "node" yang sambung-menyambung. Anggap node sebagai "container" yang menampung beberapa data.
Setiap node disambung ke node selanjutnya secara satu arah.
A->B->C->D
A disebut head
D disebut tail

Linked list adalah ordered data structure. 
Selain linked list terdapat array yang juga disebut sebagai ordered data structure 
https://zhangruochi.com/Ordered-Data-Structures/2020/01/22/
https://towardsdatascience.com/linked-lists-vs-arrays-78746f983267
https://www.geeksforgeeks.org/linked-list-vs-array/#:~:text=Arrays%20store%20elements%20in%20contiguous,element%20at%20a%20specific%20index.
https://stackoverflow.com/questions/393556/when-to-use-a-linked-list-over-an-array-array-list

Array disimpan secara bersebelahan di memori komputer. 
Sehingga ketika ingin menambah item baru di suatu index tanpa overwrite data lama di index tersebut, data-data disebelahnya harus dipindah.

Contoh : 
[A,B,C,D] => Insert Q di index 3 => [A,B,Q,C,D]
item C dan D harus dipindah ke index selanjutnya agar index 3 kosong dan dapat diisi Q
Berikut adalah contoh sederhana dari array. Bayangkan jika kita memiliki ribuan data dan ingin menambah data baru dengan cara yang sama.
Maka kita harus memindah banyak data lama 1 per 1 dan itu cukup costly untuk sebuah operasi sederhana menambahkan data ke dalam array.
Akan lebih parah lagi jika kita ingin menambah data baru di index 0 dan terdapat ribuan data.
Hal ini dapat berpengaruh pada Time complexity dari suatu program yang menjalankan operasi tersebut.
Pada kasus ini, operasinya memiliki kompleksitas O(n).

Kompleksitas program dapat dipelajari pada materi Big-O notation.
https://medium.com/bee-solution-partners/penjelasan-sederhana-tentang-time-complexity-dan-big-o-notation-4337ba275cfe

*/