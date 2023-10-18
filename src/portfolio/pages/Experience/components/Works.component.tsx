import { Box, Grid, Paper, Stack, Typography, useTheme } from "@mui/material"
import React from 'react';
import WorkComponent from "./Work.component"
import { IWork } from "../../../interfaces/work.interface"
import { useLangContext } from "../../../state/lang/langContext"

const works: IWork[] = [
    {
        company: 'Mac to Life',
        role: 'Senior Information Technology Technician',
        from: '07/2020',
        to: '09/2021',
        goals: {
            ENG: [
                'Responsible for technical and software inspections,troubleshooting and repairing of Apple devices on a high scale from contractors, such as MacBook,MacBook Pro,Apple Watch,iPhone,iPad and Beats line products and Also all kinds of Apple Accessories.'
                ,'Responsible also for Walk-in customers requiring same day iOS device hardware and Software repairs. - Ensured for updating logs and updating rest of the team for the condition of every device.'
                ,'Support rest of the Workshop team with sharing technical and software knowledge about all the products and giving training on new comers in the iOS workshop.'
                ,'Ensure that all productivity targets are adhered to consistently and Ensure that key tasks are completed in timely manner.',
            ],
            ESP: [
                'Responsable de inspecciones técnicas y de software, resolución de problemas y reparación de dispositivos Apple a gran escala de parte de contratistas, tales como MacBook, MacBook Pro, Apple Watch, iPhone, iPad y productos de la línea Beats, así como todo tipo de accesorios de Apple.'
                , 'También responsable de atender a clientes que acuden directamente a requerir reparaciones de hardware y software de dispositivos iOS en el mismo día. Aseguraba la actualización de registros y comunicaba al resto del equipo el estado de cada dispositivo.'
                , 'Brindaba apoyo al resto del equipo del taller compartiendo conocimientos técnicos y de software sobre todos los productos y proporcionando capacitación a los recién llegados al taller de iOS.'
                , 'Garantizaba que se cumplieran de manera constante todos los objetivos de productividad y se aseguraba de que las tareas clave se completaran de manera oportuna.'
            ]
        },
    },
]


export const WorksComponent = () => {

    const theme = useTheme()
    const { w } = useLangContext()
    return (
        <Box sx={{
            [theme.breakpoints.up('md')]: {
                ml: '320px'
            },

        }}>
            {works.map((work, index) => (<WorkComponent work={work} key={index} index={index} />))}

            <Paper sx={{
                padding: 2,
                display: 'none',
                mt: 1,
                [theme.breakpoints.only('xs')]: {
                    display: 'block'

                },
            }}>
                <Grid container alignItems={'center'}>
                    <Grid item xs={12} mb={1}>
                        <Typography variant='body1' fontWeight={600} color={theme.palette.primary.dark} >
                            {w('education')}
                        </Typography>
                    </Grid>

                    <Grid item xs={12} mb={1}>
                        <Stack>
                            <Typography variant='body2' mt={1} >
                                {w('school')}
                            </Typography>
                            <Typography variant='caption' mt={1} color="text.secondary">
                                {w('career')}
                            </Typography>
                            <Typography variant='caption' mt={1} color="text.secondary">
                                <i> 07/2013 - 07/2017</i>
                            </Typography>


                        </Stack>
                    </Grid>
                </Grid>
            </Paper>

        </Box>
    )
}
