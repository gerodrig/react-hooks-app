export interface User {
    id: number;
    name: string;
    title: string;
    tags: string[];
    contact: Contact;
    about: string;
    experience: Experience[];
    stats: Stats;
    skills: string[];
}

interface Contact {
    email: string;
    phone: string;
    location: string;
    website: string;
    joined: string;
}

interface Experience {
    role: string;
    company: string;
    period: string;
    description: string;
}

interface Stats {
    projects: number;
    connections: number;
    reviews: number;
}

export const users: User[] = [
    {
        id: 1001,
        name: 'Ana García',
        title: 'Lead Frontend Developer',
        tags: ['React', 'TypeScript', 'Next.js'],
        contact: {
            email: 'ana.garcia@email.com',
            phone: '+1 (555) 987-6543',
            location: 'New York, NY',
            website: 'anagarcia.dev',
            joined: 'April 2018',
        },
        about:
            'Creative frontend developer with 6 years of experience building modern web interfaces. Enthusiast of design systems and performance optimization.',
        experience: [
            {
                role: 'Lead Frontend Developer',
                company: 'Creative Labs',
                period: '2020 - Present',
                description:
                    'Developed component libraries and led frontend architecture redesigns.',
            },
            {
                role: 'Frontend Developer',
                company: 'Webify',
                period: '2017 - 2020',
                description:
                    'Built responsive websites and collaborated with UX teams.',
            },
        ],
        stats: {
            projects: 30,
            connections: 210,
            reviews: 4.8,
        },
        skills: ['JavaScript', 'React', 'TypeScript', 'Next.js', 'CSS', 'HTML'],
    },
    {
        id: 1002,
        name: 'Miguel Rodríguez',
        title: 'Senior Backend Engineer',
        tags: ['Node.js', 'Python', 'AWS'],
        contact: {
            email: 'miguel.rodriguez@email.com',
            phone: '+1 (555) 234-5678',
            location: 'Seattle, WA',
            website: 'mrodriguez.dev',
            joined: 'January 2017',
        },
        about:
            'Experienced backend engineer specializing in distributed systems and API development.',
        experience: [
            {
                role: 'Senior Backend Engineer',
                company: 'ScaleUp',
                period: '2019 - Present',
                description:
                    'Led microservices adoption and improved system scalability.',
            },
            {
                role: 'Backend Developer',
                company: 'CloudTech',
                period: '2016 - 2019',
                description:
                    'Implemented RESTful APIs and managed cloud infrastructure.',
            },
        ],
        stats: {
            projects: 18,
            connections: 145,
            reviews: 4.7,
        },
        skills: ['Node.js', 'Python', 'AWS', 'Docker', 'PostgreSQL'],
    },
    {
        id: 1003,
        name: 'Sofía Martínez',
        title: 'Full Stack Developer',
        tags: ['Vue.js', 'Node.js', 'TypeScript'],
        contact: {
            email: 'sofia.martinez@email.com',
            phone: '+1 (555) 456-7890',
            location: 'Austin, TX',
            website: 'sofia.dev',
            joined: 'June 2020',
        },
        about:
            'Full stack developer passionate about clean code and scalable solutions.',
        experience: [
            {
                role: 'Full Stack Developer',
                company: 'TechForge',
                period: '2020 - Present',
                description:
                    'Developed end-to-end solutions using Vue.js and Node.js.',
            },
            {
                role: 'Frontend Developer',
                company: 'Creative Apps',
                period: '2018 - 2020',
                description: 'Built interactive web applications.',
            },
        ],
        stats: {
            projects: 22,
            connections: 180,
            reviews: 4.9,
        },
        skills: ['Vue.js', 'Node.js', 'TypeScript', 'JavaScript', 'Docker'],
    },
    {
        id: 1004,
        name: 'David López',
        title: 'DevOps Engineer',
        tags: ['AWS', 'Docker', 'Kubernetes'],
        contact: {
            email: 'david.lopez@email.com',
            phone: '+1 (555) 321-6549',
            location: 'Chicago, IL',
            website: 'davidlopez.dev',
            joined: 'March 2016',
        },
        about:
            'DevOps engineer focused on automation and cloud infrastructure.',
        experience: [
            {
                role: 'DevOps Engineer',
                company: 'CloudOps Solutions',
                period: '2018 - Present',
                description:
                    'Implemented CI/CD pipelines and managed Kubernetes clusters.',
            },
            {
                role: 'Systems Engineer',
                company: 'TechNova',
                period: '2015 - 2018',
                description:
                    'Maintained cloud environments and deployment workflows.',
            },
        ],
        stats: {
            projects: 15,
            connections: 132,
            reviews: 4.6,
        },
        skills: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'Linux'],
    },
    {
        id: 1005,
        name: 'Emma Fernández',
        title: 'Software Engineer',
        tags: ['React', 'Node.js', 'GraphQL'],
        contact: {
            email: 'emma.fernandez@email.com',
            phone: '+1 (555) 987-1234',
            location: 'Boston, MA',
            website: 'emmafernandez.dev',
            joined: 'February 2019',
        },
        about:
            'Software engineer passionate about building performant and accessible web applications.',
        experience: [
            {
                role: 'Software Engineer',
                company: 'BrightCode',
                period: '2019 - Present',
                description: 'Developed modern SPAs using React and GraphQL.',
            },
            {
                role: 'Junior Developer',
                company: 'DevStudio',
                period: '2017 - 2019',
                description: 'Supported client project development.',
            },
        ],
        stats: {
            projects: 20,
            connections: 160,
            reviews: 4.8,
        },
        skills: ['JavaScript', 'React', 'Node.js', 'GraphQL', 'TypeScript'],
    },
    {
        id: 1006,
        name: 'Carlos Rivera',
        title: 'Senior Software Engineer',
        tags: ['Angular', 'TypeScript', 'Node.js'],
        contact: {
            email: 'carlos.rivera@email.com',
            phone: '+1 (555) 654-7891',
            location: 'Miami, FL',
            website: 'carlos.dev',
            joined: 'May 2017',
        },
        about:
            'Senior engineer with solid experience in enterprise web applications.',
        experience: [
            {
                role: 'Senior Software Engineer',
                company: 'EnterpriseSoft',
                period: '2019 - Present',
                description:
                    'Led frontend development using Angular and TypeScript.',
            },
            {
                role: 'Software Developer',
                company: 'CodeWorks',
                period: '2015 - 2019',
                description: 'Developed web services and APIs.',
            },
        ],
        stats: {
            projects: 25,
            connections: 175,
            reviews: 4.7,
        },
        skills: ['Angular', 'TypeScript', 'Node.js', 'JavaScript'],
    },
    {
        id: 1007,
        name: 'Linda Blanco',
        title: 'Full Stack Engineer',
        tags: ['React', 'Node.js', 'AWS'],
        contact: {
            email: 'linda.blanco@email.com',
            phone: '+1 (555) 321-9876',
            location: 'Denver, CO',
            website: 'lindablanco.dev',
            joined: 'July 2018',
        },
        about:
            'Engineer focused on delivering scalable applications and mentoring teams.',
        experience: [
            {
                role: 'Full Stack Engineer',
                company: 'Innovatech',
                period: '2018 - Present',
                description: 'Developed cloud-native applications and APIs.',
            },
        ],
        stats: {
            projects: 19,
            connections: 140,
            reviews: 4.6,
        },
        skills: ['React', 'Node.js', 'AWS', 'Docker', 'GraphQL'],
    },
    {
        id: 1008,
        name: 'Carlos Mendoza',
        title: 'Frontend Engineer',
        tags: ['Vue.js', 'JavaScript', 'TypeScript'],
        contact: {
            email: 'carlos.mendoza@email.com',
            phone: '+1 (555) 789-4321',
            location: 'San Diego, CA',
            website: 'carlosmendoza.dev',
            joined: 'August 2019',
        },
        about:
            'Frontend engineer with a keen eye for detail and user experience.',
        experience: [
            {
                role: 'Frontend Engineer',
                company: 'PixelWorks',
                period: '2019 - Present',
                description:
                    'Built high-performance UI components with Vue.js.',
            },
        ],
        stats: {
            projects: 17,
            connections: 130,
            reviews: 4.5,
        },
        skills: ['Vue.js', 'JavaScript', 'TypeScript', 'HTML', 'CSS'],
    },
    {
        id: 1009,
        name: 'Valentina Herrera',
        title: 'Software Developer',
        tags: ['React', 'Node.js', 'TypeScript'],
        contact: {
            email: 'valentina.herrera@email.com',
            phone: '+1 (555) 654-1234',
            location: 'Portland, OR',
            website: 'valentinaherrera.dev',
            joined: 'October 2020',
        },
        about:
            'Developer focused on building accessible and responsive web applications.',
        experience: [
            {
                role: 'Software Developer',
                company: 'WebWorks',
                period: '2020 - Present',
                description:
                    'Developed full-stack applications using React and Node.js.',
            },
        ],
        stats: {
            projects: 14,
            connections: 110,
            reviews: 4.9,
        },
        skills: ['React', 'Node.js', 'TypeScript', 'GraphQL', 'Docker'],
    },
    {
        id: 1010,
        name: 'Diego Torres',
        title: 'Cloud Solutions Architect',
        tags: ['AWS', 'Terraform', 'Python'],
        contact: {
            email: 'diego.torres@email.com',
            phone: '+1 (555) 987-3210',
            location: 'Los Angeles, CA',
            website: 'diegotorres.dev',
            joined: 'September 2015',
        },
        about:
            'Architect designing secure and scalable cloud infrastructures.',
        experience: [
            {
                role: 'Cloud Solutions Architect',
                company: 'CloudSphere',
                period: '2017 - Present',
                description: 'Designed infrastructure for large-scale applications.',
            },
            {
                role: 'DevOps Engineer',
                company: 'SysOps Inc.',
                period: '2014 - 2017',
                description:
                    'Managed cloud deployments and automation workflows.',
            },
        ],
        stats: {
            projects: 28,
            connections: 200,
            reviews: 4.8,
        },
        skills: ['AWS', 'Terraform', 'Python', 'Docker', 'Linux'],
    },
];