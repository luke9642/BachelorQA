
# Matematyczne podstawy informatyki

#### 1. Podstawy logiki i teorii mnogości. Metody dowodzenia twierdzeń, relacje równoważności, relacje porządku.

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

### 2. Metody numeryczne. Rozwiązywanie układów równań liniowych: metoda eliminacji Gaussa i metoda Gaussa-Seidla. Rozwiązywanie równań nieliniowych metodą Newtona. Wyznaczanie wartości własnych macierzy. Interpolacja wielomianowa.
## 3. Rachunek prawdopodobieństwa i statystyka. Zmienne losowe dyskretne i ciągłe (najważniejsze przykłady, zastosowania), prawdopodobieństwo warunkowe, łańcuchy Markowa. Testy statystyczne.
#### 4. Algebra liniowa. Liniowa zależność i niezależność wektorów, iloczyn skalarny w przestrzeni Rn.
#### 5. Podstawy teorii liczb. Struktura algebraiczna (Zm, +, *) w zależności od m. Twierdzenia Eulera i Fermata, funkcja Eulera.
#### 6. Matematyka dyskretna. Konfiguracje i t-konfiguracje kombinatoryczne. Rozwiązywanie równań rekurencyjnych, funkcje tworzące.
#### 7. Podstawy teorii grafów. Obwód Eulera, cykl Hamiltona, liczba chromatyczna. Wyznaczanie maksymalnego przepływu w sieci.
## 8. Analiza matematyczna – ciągi liczbowe, funkcje jednej zmiennej. Granica, ciągłość i pochodna funkcji, ekstrema lokalne.
## 9. Analiza matematyczna – funkcje wielu zmiennych. Pochodne cząstkowe, ekstrema lokalne.
#### 10. Podstawy rachunku całkowego. Całka Riemanna, zmiana zmiennych w całce (współrzędne sferyczne i walcowe).

# Teoretyczne podstawy informatyki

#### 11. Złożoność obliczeniowa. Złożoność pesymistyczna i średnia; notacja O duże, Omega duże, Theta.
#### 12. Modele obliczeń: maszyna Turinga, automat skończony, automat ze stosem.
#### 13. Abstrakcyjne typy danych. Lista, kolejka, kolejka priorytetowa – operacje i ich złożoność.
#### 14. Metody programowania. Algorytmy zachłanne, metoda „dziel i zwyciężaj”, programowanie dynamiczne.
#### 15. Drzewa BST. Porządki przeglądania, algorytmy wyszukiwania, równoważenie drzewa.
#### 16. Algorytmy sortowania przez porównania i pozycyjne – ograniczenia i złożoność.
#### 17. Algorytmy grafowe. Przeszukiwanie wszerz i w głąb, wyszukiwanie najkrótszej ścieżki.
#### 18. Języki i wyrażenia regularne - równoważne definicje, przykłady zastosowań, lemat o pompowaniu.
#### 19. Problemy P, NP, NP-zupełne i zależności między tymi klasami. Hipoteza P vs NP.
## 20. Teoria języków formalnych. Problemy rozstrzygalne i nierozstrzygalne.

# Wytwarzanie oprogramowania

#### 21. Kompilacja, linkowanie i wykonanie programu. Biblioteki statyczne i dynamiczne.
#### 22. Różnice w wywołaniu funkcji statycznych, niestatycznych i wirtualnych. Sposoby przekazywania parametrów do funkcji.
#### 23. Podstawowe założenia paradygmatu obiektowego: dziedziczenie, abstrakcja, enkapsulacja, polimorfizm. Sposoby ich realizacji w C++ i Javie.
#### 24. Programowanie generyczne. Szablony, metody generyczne, polimorfizm statyczny. Różnice między klasami generycznymi w C++ i Javie.
#### 25. Język UML. Diagramy sekwencji i przypadków użycia – ich budowa i zastosowanie.
#### 26. Testowanie oprogramowania. Testy jednostkowe, integracyjne, systemowe, akceptacyjne – typowe sytuacje ich wykorzystania.
### 27. Testy pokrycia. Pokrycie instrukcji i gałęzi – metryki, relacje między tymi podejściami.

Pokrycia:
- instrukcji
- krawędziowe
- wszystkich ścieżek
- ścieżek liniowo niezależnych

### 28. Modele procesów wytwarzania oprogramowania. Model przyrostowy, spiralny, Scrum – ich fazy, zalety i wady.

Modele:
- kaskadowy (przyrostowy)
- model V
- spiralny Boehma
- iteracyjny (Scrum)

