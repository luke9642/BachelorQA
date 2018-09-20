# Inżynieria systemów
- [Sieci komputerowe - Pegaz](https://pegaz.uj.edu.pl/course/view.php?id=245611)
- [Bazy danych - Pegaz](https://pegaz.uj.edu.pl/course/view.php?id=245238)
- [Systemy operacyjne - Ważniak](http://wazniak.mimuw.edu.pl/index.php?title=Systemy_operacyjne)

#### 1. Relacyjny model danych, algebra relacji, normalizacja relacji.
[Bazy danych - Pegaz](https://pegaz.uj.edu.pl/pluginfile.php/1974322/mod_resource/content/4/w02_03.pdf)

[Bazy danych - Pegaz](https://pegaz.uj.edu.pl/pluginfile.php/2007970/mod_resource/content/1/w05_normalizacja2.pdf)

#### 2. Algorytm doprowadzenia relacji do postaci Boyce'a-Codd'a (PNBC).
[Bazy danych - Pegaz](https://pegaz.uj.edu.pl/pluginfile.php/1996001/mod_resource/content/2/w04_normalizacja1.pdf)

- Nadklucz: Żadne dwie różne krotki z aktualnej wartości R nie mają tej samej wartości dla K.

Strategia bezstratnej dekompozycji do BCNF: 
- Szukamy wszystkich nietrywialnych, pełnych zależności funkcyjnych które naruszają warunek BCNF, tzn. lewa strona zależności funkcyjnej nie jest nadkluczem. Następnie bierzemy jedną z takich zależności funkcyjnych A->B (w algorytmie nie jest powiedziane którą zależność funkcyjną wybrać, zatem algorytm jest niedeterministyczny) i dzielimy schemat relacji na dwa nierozłączne podzbiory: jeden zawierający wszystkie atrybuty występujące w zależności (*) naruszającej BCNF, drugi zawierający atrybuty z lewej strony rozważanej zależności (*) oraz atrybuty nie występujące ani z lewej ani z prawej strony tej zależności. 
- Strategię stosujemy do relacji powstałych w wyniku dekompozycji do chwili, gdy wszystkie relacje są w BCNF.

## 3. Indeksowanie w bazach danych: drzewa B+, tablice o organizacji indeksowej, indeksy haszowe, mapy binarne.
[Bazy danych - Pegaz](https://pegaz.uj.edu.pl/pluginfile.php/2036295/mod_resource/content/1/w_indeksy.pdf)

#### 4. Podstawowe cechy transakcji (ACID).
[Bazy danych - Pegaz](https://pegaz.uj.edu.pl/pluginfile.php/2019098/mod_resource/content/1/w_transakcje1.pdf)

- Atomicity (atomowość, niepodzielność) – transakcja jest niepodzielną jednostką przetwarzania; albo jest wykonywana w całości, albo wcale. 
- Consistency (spójność) – po zakończeniu transakcji baza musi być w stanie spójnym, tj. muszą być zachowane wszystkie więzy narzucone na dane. 
- Isolation (separacja, izolacja) Transakcja powinna wyglądać tak, jakby była wykonywana w izolacji od innych transakcji. 
- Durability (trwałość) – po zatwierdzeniu (tj. pomyślnym zakończeniu) transakcji jej efekty muszą być trwałe w systemie (nawet jeśli nastąpi uszkodzenie systemu natychmiast po zatwierdzeniu transakcji).

#### 5. Klauzule w zdaniu select w języku SQL.
    
#### 6. Harmonogramy szeregowalne i nieszeregowalne w bazach danych.
[Bazy danych - Pegaz](https://pegaz.uj.edu.pl/pluginfile.php/2019098/mod_resource/content/1/w_transakcje1.pdf)

## 7. Metody sterowania współbieżnością transakcji. Poziomy izolacji transakcji.
[Bazy danych - Pegaz](https://pegaz.uj.edu.pl/pluginfile.php/2024747/mod_resource/content/1/w_transakcje2.pdf)

[Bazy danych - Pegaz](https://pegaz.uj.edu.pl/pluginfile.php/2024748/mod_resource/content/1/w_transakcje3.pdf)

#### 8. Multiplekser jako przykład układu kombinacyjnego.
[OAK - Mordor](https://mordor.ksi.ii.uj.edu.pl/repo/ii/1rok/OAK/Wyklady/2014-2015/OAK-06.pdf)

[OAK - Mordor](https://mordor.ksi.ii.uj.edu.pl/repo/ii/1rok/OAK/Wyklady/2014-2015/OAK-07.pdf)

#### 9. Przerzutnik jako przykład układu sekwencyjnego.
[OAK - Mordor](https://mordor.ksi.ii.uj.edu.pl/repo/ii/1rok/OAK/Wyklady/2014-2015/OAK-08.pdf)

[OAK - Mordor](https://mordor.ksi.ii.uj.edu.pl/repo/ii/1rok/OAK/Wyklady/2014-2015/OAK-09.pdf)

[OAK - Mordor](https://mordor.ksi.ii.uj.edu.pl/repo/ii/1rok/OAK/Wyklady/2014-2015/OAK-10.pdf)

#### 10. Minimalizacja funkcji logicznych (metoda Karnaugha, metoda Quinea – McCluskeya).
[OAK - Mordor](https://mordor.ksi.ii.uj.edu.pl/repo/ii/1rok/OAK/Wyklady/2014-2015/OAK-04.pdf)

#### 11. Schemat blokowy komputera (maszyna von Neumanna).
[WDI (str 305) - Mordor](https://mordor.ksi.ii.uj.edu.pl/repo/ii/1rok/WDI/Wyklady/2017_2018_slajdy_Kawa.pdf)

#### 12. Budowa procesora (rejestry, ALU, zegar).
[OAK - Mordor](https://mordor.ksi.ii.uj.edu.pl/repo/ii/1rok/OAK/Wyklady/2014-2015/OAK-11.pdf)

### 13. Zarządzanie procesami: stany procesu, algorytmy szeregowania z wywłaszczaniem.
[Systemy operacyjne - Ważniak](http://wazniak.mimuw.edu.pl/images/6/6f/Sop_02_wyk_1.0.pdf)

Stany procesu:
- Nowy, Uśpiony, Aktualnie wykonywany, Oczekujący, Zatrzymany, Gotowy, Zakończony, Sierota, Zombi 


Algorytmy szeregowania:
- FIFO, Planowanie rotacyjne, Planowanie sporadyczne, FCFS

#### 14. Muteks, semafor, monitor jako narzędzia synchronizacji procesów.
[Systemy operacyjne - Ważniak](http://wazniak.mimuw.edu.pl/images/0/05/Sop_13_wyk_1.0.pdf)

### 15. Pamięć wirtualna i mechanizm stronicowania.
[Systemy operacyjne - Ważniak](http://wazniak.mimuw.edu.pl/images/e/e3/Sop_05_wyk_1.0.pdf)

### 16. Systemy plikowe organizacja fizyczna i logiczna (na przykładzie NTFS, ext3 lub FAT)
[Systemy operacyjne - Ważniak](http://wazniak.mimuw.edu.pl/images/5/5a/Sop_09_wyk_1.0.pdf)

[Systemy operacyjne - Ważniak](http://wazniak.mimuw.edu.pl/images/0/03/Sop_08_wyk_1.0.pdf)

[Systemy operacyjne - Ważniak](http://wazniak.mimuw.edu.pl/images/3/39/Sop_10_wyk_1.0.pdf)

- Przestrzeń dyskowa na potrzeby systemu plików zorganizowana jest w jednostki alokacji, zwane krótko blokami. Blok jest wielokrotnością sektora dysku. W zakresie przydziału miejsca dla pliku na dysku, czyli powiązania bloków z plikiem, omówione są trzy podejścia: przydział ciągły, listowy i indeksowy, przy czym ten ostatni wymaga dodatkowo określenia sposobu powiązania bloków indeksowych. Podejściem opartym na idei przydziału listowego jest tablica alokacji plików (FAT).
- NTFS — plik identyfikowany jest przez referencję, która jest indeksem rekordu w tablicy MFT, rekord zawiera atrybuty pliku (w szczególności dane) lub odnośniki do bloków z atrybutami. 

#### 17. Wywołania systemowe na przykładzie obsługi plików.
[Systemy operacyjne - Ważniak](http://wazniak.mimuw.edu.pl/images/0/03/Sop_08_wyk_1.0.pdf)

#### 18. Model ISO OSI. Przykłady protokołów w poszczególnych warstwach.
[Sieci komputerowe - Pegaz](https://pegaz.uj.edu.pl/pluginfile.php/2045498/mod_resource/content/1/sieci_w1_1617.pdf)

7. Warstwa aplikacji: HTTP, FTP, SMTP, TELNET, DNS
interfejs między aplikacjami, a usługami sieci
6. Warstwa prezentacji: SSL, TLS
obejmuje kompresję, kodowanie i translację	między niezgodnymi schematami kodowania oraz szyfrowanie
5. Warstwa sesji
zarządzanie przebiegiem komunikacji podczas połączenia między komputerami (sesji)
4. Warstwa transportowa: TCP, UDP
obejmuje kontrolę błędów i przepływu danych poza lokalnymi segmentami LAN
protokoły zapewniające komunikację procesów uruchomionych na odległych komputerach (korzysta z nich np. oprogramowanie klient/serwer)
3. Warstwa sieci: IP, ARP, ICMP, IGMP, IPsec, (IPv4, IPv6)
określenie trasy przesyłania danych między komputerami poza lokalnym segmentem sieci LAN
opisuje	 się komunikację komputerów znajdujących się w różnych segmentach sieci przedzielonych routerem
Zadaniem ARP jest odnalezienie adresu fizycznego MAC na podstawie adresu IP
2. Warstwa łącza danych:
grupowanie danych wejściowych (z warstwy fizycznej) w bloki zwane ramkami danych
1. Warstwa fizyczna: 
przekształcanie danych w strumień impulsów elektrycznych

#### 19. Adresowanie w protokołach IPv4 i IPv6.
[Sieci komputerowe - Pegaz](https://pegaz.uj.edu.pl/pluginfile.php/2051806/mod_resource/content/1/sieci_w2_1617_adresacja_ipv4.pdf)

[Sieci komputerowe - Pegaz](https://pegaz.uj.edu.pl/pluginfile.php/2057763/mod_resource/content/1/sieci_w3b_ipv4_1617.pdf)

[Sieci komputerowe - Pegaz](https://pegaz.uj.edu.pl/pluginfile.php/2107774/mod_resource/content/2/sieci_w9_ipv6_1617.pdf)

IPv4
- adres 32 bity
- typy: unicast (one-to-one), broadcast (on-to-everyone), multicast (one-to-many)
- 2 części adresu: ID sieci, ID hosta
- maska sieci wyznacza granicę

IPv6
- Osiem 16 bitowych sekcji w zapisie szesnastkowym, oddzielonych dwukropkami
- fe80:0000:0000:0000:0202:b3ff:fe1e:8329
- fe80: 0:0:0:202:b3ff:fe1e:8329
- ciąg zer może być połączony i przedstawiony jako 2 dwukropki, ale, użyte tylko raz
- fe80::202:b3ff:fe1e:8329
- adresy jednostkowe (unicast), adresy pobliskie (anycast) i adresy grupowe (multicast). Nie ma w IPv6 adresów rozgłoszeniowych, zastępują je adresy grupowe.

#### 20. Przebieg połączenia internetowego: od wpisania adresu strony w przeglądarce do wyświetlenia strony (DNS, TCP/IP itp.).
[Sieci komputerowe - Pegaz](https://pegaz.uj.edu.pl/pluginfile.php/2072478/mod_resource/content/1/sieci_w7_dns_1617.pdf)

### 21. Budowa sieci Ethernet. Protokół drzewa rozpinającego.
[Sieci komputerowe - Pegaz](https://pegaz.uj.edu.pl/pluginfile.php/2115974/mod_resource/content/1/sieci_w11_przelaczniki_1617.pdf)

### 22. Rola routerów i podstawowe protokoły routingu.
[Sieci komputerowe - Pegaz](https://pegaz.uj.edu.pl/pluginfile.php/2057762/mod_resource/content/1/sieci_w3a_1617.pdf)

[Sieci komputerowe - Pegaz](https://pegaz.uj.edu.pl/pluginfile.php/2057764/mod_resource/content/1/sieci_w4_1617.pdf)

[Sieci komputerowe - Pegaz](https://pegaz.uj.edu.pl/pluginfile.php/2064903/mod_resource/content/1/sieci_w6_eigrp_1617.pdf)

[Sieci komputerowe - Pegaz](https://pegaz.uj.edu.pl/pluginfile.php/2128179/mod_resource/content/1/sieci_w12_ospf_1617.pdf)

## 23. Podpis cyfrowy z szyfrowaniem asymetrycznym.
[Sieci komputerowe - Pegaz](https://pegaz.uj.edu.pl/pluginfile.php/2072482/mod_resource/content/1/sieci_w8_bezp1617.pdf)

#### 24. Algorytm RSA jako przykład szyfrowania asymetrycznego.
[BSK - GitHub](https://github.com/PawelBogdan/bsk_lecture_notes/blob/master/lecture_01/cryptography.ipynb)

RSA (Rivest-Shamir-Adleman)
```
Wybieramy dwie duże liczby pierwsze p i q
Obliczamy n = p*q
Wiemy, że (n)=(p-1)*(q-1)
Wybieramy e takie, że
1<e<(n)
NWD(e,(n))=1
Obliczamy d takie, że de-1mod (n)
RSA - szyfrowanie
C=E(P)=Pemod n
	RSA - deszyfrowanie
P=D(C)=Cdmod n
```

## 25. Certyfikaty w bezpieczeństwie sieciowym.
[BSK - GitHub](https://github.com/PawelBogdan/bsk_lecture_notes/blob/master/lecture_04/ssl.ipynb)

#### 26. Wirtualne sieci prywatne.
[BSK - GitHub](https://github.com/PawelBogdan/bsk_lecture_notes/blob/master/lecture_06/vpn.ipynb)

#### 27. Wymiana kluczy w systemach komputerowych na przykładzie protokołu Diffiego-Hellmana
[BSK - GitHub](https://github.com/PawelBogdan/bsk_lecture_notes/blob/master/lecture_01/cryptography.ipynb)

[BSK - GitHub](https://pl.wikipedia.org/wiki/Protok%C3%B3%C5%82_Diffiego-Hellmana)
