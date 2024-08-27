import { useEffect, useState } from "react";

const Button = ({ action }: { action: () => void }) => {
    return (
        <button type="button" onClick={action} className="print:hidden p-4 font-semibold text-lg text-white bg-emerald-500 flex items-center justify-center h-12 w-40 my-4 rounded border-b-2 border-b-emerald-700 shadow-sm shadow-black">
            Dark Mode
        </button>
    )
}

export default function Page() {
    let [darkMode, setDarkMode] = useState<boolean>(false);

    const ToggleDarkMode = () => setDarkMode(prev => !prev);

    useEffect(() => {
        let a = document.body.classList;
        if (darkMode) {
            a.remove("bg-neutral-100");
            a.add("bg-zinc-900", "dark");
        }
        else {
            a.remove("bg-zinc-900", "dark");
            a.add("bg-neutral-100");
        }
    }, [darkMode]);

    return (
        <div className="container mx-auto print:my-0 my-10 sm:flex sm:flex-col sm:items-center px-4">
            <Button action={ToggleDarkMode} />
            <div className="grid gap-5 lg:gap-0 lg:grid-cols-[3fr,2fr] print:border-none print:max-w-7xl max-w-6xl bg-white dark:bg-zinc-800 border-zinc-400 border py-6 px-4 lg:p-12">
                <div className="flex flex-col gap-5 px-2 sm:px-6">
                    <span className="sm:mb-5 flex-flex-col">
                        <h1 className="text-2xl sm:text-3xl font-bold dark:text-white">Luiz S. Dias Gomes</h1>
                        <h3 className="sm:text-lg text-zinc-600 font-semibold dark:text-white">Full Stack Developer</h3>
                    </span>
                    <div className="flex flex-col gap-2">
                        <h2 className="text-emerald-700 dark:text-emerald-500 font-bold text-xl">LARGER PROJECTS</h2>
                        <span className="flex flex-col gap-2">
                            <h3 className="font-semibold text-lg text-slate-700 dark:text-slate-200">Java Script</h3>
                            <div className="sm:px-6 flex flex-col gap-2">
                                <span className="flex flex-col gap-2">
                                    <a href="https://tutorlol.com" className="sm:ml-0 ml-4 w-fit list-item font-semibold border-b border-b-sky-600 text-sky-600 dark:border-b-sky-400 dark:text-sky-400 marker:text-slate-600 dark:marker:text-slate-300">TutorLoL</a>
                                    <p className="text-sm text-zinc-700 dark:text-zinc-300 text-justify">Realtime calculator for a game. Uses Riot games's API to get player's in-game information and stores it in a Postgres Database. Then, server locates the game by using a code and use the data to calculate the outputs, which are then sent to a website and displayed.</p>
                                </span>
                                <span className="flex flex-col gap-2">
                                    <a href="https://westboca.tutorlol.com/games/periodictable" className="sm:ml-0 ml-4 w-fit list-item font-semibold border-b border-b-sky-600 text-sky-600 dark:border-b-sky-400 dark:text-sky-400 marker:text-slate-600 dark:marker:text-slate-300">Periodic Table Game</a>
                                    <p className="text-sm text-zinc-700 dark:text-zinc-300 text-justify">User have to choose one of 3 languages to play the game, gamemode to play, and in which difficulty. Then, the name or electron configuration of an element will pop up in the screen and the user needs to click in the correct position in the periodic table.</p>
                                </span>
                            </div>
                        </span>
                        <span className="flex flex-col gap-2">
                            <h3 className="font-semibold text-lg text-slate-700 dark:text-slate-200">Type Script</h3>
                            <div className="sm:px-6 flex flex-col gap-2">
                                <span className="flex flex-col gap-2">
                                    <a href="https://front.tutorlol.com" className="sm:ml-0 ml-4 w-fit list-item font-semibold border-b border-b-sky-600 text-sky-600 dark:border-b-sky-400 dark:text-sky-400 marker:text-slate-600 dark:marker:text-slate-300">TutorLoL Remake</a>
                                    <p className="text-sm text-zinc-700 dark:text-zinc-300 text-justify">Complete remake of TutorLoL. All Java Script functions were rewritten in Type Script and the logic was revised, as well as the use of Prisma instead of Sequellize. In frontend, React, Vite, and Tailwind were used instead of pure HTML, CSS and jQuery assisting Java Script.</p>
                                </span>
                                <span className="flex flex-col gap-2">
                                    <a href="https://westboca.tutorlol.com/games/cardgame/test/question.html" className="sm:ml-0 ml-4 w-fit list-item font-semibold border-b border-b-sky-600 text-sky-600 dark:border-b-sky-400 dark:text-sky-400 marker:text-slate-600 dark:marker:text-slate-300">Educational Quiz</a>
                                    <p className="text-sm text-zinc-700 dark:text-zinc-300 text-justify">A game similar to Khan Academy but with harder questions of any field. Select a random AI-Generated question for a choosen difficulty and content, and stores how many questions were guessed correctly or wrong to assign a score. Questions can also be created manually.</p>
                                </span>
                            </div>
                        </span>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h2 className="text-emerald-700 dark:text-emerald-500 font-bold text-xl">EXPERIENCE</h2>
                        <span className="flex flex-col gap-2">
                            <h3 className="font-semibold text-lg text-slate-700 dark:text-slate-200">Websites</h3>
                            <div className="sm:px-6 flex flex-col gap-2">
                                <span className="flex flex-col gap-2">
                                    <a href="https://gloriagourmet.com.br" className="sm:ml-0 ml-4 w-fit list-item font-semibold border-b border-b-sky-600 text-sky-600 dark:border-b-sky-400 dark:text-sky-400 marker:text-slate-600 dark:marker:text-slate-300">Gloria Gourmet Bakery</a>
                                    <p className="text-sm text-zinc-700 dark:text-zinc-300 text-justify">NodeJS project using HTML5, CSS, and Java Script to make the design and menu of items sold by the bakery in Boca Raton.</p>
                                </span>
                                <span className="flex flex-col gap-2">
                                    <a href="https://www.nataliacavalhier.com" className="sm:ml-0 ml-4 w-fit list-item font-semibold border-b border-b-sky-600 text-sky-600 dark:border-b-sky-400 dark:text-sky-400 marker:text-slate-600 dark:marker:text-slate-300">Business Assistance Mentor</a>
                                    <p className="text-sm text-zinc-700 dark:text-zinc-300 text-justify">Natalia Cavalhier's personal website created using HTML5 and CSS and hosted.</p>
                                </span>
                            </div>
                        </span>
                    </div>
                </div>
                <div className="flex flex-col gap-5 px-2 sm:px-6">
                    <div className="flex flex-col gap-2">
                        <h2 className="text-emerald-700 dark:text-emerald-500 font-bold text-xl">TECHNOLOGIES</h2>
                        <span className="flex flex-col px-6">
                            <h3 className="font-semibold list-item text-slate-700 dark:text-slate-200">Type Script</h3>
                            <h3 className="font-semibold list-item text-slate-700 dark:text-slate-200">Java Script</h3>
                            <h3 className="font-semibold list-item text-slate-700 dark:text-slate-200">TailwindCSS</h3>
                            <h3 className="font-semibold list-item text-slate-700 dark:text-slate-200">Express</h3>
                            <h3 className="font-semibold list-item text-slate-700 dark:text-slate-200">jQuery</h3>
                            <h3 className="font-semibold list-item text-slate-700 dark:text-slate-200">Prisma</h3>
                            <h3 className="font-semibold list-item text-slate-700 dark:text-slate-200">Node</h3>
                            <h3 className="font-semibold list-item text-slate-700 dark:text-slate-200">React</h3>
                            <h3 className="font-semibold list-item text-slate-700 dark:text-slate-200">HTML</h3>
                            <h3 className="font-semibold list-item text-slate-700 dark:text-slate-200">CSS</h3>
                        </span>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h2 className="text-emerald-700 dark:text-emerald-500 font-bold text-xl">CONTACT</h2>
                        <span className="flex flex-col px-2 sm:px-6 gap-1">
                            <h3 className="font-semibold text-slate-700 dark:text-slate-200">+1 (561) 887-9018</h3>
                            <span className="font-semibold text-slate-700 dark:text-slate-200">Orlando, FL, USA</span>
                            <span className="text-slate-700 dark:text-slate-200 flex items-center flex-wrap gap-1">
                                <p className="font-semibold">Email:</p>
                                <a href="mailto:luizgustavodgomes@gmail.com" className="text-blue-500 dark:text-blue-400">luizgustavodgomes@gmail.com</a>
                            </span>
                            <span className="text-slate-700 dark:text-slate-200 flex items-center flex-wrap gap-1">
                                <p className="font-semibold">LinkedIn:</p>
                                <a href="https://linkedin.com/in/luiz-gustavo-695017320" className="text-blue-500 dark:text-blue-400">linkedin.com/in/luiz-gustavo</a>
                            </span>
                            <span className="text-slate-700 dark:text-slate-200 flex items-center flex-wrap gap-1">
                                <p className="font-semibold">GitHub:</p>
                                <a href="https://github.com/LuizGomes56" className="text-blue-500 dark:text-blue-400">github.com/LuizGomes56</a>
                            </span>
                        </span>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h2 className="text-emerald-700 dark:text-emerald-500 font-bold text-xl">AWARDS</h2>
                        <span className="flex flex-col px-6 gap-1">
                            <h3 className="font-semibold text-lg text-slate-700 dark:text-slate-200">Chemathon 2024, University of Florida</h3>
                            <div className="sm:px-6 flex flex-col gap-2">
                                <p className="text-sm text-zinc-700 dark:text-zinc-300 list-item text-justify">Second place representing West Boca Raton High School</p>
                            </div>
                        </span>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h2 className="text-emerald-700 dark:text-emerald-500 font-bold text-xl">FORMATION</h2>
                        <span className="flex flex-col gap-2 px-6">
                            <h3 className="font-semibold list-item text-slate-700 dark:text-slate-200">West Boca Raton High School</h3>
                            <h3 className="font-semibold list-item text-slate-700 dark:text-slate-200">University of Central Florida</h3>
                        </span>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h2 className="text-emerald-700 dark:text-emerald-500 font-bold text-xl">LANGUAGES</h2>
                        <span className="flex flex-col gap-2 px-6">
                            <h3 className="font-semibold list-item text-slate-700 dark:text-slate-200">Native Portuguese</h3>
                            <h3 className="font-semibold list-item text-slate-700 dark:text-slate-200">Fluent English</h3>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}