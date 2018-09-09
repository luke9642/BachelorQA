# Teoretyczne podstawy informatyki
### 1. Języki strukturalne, obiektowe i funkcyjne. Dobór języka w zależności od problemu.
	
### 2. Teoria informacji Shannona: definicja informacji, entropii; rola redundancji.
**Informacja** - każda wiadomość, która dociera do odbiorcy, na podstawie której on opiera swoje działanie

```
P(A)=1⇒H(A)=0
P(A)<P(B)⇒H(A)>H(B)
A=B∩C
P(A)=P(B)*P(C)
```

`L=Σ`<sub>`i=1`</sub><sup>`k`</sup>`p`<sub>`i`</sub>`d`<sub>`i`</sub>

`d`<sub>`i`</sub> - długość

`L` - średnia ważona długość słowa kodowego

`H` - **Entropia**: najmniejsza średnia ilość informacji potrzebna do zakodowania faktu zajścia zdarzenia ze zbioru zdarzeń o danych prawdopodobieństwach.

`H`<sub>`r`</sub>`(S) = Σ`<sub>`s∈S`</sub>`p(s) * log`<sub>`r`</sub>`(1/p(s)) = -Σ`<sub>`s∈S`</sub>`p(s) * log`<sub>`r`</sub>`p(s)`

`R=L-H≥0` - redundancja

### 3. Odwrotna Notacja Polska: definicja, własności, zalety i wady, algorytmy.
**Odwrotna notacja polska** – sposób zapisu wyrażeń arytmetycznych, w którym znak wykonywanej operacji umieszczony jest po operandach (zapis postfiksowy), a nie pomiędzy nimi jak w konwencjonalnym zapisie algebraicznym (zapis infiksowy) lub przed operandami jak w zwykłej notacji polskiej (zapis prefiksowy). Zapis ten pozwala na całkowitą rezygnację z użycia nawiasów w wyrażeniach, jako że jednoznacznie określa kolejność wykonywanych działań.

