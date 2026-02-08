import { useTranslation } from "react-i18next";
import {
    Box,
    Button,
    Card,
    CardContent,
    Container,
    IconButton,
    Stack,
    TextField,
    Typography,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import { GITHUB_URL, LINKEDIN_URL } from "../constants/links";

export default function ContactPage() {
    const { t } = useTranslation();

    return (
        <Box sx={{ py: { xs: 6, md: 9 } }}>
            <Container maxWidth="md">
                <Typography
                    variant="h1"
                    sx={{
                        textAlign: "center",
                        fontSize: { xs: "2.2rem", md: "4rem" },
                    }}
                >
                    {t("contactPage.title")}
                </Typography>
                <Typography
                    color="text.secondary"
                    sx={{
                        textAlign: "center",
                        mt: 2,
                        mb: 4,
                        fontSize: { xs: 18, md: 24 },
                    }}
                >
                    {t("contactPage.subtitle")}
                </Typography>

                <Card
                    sx={{
                        bgcolor: "#1d1f2d",
                        border: "1px solid #4c5870",
                        mb: 4,
                    }}
                >
                    <CardContent sx={{ p: { xs: 2.5, md: 4 } }}>
                        <Typography
                            variant="h2"
                            sx={{ textAlign: "center", mb: 3 }}
                        >
                            {t("contactPage.formTitle")}
                        </Typography>
                        <Stack spacing={2}>
                            <TextField
                                label={t("contactPage.name")}
                                placeholder={t("contactPage.namePlaceholder")}
                                fullWidth
                            />
                            <TextField
                                label={t("contactPage.email")}
                                placeholder={t("contactPage.emailPlaceholder")}
                                fullWidth
                            />
                            <TextField
                                label={t("contactPage.message")}
                                placeholder={t(
                                    "contactPage.messagePlaceholder",
                                )}
                                multiline
                                minRows={5}
                                fullWidth
                            />
                            {/* <Button variant="contained" size="large">
                                {t("contactPage.send")}
                            </Button> */}
                        </Stack>
                    </CardContent>
                </Card>

                <Card sx={{ bgcolor: "#151a2b", border: "1px solid #3a4457" }}>
                    <CardContent sx={{ p: 4 }}>
                        <Stack
                            direction="row"
                            spacing={1}
                            alignItems="center"
                            justifyContent="center"
                        >
                            <EmailIcon sx={{ color: "#ffffff" }} />
                            <Typography>
                                {t("contactPage.emailValue")}
                            </Typography>
                        </Stack>
                        <Stack
                            direction="row"
                            spacing={1.2}
                            justifyContent="center"
                            sx={{ mt: 1 }}
                        >
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
                        <Typography
                            color="text.secondary"
                            sx={{ textAlign: "center", mt: 2 }}
                        >
                            {t("contactPage.note")}
                        </Typography>
                    </CardContent>
                </Card>
            </Container>
        </Box>
    );
}
