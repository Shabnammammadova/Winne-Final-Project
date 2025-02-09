import i18n from "i18next"

i18n.use(initReactI18next).init({
    resources: {
        en: {
            translation: {
                "Welcome": "Welcome to my app"
            }
        },
        es: {
            transation: {
                "Bienvenodo": "Bienvenido a la aplicación mt"
            }
        }
    },
    lng: "en"
})