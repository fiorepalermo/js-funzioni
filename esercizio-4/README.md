# Esercizio
Un tracker di spedizioni usa codici numerici. Scrivi una funzione che riceve un codice (1, 2, 3) e restituisce "In elaborazione" per 1, "Spedito" per 2, "Consegnato" per 3. Se il codice non esiste, restituisce "Stato sconosciuto"

## Ragionamento

- Verifico che il codice inserito sia un numero intero valido per la ricerca dello stato della spedizione
- Associo il codice 1 allo stato "In elaborazione", il codice 2 allo stato "Spedito" e il codice 3 allo stato "Consegnato"
- Restituisco "Stato sconosciuto" se il codice numerico inserito non corrisponde a nessuna delle tre opzioni
- Restituisco la stringa finale dello stato di spedizione trovato
