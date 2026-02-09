import { useEffect, useState } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
    AppBar,
    Box,
    Button,
    Container,
    Divider,
    Drawer,
    IconButton,
    List,
    ListItemButton,
    ListItemText,
    Stack,
    Toolbar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export default function Header() {
    const { t, i18n } = useTranslation();
    const location = useLocation();
    const lang = i18n.resolvedLanguage || i18n.language;
    const isHebrew = lang.startsWith("he");
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        setMobileOpen(false);
    }, [location.pathname]);

    const navItems = [
        { label: t("nav.home"), to: "/" },
        { label: t("nav.about"), to: "/about" },
        { label: t("nav.contact"), to: "/contact" },
    ];

    const navMenu = (
        <Stack
            direction="row"
            spacing={0.5}
            alignItems="center"
            sx={{ direction: isHebrew ? "rtl" : "ltr" }}
        >
            {navItems.map((item) => (
                <Button
                    key={item.to}
                    component={RouterLink}
                    to={item.to}
                    color={
                        location.pathname === item.to ? "primary" : "inherit"
                    }
                >
                    {item.label}
                </Button>
            ))}
        </Stack>
    );

    const languageSwitch = (
        <Stack
            direction="row"
            spacing={1}
            alignItems="center"
            sx={{ direction: "ltr" }}
        >
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

    const menuButton = (
        <IconButton
            color="inherit"
            aria-label="open menu"
            onClick={() => setMobileOpen(true)}
            sx={{ border: "1px solid #38445b", borderRadius: 1.5 }}
        >
            <MenuIcon />
        </IconButton>
    );

    return (
        <AppBar
            position="sticky"
            color="transparent"
            elevation={0}
            sx={{ borderBottom: "1px solid #353d4d", bgcolor: "#131821" }}
        >
            <Container maxWidth="xl">
                <Toolbar
                    disableGutters
                    sx={{ minHeight: 64, px: { xs: 0.5, md: 0 } }}
                >
                    <Box
                        sx={{
                            width: "100%",
                            display: { xs: "flex", md: "none" },
                            direction: "ltr",
                            alignItems: "center",
                            justifyContent: isHebrew
                                ? "flex-end"
                                : "flex-start",
                        }}
                    >
                        {menuButton}
                    </Box>

                    <Box
                        sx={{
                            width: "100%",
                            display: { xs: "none", md: "flex" },
                            direction: "ltr",
                            alignItems: "center",
                            justifyContent: "space-between",
                            gap: 2,
                        }}
                    >
                        <Box sx={{ display: "flex", minWidth: 220 }}>
                            {isHebrew ? languageSwitch : navMenu}
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                minWidth: 220,
                                justifyContent: "flex-end",
                            }}
                        >
                            {isHebrew ? navMenu : languageSwitch}
                        </Box>
                    </Box>
                </Toolbar>
            </Container>

            <Drawer
                anchor={isHebrew ? "right" : "left"}
                SlideProps={{
                    direction: isHebrew ? "left" : "right",
                }}
                open={mobileOpen}
                onClose={() => setMobileOpen(false)}
                PaperProps={{
                    sx: {
                        width: 280,
                        bgcolor: "#121821",
                        color: "#f2f4f8",
                        borderLeft: isHebrew ? "1px solid #2f3b4f" : "none",
                        borderRight: isHebrew ? "none" : "1px solid #2f3b4f",
                    },
                }}
            >
                <Divider sx={{ borderColor: "#2f3b4f" }} />
                <List sx={{ py: 1 }}>
                    {navItems.map((item) => (
                        <ListItemButton
                            key={item.to}
                            component={RouterLink}
                            to={item.to}
                            selected={location.pathname === item.to}
                            sx={{
                                mx: 1,
                                borderRadius: 1.5,
                                mb: 0.5,
                                "&.Mui-selected": {
                                    bgcolor: "rgba(98,173,255,0.2)",
                                },
                            }}
                        >
                            <ListItemText primary={item.label} />
                        </ListItemButton>
                    ))}
                </List>
                <Divider sx={{ borderColor: "#2f3b4f" }} />
                <Box sx={{ p: 2 }}>{languageSwitch}</Box>
            </Drawer>
        </AppBar>
    );
}
