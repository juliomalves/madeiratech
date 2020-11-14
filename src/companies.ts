export type Address = {
    street?: string
    postcode?: string
    city: string
    gmaps?: string
}

export type Contact = {
    phone?: string
    email?: string
}

export type Website = {
    home: string
    jobs?: string
}

export type Social = {
    facebook?: string
    instagram?: string
    github?: string
    linkedin?: string
    twitter?: string
    youtube?: string
}

export type Company = {
    name: string
    category?: string
    description: string
    logo: string
    website: Website
    address: Address
    contact?: Contact
    social?: Social
}

export const companies: Company[] = [
    {
        name: 'Lorem Ipsum',
        category: 'lorem-ipsum',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        website: {
            home: 'https://www.lipsum.com/',
            jobs: 'https://www.lipsum.com/jobs'
        },
        address: {
            street: 'Lorem',
            postcode: 'Ipsum',
            city: 'Dolor'
        },
        contact: {
            phone: '123456789',
            email: 'lorem@ipsum.pt'
        },
        social: {
            facebook: 'lorem-ipsum',
            instagram: 'lorem-ipsum',
            linkedin: 'lorem-ipsum',
            twitter: 'lorem-ipsum',
            youtube: 'lorem-ipsum'
        }
    }
]
