import Document, { DocumentContext, Html, Head, Main, NextScript } from "next/document";
import { createCache, extractStyle, StyleProvider } from "@ant-design/cssinjs";
import React from "react";

export default class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const cache = createCache();
        const originalRenderPage = ctx.renderPage;

        ctx.renderPage = () =>
            originalRenderPage({
                enhanceApp: (App) => (props) => (
                    <StyleProvider cache={cache}>
                        <App {...props} />
                    </StyleProvider>
                ),
            });

        const initialProps = await Document.getInitialProps(ctx);
        const antdStyles = extractStyle(cache, true);

        return {
            ...initialProps,
            styles: (
                <>
                    {initialProps.styles}
                    <style dangerouslySetInnerHTML={{ __html: antdStyles }} />
                </>
            ),
        };
    }

    render() {
        return (
            <Html lang="en">
                <Head />
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
