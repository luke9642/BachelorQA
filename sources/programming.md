# Wytwarzanie oprogramowania
- [Programowanie 1 - Mordor](https://mordor.ksi.ii.uj.edu.pl/repo/ii/1rok/P/Wyklady/2015-2016%20-%20Kawa/Programowanie_1_slajdy_pegaz.pdf)
- [Programowanie 2 - Mordor](https://mordor.ksi.ii.uj.edu.pl/repo/ii/1rok/P/Wyklady/2015-2016%20-%20Kawa/Programowanie_2_slajdy_pegaz.pdf)
- [Inżynieria oprogramowania - Pegaz](https://pegaz.uj.edu.pl/course/view.php?id=245451)
- [Nisko](https://sites.google.com/site/prognisk/home)
- [Testowanie - Mordor](https://mordor.ksi.ii.uj.edu.pl/repo/ii/specjalnosciowe/TestowanieOprogramowania/Wyklady/2016-2017/)
- [ZPIT - Mordor](https://mordor.ksi.ii.uj.edu.pl/repo/ii/specjalnosciowe/ZPIT/Wyklady/2016-2017/)

## 1. Kompilacja, linkowanie i wykonanie programu; biblioteki statyczne i dynamiczne.
    
## 2. Operacja wywołania podprocedury w asemblerze; rozkaz CALL.
- RBP/EBP wskaźnik bazowy (base pointer) - w nim przechowuje się aktualny spód stosu dla funkcji. Pozwala to określić położenie zmiennych lokalnych.
- RSP/ESP wskaźnik stosu (stack pointer) - przechowuje adres wierzchołka stosu.
- RIP/EIP wskaźnik instrukcji (instruction pointer) - Przechowuje adres następnej instrukcji do wykonania. Wywołanie funkcji to tak naprawdę zapamiętanie aktualnej wartości tego rejestru i zmiana na adres początku funkcji.
- Instrukcja CALL przed skokiem pod podany adres wcześniej odkłada na stos adres następnej instrukcji (RIP). Natomiast instrukcja RET wykonuje skok pod adres pobrany ze szczytu stosu.

Funkcja wywołująca:
- zachowuje na stosie wartości rejestrów eax, ecx, edx (np. jeżeli przechowują liczniki pętli)
- odkłada na stos argumenty aktualne dla podprogramu w kolejności od prawej do lewej (pierwszy argument jest odkładany jako ostatni)
- wykonuje instrukcję call przekazując sterowanie do podprogramu
- wynik znajduje się w al/ax/eax/edx:eax
- po odzyskaniu sterowania usuwa argumenty ze stosu (zwiększając rejestr esp)
- przywraca wartości rejestrów eax, ecx, edx jeżeli były zachowywane
```
  ; b = f(a, 5)
  push ecx      ; zachowujemy licznik pętli 
 
  mov eax, 5    ; odkładamy argumenty na stos
  push eax      ; w odwrotnej kolejności
  mov eax, [a]
  push eax
 
  call f        ; wywołujemy funkcję 
 
  add esp, 8    ; czyścimy stos
  mov [b], eax  ; zapisujemy wynik
 
  pop ecx       ; przywracamy licznik pętli
```

## 3. Różnice w wywołaniu funkcji statycznych, niestatycznych i wirtualnych (C++).
    
## 4. Sposoby przekazywania parametrów do funkcji (przez wartość, przez referencję). Zalety i wady.
    
## 5. Wskaźniki, arytmetyka wskaźników, różnica między wskaźnikiem a referencją w C++.
    
## 6. Podstawowe założenia paradygmatu obiektowego: dziedziczenie, abstrakcja, enkapsulacja, polimorfizm.
    
## 7. Funkcje zaprzyjaźnione i ich związek z przeładowaniem operatorów w C++.
    
## 8. Dziedziczenie w C++ i w Javie: podobieństwa i różnice.
	
## 9. Klasa abstrakcyjna i interfejs.
	
## 10. Obsługa sytuacji wyjątkowych w Javie: blok try-catch, typy wyjątków, sprzątanie stosu.
	
## 11. Klasy generyczne. Różnice pomiędzy klasami generycznymi w C++ i w Javie.

## 12. Programowanie orientowane zdarzeniami (event-driven), przykłady bibliotek.
	
## 13. Programowanie generyczne: szablony, metody generyczne, polimorfizm statyczny.

## 14. Model spiralny Boehma.
[Testowanie (str 8) - Mordor](https://mordor.ksi.ii.uj.edu.pl/repo/ii/specjalnosciowe/TestowanieOprogramowania/Wyklady/2016-2017/02_TestowanieWCykluZycia.pdf)

- Ustalanie celów
- Rozpoznanie i redukcja zagrożeń
- Tworzenie i zatwierdzanie
- Ocena i planowanie

## 15. Diagram sekwencji i diagram przypadków użycia (UML) – budowa i zastosowanie.
[UML - Pegaz](https://pegaz.uj.edu.pl/pluginfile.php/2053910/mod_resource/content/1/2017_03_08_Wyklad%201%20-%20PodstawyIUMLI.pdf)

## 16. Typowe sytuacje wykorzystania testów: jednostkowych, integracyjnych, systemowych, akceptacyjnych.

## 17. Model Scrum: proces, role, artefakty, korzyści modelu.
[Inżynieria oprogramowania - Pegaz](https://pegaz.uj.edu.pl/pluginfile.php/2069772/mod_resource/content/1/2017_04_05_Wyklad%204%20-%20Zwinne%20procesy%20wytwarzania%20oprogramowania%20-%20cz%201.pdf)

1. Role
    - Właściciel Produktu
    - Zespół Deweloperski
    - Scrum Master

1. Zdarzenia (wprowadzają regularność; ograniczone czasowo; każde (oprócz Sprintu) jest okazją do inspekcji i adaptacji)
    - Sprint
    - Planowanie Sprintu
    - Codzienny Scrum
    - Przegląd Sprintu
    - Retrospektywa Sprintu

1. Artefakty
    - Rejestr Produktu
    - Rejestr Sprintu
    - Monitorowanie postępów Sprintu
    - Przyrost

## 18. Wymagania: klasyfikacja, źródła, specyfikacja, analiza.
[ZPIT - Mordor](https://mordor.ksi.ii.uj.edu.pl/repo/ii/specjalnosciowe/ZPIT/Wyklady/2016-2017/wyklad_01.pdf)

## 19. Różnica między zapewnianiem a kontrolą jakości oprogramowania. Metody zapewniania i kontroli jakości.
[Testowanie (str 3) - Mordor](https://mordor.ksi.ii.uj.edu.pl/repo/ii/specjalnosciowe/TestowanieOprogramowania/Wyklady/2016-2017/13_JakoscOprogramowania.pdf)

[ZPIT - Mordor](https://mordor.ksi.ii.uj.edu.pl/repo/ii/specjalnosciowe/ZPIT/Wyklady/2016-2017/wyklad_06.pdf)

## 20. Style architektoniczne w projektowaniu systemów informatycznych. Omówić wybraną architekturę.
[Inżynieria oprogramowania - Pegaz](https://pegaz.uj.edu.pl/pluginfile.php/2119990/mod_resource/content/1/2017_04_26_Wyklad%207%20-%20Projektowanie%20systemu%2C%20wzorce%20architektoniczne.pdf)

## 21. Wzorce projektowe w inżynierii oprogramowania – definicja, klasyfikacja. Omówić wzorce Singleton i Facade.
[Inżynieria oprogramowania - Pegaz](https://pegaz.uj.edu.pl/pluginfile.php/2119993/mod_resource/content/1/2017_05_17_Wyklad%209%20-%20Wzorce%20Obiektowe%2C%20implementacja.pdf)

## 22. Pokrycie instrukcji i gałęzi – definicja, metryki, relacje między podejściami.
[Inżynieria oprogramowania - Pegaz](https://pegaz.uj.edu.pl/pluginfile.php/2119994/mod_resource/content/1/2017_05_24_Wyklad%2010%20-%20Testowanie%20i%20kontrola%20jakosci.pdf)

## 23. Szacowanie liczby defektów w kodzie – omówić metodę wstrzykiwania defektów oraz metodę dwukrotnego łowienia.
    
## 24. Zarządzanie konfiguracją: cel, typowe operacje, wzorce zarządzania konfiguracją.
[Inżynieria oprogramowania - Pegaz](https://pegaz.uj.edu.pl/pluginfile.php/2125297/mod_resource/content/1/2017_05_31_Wyklad%2011%20-%20Testowanie%20i%20ewolucja%20oprogramowania_dprzucicCI.pdf)

[ZPIT - Mordor](https://mordor.ksi.ii.uj.edu.pl/repo/ii/specjalnosciowe/ZPIT/Wyklady/2016-2017/wyklad_06.pdf)
