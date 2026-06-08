# Esercizio

Etichetta l'utente in base alla sua età. Sotto i 18 anni "Minorenne", "Giovane Adulto" tra 18 e 35, "Adulto" se tra 36 e 60, "Senior" oltre 60.


## Ragionamento

- Verifico che l'età inserita sia un numero intero positivo e verosimile, altrimenti restituisco un messaggio di errore sicuro
- Controllo se l'età è inferiore a 18 anni per assegnare l'etichetta "Minorenne"
- Controllo se l'età è compresa tra 18 e 35 anni per assegnare l'etichetta "Giovane Adulto"
- Controllo se l'età è compresa tra 36 e 60 anni per assegnare l'etichetta "Adulto"
- Assegno l'etichetta "Senior" per tutte le età superiori ai 60 anni
- Restituisco l'etichetta corretta dell'utente