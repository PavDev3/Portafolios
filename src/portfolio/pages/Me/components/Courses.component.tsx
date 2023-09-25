
import { useLangContext } from "../../../state/lang/langContext"
import { Box, Chip, Grid, Paper, Stack, Typography, useTheme } from "@mui/material"
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SchoolIcon from '@mui/icons-material/School';
const courses = [
    {
        img: '/img/nodejs.png',
        year: '2023',
        platform: 'Udemy',
        tags: ['NodeJs', 'Express', 'MongoDB',  'React Native', 'API', 'Docker']
    },
    {
        img: '/img/react.png',
        year: '2023',
        platform: 'Udemy',
        tags: ['React', 'Context', 'Router', 'TS', 'Axios', 'LazyLoad', 'Suspense']
    },
    {
        img: '/img/js.png',
        year: '2023',
        platform: 'freeCodeCamp',
        tags: ['Js', 'ECS6+', 'Arrow functions']

    },
    {
        img: '/img/react.png',
        year: '2023',
        platform: 'FSOpen',
        tags: ['React', 'Components', 'State', 'Styled']

    },
    {
        img: '/img/js.png',
        year: '2023',
        platform: 'freeCodeCamp',
        tags: ['Js', 'Promises', 'Data Structures', 'JavaScript Algorithms' ]

    },
    {
        img: '/img/kotlin.png',
        year: '2022',
        platform: 'Udemy',
        tags: ['Kotlin', 'JetPackCompose', 'Components', 'MVVM', 'Services']

    },
    {
        img: '/img/docker.png',
        year: '2023',
        platform: 'Udemy',
        tags: ['Docker', 'Images', 'Dockerfile',]

    },

    {
        img: '/img/git.png',
        year: '2022',
        platform: 'Udemy',
        tags: ['Git', 'Commands', 'Github']

    },
]
const CoursesComponent = () => {
    const { w } = useLangContext()
    const theme = useTheme()
    return (
        <Grid container width={'100%'} sx={{
            [theme.breakpoints.down('md')]: {
                ml: 0
            },
            ml: 1
        }} >
            {courses.map(({ img, tags, year, platform }, index) => (
                <Grid item xs={12} sm={6} key={index} sx={{
                    padding: '0 !important',
                    mb: 1,
                    mt: 1
                }}>
                    <Paper sx={{
                        height: '100%',
                        margin: 1,
                        [theme.breakpoints.down('sm')]: {
                            ml: 0,
                            mr: 0
                        },
                    }}>
                        <Grid container spacing={1} sx={{ alignItems: 'center' }}>
                            <Grid item xs={3}   >
                                <Box p={1}>
                                    <img alt={w(`course_title_${courses.length - (index + 1)}`)} src={img} style={{ maxWidth: '100%' }} />
                                </Box>

                            </Grid>
                            <Grid item xs={9} sx={{
                            }} >
                                <Stack sx={{
                                    paddingBottom: 1,
                                    paddingRight: 1
                                }}>
                                    <Stack spacing={1} pt={1} pb={1}>
                                        <Typography variant="body1" color={theme.palette.primary.dark}>
                                            {w(`course_title_${courses.length - (index + 1)}`)}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            <CalendarMonthIcon sx={{
                                                verticalAlign: 'middle',
                                            }} /> {year}
                                        </Typography>
                                        <Typography variant="caption" color="text.secondary">
                                            <SchoolIcon sx={{
                                                verticalAlign: 'middle'
                                            }} /> {platform}
                                        </Typography>
                                    </Stack>
                                </Stack>
                            </Grid>
                            <Grid item xs={12} sx={{
                                paddingTop: '0px !important'
                            }}>

                                <Box mb={1} ml={2} mr={1} >
                                    {tags.map((tag) => (
                                        <Chip sx={{ mr: 1, mt: 1 }} label={tag} key={tag} />
                                    ))}

                                </Box>
                            </Grid>
                        </Grid>

                    </Paper>

                </Grid>
            ))}

        </Grid>
    )
}

export default CoursesComponent

