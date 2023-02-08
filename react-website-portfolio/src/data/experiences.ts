enum ExperienceType {
    FRONTEND = 'Frontend',
    BACKEND = 'Backend'
}

interface ExperienceAttributes {
    id: number;
    type: ExperienceType;
    title: string;
    exp: string;
}

const experience: ExperienceAttributes[] = [
    {
        id: 1,
        type: ExperienceType.FRONTEND,
        title: 'JavaScript',
        exp: 'Intermediário',
    },
    {
        id: 2,
        type: ExperienceType.FRONTEND,
        title: 'React',
        exp: 'Intermediário',
    },
    {
        id: 3,
        type: ExperienceType.FRONTEND,
        title: 'HTML',
        exp: 'Intermediário',
    },
    {
        id: 4,
        type: ExperienceType.FRONTEND,
        title: 'CSS',
        exp: 'Intermediário',
    },
    {
        id: 5,
        type: ExperienceType.FRONTEND,
        title: 'Tailwind CSS',
        exp: 'Intermediário',
    },
    {
        id: 6,
        type: ExperienceType.FRONTEND,
        title: 'NextJs',
        exp: 'Básico',
    },
    {
        id: 7,
        type: ExperienceType.FRONTEND,
        title: 'Vite',
        exp: 'Básico',
    },
    {
        id: 8,
        type: ExperienceType.FRONTEND,
        title: 'Jest',
        exp: 'Básico',
    },
    {
        id: 9,
        type: ExperienceType.BACKEND,
        title: 'PL/SQL',
        exp: 'Experiente',
    },
    {
        id: 10,
        type: ExperienceType.BACKEND,
        title: 'Firebird',
        exp: 'Experiente',
    },
    {
        id: 11,
        type: ExperienceType.BACKEND,
        title: 'C#/.NET',
        exp: 'Intermediário',
    },
    {
        id: 12,
        type: ExperienceType.BACKEND,
        title: 'NodeJS',
        exp: 'Intermediário',
    },
    {
        id: 13,
        type: ExperienceType.BACKEND,
        title: 'Delphi',
        exp: 'Intermediário',
    },
    {
        id: 14,
        type: ExperienceType.BACKEND,
        title: 'Oracle',
        exp: 'Intermediário',
    },
    {
        id: 15,
        type: ExperienceType.BACKEND,
        title: 'Typescript',
        exp: 'Intermediário',
    },
    {
        id: 16,
        type: ExperienceType.BACKEND,
        title: 'NestJS',
        exp: 'Básico',
    },
    {
        id: 17,
        type: ExperienceType.BACKEND,
        title: 'Postgres',
        exp: 'Básico',
    },
    {
        id: 18,
        type: ExperienceType.BACKEND,
        title: 'TypeORM',
        exp: 'Básico',
    },
    {
        id: 19,
        type: ExperienceType.BACKEND,
        title: 'Prisma',
        exp: 'Básico',
    },
    {
        id: 20,
        type: ExperienceType.BACKEND,
        title: 'MongoDB',
        exp: 'Básico',
    },

]

class ExperienceList {
    private static experiences: ExperienceAttributes[] = experience
    static get backend(): ExperienceAttributes[] {
        return this.experiences.filter(experience => experience.type === ExperienceType.BACKEND)
    }

    static get frontend(): ExperienceAttributes[] {
        return this.experiences.filter(experience => experience.type === ExperienceType.FRONTEND)
    }
}


export { ExperienceList };