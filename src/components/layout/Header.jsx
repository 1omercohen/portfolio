import { Link as RouterLink, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { AppBar, Box, Button, Container, Stack, Toolbar } from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";

export default function Header() {
    const { t, i18n } = useTranslation();
    const location = useLocation();
    const lang = i18n.resolvedLanguage || i18n.language;
    const isHebrew = lang.startsWith("he");

    const navMenu = (
        <Stack
            direction="row"
            spacing={1}
            alignItems="center"
            sx={{ direction: isHebrew ? "rtl" : "ltr" }}
        >
            <Button
                component={RouterLink}
                to="/"
                color={location.pathname === "/" ? "primary" : "inherit"}
            >
                {t("nav.home")}
            </Button>
            <Button
                component={RouterLink}
                to="/about"
                color={location.pathname === "/about" ? "primary" : "inherit"}
            >
                {t("nav.about")}
            </Button>
            <Button
                component={RouterLink}
                to="/contact"
                color={location.pathname === "/contact" ? "primary" : "inherit"}
            >
                {t("nav.contact")}
            </Button>
        </Stack>
    );

    const languageSwitch = (
        <Stack direction="row" spacing={1} alignItems="center">
            <Button
                size="small"
                variant={!isHebrew ? "contained" : "outlined"}
                onClick={() => i18n.changeLanguage("en")}
            >
                EN
            </Button>
            <Button
                size="small"
                variant={isHebrew ? "contained" : "outlined"}
                onClick={() => i18n.changeLanguage("he")}
            >
                HE
            </Button>
        </Stack>
    );

    return (
        <AppBar
            position="sticky"
            color="transparent"
            elevation={0}
            sx={{ borderBottom: "1px solid #353d4d", bgcolor: "#131821" }}
        >
            <Container maxWidth="xl">
                <Toolbar disableGutters sx={{ minHeight: 64 }}>
                    <Box
                        sx={{
                            width: "100%",
                            display: "flex",
                            direction: "ltr",
                            alignItems: "center",
                            justifyContent: "space-between",
                            gap: 2,
                        }}
                    >
                        <Box sx={{ display: "flex", minWidth: 220 }}>
                            {isHebrew ? (
                                languageSwitch
                            ) : (
                                <>
                                    <Box
                                        sx={{
                                            width: 32,
                                            height: 32,
                                            borderRadius: 1,
                                            bgcolor: "#5baeff",
                                            display: "grid",
                                            placeItems: "center",
                                        }}
                                    >
                                        <CodeIcon
                                            sx={{
                                                fontSize: 20,
                                                color: "#12253b",
                                            }}
                                        />
                                    </Box>
                                    {navMenu}
                                </>
                            )}
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                minWidth: 220,
                                justifyContent: "flex-end",
                            }}
                        >
                            {isHebrew ? (
                                <>
                                    {navMenu}
                                    <Box
                                        sx={{
                                            width: 32,
                                            height: 32,
                                            borderRadius: 1,
                                            bgcolor: "#5baeff",
                                            display: "grid",
                                            placeItems: "center",
                                        }}
                                    >
                                        <CodeIcon
                                            sx={{
                                                fontSize: 20,
                                                color: "#12253b",
                                            }}
                                        />
                                    </Box>
                                </>
                            ) : (
                                languageSwitch
                            )}
                        </Box>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
