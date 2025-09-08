import React from 'react';
import Head from 'next/head';
import { useIntl } from 'react-intl';
import { useRouter } from 'next/router';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { Card, CardContent, CardHeader, Grid, Stack, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

export const getStaticProps: GetStaticProps = async (context) => {
  // static site generation
  return {
    props: {
    },
  };
};

export default function Beroepstaken({
  beroepstaken,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const intl = useIntl();
  const router = useRouter();

  return (
    <>
      <Head>
        <title>LEF - {intl.formatMessage({ id: "PROFESSIONAL_DUTIES" })}</title>
      </Head>
      <Grid container spacing={2}>
        <Grid item xs={12}>
            <Typography variant="h5">De HCAI-beroepstaak</Typography>
            <Typography variant="body1" paragraph>
                <i>
                &apos;De student ontwerpt en ontwikkelt een AI-oplossing en integreert daarin  kennis van technische mogelijkheden en meerdere human-centered (bijvoorbeeld ethische, sociaalmaatschappelijke en juridische) aspecten. Dit doet de student door op kritische wijze de juiste balans te vinden tussen technische aspecten en human-centered aspecten.&apos;
                </i>
            </Typography>
            <Typography variant="body1" paragraph>
                Deze beroepstaak kan je op allerlei niveaus uitvoeren. Dit wordt bepaald door deze beroepstaak met de vaardigheden van dat niveau uit te voeren. Om meer begrip te krijgen van deze niveaus staan hieronder enkele factoren (die verwerkt zijn in de vaardigheden) die je kunnen helpen om in te schatten op welk niveau je de beroepstaak uitvoert. Bij de vaardigheden zie je, net als hieronder, de termen &apos;taakgericht&apos;, &apos;probleemgericht&apos;, &apos;situatiegericht&apos; en &apos;professiegericht&apos; terug. Hiermee kan je de verbinding leggen tussen de vaardigheden en de beroepstaak.
            </Typography>
            <Typography variant="body1" paragraph>
                De drie factoren zijn zelfstandigheid, inhoud en context. Per factor worden hieronder de niveaus verduidelijkt.
            </Typography>
        </Grid>
        <Grid item xs={12}>
            <Card>
                <CardHeader title="Zelfstandigheid" />
                <CardContent>
                    <Grid container spacing={5}>
                        <Grid item xs={12} sm={6} md={3}>
                            <Stack gap={1}>
                                <Stack
                                    direction="row"
                                    alignItems="center"
                                    justifyContent="space-between"
                                >
                                    <Typography variant="h6" fontWeight="normal">
                                        Taakgericht / Niveau 1
                                    </Typography>
                                </Stack>
                                <Typography
                                    variant="body2"
                                    whiteSpace="pre-wrap"
                                    sx={{ wordBreak: "break-word" }}
                                >
                                    Werkt onder algemene richtlijnen<br/><br/>
                                    Kan onvoorziene veranderingen plaatsen (en hierop anticiperen)
                                </Typography>
                            </Stack>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Stack gap={1}>
                                <Stack
                                    direction="row"
                                    alignItems="center"
                                    justifyContent="space-between"
                                >
                                    <Typography variant="h6" fontWeight="normal">
                                        Probleemgericht / Niveau 2
                                    </Typography>
                                </Stack>
                                <Typography
                                    variant="body2"
                                    whiteSpace="pre-wrap"
                                    sx={{ wordBreak: "break-word" }}
                                >
                                    Lost zelfstandig interactieve kwesties op<br/><br/>
                                    Voert/initieert projectactiviteiten
                                </Typography>
                            </Stack>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Stack gap={1}>
                                <Stack
                                    direction="row"
                                    alignItems="center"
                                    justifyContent="space-between"
                                >
                                    <Typography variant="h6" fontWeight="normal">
                                        Situatiegericht / Niveau 3
                                    </Typography>
                                </Stack>
                                <Typography
                                    variant="body2"
                                    whiteSpace="pre-wrap"
                                    sx={{ wordBreak: "break-word" }}
                                >
                                    Werkt onafhankelijk<br/><br/>
                                    Is in staat complexe en onvoorspelbare situaties op te lossen<br/><br/>
                                    Heeft een positief effect op het organisatiebeleid
                                </Typography>
                            </Stack>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Stack gap={1}>
                                <Stack
                                    direction="row"
                                    alignItems="center"
                                    justifyContent="space-between"
                                >
                                    <Typography variant="h6" fontWeight="normal">
                                        Professiegericht / Niveau 4
                                    </Typography>
                                </Stack>
                                <Typography
                                    variant="body2"
                                    whiteSpace="pre-wrap"
                                    sx={{ wordBreak: "break-word" }}
                                >
                                    Coördineert en bestuurt<br/><br/>
                                    Staat borg voor vernieuwing<br/><br/>
                                    Initieert allerlei (rand)factoren
                                </Typography>
                            </Stack>
                        </Grid> 
                    </Grid>
                </CardContent>
            </Card>
        </Grid>

        <Grid item xs={12}>
            <Card>
                <CardHeader title="Complexiteit Context" />
                <CardContent>
                    <Grid container spacing={5}>
                        <Grid item xs={12} sm={6} md={3}>
                            <Stack gap={1}>
                                <Stack
                                    direction="row"
                                    alignItems="center"
                                    justifyContent="space-between"
                                >
                                    <Typography variant="h6" fontWeight="normal">
                                        Taakgericht / Niveau 1
                                    </Typography>
                                </Stack>
                                <Typography
                                    variant="body2"
                                    whiteSpace="pre-wrap"
                                    sx={{ wordBreak: "break-word" }}
                                >
                                    Gestructureerd, overzichtelijk<br/><br/>
                                    Overzichtelijke context, problemen zijn afgebakend<br/><br/>
                                    Aanpak op basis van protocollen en/of opdrachtomschrijving
                                </Typography>
                            </Stack>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Stack gap={1}>
                                <Stack
                                    direction="row"
                                    alignItems="center"
                                    justifyContent="space-between"
                                >
                                    <Typography variant="h6" fontWeight="normal">
                                        Probleemgericht / Niveau 2
                                    </Typography>
                                </Stack>
                                <Typography
                                    variant="body2"
                                    whiteSpace="pre-wrap"
                                    sx={{ wordBreak: "break-word" }}
                                >
                                    Gestructureerd, maar deels complex en onvoorspelbaar<br/><br/>
                                    Vraagt een oplossingsgerichte benadering
                                </Typography>
                            </Stack>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Stack gap={1}>
                                <Stack
                                    direction="row"
                                    alignItems="center"
                                    justifyContent="space-between"
                                >
                                    <Typography variant="h6" fontWeight="normal">
                                        Situatiegericht / Niveau 3
                                    </Typography>
                                </Stack>
                                <Typography
                                    variant="body2"
                                    whiteSpace="pre-wrap"
                                    sx={{ wordBreak: "break-word" }}
                                >
                                    Gedeeltelijk gestructureerd, onvoorspelbaar en complex<br/><br/>
                                    Vraagt een oplossingsgerichte aanpak
                                </Typography>
                            </Stack>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Stack gap={1}>
                                <Stack
                                    direction="row"
                                    alignItems="center"
                                    justifyContent="space-between"
                                >
                                    <Typography variant="h6" fontWeight="normal">
                                        Professiegericht / Niveau 4
                                    </Typography>
                                </Stack>
                                <Typography
                                    variant="body2"
                                    whiteSpace="pre-wrap"
                                    sx={{ wordBreak: "break-word" }}
                                >
                                    Ongestructureerd<br/><br/>
                                    Multidisciplinaire of zeer specifieke context
                                </Typography>
                            </Stack>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Grid>

        <Grid item xs={12}>
            <Card>
                <CardHeader title="Complexiteit Inhoud" />
                <CardContent>
                    <Grid container spacing={5}>
                        <Grid item xs={12} sm={6} md={3}>
                            <Stack gap={1}>
                                <Stack
                                    direction="row"
                                    alignItems="center"
                                    justifyContent="space-between"
                                >
                                    <Typography variant="h6" fontWeight="normal">
                                        Taakgericht / Niveau 1
                                    </Typography>
                                </Stack>
                                <Typography
                                    variant="body2"
                                    whiteSpace="pre-wrap"
                                    sx={{ wordBreak: "break-word" }}
                                >
                                    Eenvoudige basisconcepten<br/><br/>
                                    Gericht op de (voorbereiding van) uitvoering van de opdracht
                                </Typography>
                            </Stack>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Stack gap={1}>
                                <Stack
                                    direction="row"
                                    alignItems="center"
                                    justifyContent="space-between"
                                >
                                    <Typography variant="h6" fontWeight="normal">
                                        Probleemgericht / Niveau 2
                                    </Typography>
                                </Stack>
                                <Typography
                                    variant="body2"
                                    whiteSpace="pre-wrap"
                                    sx={{ wordBreak: "break-word" }}
                                >
                                    Ruimte om meerdere basisconcepten en enkele benaderingen te combineren<br/><br/>
                                    Gericht op de inhoudelijke vraagstelling
                                </Typography>
                            </Stack>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Stack gap={1}>
                                <Stack
                                    direction="row"
                                    alignItems="center"
                                    justifyContent="space-between"
                                >
                                    <Typography variant="h6" fontWeight="normal">
                                        Situatiegericht / Niveau 3
                                    </Typography>
                                </Stack>
                                <Typography
                                    variant="body2"
                                    whiteSpace="pre-wrap"
                                    sx={{ wordBreak: "break-word" }}
                                >
                                    Nieuwe concepten voor verdieping<br/><br/>
                                    Verankering in de lokale situatie
                                </Typography>
                            </Stack>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Stack gap={1}>
                                <Stack
                                    direction="row"
                                    alignItems="center"
                                    justifyContent="space-between"
                                >
                                    <Typography variant="h6" fontWeight="normal">
                                        Professiegericht / Niveau 4
                                    </Typography>
                                </Stack>
                                <Typography
                                    variant="body2"
                                    whiteSpace="pre-wrap"
                                    sx={{ wordBreak: "break-word" }}
                                >
                                    Nieuwe concepten voor verdieping en innovatie<br/><br/>
                                    Integratie van diverse randfactoren in de eigen beroepspraktijk
                                </Typography>
                            </Stack>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Grid>
    </Grid>
    </>
  );
}
