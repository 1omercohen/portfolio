import { Link as RouterLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
    Box,
    Button,
    Card,
    CardContent,
    Container,
    Grid,
    Stack,
    Typography,
} from "@mui/material";
import { HOME_HERO_IMAGE } from "../constants/links";

export default function HomePage() {
    const { t } = useTranslation();
    const expertise = t("home.expertise.items", { returnObjects: true });

    return (
        <>
            <Box sx={{ bgcolor: "#082d58", py: { xs: 5, md: 10 } }}>
                <Container maxWidth="xl">
                    <Grid container spacing={{ xs: 0, sm: 2, md: 5 }} alignItems="center">
                        <Grid item xs={12} md={6}>
                            <Typography
                                variant="h1"
                                sx={{
                                    fontSize: { xs: "1.9rem", sm: "2.2rem", md: "4rem" },
                                    maxWidth: 620,
                                    lineHeight: 1.2,
                                    overflowWrap: "anywhere",
                                    wordBreak: "break-word",
                                    textAlign: { xs: "center", md: "start" },
                                }}
                            >
                                {t("home.hero.title")}
                            </Typography>
                            <Typography
                                sx={{
                                    mt: 2,
                                    color: "#d7e6ff",
                                    maxWidth: 540,
                                    fontSize: { xs: 18, md: 26 },
                                    textAlign: { xs: "center", md: "start" },
                                }}
                            >
                                {t("home.hero.subtitle")}
                            </Typography>
                            <Box sx={{ display: "flex", justifyContent: { xs: "center", md: "flex-start" } }}>
                                <Button
                                    variant="contained"
                                    size="large"
                                    component={RouterLink}
                                    to="/contact"
                                    sx={{ mt: 3 }}
                                >
                                    {t("home.hero.cta")}
                                </Button>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box
                                sx={{
                                    borderRadius: 2,
                                    border: "1px solid #315b88",
                                    height: { xs: 260, sm: 320, md: 430 },
                                    overflow: "hidden",
                                    bgcolor: "#0f1726",
                                }}
                            >
                                <Box
                                    component="img"
                                    src={HOME_HERO_IMAGE}
                                    alt="Omer Cohen"
                                    sx={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover",
                                        objectPosition: "center",
                                        display: "block",
                                    }}
                                />
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            <Box sx={{ py: { xs: 6, md: 10 } }}>
                <Container maxWidth="lg">
                    <Typography
                        variant="h2"
                        sx={{ textAlign: "center", mb: 5 }}
                    >
                        {t("home.expertise.title")}
                    </Typography>
                    <Grid container spacing={2}>
                        {expertise.map((item) => (
                            <Grid item xs={12} sm={6} md={3} key={item.title}>
                                <Card
                                    sx={{
                                        height: "100%",
                                        bgcolor: "#141a23",
                                        border: "1px solid #364255",
                                    }}
                                >
                                    <CardContent>
                                        <Typography
                                            fontWeight={700}
                                            sx={{ mb: 1 }}
                                        >
                                            {item.title}
                                        </Typography>
                                        <Typography
                                            color="text.secondary"
                                            fontSize={14}
                                        >
                                            {item.text}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>

            <Box sx={{ py: 7, bgcolor: "#08325f" }}>
                <Container maxWidth="md">
                    <Stack spacing={2} alignItems="center">
                        <Typography variant="h2" sx={{ textAlign: "center" }}>
                            {t("home.cta.title")}
                        </Typography>
                        <Button
                            variant="outlined"
                            component={RouterLink}
                            to="/contact"
                        >
                            {t("home.cta.button")}
                        </Button>
                    </Stack>
                </Container>
            </Box>
        </>
    );
}
