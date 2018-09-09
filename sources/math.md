# Matematyczne podstawy informatyki

### 1. Zasada indukcji matematycznej.
Niech `T(n)` oznacza formę zdaniową zmiennej `n∈ℕ`. Jeżeli:

- zdanie `T(1)` jest prawdziwe oraz
- `∀n∈ℕ` prawdziwa jest implikacja `T(n)⇒T(n+1)`,

to forma zdaniowa `T(n)` jest prawdziwa dla dowolnej liczby naturalnej `n`.

### 2. Porządki częściowe i liniowe. Elementy największe, najmniejsze, maksymalne i minimalne.

**Częściowy porządek** – relacja zwrotna, przechodnia i (słabo) antysymetryczna.

**Porządek liniowy** – częściowy porządek będący zarazem łańcuchem,
czyli taki, w którym każde dwa elementy rozpatrywanego zbioru są porównywalne (jest dodatkowo spójna).

Załóżmy, że `R` jest częściowym porządkiem na zbiorze `X`

- Gdy  `x≠y` i `xRy`, mówimy, że `x` jest mniejszy od `y` (poprzedza `y`) i `y` jest większy od `x`
(w sensie częściowego porządku `R`). Dodatkowo, jeśli nie istnieje element `z≠x,y` taki, że `xRz∧zRy`,
to mówimy, że `y` jest następnikiem `x`, zaś `x` poprzednikiem `y`.
  
- Mówimy, że elementy `x`,`y` są porównywalne w tym częściowym porządku, gdy `xRy` lub `yRx`

Niech `R` będzie relacją częściowego porządku na `X`. Niech `a∈X`.
1. `a` jest **największy** (względem `R`) `⇔ ∀b∈X : bRa`
1. `a` jest **najmniejszy** (względem `R`) `⇔ ∀b∈X : aRb`
1. `a` jest **maksymalny** (względem `R`) `⇔ ∀b∈X : aRb⇒a=b`
1. `a` jest **minimalny** (względem `R`) `⇔ ∀b∈X : bRa⇒a=b`

### 3. Relacja równoważności i zbiór ilorazowy.

**Relacja równoważności** – zwrotna, symetryczna i przechodnia relacja dwuargumentowa określona na pewnym zbiorze utożsamiająca ze sobą w pewien sposób jego elementy, co ustanawia podział tego zbioru na rozłączne podzbiory według tej relacji.

W powyższy sposób na zbiorze `X` wyznaczony jest podział na klasy abstrakcji. Wspomniany podział, czyli zbiór wszystkich warstw oznaczany `X/~` nazywa się przestrzenią ilorazową lub krótko ilorazem (zbioru) `X` przez (relację) `~`.

- `[x]`<sub>`ℝ`</sub>`={y∈X:xRy}` - **klasa abstrakcji**
- `X`<sub>`/ℝ`</sub>`={[x]`<sub>`ℝ`</sub>`:x∈X}` - **zbiór ilorazowy**

### 4. Metody dowodzenia twierdzeń: wprost, nie wprost, przez kontrapozycję.

**Dowód wprost** polegający na przyjęciu założeń i bezpośrednim wykazaniu tezy.

**Dowód nie wprost** polegający na przyjęciu, że twierdzenie jest fałszywe i wykazaniu, że dochodzi się do niedorzeczności.

**Prawo kontrapozycji**: `(p⇒q)⇔(¬q⇒¬p)`

opiera się na tym, że zakładamy, że `q` jest fałszywe i pokazujemy, że `p` też jest fałszywe

### 5. Metoda Newtona rozwiązywania układu równań nieliniowych (przypadek jednowymiarowy).
Metoda stycznych (Newtona) - `x`<sub>`n+1`</sub>`=x`<sub>`n`</sub>`-f(x`<sub>`n`</sub>`)/f'(x`<sub>`n`</sub>`)`

- Warunki stopu:
    - `|x`<sub>`n`</sub>`-x`<sub>`n+1`</sub>`|<δ`
    - `|f(x`<sub>`n`</sub>`)|<ε`
- zbieżna kwadratowo

