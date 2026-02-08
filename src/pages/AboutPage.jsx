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
import { ABOUT_HERO_IMAGE } from "../constants/links";

export default function AboutPage() {
    const { t } = useTranslation();
    const groups = t("about.expertiseGroups", { returnObjects: true });

    return (
        <>
            <Box sx={{ py: { xs: 5, md: 8 } }}>
                <Container maxWidth="xl">
                    <Grid container spacing={3} alignItems="center">
                        <Grid item xs={12} md={3}>
                            <Box
                                sx={{
                                    width: 220,
                                    height: 220,
                                    overflow: "hidden",
                                    mx: "auto",
                                }}
                            >
                                <Box
                                    component="img"
                                    src={ABOUT_HERO_IMAGE}
                                    alt="Omer Cohen"
                                    sx={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover",
                                        display: "block",
                                    }}
                                />
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={9}>
                            <Typography
                                variant="h1"
                                sx={{ fontSize: { xs: "2.2rem", md: "4rem" } }}
                            >
                                {t("about.name")}
                            </Typography>
                            <Typography
                                color="primary.main"
                                sx={{
                                    fontWeight: 700,
                                    mt: 1,
                                    fontSize: { xs: 22, md: 34 },
                                }}
                            >
                                {t("about.role")}
                            </Typography>
                            <Typography
                                color="text.secondary"
                                sx={{
                                    mt: 2,
                                    maxWidth: 1000,
                                    fontSize: { xs: 18, md: 28 },
                                }}
                            >
                                {t("about.bio")}
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            <Box sx={{ py: { xs: 6, md: 10 }, bgcolor: "#1d222d" }}>
                <Container maxWidth="lg">
                    <Typography
                        variant="h2"
                        sx={{ textAlign: "center", mb: 5 }}
                    >
                        {t("about.expertiseTitle")}
                    </Typography>
                    <Grid container spacing={2}>
                        {groups.map((group) => (
                            <Grid item xs={12} sm={6} md={4} key={group.title}>
                                <Card
                                    sx={{
                                        height: "100%",
                                        bgcolor: "#151b24",
                                        border: "1px solid #364255",
                                    }}
                                >
                                    <CardContent>
                                        <Typography
                                            fontWeight={700}
                                            sx={{ mb: 1.2 }}
                                        >
                                            {group.title}
                                        </Typography>
                                        <Stack
                                            direction="row"
                                            flexWrap="wrap"
                                            gap={0.8}
                                        >
                                            {group.tags.map((tag) => (
                                                <Box
                                                    key={tag}
                                                    sx={{
                                                        px: 1,
                                                        py: 0.5,
                                                        bgcolor: "#1f2633",
                                                        borderRadius: 5,
                                                    }}
                                                >
                                                    <Typography fontSize={12}>
                                                        {tag}
                                                    </Typography>
                                                </Box>
                                            ))}
                                        </Stack>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>

            <Box sx={{ py: 7, bgcolor: "#11161d" }}>
                <Container maxWidth="md">
                    <Stack spacing={2} alignItems="center">
                        <Typography variant="h2">
                            {t("about.ctaTitle")}
                        </Typography>
                        <Button
                            variant="contained"
                            component={RouterLink}
                            to="/contact"
                        >
                            {t("about.ctaButton")}
                        </Button>
                    </Stack>
                </Container>
            </Box>
        </>
    );
}