### 29. Wzorce projektowe w inżynierii oprogramowania – definicje, klasyfikacja, przykłady.
**Wzorzec projektowy** – opis komunikujących się obiektów i klas dostosowanych do rozwiązania ogólnego problemu projektowego w szczególnym kontekście. Opisuje często występujący problem i podaje jego rozwiązanie tak, by można je było wielokrotnie zastosować na różne sposoby. W przeciwieństwie do algorytmu nie wnika w operacje na danych, a jedynie w strukturę i zależności między abstrakcyjnymi elementami tworzonego oprogramowania. Składa się z nazwy (skrót opisujący problem), problemu (opis kontekstu zastosowania), rozwiązania (opis składowych, ich przeznaczenie, relacje) oraz konsekwencji (koszty i zyski).

Wzorce:
1. kreacyjne
    - singleton
    - fabryka
    - builder
    - prototyp

2. strukturalne
    - fasada
    - adapter
    - kompozycja
    - dekorator
    - proxy


3. behawioralne
    - iterator
    - observer
    - template method
    - interpreter

### 30. Zarządzanie jakością oprogramowania. Metody planowania, zapewniania i kontroli jakości.
Metody planowania:
- Zbieranie wymagań
- Definiowanie zakresu projektu
- Podział prac
- Szacowanie czasu trwania
- Szacowanie kosztów
- Identyfikacja ryzyka

Metody zapewniania:
- definiowanie i implementacja procesów
    – metodyka wytwarzania oprogramowania
    – zarządzanie projektami
    – zarządzanie konfiguracją
    – zarządzanie wymaganiami
    – metody pomiaru oprogramowania, szacowanie
    – projektowanie oprogramowania
    – proces testowy
- identyfikacja słabych punktów w procesach i ciągła poprawa procesów
- przeprowadzanie audytów
- szkolenia

# Inżynieria systemów

#### 31. Relacyjny model danych. Algebra relacji i jej odzwierciedlenie w języku SQL. Normalizacja relacji.
### 32. Indeksowanie w bazach danych. Typy indeksów. Struktura drzew B+ i operacje na nich.
Typy indeksów:
- drzewa B+
- tablice o organizacji indeksowej
- indeksy haszowe
- mapy binarne

#### 33. Transakcje w bazach danych. Podstawowe cechy transakcji (ACID), poziomy izolacji, metody sterowania współbieżnością.
#### 34. Układy sekwencyjne i kombinacyjne. Schemat budowy procesora (rejestry, ALU, zegar).
#### 35. Zarządzanie procesami w systemie operacyjnym – stany procesu, algorytmy szeregowania z wywłaszczaniem. Narzędzia synchronizacji procesów: muteks, semafor, monitor.

Algorytmy szeregowania:
- FIFO
- Planowanie rotacyjne
- Planowanie sporadyczne

#### 36. Systemy plików – organizacja fizyczna i logiczna.
#### 37. Model OSI ISO. Przykłady protokołów w poszczególnych warstwach.
#### 38. Adresowanie w protokołach IPv4 i IPv6. Przebieg połączenia internetowego od wpisania adresu strony w przeglądarce do jej wyświetlenia.
### 39. Rola routerów w infrastrukturze sieci. Podstawowe protokoły routingu – klasyfikacja, zalety, wady.
**Router** - urządzenie pracujące w trzeciej warstwie modelu OSI. Służy do łączenia różnych sieci komputerowych (np. o różnych klasach, maskach).
Na podstawie informacji zawartych w pakietach TCP/IP jest w stanie przekazać pakiety z dołączonej do siebie sieci źródłowej do docelowej, rozróżniając ją spośród wielu dołączonych do siebie sieci. Proces kierowania ruchem nosi nazwę routingu.

- **RIP** (Routing Information Protocol)
metryka rośnie o jeden z każdym przeskokiem
maksymalnie 15 przeskoków (zapobiega teworzeniu się pętli)
przechowuje informacje o sieciach tylko bezpośrednich sąsiadów

- **EIGRP** (Enhanced Interior Gateway Routing Protocol)
przechowuje informacje o sieciach tylko bezpośrednich sąsiadów
zapisuje trasy które zbada, jeśli są dobre wpisze je do pamięci
w przypadku zmiany swoich sieci wysyła tylko informację o zmianach (do bezpośrednich sąsiadów)
złożona metryka

- **OSPF** - (Open Shortest Path First)
metryka na podstawie przepustowości interfejsu
rozgłasza informację o metrykach dla swoich interfejsów wszystkim sąsiadom
umożliwia podział sieci na obszary (area) - area 0 (id=0)  służy do komunikowania się pomiędzy innymi obszarami
routery kolejno przekazują wszystkim sąsiadom (z jednego obszaru) wszystkie informacje jakie otrzymają - każdy węzeł ma pełną wiedzę o sieci



#### 40. Podpis cyfrowy. Algorytm RSA jako przykład szyfrowania asymetrycznego. Znaczenie certyfikatów w bezpieczeństwie sieciowym