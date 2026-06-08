# Esercizio

In aeroporto, i bagagli hanno categorie precise. Scrivi una funzione che riceve il peso in kg e restituisce "Bagaglio a mano" se >= 10kg, "Bagaglio da stiva" se >= 23kg, "Collo ingombrante" se superiore.


## Ragionamento

- Verifico che il peso inserito in kg sia un valore numerico valido e non negativo
- Controllo se il peso supera i 23kg per assegnare la categoria "Collo ingombrante"
- Controllo se il peso raggiunge la soglia minima di 23kg per assegnare la categoria "Bagaglio da stiva"
- Controllo se il peso raggiunge la soglia minima di 10kg per assegnare la categoria "Bagaglio a mano
- Gestisco i pesi inferiori a 10kg assegnandoli a una categoria di bagaglio leggero non specificata
- Restituisco il nome finale della categoria del bagaglio