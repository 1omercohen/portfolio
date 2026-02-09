import { useEffect, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Route, Routes } from "react-router-dom";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import { createAppTheme } from "./theme/createAppTheme";

export default function App() {
    const { i18n } = useTranslation();
    const lang = i18n.resolvedLanguage || i18n.language;
    const isHebrew = lang.startsWith("he");

    const theme = useMemo(() => createAppTheme(isHebrew), [isHebrew]);

    useEffect(() => {
        document.documentElement.lang = lang;
        document.documentElement.dir = isHebrew ? "rtl" : "ltr";
    }, [isHebrew, lang]);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box
                sx={{
                    minHeight: "100vh",
                    bgcolor: "background.default",
                    width: "100%",
                    maxWidth: "100%",
                    overflowX: "hidden",
                }}
            >
                <Header />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                </Routes>
                <Footer />
            </Box>
        </ThemeProvider>
    );
}
