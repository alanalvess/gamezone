import {FaGithubSquare, FaLinkedin} from "react-icons/fa";
import {Card, CardContent} from "@/components/ui/card"

const developersTeam = [
    {
        id: 1,
        name: "Adriano Vieira",
        githubLink: "https://github.com/AdrianoVS87",
        linkedinLink: "/",
        picture: "https://avatars.githubusercontent.com/u/40774610?v=4",
    },
    {
        id: 2,
        name: "Alan Alves",
        githubLink: "https://github.com/alanalvess",
        linkedinLink: "https://www.linkedin.com/in/alanalvess/",
        picture: "https://avatars.githubusercontent.com/u/85147157?v=4",
    },
    {
        id: 3,
        name: "Brunno Faria",
        githubLink: "https://github.com/BrunnoFaria",
        linkedinLink: "/",
        picture: "https://avatars.githubusercontent.com/u/85183803?v=4",
    },
    {
        id: 4,
        name: "Bruno Barbosa",
        githubLink: "https://github.com/ALTbruno",
        linkedinLink: "https://www.linkedin.com/in/brunoribeirobarbosa",
        picture: "https://avatars.githubusercontent.com/u/84299852?v=4",
    },
    {
        id: 5,
        name: "Rafael Rodrigues",
        githubLink: "https://github.com/Rafa-Roodrigues",
        linkedinLink: "/",
        picture: "https://avatars.githubusercontent.com/u/56421375?v=4",
    },
    {
        id: 6,
        name: "Vivian Sanches",
        githubLink: "https://github.com/Viviansol",
        linkedinLink: "https://www.linkedin.com/in/vivian-de-lima-sanches-4a4955122/",
        picture: "https://avatars.githubusercontent.com/u/84527029?v=4",
    },
    {
        id: 7,
        name: "Willian Rodrigues",
        githubLink: "https://github.com/warwilliam",
        linkedinLink: "/",
        picture: "https://avatars.githubusercontent.com/u/85083548?v=4",
    }
];

export default function Team() {
    return (
        <section
            id="contact"
            className="bg-black text-white py-10 text-center flex flex-col items-center gap-5 !p-10"
        >

            <ul className="flex flex-wrap justify-center gap-10">
                {developersTeam.map((developer) => (
                    <li key={developer.id}>
                        <Card className="bg-black border-none w-40 flex flex-col items-center shadow-none gap-2">
                            <CardContent className="flex flex-col items-center p-4">
                                <img
                                    src={developer.picture}
                                    alt={developer.name}
                                    className="w-24 h-24 rounded-full grayscale hover:grayscale-0 transition duration-300"
                                />
                                <h3 className="text-lg font-medium text-neutral-300 !mt-3">{developer.name}</h3>

                                <div className="flex gap-2 !p-3">
                                    {developer.linkedinLink && (
                                        <a
                                            href={developer.linkedinLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="hover:text-blue-500 transition"
                                        >
                                            <FaLinkedin className="w-5 h-5 text-neutral-700"/>

                                        </a>
                                    )}
                                    <a
                                        href={developer.githubLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-purple-500 transition"
                                    >
                                        <FaGithubSquare className="w-5 h-5 text-neutral-700"/>
                                    </a>
                                </div>
                            </CardContent>
                        </Card>
                    </li>
                ))}
            </ul>
            <p className="text-2xl font-bold mb-8">
                Equipe Gamezone
            </p>
        </section>
    );
}
