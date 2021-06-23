const worldAthletes = [
    {first: "Mikhail", last: "Zalomin", country: "Russia", pass1: 37.1, pass2: 38.9},
    {first: "Ruban", last: "Padilla", country: "United States", pass1: 37.6, pass2: 38.4},
    {first: "Vasilii", last: "Makarskii", country: "Russia", pass1: 37.1, pass2: 38.6},
    {first: "Andres", last: "Martinez", country: "Spain", pass1: 36.2 , pass2: 37.8},
    {first: "Mario", last: "Bruno", country: "Canada", pass1: 36.8 , pass2: 37.1},
    {first: "Alexander", last: "Renkert", country: "United States", pass1: 37.7 , pass2: 36.1},
    {first: "Tiago", last: "Sampaio", country: "Portugal", pass1: 36.6 , pass2: 37.2},
    {first: "Andrei", last:"", country: "Russia", pass1: 36.7 , pass2: 37.0},
    {first: "Carlos", last: "Manjon", country: "Spain", pass1: 36.9 , pass2: 36.3},
    {first: "Joao", last: "Caeiro", country: "Portugal", pass1: 36.3 , pass2: 36.8},
    {first: "Daniel", last: "Berridge", country: "Great Britain", pass1: 36.7 , pass2: 36.4},
    {first: "Simon", last: "Smith", country: "United States", pass1: 36.5 , pass2: 36.5},
    {first: "Alejando", last: "Bernardez", country: "Spain", pass1: 37.5 , pass2: 35.3},
    {first: "Lucas", last: "Adorno", country: "Argentina", pass1: 36.2 , pass2: 36.5},
    {first: "Diogo", last: "Carvalho", country: "Portugal", pass1: 34.6 , pass2: 38.0},
    {first: "Rhys", last: "Gray", country: "Great Britain", pass1: 37.1 , pass2: 35.3},
    {first: "Jones", last: "Nordfors", country: "Sweden", pass1: 36.9 , pass2: 35.4},
    {first: "Daniel", last: "Schmidt", country: "Germany", pass1: 36.9 , pass2: 35.3},
    {first: "Daniel", last: "Perez", country: "Spain", pass1: 36.5 , pass2: 35.2},
    {first: "Noah", last: "Orr", country: "United States", pass1: 36.2 , pass2: 35.1}
]

// 1. Filter - get a list of worldAthletes from United States
    let USAthletes = worldAthletes.filter(x => x.country === "United States");
        
// 2. Map - get a list of worldAthletes by first and last name
    let athletes = worldAthletes.map(e => {
        let arr = {};
        arr["firstName"] = e.first, 
        arr["lastName"] = e.last 
        return arr
    });

    // *****  OR *****

    let athletesFullName = worldAthletes.map(e => `${e.first} ${e.last}`);

// 3. Sort - sort the worldAthletes by pass1 (lowest -> highest)
    let pass1Scores = worldAthletes.sort((e,f) => e.pass1 - f.pass1);

// 4. Reduce - What is the sum of all passes
    let totalScore = worldAthletes.reduce((acc, athlete) => acc += athlete.pass1 + athlete.pass2,0);

// 5. Reduce - Sort the worldAthletes by total score
    let totalScores = worldAthletes.reduce((list, athlete) => {
        list.push({
            first: athlete.first, 
            last: athlete.last, 
            country: athlete.country, 
            totalScore: athlete.pass1 + athlete.pass2
        });
        return list;
    },[]);

    let athletePlacement = totalScores.sort((e,f) => e.totalScore - f.totalScore);

// 6. Create a list of first names that contain "an"
    let firstNamesWithAn = worldAthletes.reduce((list, athlete) => {
        if(athlete.first.includes("an") && !list.includes(athlete.first)) 
            list.push(athlete.first);
            
        return list;
    },[]);

    // *****  OR *****
    // firstNamesWithAn = worldAthletes.filter(e => e.first.includes("an"));

// 7. Sort the worldAthletes by last name
    let sortedLastNames = worldAthletes.sort((e,f) =>  e.last.localeCompare(f.last));

//8. Reduce - Sum up the instances of each country.
    let numOfCountryAthletes = worldAthletes.reduce((acc, athlete) => {
        if (!acc[athlete.country])
            acc[athlete.country] = 0;
        acc[athlete.country]++;
        return acc
    }, {});
