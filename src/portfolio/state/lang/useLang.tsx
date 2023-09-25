import { useState } from "react"

const langWords: any = {
    esp: {
        resume: 'CV',
        experience: 'Trayectoria',
        portfolio: 'Mi trabajo',
        name: 'Pablo Núñez Fernández',
        education: 'Educación',
        school: 'IES Perez de Guzman',
        career: 'Técnico en Sistema Microinformático y Redes, Informática',
        current_stack: 'Stack actual',
        today: 'Actualmente',
        description_1: 'Desarrollador FrontEnd React y JavaScript, con nociones básicas de TS y NodeJS.',
        description_2: 'Mis objetivos en enfocarme en React Native y aplicaciones móviles',
        description_3: 'Experiencia trabajando en mis proyectos pero nunca en una empresa',
        courses_title: 'Cursos',
        projects_title: 'Proyectos',

        //Course 9 NodeJS Basic: 
        course_title_8: 'NodeJs Básico',
        course_about_8: 'NodeJs Básico',
        //Course 8 ReactNative Basic
        course_title_7: 'React Native Básico',
        course_about_7: 'Desarrollar aplicaciones usando expo-cli y react-native-cli, manejando el estado en una sola pantalla.',
        //Course 7 ReactJs Intermediate
        course_about_6: 'ReactJs Intermedio.',
        course_title_6: 'ReactJs Intermedio',
        //Course 6  JavaScript ECS6+
        course_title_5: 'JavaScript ECS6+',
        course_about_5: ' JavaScript ECS6+.',
        //Course 5 React JS Fundamentals
        course_title_4: 'React JS Fundamentos',
        course_about_4: 'React JS Fundamentos.',
        //Course 4 React Modern JavaScript
        course_title_3: 'JavaScript Moderno',
        course_about_3: 'JavaScript Moderno.',
        //Course 3 Kotlin Basic
        course_about_2: 'Kotlin Básico.',
        course_title_2: 'Kotlin Básico',
        //Course 2 Docker Basic
        course_title_1: 'Docker Básico ',
        course_about_1: 'Docker Básico.',
        //Course 1 Git
        course_title_0: 'Git Fundamentos',
        course_about_0: 'Git Fundamentos',
    },
    eng: {
        resume: 'Resume',
        name: 'Pablo Nunez Fernandez',
        experience: 'Experience',
        portfolio: 'Portfolio',
        current_stack: 'Current Stack',
        today: 'Today',
        education: 'Education',
        school: 'IES Perez de Guzman',
        career: 'Technician in Microcomputer System and Networks, Computer Science',
        description_1: 'FrontEnd Developer with expertise in React and JavaScript, with basic knowledge of TypeScript and Node.js.',
        description_2: 'My goals include focusing on React Native and mobile applications.',
        description_3: 'I have experience working on personal projects but have not yet worked in a professional environment.',
        courses_title: 'Courses',
        projects_title: 'Projects',

        //Course 9 NodeJS Basic: 
        course_title_8: 'NodeJs Basic',
        course_about_8: 'NodeJs Basic',
        //Course 8 ReactNative Basic
        course_title_7: 'React Native Basic',
        course_about_7: 'Developing apps with expo and react-native-cli, managing the state in only one screen.',
        //Course 7 ReactJs Intermediate
        course_about_6: 'ReactJs Intermediate.',
        course_title_6: 'ReactJs Intermediate',
        //Course 6  JavaScript ECS6+
        course_title_5: 'JavaScript ECS6+',
        course_about_5: ' JavaScript ECS6+.',
        //Course 5 React JS Fundamentals
        course_title_3: 'Modern JavaScript',
        course_about_3: 'Modern JavaScript.',
        //Course 4 React Modern JavaScript
        course_title_4: 'React JS Fundamentals',
        course_about_4: 'React JS Fundamentals.',
        //Course 3 Kotlin Basic
        course_title_2: 'Kotlin Basic',
        course_about_2: 'Kotlin Basic.',
        //Course 2 Docker Basic
        course_title_1: 'Docker Basic ',
        course_about_1: 'Docker Basic.',
        //Course 1 Git Fundamentals
        course_title_0: 'Git Fundamentals',
        course_about_0: 'Git Fundamentals',
    }  
}

export const useLang = () => {
    const [lang, setLang] = useState<'ENG' | 'ESP'>('ENG')

    const getWord = (key: string): string => {
        const translated = lang === 'ENG' ? langWords.eng[key] : langWords.esp[key]
        return translated !== undefined ? translated : key
    }

    return {
        w: getWord,
        lang,
        setLang
    }
}
