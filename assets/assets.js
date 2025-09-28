import user_image from './user-image.jpg';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.jpg';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';
import work1 from './work-1.jpg';
import jupyter from './jupyter.png';
import powerbi from './powerbi.png';
import excel from './excel.png';
import sql from './sql.png';
import numpy from './numpy.png';
import webscraping from './webscraping.png';
import pandas from './pandas.png';
import matplotlib from './matplotlib.png';
import python from './python.png'
import badge1 from './badge1.png'; 
import badge2 from './badge2.png';

export const assets = {
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    firebase,
    figma,
    git,
    mongodb,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark,
    jupyter,
    powerbi,
    excel,
    pandas,
    webscraping,
    numpy,
    matplotlib,
    sql,
    badge1,
    badge2,
    python
};

export const workData = [
    {
        title: 'Patient Data Analysis',
        description: 'Power Bi',
        language : '',
        bgImage: '/work-7.png',
        link: 'https://github.com/aniveshsharma/Patient_Dashboard',
    },
    {
        title: 'Ecommerce Data Analysis',
        description: 'Python, MySQL',
        language : 'Pandas, NumPy, Matplotlib/Seaborn',
        bgImage: '/work-1.jpg',
        link: 'https://github.com/aniveshsharma/Ecommerce-Data-Analysis',
    },
    {
        title: 'Stock Price Scrapping',
        description: 'Python',
        language : 'requests, Beautifulsoup',
        bgImage: '/work-2.jpg',
        link: 'https://github.com/aniveshsharma/Stock-Price-Scrapping',
    },
    {
        title: 'School Managenent System',
        description: 'Apache Netbeans',
        language : 'Java Swings',
        bgImage: '/work-3.png',
        link: 'https://github.com/aniveshsharma/School_Management_System',
    },
    {
        title: 'Spotify Data Analysis',
        description: 'PostgreSQL',
        language : '',
        bgImage: '/work-4.jpg',
        link: 'https://github.com/aniveshsharma/Spotify_Data_Analysis_using_SQL',
    },
    {
        title: 'Student Exam Performance Analysis',
        description: 'Pyhton',
        language : 'Streamlit, Pandas, NumPy, Matplotlib/Seaborn',
        bgImage: '/work-5.jpg',
        link: 'https://github.com/aniveshsharma/Student_Performance_Analysis',
    },
    {
        title: 'Virat Kohli Cricket Career',
        description: 'Power BI',
        language : '',
        bgImage: '/work-6.jpg',
        link: 'https://github.com/aniveshsharma/Virat-Kohli-Cricket-Career',
    },
]

export const mycertification = [
    { icon: assets.edu_icon, title: 'Data Analytics', description: 'Institute:- TGC Animation and Multimedia Place:- South Ex., New Delhi', link: 'https://drive.google.com/file/d/1Q8ZI-vB24LY0S1slUkaSu_X73qDY2poq/view?usp=sharing' },
    { icon: assets.edu_icon, title: 'Bachelor of Computer Application (BCA)', description: 'Indira Gandhi National Open University Place:- New Delhi', link: '' },
    { icon: assets.edu_icon, title: 'Online certifications', description: 'Python (IBM, Hacker Rank, Cognitive.ai), SQL Intermidiate (Hacker Rank)   , Web Scraping using Beautiful Soup (Simpli learn| SkillUP)', link: 'https://drive.google.com/drive/folders/1NJf9YMTPhoOZy5ZMqxSChq62ict6IBvj?usp=sharing' },
    { icon: assets.edu_icon, title: 'Advance Deploma in Computer Application (ADCA)', description: 'SS Technology Center Place:- Ballia, Uttar Pradesh', link: 'https://drive.google.com/file/d/1ITkUxVCYHIDndDXNT_4PJTnvWm7LJ7kn/view?usp=sharing' },
]

export const infoList = [
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Languages', description: 'Python, My SQL, Pandas, Numpy, Matplotlib, Seaborn, Web scraping' },
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'Data Analytics and BCA Student' },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description: 'Built more than 5 projects' }
];

export const toolsData = [
    assets.git,assets.python, assets.vscode, assets.jupyter,assets.sql, assets.pandas, assets.numpy, assets.webscraping, assets.matplotlib, assets.powerbi, assets.excel, 
];

export const badges = [
  { id: 1, image: badge1, title: 'Certified Data Analyst', link: 'https://example.com/cert1' },
  { id: 2, image: badge2, title: 'Python Expert', link: 'https://example.com/cert2' },
];