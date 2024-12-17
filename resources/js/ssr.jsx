import React from "react";
import { createInertiaApp } from "@inertiajs/react";
import createServer from "@inertiajs/react/server";
import ReactDOMServer from "react-dom/server";

import i18n, { initI18n } from "./i18n";
import { I18nextProvider } from "react-i18next";


createServer((page) =>
    createInertiaApp({
        page,
        render: (element) => ReactDOMServer.renderToString(element),
        resolve: (name) => {
            const pages = import.meta.glob("./Pages/**/*.jsx", { eager: true });
            return pages[`./Pages/${name}.jsx`];
        },
        setup: ({ App, props }) => {
            const { locale } = props.initialPage.props;
            initI18n(locale);
            return (
                <I18nextProvider i18n={i18n}>
                    <App {...props} />
                </I18nextProvider>
            );
        },
    })
);
