import { Link as RouterLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
    Box,
    Container,
    Grid,
    IconButton,
    Link,
    Stack,
    Typography,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { GITHUB_URL, LINKEDIN_URL } from "../../constants/links";

export default function Footer() {
    const { t } = useTranslation();

    return (
        <Box component="footer" sx={{ bgcolor: "#3a3f4d", mt: 6 }}>
            <Container maxWidth="xl" sx={{ py: 5 }}>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={4}>
                        <Typography color="#f1f4f9" fontSize={13}>
                            {t("footer.rights")}
                        </Typography>
                        <Typography
                            color="#f1f4f9"
                            fontSize={13}
                            sx={{ mt: 1 }}
                        >
                            {t("footer.builtWith")}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Typography
                            color="#ffffff"
                            fontWeight={700}
                            sx={{ mb: 1 }}
                        >
                            {t("footer.quickLinks")}
                        </Typography>
                        <Stack spacing={0.8}>
                            <Link
                                component={RouterLink}
                                to="/"
                                underline="hover"
                                color="#ffffff"
                            >
                                {t("nav.home")}
                            </Link>
                            <Link
                                component={RouterLink}
                                to="/about"
                                underline="hover"
                                color="#ffffff"
                            >
                                {t("nav.about")}
                            </Link>
                            <Link
                                component={RouterLink}
                                to="/contact"
                                underline="hover"
                                color="#ffffff"
                            >
                                {t("nav.contact")}
                            </Link>
                        </Stack>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Typography
                            color="#ffffff"
                            fontWeight={700}
                            sx={{ mb: 1 }}
                        >
                            {t("footer.connect")}
                        </Typography>
                        <Stack direction="row" spacing={1.4}>
                            <IconButton
                                size="small"
                                sx={{ color: "#ffffff" }}
                                component="a"
                                href={LINKEDIN_URL}
                                target="_blank"
                                rel="noreferrer"
                                aria-label="LinkedIn"
                            >
                                <LinkedInIcon fontSize="small" />
                            </IconButton>
                            <IconButton
                                size="small"
                                sx={{ color: "#ffffff" }}
                                component="a"
                                href={GITHUB_URL}
                                target="_blank"
                                rel="noreferrer"
                                aria-label="GitHub"
                            >
                                <GitHubIcon fontSize="small" />
                            </IconButton>
                        </Stack>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}
