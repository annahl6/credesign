export const Menu = () => {
    return( 
    <>
    <li>Home</li>
    <li>About</li>
    <li>Services</li>
    <li>Resume</li>
    <li>Portfolio</li>
    <li>Testimonial</li>
    <li>Blog</li>
    </>
    );
}
export const allresume = [
    {
        id: 1,
        headline: 'Education',
        details: [
            {
                key: 1,
                degree: 'BSc in Computer Science',
                university: 'University of ULAV (2018-2022)',
                description: 'Hen our power of choice is untrammelled and when nothing prevents our being able'
            },
            {
                key:2,
                degree: 'BSc in Computer Science',
                university: 'University of ULAV (2018-2022)',
                description: 'Hen our power of choice is untrammelled and when nothing prevents our being able'
            },
            {
                key:3,
                degree: 'BSc in Computer Science',
                university: 'University of ULAV (2018-2022)',
                description: 'Hen our power of choice is untrammelled and when nothing prevents our being able'
            }
        ]
    },
    {
        id: 2,
        headline: 'Software Skills',
        details: [
            {
                key:1,
                degree: 'UI/UX Design',
                university: 'University of ULAV (2018-2022)',
                description: 'Hen our power of choice is untrammelled and when nothing prevents our being able'
            },
            {
                key:2,
                degree: 'Web Developer',
                university: 'University of ULAV (2018-2022)',
                description: 'Hen our power of choice is untrammelled and when nothing prevents our being able'
            },
            {
                key:3,
                degree: 'App Develoment',
                university: 'University of ULAV (2018-2022)',
                description: 'Hen our power of choice is untrammelled and when nothing prevents our being able'
            }
        ]
    },
    {
        id: 3,
        headline: 'Experience',
        details: [
            {
                key:1,
                degree: 'Web Developer & Trainer',
                university: 'Brac Developer Team - (2012 - 2016)',
                description: 'Pomnis voluptas assumenda est, omnis dolor repellendus.'
            },
            {
                key:2,
                degree: 'Front-end Developer',
                university: 'Brane - (2020 - 2011)',
                description: 'Hen our power of choice is untrammelled and when nothing prevents our being able'
            },
            {
                key:3,
                degree: 'UI/UX Design',
                university: 'Google Out Tech - (2017 - Present)',
                description: 'Hen our power of choice is untrammelled and when nothing prevents our being able'
            }
        ]
    }
]
export const allportfolioimgs = [
    {
        id: 1,
        src: '/img/portfolio1.jpg', 
        alt: 'img1'
    },
    {
        id: 2,
        src: '/img/portfolio2.jpg',
        alt: 'img2'
    },
    {
        id: 3,
        src: '/img/portfolio3.jpg',
        alt: 'img3'
    },
    {
        id: 4,
        src: '/img/portfolio4.jpg',
        alt: 'img4'
    },
    {
        id: 5,
        src: '/img/portfolio5.jpg',
        alt: 'img5'
    },
    {
        id: 6,
        src: '/img/portfolio6.jpg',
        alt: 'img6'
    },
]
export const allTestimonial = [
    {
        id: 1,
        name: 'Siam Talukdar',
        img: '/img/siam.png',
        designation: 'CTO, Xyz Group',
        comment: '“Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature fr45 BC, mak it over 2000 years old.',
    },
    {
        id: 2,
        name: 'ABM Shawon Islam',
        img: '/img/abm.jpg',
        designation: 'CEO, Abc Agency',
        comment: '“Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature fr45 BC, mak it over 2000 years old.',
    },
    {
        id: 3,
        name: 'Azmir Uddin Alif',
        img: '/img/azmir.png',
        designation: 'Director, Techso',
        comment: '“Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature fr45 BC, mak it over 2000 years old.',
    }
]
export const allBlog = [
    {
        id: 1,
        title: 'How to Create a Successful Web Design',
        img: '/img/blog1.jpg',
        author: 'John Doe',
        date: '2022-01-15',
        comment: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
    },
    {
        id: 2,
        title: 'The Impact of User Experience on Business',
        img: '/img/blog2.jpg',
        author: 'Jane Smith',
        date: '2022-02-10',
        comment: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
    },
    {
        id: 3,
        title: 'The 7 Essential Skills for a Successful Developer',
        img: '/img/blog3.jpg',
        author: 'Mark Johnson',
        date: '2022-03-05',
        comment: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
    }
]