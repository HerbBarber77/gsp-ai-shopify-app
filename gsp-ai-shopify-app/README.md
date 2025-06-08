# GSP-AI – Publiczna aplikacja Shopify (Node.js + React)

## Instrukcja uruchomienia i wdrożenia

1. **Uzupełnij plik `.env`** na podstawie `.env.example` (dodaj klucze z panelu Shopify oraz OpenAI).
2. **Wgraj projekt na swoje repo GitHub.**
3. **Zainstaluj zależności**:

    ```
    cd server
    npm install
    cd ../web
    npm install
    ```

4. **Zbuduj frontend:**

    ```
    cd web
    npm run build
    ```

5. **Uruchom backend:**

    ```
    cd ../server
    npm start
    ```

6. **Wdrożenie:**
   - Możesz wrzucić projekt na Render.com, Railway, Vercel lub inny hosting Node.js
   - Ustaw zmienne środowiskowe jak w `.env.example`

7. **Konfiguracja w Shopify Partners:**
   - Stwórz nową PUBLICZNĄ aplikację
   - Wklej adres URL do swojej aplikacji jako adres instalacyjny/OAuth
   - Dodaj wymagane scope’y uprawnień (produkty, zamówienia, klienci, rabaty)

---

## Wsparcie i rozbudowa

- Frontend: `/web/src`
- Backend: `/server`
- Własny dashboard, rozbudowa AI, własny branding – wszystko możesz modyfikować dowolnie!
