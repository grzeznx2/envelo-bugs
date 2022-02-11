    # index.html
    13.
    -błędna nazwa właściwości: backgroundColor =====> background-color
    -błędne wykorzystanie zmiennej CSS: var(bg-color) =====> var(--bg-color)

    19.
    -próba wykorzystanie czcionki 'Lato' bez jej zaimportowania

    17.
    -do stylowania danego elementu HTML powinna zostać użyta klasa 'hero', stylowanie tagów HTML bez użycia klas jest generalnie złą praktyką

    29/31.
    -atrybut 'aria-main' nie istnieje, w przypadku próby oznaczenia danej sekcji jako głównej zawartości dokumentu, należy użyć elementu <main> lub atrybutu: role = "main"
    -dwukrotnie użyty tag h1 - na stronie powinien występować tylko jeden element h1

    30.
    -błędna próba stylowania za pomocą klasy: className =====> class (stażysta prawdopodobnie przed chwilą używał REACT)

    31.
    -próba bezpośredniego odwołania się do zmiennej JS z pliku HTML

    32.
    -nieprawidłowy tag zamykający: </div>> =====> </div>

    33.
    -próba bezpośredniego odwołania się do metody klasy Hero z pliku HTML

    35.
    -w tagu <script> brakuje określenia 'src', przez co plik 'heroes-hall-of-fame' nie zostanie zaimportowany



    index.js
    0.
    -brak konsekwencji w nazewnictwie zmiennych (używanie cameCase oraz snak_case)

    17.
    -błędna implementacja metody 'train': this.#powerCount + 1 =====> this.#powerCount +=1

    32.
    -próba wywołania funkcji 'print_hall_of_fame' przed inicicjalizacją

    34.
    -funkcja 'getHero':
        -powinna przyjmować argument 'name' i przekazać jako argument w czasie tworzenia nowej instancji klasy Hero
        -powinna zwracać nowo utworzoną instancję Hero

    40.
    -zmienna spider nie została wcześniej zadeklarowana (prawdopodobnie chodziło o getHero('spider'))
    -wprowadzająca w błąd nazwa funkcji: funkcja tworzy także nowych bohaterów, podczas gdy powinna tylko wyświetlać ich kolekcję

    43.
    -w powiązanym pliku HMTL nie istnieje element z atrybutem id === 'div'

    45.
    -niejasne nazewnictwo zmiennych (w przypadku iteracji po tablicy 'heroes' lepiej nazwać pojedynczą wartość 'hero' zamiast 'x'): heroes.map((x,i,arr)=>...) =====> heroes.map(hero=>...)

    47.
    -nieprawidłowa próba destrukturyzacji, x jest obiektem, a nie tablicą: const [name] = x =====> const {name} = x

    49.
    -próba odwołania się do zmiennej prywatnej obiektu x (stażysta powinien użyć metody x.getCurrentPowerCount())
    -nieprawidłowa struktura HMTL: brak otwierającego taga dla drugiego elementu </p>

    51.
    -nieprawidłowa metoda 'append': heroesContainer.append() =====> heroesContainer.appendChild()
