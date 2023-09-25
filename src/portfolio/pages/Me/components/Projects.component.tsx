import { Grid, useTheme } from "@mui/material"
import { ProjectComponent } from "./Project.component"
import { IProject } from "../../../interfaces/project.interface"


const projects: IProject[] = [
    {
        background: '',
        // TODO Link 
        link: '/projects/movies_react/',
        github: 'https://github.com/PavDev3/videoclub',
        title: {
            ENG: 'New VideoClub App! (React)',
            ESP: 'Nueva VideoClub App! (React)'
        },
        techs: ['react'],
        description: {
            ENG: [
                'Web application developed in React. Connected to a movie API'
                , 'The page displays a list of movies.'
                , 'Movies can be sorted alphabetically.'


            ],
            ESP: [
                'Aplicación web desarrollada en React. Conectada a una API de películas.'
                , 'En la página, se muestra una lista de las películas. Los usuarios pueden observar estas películas y su cartelera.'
                , 'Se podrá ordenar alfabéticamente.'
            ]
        }
    },
    {
        // TODO -> Foto , y links 
        background: '',
        link: '',
        github: 'https://github.com/PavDev3/React-eCommerce',
        title: {
            ENG: 'e-Commerce (React) ',
            ESP: 'e-Commerce (React) '
        },
        techs: ['react'],
        description: {
            ENG: [
                'A basic simulated web shopping application where filters can be used to sort by categories and prices.'
                , 'List of products from a JSON.'
                , 'Implemented shopping cart where products can be added or removed.'
            ],
            ESP: [
                'Aplicación simulando web de compra básico donde se podrá ver el uso de los filtros para ordenar por categorías y precios'
                , 'Lista de productos procedente de un JSON.'
                , 'Implementado carro de la compra donde se podrá añadir o eliminar productos'
            ]
        }
    },
    {
        background: '',
        link: '',
        github: 'https://github.com/PavDev3/tic-tac-toe',
        title: {
            ENG: 'Tic Tac Toe (React)',
            ESP: 'Tres en linea (React)'
        },
        techs: ['react'],
        description: {
            ENG: [
                'Basic Tic Tac Toe game'
                , 'Where you can see the different states of the game.'
                , 'Using useEffect , useState.'
            ],
            ESP: [
                'Juego básico de tres en linea'
                , 'Donde se podrá ver los diferentes tipos de estados básicos que trae React para su renderizado.'
                , 'Haciendo uso de useEffect , useState.'
            ]
        }
    },
    {
        background: '',
        link: '',
        github: 'https://github.com/RamPonce7/Angular/tree/master/movie',
        title: {
            ENG: 'Project',
            ESP: 'Proyecto'
        },
        techs: ['react', 'ts'],
        description: {
            ENG: [
                'Futuro proyecto',
                ''],
            ESP: [
                'Proyecto futuro',
                ``],

        }
    }

]


const ProjectsComponent = () => {
    const theme = useTheme()
    return (
        <Grid container width={'100%'} sx={{
            [theme.breakpoints.down('md')]: {
                ml: 0
            },
            ml: 1
        }} >
            {projects.map((project, index) => (<ProjectComponent project={project} key={index} index={projects.length - (index + 1)} />))}
        </Grid>
    )
}

export default ProjectsComponent