[Algorytmy - Wikipedia](https://pl.wikipedia.org/wiki/Odwrotna_notacja_polska)

Zalety:
- ułatwione obliczenia na komputerze - wykorzystuje jedynie stos
- prosty algorytm konwersji między standardowym zapisem infiksowym a ONP
- brak konieczności stosowania nawiasów
- zajmuje mniej miejsca w pamięci komputera

Wady:
- mniej czytelny dla człowieka

## 4. Omówić modele obliczeń: maszyna Turinga, automat skończony, automat ze stosem.
Automatem nad alfabetem A nazywamy system A = (S, f), w którym
S - jest dowolnym zbiorem zwanym zbiorem stanów,
f : S × A → S - funkcją przejść
	Automat A nazywamy skończonym, jeśli zbiór stanów S jest skończony.

Automatem ze stosem nad alfabetem A nazywamy system przepisujący AS= (Σ, P) w którym:
Σ = A ∪ AS ∪ Q,	Q ∩ (A ∪ AS ) = ∅
AS - skończony, niepusty zbiór zwany alfabetem stosu,
Q - skończony, niepusty zbiór zwany zbiorem stanów,
P - skończony zbiór praw w postaci: 
zqi → uqj
zqia → uqj 
gdzie z ∈ AS , u ∈ A∗S , a ∈ A, qi , qj ∈ Q, oraz wyróżnione są:
stan początkowy q0 ∈ Q,
symbol początkowy stosu z0 ∈ AS,
zbiór stanów końcowych QF ⊂ Q.

Maszyna Turinga jest to system 	MT = (T , S, δ,s0,sA,sR)
ΣT - alfabet taśmy,
ΣI ⊂ ΣT - alfabet wejściowy,
⊔ ∈ ΣT \ ΣI symbol pusty
δ : (S \ {sA,sR}) × ΣT → S × ΣT × {L, R} - funkcja przejść
s0 ∈ S - stan początkowy,
sA - stan końcowy (akceptujący),
sR - stan odrzucający SASR

### 5. Sposoby reprezentacji liczb w komputerze.
[OAK - Mordor](https://mordor.ksi.ii.uj.edu.pl/repo/ii/1rok/OAK/Wyklady/2014-2015/OAK-02.pdf)

- Kod znak-moduł
- Kod znak-uzupełnienie do 1
- Kod znak-uzupełnienie do 2

## 6. Notacja Backusa-Naura (BNF).
[BNF - Wikipedia](https://pl.wikipedia.org/wiki/Notacja_BNF)

## 7. Złożoność obliczeniowa – definicja notacji: O duże, Omega duże, Theta.
Niech F oznacza zbiór funkcji f:NR+.
Wówczas określa się następujące pojęcia:	

Notacja „o duże - co najwyżej rząd g”, g∈F
O(g)  =def  {fF:m,c>0:dla n>m:f(n)c*g(n)}
Zamiast f∈Ο(g) przyjęto oznaczenie f(n) = Ο(g(n)) 

Notacja „omega duże - co najmniej rząd g”, g∈F
(g) =def  {fF:gO(f)}
Zamiast f∈Ω(g) przyjęto oznaczenie f(n)=Ω(g(n)) 

Notacja „theta duże - dokładnie rząd g”, g∈F
(g)  =def  O(g)(g)
Zamiast f∈Θ(g) przyjęto oznaczenie f(n)=Θ(g(n)) 

## 8. Złożoność obliczeniowa – pesymistyczna i średnia.
[01. MP - Pegaz](https://pegaz.uj.edu.pl/pluginfile.php/1765538/mod_resource/content/2/01_wstep.pdf)
[14. ASD - Pegaz](https://pegaz.uj.edu.pl/pluginfile.php/2037577/mod_resource/content/1/ASD14.pdf)

### 9. Metoda "dziel i zwyciężaj"; zalety i wady.
[06. MP - Pegaz](https://pegaz.uj.edu.pl/pluginfile.php/1781836/mod_resource/content/3/06_Rekurencja.pdf)

Przykłady:
- MergeSort
- Rekurencyjne wyszukiwanie binarne

## 10. Lista: ujęcie abstrakcyjne, możliwe implementacje i ich złożoności.
[04. MP - Pegaz](https://pegaz.uj.edu.pl/pluginfile.php/1771543/mod_resource/content/2/04_listystosykolejki_n.pdf)
[05. MP - Pegaz](https://pegaz.uj.edu.pl/pluginfile.php/1773720/mod_resource/content/1/05_listy_wi%C4%85zane.pdf)

## 11. Kolejka i kolejka priorytetowa: ujęcie abstrakcyjne, możliwe implementacje i ich złożoności.	
[04. MP - Pegaz](https://pegaz.uj.edu.pl/pluginfile.php/1771543/mod_resource/content/2/04_listystosykolejki_n.pdf)

## 12. Algorytm sortowania QuickSort: złożoność, metody wyboru pivota.
[07. MP - Pegaz](https://pegaz.uj.edu.pl/pluginfile.php/1784081/mod_resource/content/2/07_Sortowania_2.pdf)

### 13. Algorytm sortowania pozycyjnego: złożoność i ograniczenia.
[08. MP - Pegaz](https://pegaz.uj.edu.pl/pluginfile.php/1786044/mod_resource/content/4/08_Wyszukiwanie.pdf)

- nie wymagają stosowania porównań elementów
- mały zakres wartości
- liczby całkowite nieujemne
- pamięć robocza

Przykłady:
- CountSort
    - czasowa: `Θ(n+m)`
    - pamięciowa: `Θ(n+m)`
- RadixSort
    - czasowa: `Θ(b*(n+m))`
    - pamięciowa: `Θ(n+m)`
- BucketSort
    - czasowa: `O(n*log`<sub>`2`</sub>`m)`
    - pamięciowa: `O(n+m)` 

### 14. Zamiana rekurencji na iterację.
[06. MP - Pegaz](https://pegaz.uj.edu.pl/pluginfile.php/1781836/mod_resource/content/3/06_Rekurencja.pdf)

### 15. Reprezentacja drzewa binarnego za pomocą porządków (preorder, inorder, postorder).
[09. MP - Pegaz](https://pegaz.uj.edu.pl/pluginfile.php/1787242/mod_resource/content/2/09_drzewa_n.pdf)

### 16. Algorytmy wyszukiwania następnika i poprzednika w drzewach BST.
    
## 17. B-drzewa: operacje i ich złożoność.
[03. ASD - Pegaz](https://pegaz.uj.edu.pl/pluginfile.php/1987518/mod_resource/content/1/ASD03.pdf)

## 18. Operacja wstawiania w drzewach czerwono-czarnych.
[05. ASD - Pegaz](https://pegaz.uj.edu.pl/pluginfile.php/1997916/mod_resource/content/1/ASD05.pdf)

### 19. Algortymy przeszukiwanie wszerz i w głąb w grafach.
[12. MP - Pegaz](https://pegaz.uj.edu.pl/pluginfile.php/1791394/mod_resource/content/1/12_grafy_1.pdf)
[08. ASD - Pegaz](https://pegaz.uj.edu.pl/pluginfile.php/2019523/mod_resource/content/1/ASD08.pdf)
    
### 20. Algorytm Dijkstry wyszukiwania najkrótszej ścieżki.
[13. MP - Pegaz](https://pegaz.uj.edu.pl/pluginfile.php/1791395/mod_resource/content/1/13_grafy_2.pdf)

### 21. Programowanie dynamiczne: zależność podproblemów.
[09. ASD - Pegaz](https://pegaz.uj.edu.pl/pluginfile.php/2019525/mod_resource/content/1/ASD09.pdf)

### 22. Algorytm zachłanny: przykład optymalnego i nieoptymalnego wykorzystania.
[06. ASD - Pegaz](https://pegaz.uj.edu.pl/pluginfile.php/2010965/mod_resource/content/1/ASD06.pdf)

## 23. Algorytm Knutha-Morrisa-Pratta.
[11. ASD - Pegaz](https://pegaz.uj.edu.pl/pluginfile.php/2025377/mod_resource/content/1/ASD11.pdf)

### 24. Problemy P, NP, NP-zupełne i zależności między nimi. Hipoteza P vs. NP.
[14. ASD - Pegaz](https://pegaz.uj.edu.pl/pluginfile.php/2037577/mod_resource/content/1/ASD14.pdf)

## 25. Równoważność gramatyki bezkontekstowej i automatu ze stosem.
[05. TJA - Pegaz](https://pegaz.uj.edu.pl/pluginfile.php/2071766/mod_resource/content/1/TJA_05.pdf)
[06. TJA - Pegaz](https://pegaz.uj.edu.pl/pluginfile.php/2105975/mod_resource/content/3/TJA_06.pdf)

## 26. Lemat o pompowaniu dla języków regularnych.
[04. TJA - Pegaz](https://pegaz.uj.edu.pl/pluginfile.php/2060585/mod_resource/content/1/TJA_04.pdf)

Niech L ⊂ A* będzie językiem rozpoznawalnym.

Istnieje liczba naturalna N1taka,

że dowolne słowo w ∈ L o długości wNmożna rozłożyć na katenację: w = v1uv2,

gdzie v1, v2 ∈ A*, u ∈ A+, |v1u| < N oraz v1u*v2 ⊂ L. 

Jeśli rozpoznawalny język L ⊂ A* jest nieskończony,

to istnieją v1, v2 ∈ A*, u ∈ A+, takie że v1u*v2 ⊂ L.

## 27. Warunki równoważne definicji języka regularnego: automat, prawa kongruencja syntaktyczna, wyrażenia regularne.
[02. TJA - Pegaz](https://pegaz.uj.edu.pl/pluginfile.php/2053524/mod_resource/content/1/TJA_02.pdf)

## 28. Wyrażenia regularne: definicja i przykłady zastosowań.
[02. TJA - Pegaz](https://pegaz.uj.edu.pl/pluginfile.php/2053524/mod_resource/content/1/TJA_02.pdf)

Niech A będzie dowolnym zbiorem. Rodzina REG(A ∗ ) regularnych podzbiorów A∗ jest to najmniejsza rodzina R podzbiorów A∗ , taka że:
```
∅ ∈ R, ∀a ∈ A {a} ∈ R
jeśli X,Y ∈R, to X ∪ Y , X · Y ∈ R
jeśli X ∈R, to X* = [∞ n=0 X n ∈ R
```
Z definicji wynika: {1} = ∅ ∗ ∈ R, ∀X ∈ R X + = [∞ n=1 X n = X · X ∗ ∈ R

Niech A będzie dowolnym alfabetem, a zbiór {+, ⋆, ∅,(,)} alfabetem takim, że A ∩ {+, ⋆, ∅,(,)} = ∅. Słowo α ∈ (A ∪ {+, ⋆, ∅,(,)}) ∗ jest wyrażeniem regularnym nad alfabetem A wtedy i tylko wtedy gdy: 1 α = ∅ 2 α = a ∈ A 3 α jest w postaci (β + γ),(βγ), γ∗ , gdzie β, γ są wyrażeniami regularnymi nad alfabetem A. WR - rodzina wyrażeń regularnych nad A 

## 29. Problemy rozstrzygalne i nierozstrzygalne w teorii języków.
[06. TJA - Pegaz](https://pegaz.uj.edu.pl/pluginfile.php/2105975/mod_resource/content/3/TJA_06.pdf)

## 30. Zamkniętość klasy języków bezkontekstowych ze względu na operacje boolowskie, homomorfizmy itp.
[05. TJA - Pegaz](https://pegaz.uj.edu.pl/pluginfile.php/2071766/mod_resource/content/1/TJA_05.pdf)

Rodzina języków bezkontekstowych L2 jest zamknięta ze względu na następujące operacje: 
- sumę mnogościową 
- katenację i gwiazdkę 
- przecięcie z językiem regularnym 
- homomorfizm 
- podstawienie regularne 
- przeciwobraz homomorfizmu

Rodzina języków bezkontekstowych L2 nie jest zamknięta ze względu na: 
- iloczyn mnogościowy 
- uzupełnienie
