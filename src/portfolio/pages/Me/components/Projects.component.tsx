import React from 'react';
import { Grid, useTheme } from "@mui/material"
import { ProjectComponent } from "./Project.component"
import { IProject } from "../../../interfaces/project.interface"


const projects: IProject[] = [
    {
        background: 'videoclub.png', 
        link: '',
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
        background: 'ecommerce.png',
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
        background: 'calc.png',
        link: '',
        github: 'https://github.com/PavDev3/calculadora-prestamo',
        title: {
            ENG: 'Loan Calculator (React)',
            ESP: 'Calculadora Préstamo (React)'
        },
        techs: ['react'],
        description: {
            ENG: [
                'Basic loan calculator with React.'
                , 'You will be able to see React states. You will also be able to see the fees with a graph.'
                , 'Using useEffect , useState.'
            ],
            ESP: [
                'Calculadora de préstamos básica con React.'
                , 'Podrás ver estados de React. También podrás ver los intereses con una gráfica'
                , 'Usando useEffect , useState.'
            ]
        }
    },
    {
        background: 'traductor.png',
        link: '',
        github: 'https://github.com/PavDev3/TraductorChatGPT',
        title: {
            ENG: 'Translate with ChatGPT',
            ESP: 'Traductor con ChatGPT'
        },
        techs: ['react', 'ts'],
        description: {
            ENG: [
                'Translator with ChatGPT, you will need an API KEY from OpenAI to be able to use it. It is just a demonstration of how the OpenAI API can be used to translate text.'
            ],
            ESP: [
                'Traductor con ChatGPT, necesitarás una API KEY de OpenAI para poder usarlo. Es solo una demostración de como se puede usar la API de OpenAI para traducir texto.'
            ],

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