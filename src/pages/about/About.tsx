import {Helmet} from 'react-helmet';

import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Separator} from "@/components/ui/separator";

import bannerAbout from "@/assets/img/banner-about.jpg";

export default function Games() {

    return (
        <>
            <Helmet>
                <title>GameZone | Sobre</title>
            </Helmet>

            <section
                className="relative flex items-center justify-center h-[350px] bg-cover bg-center rounded-2xl shadow-md"
                style={{
                    backgroundImage: `url(${bannerAbout})`,
                }}
            >
                <h2 className="relative z-10 text-3xl md:text-4xl font-bold text-white text-center drop-shadow-lg">
                    Aqui você encontra os detalhes técnicos deste projeto web
                </h2>
            </section>

            <div className="bg-background !py-12 !px-6">
                <div className="max-w-4xl !mx-auto space-y-10">
                    <p className="text-lg leading-relaxed text-muted-foreground">
                        Projeto realizado pelos alunos do <strong>3° Bimestre</strong> do curso de Certified Tech
                        Developer
                        da Digital House para entrega do Checkpoint Final.
                        Esta foi a primeira atividade em que aplicamos os conhecimentos de forma integrada com as
                        disciplinas
                        de <strong>Front-End</strong>, <strong>Back-End</strong> e <strong>Infraestrutura</strong>.
                    </p>

                    <div className="text-center !mt-10">
                        <h3 className="text-2xl font-semibold">Estrutura Utilizada</h3>
                        <Separator className="!my-4 w-20 !mx-auto"/>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <Card className="!p-5">
                            <CardHeader>
                                <CardTitle>Back-End</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                                    <li>Java</li>
                                    <li>Spring Framework</li>
                                    <li>Padrão MVC</li>
                                    <li>MySQL</li>
                                    <li>API REST para o Front-End</li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card className="!p-5">
                            <CardHeader>
                                <CardTitle>Front-End</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                                    <li>HTML5</li>
                                    <li>SASS (Tailwind + chadcn)</li>
                                    <li>React</li>
                                    <li>Consumo da API Back-End</li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card className="!p-5">
                            <CardHeader>
                                <CardTitle>Infraestrutura</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                                    <li>Render para hospedagem da API e do Banco de Dados</li>
                                    <li>Vercel para hospedagem do Frontend</li>
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </>
    )
}