### 6. Rozwiązywanie układu równań liniowych: metoda eliminacji Gaussa i metoda Gaussa-Seidla.
Metoda Gaussa-Seidla
- `Q=L+D`
- `Qx`<sup>`(k+1)`</sup>`=(L+D)x`<sup>`(k+1)`</sup>`=-Ux`<sup>`(k)`</sup>`+b`
- `x`<sup>`(k+1)`</sup>`=(L+D)`<sup>`-1`</sup>`(-U)x`<sup>`(k)`</sup>`+(L+D)`<sup>`-1`</sup>`b`
- `x`<sup>`(k+1)`</sup>`=(L+D)`<sup>`-1`</sup>`((-U)x`<sup>`(k)`</sup>`+b)`

### 7. Wartości i wektory własne macierzy; numeryczne algorytmy ich wyznaczania.
    
### 8. Metody: Lagrange’a i Hermite’a interpolacji wielomianowej.
    
## 9. Łańcuchy Markowa. Rozkład stacjonarny.
- [Łańcuchy Markowa - Mordor](https://mordor.ksi.ii.uj.edu.pl/repo/ii/2rok/RPS/Wyklady/Roman/05_procesy_markowa.pdf)

### 10. Zmienne losowe dyskretne. Definicja i najważniejsze rozkłady.
- [Zmienne losowe dyskretne - Mordor](https://mordor.ksi.ii.uj.edu.pl/repo/ii/2rok/RPS/Wyklady/Roman/02_zmienne_losowe_dyskretne.pdf)

- **Rozkład Bernoulliego**
- **Rozkład dwumianowy** - liczba sukcesów (z prawd. `p`) w n niezależnych próbach Bernoulliego
- **Rozkład geometryczny** - liczba prób Bernoulliego (z prawd. sukcesu `p`) potrzebnych do osiągnięcia pierwszego sukcesu
- **Rozkład negatywny dwumianowy** - to samo co geom tylko `k` sukcesów
- **Rozkład Poissona** - rozkład liczby tzw. rzadkich zdarzeń w ustalonym okresie czasu
    - `λ` - średnia liczba zgłoszeń

### 11. Zmienne losowe ciągłe. Definicje i najważniejsze rozkłady.
- [Zmienne losowe ciągłe - Mordor](https://mordor.ksi.ii.uj.edu.pl/repo/ii/2rok/RPS/Wyklady/Roman/03_zmienne_losowe_ciagle.pdf)

- **Rozkład jednostajny**
- **Rozkład wykładniczy** - wykorzystywany do modelowania czasu
- **Rozkład Gamma** - łączny czas α niezależnych zdarzeń, z których każdy ma rozkład wykładniczy
- **Rozkład normalny** - najważniejszy ze względu na Centralne Twierdzenie Graniczne

## 12. Testy statystyczne: test z, test t-Studenta, test chi-kwadrat.
- [08. Wstęp do statystyki - Mordor](https://mordor.ksi.ii.uj.edu.pl/repo/ii/2rok/RPS/Wyklady/Roman/08_wstep_do_statystyki.pdf)
- [09. Inferencja statystyczna 1, przedzialy ufnosci - Mordor](https://mordor.ksi.ii.uj.edu.pl/repo/ii/2rok/RPS/Wyklady/Roman/09_inferencja_statystyczna_1_przedzialy_ufnosci.pdf)
- [10. Inferencja_statystyczna 2, testowanie_hipotez - Mordor](https://mordor.ksi.ii.uj.edu.pl/repo/ii/2rok/RPS/Wyklady/Roman/10_inferencja_statystyczna_2_testowanie_hipotez.pdf)
- [11. Inferencja statystyczna 3, chi 2, testy nieparametryczne, bootstrap](https://mordor.ksi.ii.uj.edu.pl/repo/ii/2rok/RPS/Wyklady/Roman/11_inferencja_statystyczna_3_chi2_testy_nieparametryczne_bootstrap.pdf)

### 13. Wzór Bayesa i jego interpretacja.
- [01. Prawdopodobieństwo - Mordor](https://mordor.ksi.ii.uj.edu.pl/repo/ii/2rok/RPS/Wyklady/Roman/01_prawdopodobienstwo.pdf)

- `P(B|A)=P(A|B)P(B)/P(A)` - wzór Bayesa
- `P(A|B)=P(A∩B)/P(B)` - prawd. warunkowe

## 14. Istnienie elementów odwrotnych względem mnożenie w strukturze (Z modulo m, +, *) w zależności od liczby naturalnej m.
[Modulo - Mordor](https://mordor.ksi.ii.uj.edu.pl/repo/ii/2rok/WMD/Materialy%20uzupelniajace%20-%20Forys/2015-2016/wmd_15_02.pdf)

Element `a∈ℤ`<sub>`n`</sub> jest odwracalny (w `ℤ`<sub>`n`</sub>) wtedy i tylko wtedy, gdy `NWD(a,n)=1`.

liczba el. odwracalnych w `ℤ`<sub>`n`</sub>`=φ(n)`

## 15. Liniowa niezależność i liniowa zależność wektorów.
Własność algebraiczna rodziny wektorów danej przestrzeni liniowej mówiąca, że żaden z nich nie może być zapisany jako kombinacja liniowa skończenie wielu innych wektorów ze zbioru

## 16. Iloczyn skalarny w przestrzeni (R^n, R, +, *).
	
## 17. Liczby Stirlinga I i II rodzaju i ich interpretacja.
[Liczby Stirlinga - Mordor](https://mordor.ksi.ii.uj.edu.pl/repo/ii/2rok/WMD/Materialy%20uzupelniajace%20-%20Forys/2015-2016/wmd_15_01.pdf)

## 18. Twierdzenia: Eulera i Fermata; funkcja Eulera.
[Twierdzenia: Eulera i Fermata - Mordor](https://mordor.ksi.ii.uj.edu.pl/repo/ii/2rok/WMD/Materialy%20uzupelniajace%20-%20Forys/2015-2016/wmd_15_02.pdf)

- **Tw. Eulera**
    - Niech `a∈ℤ`, `n∈ℕ` oraz `NWD(a,n)=1`
    - `a(n)=1 mod n`

- **Tw. Fermata**
    - Niech `a∈ℤ`, `p` liczba pierwsza, `NWD(a,p)=1`
    - `a`<sup>`p−1`</sup>`=1 mod p`

## 19. Konfiguracje i t-konfiguracje kombinatoryczne.
[Konfiguracje i t-konfiguracje - Mordor](https://mordor.ksi.ii.uj.edu.pl/repo/ii/2rok/WMD/Materialy%20uzupelniajace%20-%20Forys/2015-2016/wmd_15_01.pdf)

## 20. Cykl Hamiltona, obwód Eulera, liczba chromatyczna – definicje i twierdzenia.
[Cykl Hamiltona, obwód Eulera - Mordor](https://mordor.ksi.ii.uj.edu.pl/repo/ii/2rok/WMD/Materialy%20uzupelniajace%20-%20Forys/2015-2016/wmd_15_03.pdf)

## 21. Algorytm Forda-Fulkersona wyznaczania maksymalnego przepływu.
[Algorytm Forda-Fulkersona - Mordor](https://mordor.ksi.ii.uj.edu.pl/repo/ii/2rok/WMD/Materialy%20uzupelniajace%20-%20Forys/2015-2016/wmd_15_03.pdf)

## 22. Rozwiązywanie równań rekurencyjnych przy użyciu funkcji tworzących (generujących).
[Funkcje tworzące - Mordor](https://mordor.ksi.ii.uj.edu.pl/repo/ii/2rok/WMD/Materialy%20uzupelniajace%20-%20Forys/2015-2016/wmd_15_04.pdf)

## 23. Ciąg i granica ciągu liczbowego, granica funkcji.
- **Ciągiem liczbowym** nazywamy funkcję `f:ℕ→ℝ`
- Ciąg oznaczamy `{a`<sub>`n`</sub>`}`, gdzie `a=f(n) ∀n∈ℕ`
- Ciąg ma **granicę** `g∈ℝ`, jeśli `∀ε>0 ∃N∈ℕ ∀n≥N : |a`<sub>`n`</sub>`-g|<ε a`<sub>`n`</sub>`∈(g-ε, g+ε)`

Granicę oznaczamy: ` lim`<sub>`n→∞`</sub>`a`<sub>`n`</sub>`=g`

Granica funkcji

## 24. Ciągłość i pochodna funkcji. Definicja i podstawowe twierdzenia.
    
## 25. Ekstrema funkcji jednej zmiennej. Definicje i twierdzenia.
    
## 26. Całka Riemanna funkcji jednej zmiennej.
    
## 27. Pochodne cząstkowe funkcji wielu zmiennych; różniczkowalność i różniczka funkcji.
    
## 28. Ekstrema funkcji wielu zmiennych. Definicje i twierdzenia.
    
## 29. Twierdzenie o zamianie zmiennych; współrzędne walcowe i sferyczne.
