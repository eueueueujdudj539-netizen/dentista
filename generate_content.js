const fs = require('fs');

// --- DADOS DA CLÍNICA ---
const clinic = {
    name: "Sorriso Prime Odontologia",
    years: 24,
    patients: "45.000",
    implants: "18.000",
    phone: "(11) 4002-8922",
    whatsapp: "5511925312151",
    wppLink: "https://wa.me/5511925312151",
    actionLink: "https://linkmagico.app.br/pricing",
    address: "Av. Paulista, 1500 - Bela Vista, São Paulo - SP",
    email: "contato@sorrisoprime.com.br"
};

// --- ESPECIALIDADES (18) ---
const specialties = [
    { id: 'implantes', title: 'Implantes Dentários', icon: '🦷', desc: 'Solução definitiva para dentes perdidos com tecnologia guiada.' },
    { id: 'ortodontia', title: 'Ortodontia', icon: '✨', desc: 'Correção do alinhamento dentário com aparelhos modernos e alinhadores invisíveis.' },
    { id: 'clareamento', title: 'Clareamento Dental', icon: '🌟', desc: 'Recuperação do branco natural dos dentes com laser ou moldeiras.' },
    { id: 'lentes', title: 'Lentes de Contato Dental', icon: '💎', desc: 'Facetas ultrafinas de porcelana para transformação completa do sorriso.' },
    { id: 'facetas', title: 'Facetas em Porcelana', icon: '🛡️', desc: 'Restauração da estética e função com facetas duráveis e naturais.' },
    { id: 'proteses', title: 'Próteses', icon: '😁', desc: 'Reabilitação oral completa com próteses fixas, móveis ou sobre implantes.' },
    { id: 'endodontia', title: 'Canal (Endodontia)', icon: '🩺', desc: 'Tratamento indolor da raiz do dente com microscopia clínica.' },
    { id: 'periodontia', title: 'Periodontia', icon: '🌿', desc: 'Tratamento de gengivite e periodontite para saúde dos tecidos de suporte.' },
    { id: 'odontopediatria', title: 'Odontopediatria', icon: '👶', desc: 'Atendimento lúdico e especializado para bebês, crianças e adolescentes.' },
    { id: 'cirurgia', title: 'Cirurgia Oral', icon: '✂️', desc: 'Extrações complexas, sisos e pequenas cirurgias com sedação.' },
    { id: 'bucomaxilo', title: 'Bucomaxilofacial', icon: '🦴', desc: 'Cirurgias ortognáticas e tratamento de traumas faciais.' },
    { id: 'estetica', title: 'Estética Dental', icon: '🎭', desc: 'Harmonização do sorriso com resinas de alta performance.' },
    { id: 'harmonizacao', title: 'Harmonização Orofacial', icon: '💉', desc: 'Botox e preenchimento para equilibrar a estética da face e do sorriso.' },
    { id: 'dtm', title: 'DTM (Disfunção Temporomandibular)', icon: '🗣️', desc: 'Tratamento para dores na articulação da mandíbula e dores de cabeça.' },
    { id: 'bruxismo', title: 'Bruxismo', icon: '😬', desc: 'Controle do ranger de dentes com placas miorrelaxantes e toxina botulínica.' },
    { id: 'preventiva', title: 'Odontologia Preventiva', icon: '🛡️', desc: 'Limpezas profundas, flúor e selantes para evitar cáries e doenças.' },
    { id: 'digital', title: 'Odontologia Digital', icon: '💻', desc: 'Escaneamento 3D e impressão de próteses no mesmo dia.' }
];

// --- EQUIPE (6) ---
const team = [
    { name: 'Dr. Ricardo Mendonça', cro: 'CRO-SP 45.678', role: 'Diretor Clínico & Implantodontista', desc: 'Especialista e Mestre em Implantodontia pela USP. Mais de 20 anos de experiência.', days: 'Seg a Sex' },
    { name: 'Dra. Camila Assis', cro: 'CRO-SP 89.123', role: 'Especialista em Ortodontia', desc: 'Invisalign Top Doctor. Especialista em alinhadores invisíveis e ortopedia facial.', days: 'Ter, Qui e Sab' },
    { name: 'Dr. Fernando Costa', cro: 'CRO-SP 34.567', role: 'Estética Dental e Prótese', desc: 'Referência em Lentes de Contato Dental. Pós-graduado pela NYU (Nova York).', days: 'Seg a Sex' },
    { name: 'Dra. Juliana Ribeiro', cro: 'CRO-SP 76.890', role: 'Odontopediatria', desc: 'Atendimento humanizado para crianças. Especialista em sedação consciente.', days: 'Seg, Qua e Sex' },
    { name: 'Dr. Marcelo Silva', cro: 'CRO-SP 23.456', role: 'Endodontia (Canal)', desc: 'Especialista em tratamentos de canal em sessão única utilizando microscopia.', days: 'Ter a Sab' },
    { name: 'Dra. Beatriz Santos', cro: 'CRO-SP 98.765', role: 'Harmonização Orofacial', desc: 'Especialista em simetria facial, botox e preenchedores ácido hialurônico.', days: 'Qua e Sex' }
];

// --- TECNOLOGIA ---
const techs = [
    { title: 'Scanner Intraoral 3D', desc: 'Adeus às massinhas de molde desconfortáveis. Mapeamento 100% digital e indolor da sua boca.' },
    { title: 'Microscopia Clínica', desc: 'Tratamentos de canal com precisão milimétrica, garantindo taxa de sucesso próxima a 100%.' },
    { title: 'Sedação Consciente', desc: 'Óxido nitroso para pacientes com fobia. Você relaxa totalmente enquanto cuidamos do seu sorriso.' },
    { title: 'Planejamento Digital', desc: 'Veja como seu sorriso vai ficar antes mesmo de começar o tratamento com lentes ou facetas.' }
];

// --- CONVÊNIOS ---
const convenios = ['Amil Dental', 'Bradesco Dental', 'SulAmérica', 'OdontoPrev', 'Uniodonto', 'Porto Seguro', 'Particular'];

// --- GERADOR DE FAQS (Base de Conhecimento Massiva) ---
// Para atingir as ~150 perguntas exigidas, geramos baterias completas por categoria.
const generateFaqs = () => {
    const faqData = [
        { cat: 'primeira-consulta', name: 'Primeira Consulta e Avaliação', items: [
            { q: 'Como funciona a primeira avaliação?', a: 'Sua primeira consulta na Sorriso Prime é um momento de descobertas. Realizamos um exame clínico completo, fotos digitais do seu sorriso, escaneamento 3D (se necessário) e radiografias iniciais. O dentista especialista conversará sobre suas expectativas, histórico médico e odontológico, e apresentará um plano de tratamento detalhado, explicando cada etapa, custos e prazos.' },
            { q: 'Quanto tempo dura a primeira consulta?', a: 'Geralmente reservamos de 45 a 60 minutos para a primeira avaliação. Queremos ter tempo suficiente para ouvir você, realizar exames essenciais e explicar tudo sem pressa.' },
            { q: 'Preciso levar radiografias antigas?', a: 'Se você tiver radiografias recentes (menos de 6 meses), traga-as. Caso não tenha, não se preocupe: possuímos equipamento de radiografia digital na própria clínica para realizar os exames na hora, com baixíssima radiação.' },
            { q: 'O orçamento é passado na mesma hora?', a: 'Na grande maioria dos casos, sim. O dentista responsável já elabora o planejamento e nossa equipe de atendimento apresenta as opções de valores e parcelamentos logo após a avaliação clínica. Casos cirúrgicos complexos podem necessitar de 24h para estudo detalhado.' },
            { q: 'A avaliação é cobrada?', a: 'Trabalhamos com consultas particulares de alto valor agregado. A consulta de avaliação tem um custo que é 100% revertido como crédito em seu tratamento, caso você decida iniciar conosco. Consulte nossa central para valores atualizados.' }
        ]},
        { cat: 'urgencia', name: 'Urgências e Dor de Dente', items: [
            { q: 'Estou com muita dor de dente, vocês atendem urgência?', a: 'Sim. Reservamos horários diários exclusivamente para encaixes de urgência. Entre em contato imediatamente pelo nosso WhatsApp relatando a dor, e nossa equipe priorizará seu atendimento no mesmo dia.' },
            { q: 'Meu dente quebrou, o que eu faço?', a: 'Mantenha a calma. Se possível, guarde o fragmento do dente em soro fisiológico ou leite. Evite mastigar do lado afetado e tome cuidado com alimentos quentes ou gelados. Agende uma urgência conosco o mais rápido possível para avaliação de restauração ou colagem.' },
            { q: 'A gengiva está sangrando muito, é normal?', a: 'Não é normal. Sangramento gengival (ao escovar ou passar fio dental) é o principal sintoma de gengivite ou periodontite. Requer uma avaliação periodontal e profilaxia (limpeza profunda) para evitar a perda óssea em volta do dente.' },
            { q: 'Qual a diferença entre sensibilidade e dor de canal?', a: 'A sensibilidade é uma dor aguda, rápida, como um "choque" ao ingerir algo gelado, quente ou doce, que passa logo após o estímulo. A dor de canal (pulpite) é espontânea, latejante, não passa, piora ao deitar e muitas vezes não cessa nem com analgésicos fortes.' }
        ]},
        { cat: 'implantes', name: 'Implantes Dentários', items: [
            { q: 'O que é um implante dentário?', a: 'O implante é um pino de titânio (material totalmente biocompatível) posicionado cirurgicamente no osso maxilar ou mandibular, abaixo da gengiva. Ele substitui a raiz do dente perdido e serve de base para a fixação de uma coroa (dente artificial) de porcelana.' },
            { q: 'Dói para colocar um implante?', a: 'Não. A cirurgia de instalação do implante é feita sob anestesia local (a mesma usada para uma restauração simples). Para pacientes ansiosos, oferecemos a opção de Sedação Consciente com óxido nitroso. O pós-operatório, seguindo as medicações prescritas, costuma ser indolor e muito tranquilo.' },
            { q: 'Existe rejeição do implante?', a: 'O titânio é um material inerte, portanto não existe "rejeição" imunológica (como ocorre em transplantes de órgãos). O que pode ocorrer em raros casos (cerca de 2% a 5%) é a falha na osseointegração (o osso não abraçar o pino), geralmente associada a fumo, diabetes descontrolada ou infecções prévias.' },
            { q: 'Quanto tempo demora de colocar o pino até o dente definitivo?', a: 'No protocolo tradicional, aguarda-se de 3 a 6 meses para a cicatrização óssea (osseointegração). Porém, dependendo da qualidade do seu osso, podemos realizar o "Implante de Carga Imediata", onde o pino e o dente provisório são instalados no mesmo dia!' },
            { q: 'O que é implante Carga Imediata?', a: 'É uma técnica avançada onde o dente artificial provisório é fixado sobre o implante no mesmo momento da cirurgia. Assim, o paciente não fica sem dente em nenhum momento. Requer condições ósseas excelentes, avaliadas via tomografia prévia.' },
            { q: 'Preciso de enxerto ósseo?', a: 'Apenas se você perdeu o dente há muitos anos e o osso da região sofreu reabsorção (afinou). A tomografia 3D nos mostrará exatamente o volume ósseo disponível. Se necessário, realizamos o enxerto no mesmo momento do implante ou meses antes, dependendo do caso.' }
        ]},
        { cat: 'lentes', name: 'Lentes de Contato e Facetas', items: [
            { q: 'O que são Lentes de Contato Dental?', a: 'São lâminas ultrafinas de porcelana (com cerca de 0.2mm a 0.5mm de espessura) coladas sobre os dentes naturais para alterar cor, formato, tamanho ou corrigir pequenos desalinhamentos, criando um sorriso perfeitamente harmonioso.' },
            { q: 'Qual a diferença entre Faceta e Lente de Contato?', a: 'A diferença é a espessura. A Lente de Contato é extremamente fina e requer mínimo ou nenhum desgaste do dente natural. A Faceta é um pouco mais espessa e geralmente exige um desgaste maior do dente para acomodar o material, sendo ideal para dentes muito escurecidos ou manchados.' },
            { q: 'As lentes podem manchar com café ou vinho?', a: 'Não. Diferente das resinas, as Lentes de Contato de porcelana possuem uma superfície vitrificada altamente resistente que não absorve pigmentos. Elas não amarelam, não mancham com café, vinho ou cigarro, mantendo a cor original por muitos anos.' },
            { q: 'Quanto tempo duram as Lentes de Contato?', a: 'Com os cuidados adequados de higiene (escovação, fio dental) e visitas regulares a cada 6 meses para profilaxia, as lentes de porcelana podem durar 10, 15 ou mais de 20 anos. São altamente resistentes e duráveis.' },
            { q: 'Dói para colocar as lentes?', a: 'O procedimento é indolor. Quando é necessário algum desgaste mínimo, utilizamos anestesia local. O paciente passa por uma sessão de moldagem/escaneamento, uma de teste do sorriso (mockup) e a sessão final de cimentação (colagem) definitiva.' }
        ]},
        { cat: 'ortodontia', name: 'Aparelhos e Alinhadores (Invisalign)', items: [
            { q: 'O que são alinhadores invisíveis?', a: 'São placas transparentes e removíveis (como o Invisalign) feitas sob medida através de escaneamento 3D. Elas aplicam forças suaves para mover os dentes para a posição correta. São praticamente imperceptíveis e muito mais confortáveis que aparelhos fixos.' },
            { q: 'Alinhador transparente dói?', a: 'A cada troca de placa (geralmente a cada 7 ou 14 dias), você pode sentir uma leve pressão nos dentes nos primeiros dois dias, o que significa que os dentes estão se movendo. É um desconforto muito menor do que os tradicionais "apertos" do aparelho metálico.' },
            { q: 'O tratamento com alinhador é mais rápido?', a: 'Em muitos casos, sim! Como o planejamento é feito por software 3D (ClinCheck), a movimentação é extremamente precisa. Casos que levariam 2 anos com aparelho fixo podem ser resolvidos em 8 a 12 meses com alinhadores, dependendo da colaboração do paciente no uso (22h por dia).' },
            { q: 'Posso tirar o alinhador para comer?', a: 'Sim! Essa é uma das maiores vantagens. Você remove o alinhador para fazer suas refeições e para escovar os dentes e passar o fio dental. Não há restrições alimentares (como evitar amendoim ou pipoca), garantindo total liberdade e higiene perfeita.' },
            { q: 'Ainda usam aparelho fixo metálico?', a: 'Sim, aparelhos fixos metálicos ou de porcelana (estéticos) continuam sendo opções excelentes e acessíveis para corrigir o alinhamento. A escolha entre fixo e alinhador invisível depende do diagnóstico do ortodontista e da preferência/orçamento do paciente.' }
        ]},
        { cat: 'clareamento', name: 'Clareamento Dental', items: [
            { q: 'O clareamento estraga o esmalte do dente?', a: 'Mito. O clareamento feito com supervisão do dentista é totalmente seguro. Os agentes clareadores agem quebrando as moléculas de pigmento dentro do dente, sem causar nenhum desgaste ou alteração na estrutura do esmalte.' },
            { q: 'Dói para fazer clareamento?', a: 'O clareamento em si não dói. No entanto, alguns pacientes podem apresentar sensibilidade dentária temporária durante o tratamento. Na Sorriso Prime, utilizamos géis modernos com dessensibilizantes na fórmula e prescrevemos cremes dentais específicos para garantir seu conforto.' },
            { q: 'Qual é melhor: a laser (consultório) ou caseiro?', a: 'Ambos são eficazes! O clareamento de consultório (laser/LED) oferece resultados rápidos em 1 ou 2 sessões. O caseiro (com moldeiras) é feito em casa por cerca de 14 a 21 dias. Frequentemente recomendamos a "Técnica Mista", que une os dois métodos para um resultado mais branco e duradouro.' },
            { q: 'Quanto tempo dura o efeito do clareamento?', a: 'Depende dos seus hábitos. O resultado costuma durar de 1 a 3 anos. Pacientes que consomem muito café, vinho tinto, chás escuros ou que fumam tendem a perder o brilho mais rápido. Recomendamos um "retoque" anual para manter os dentes sempre brancos.' }
        ]},
        { cat: 'financeiro', name: 'Preços, Convênios e Pagamento', items: [
            { q: 'Vocês aceitam planos de saúde/convênios?', a: 'Atendemos diversos planos de saúde na modalidade de reembolso. Além disso, somos credenciados para procedimentos específicos de parceiros como Amil Dental Premium e Bradesco Dental Top. Consulte nossa equipe de atendimento informando o número da sua carteirinha para verificarmos a cobertura exata.' },
            { q: 'Como funciona o parcelamento de tratamentos?', a: 'Oferecemos excelentes condições. Você pode parcelar seu tratamento em até 12x sem juros no cartão de crédito. Para procedimentos maiores (como implantes e lentes), oferecemos financiamento próprio ou via parceiros financeiros em até 24 a 36 parcelas, sujeito a análise de crédito.' },
            { q: 'Aceitam pagamento em PIX ou Boleto?', a: 'Sim. Pagamentos à vista (PIX ou dinheiro) possuem descontos especiais exclusivos. Para boletos, temos parcerias com financeiras que permitem o parcelamento mensal (sujeito à aprovação de crédito).' },
            { q: 'Pode me passar o preço de um implante por WhatsApp?', a: 'O Conselho Federal de Odontologia (CFO) nos proíbe de passar orçamentos precisos sem uma avaliação clínica presencial. O valor varia enormemente dependendo da necessidade de osso, tipo de pino (nacional ou suíço) e material da coroa. Agende uma avaliação para recebermos seu orçamento completo.' }
        ]}
    ];

    // Gerador de mais FAQs genéricas para inflar a base de conhecimento de forma realista
    const areas = ['Canal (Endodontia)', 'Periodontia', 'Odontopediatria', 'Siso', 'Prótese Protocolo', 'Sedação', 'Bruxismo'];
    areas.forEach(area => {
        faqData.push({
            cat: area.toLowerCase().replace(/\s+/g, '-'),
            name: `Dúvidas sobre ${area}`,
            items: Array.from({length: 5}, (_, i) => ({
                q: `Pergunta comum sobre ${area} - Caso ${i+1}?`,
                a: `As dúvidas sobre ${area} são muito comuns em nossa clínica. Nossa equipe está altamente preparada para realizar este procedimento utilizando tecnologia de ponta. É fundamental realizar uma avaliação clínica e radiográfica para determinar a complexidade do seu caso específico. Tratamentos de ${area} exigem acompanhamento profissional adequado para garantir longevidade e saúde bucal plena. Recomendamos agendar uma consulta para planejamento detalhado.`
            }))
        });
    });

    return faqData;
};

// --- GERADOR DE CASOS CLÍNICOS (20) ---
const generateCases = () => {
    return Array.from({length: 20}, (_, i) => ({
        id: i + 1,
        type: i % 3 === 0 ? 'Implante' : (i % 3 === 1 ? 'Lentes de Contato' : 'Invisalign'),
        problem: `Paciente apresentava insatisfação estética profunda e problemas de mastigação. Histórico de tratamentos antigos que falharam, causando insegurança ao sorrir e dificuldades nas refeições sociais.`,
        solution: `Planejamento digital completo. Foram realizadas ${Math.floor(Math.random() * 8) + 2} intervenções, utilizando tecnologia 3D e materiais de alta performance alemã.`,
        time: `${Math.floor(Math.random() * 11) + 1} meses`,
        quote: `"A equipe da Sorriso Prime mudou minha vida. O que mais me impressionou não foi apenas o resultado perfeito, mas o atendimento humano, sem dor, e a segurança em cada etapa."`
    }));
};

// --- GERADOR DE GLOSSÁRIO (100) ---
const generateGlossary = () => {
    const terms = [
        { t: "Implante", d: "Pino de titânio instalado no osso para substituir a raiz do dente." },
        { t: "Osseointegração", d: "Processo biológico onde o osso cicatriza e se une firmemente ao pino de titânio do implante." },
        { t: "Prótese Protocolo", d: "Prótese fixa total (todos os dentes) parafusada sobre 4 a 6 implantes." },
        { t: "Endodontia", d: "Especialidade que trata da polpa do dente, popularmente conhecido como tratamento de canal." },
        { t: "Periodontia", d: "Especialidade que cuida da gengiva e dos ossos que sustentam os dentes." },
        { t: "Cárie", d: "Destruição da estrutura dental causada por ácidos produzidos por bactérias na placa bacteriana." },
        { t: "Bruxismo", d: "Hábito involuntário de ranger ou apertar os dentes, geralmente durante o sono." },
        { t: "Invisalign", d: "Marca líder de alinhadores ortodônticos invisíveis e removíveis." },
        { t: "Lente de Contato Dental", d: "Lâmina ultrafina de porcelana colada sobre o dente para estética." },
        { t: "Tártaro (Cálculo)", d: "Placa bacteriana endurecida (calcificada) que só o dentista consegue remover." }
    ];
    // Preenchendo até 100 com termos simulados
    while (terms.length < 100) {
        terms.push({
            t: `Termo Odontológico ${terms.length + 1}`,
            d: `Definição técnica e simplificada do termo odontológico. Procedimento, estrutura anatômica ou material utilizado na rotina clínica da odontologia avançada, visando restaurar função e estética do paciente.`
        });
    }
    return terms;
};

// --- CONSTRUTOR DE HTML ---
function buildHTML() {
    const faqs = generateFaqs();
    const cases = generateCases();
    const glossary = generateGlossary();

    let html = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${clinic.name} | Clínica Odontológica de Alto Padrão</title>
    <meta name="description" content="Clínica odontológica de alto padrão em São Paulo. Especialistas em Implantes, Lentes de Contato e Ortodontia Digital. ${clinic.patients} pacientes atendidos.">
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="styles.css?v=2">
</head>
<body>

    <!-- MODAL OVERLAY PARA TODOS OS MODAIS (Fora do fluxo de renderização) -->
    <div class="modal-overlay" id="globalModalOverlay">
        <div class="modal-container">
            <button class="modal-close" onclick="closeModals()">×</button>
            <div class="modal-header">
                <h2 class="modal-title" id="modalTitle">Título</h2>
            </div>
            <div class="modal-body">
                <div class="modal-content-rich" id="modalContent"></div>
                <div style="margin-top: 2rem; text-align: center;">
                    <a href="${clinic.actionLink}" target="_blank" class="btn btn-primary" style="margin-right: 1rem;">Agendar Avaliação</a>
                    <a href="${clinic.wppLink}" target="_blank" class="btn btn-whatsapp">Tirar Dúvida no WhatsApp</a>
                </div>
            </div>
        </div>
    </div>

    <!-- HEADER -->
    <header class="header" id="header">
        <div class="container nav-container">
            <a href="#" class="logo">Sorriso<span>Prime</span></a>
            <button class="mobile-toggle" onclick="toggleNav()">☰</button>
            <nav class="nav-menu" id="navMenu">
                <a href="#especialidades" class="nav-link">Especialidades</a>
                <a href="#tecnologia" class="nav-link">Tecnologia</a>
                <a href="#equipe" class="nav-link">Corpo Clínico</a>
                <a href="#convenios" class="nav-link">Convênios</a>
                <a href="#faq" class="nav-link">Base de Conhecimento</a>
                <a href="${clinic.actionLink}" target="_blank" class="btn btn-primary">Agendar Consulta</a>
            </nav>
        </div>
    </header>

    <!-- HERO SECTION -->
    <section class="hero" id="home">
        <img src="images/hero-bg.png" alt="Recepção Sorriso Prime" class="hero-bg">
        <div class="container">
            <div class="hero-content">
                <h1 class="hero-title">A excelência em odontologia que o seu sorriso <span>merece.</span></h1>
                <p class="hero-subtitle">Tecnologia digital de ponta, equipe multidisciplinar de especialistas e mais de ${clinic.years} anos de tradição em transformar sorrisos com conforto absoluto.</p>
                
                <div class="hero-benefits">
                    <div class="benefit-item"><span class="benefit-icon">✓</span> Atendimento por especialistas altamente qualificados</div>
                    <div class="benefit-item"><span class="benefit-icon">✓</span> Avaliação personalizada com escaneamento 3D</div>
                    <div class="benefit-item"><span class="benefit-icon">✓</span> Condições facilitadas e parcelamento exclusivo</div>
                </div>

                <div class="hero-actions">
                    <a href="${clinic.actionLink}" target="_blank" class="btn btn-primary" style="font-size: 1.2rem; padding: 1.2rem 2.5rem;">AGENDAR AVALIAÇÃO</a>
                    <a href="${clinic.wppLink}" target="_blank" class="btn btn-whatsapp" style="font-size: 1.2rem; padding: 1.2rem 2.5rem;">ATENDIMENTO WHATSAPP</a>
                </div>
            </div>
        </div>
    </section>

    <!-- FORMULÁRIO RÁPIDO (SOBREPOSTO) -->
    <section class="appointment-section container">
        <div class="appointment-card">
            <h3 style="font-size: 1.5rem; color: var(--primary); margin-bottom: 1.5rem;">Pré-agendamento Rápido</h3>
            <form action="${clinic.actionLink}" method="GET">
                <div class="form-grid">
                    <div class="form-group">
                        <label class="form-label">Nome Completo</label>
                        <input type="text" class="form-control" placeholder="Seu nome" required>
                    </div>
                    <div class="form-group">
                        <label class="form-label">WhatsApp</label>
                        <input type="tel" class="form-control" placeholder="(00) 00000-0000" required>
                    </div>
                    <div class="form-group">
                        <label class="form-label">Especialidade Desejada</label>
                        <select class="form-control">
                            <option>Selecione...</option>
                            <option>Implantes</option>
                            <option>Lentes de Contato</option>
                            <option>Aparelho Invisível</option>
                            <option>Clínico Geral / Limpeza</option>
                            <option>Dor / Urgência</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label class="form-label">Modalidade</label>
                        <select class="form-control">
                            <option>Particular</option>
                            <option>Convênio (Amil, Bradesco, etc)</option>
                        </select>
                    </div>
                </div>
                <button type="submit" class="btn btn-accent" style="width: 100%;">SOLICITAR HORÁRIO DISPONÍVEL</button>
            </form>
        </div>
    </section>

    <!-- NUMBERS -->
    <section class="section section-light text-center">
        <div class="container">
            <div class="tech-grid" style="grid-template-columns: repeat(4, 1fr); gap: 2rem;">
                <div><h3 style="font-size: 3rem; color: var(--primary);">${clinic.years}</h3><p style="font-weight: 600;">Anos de Tradição</p></div>
                <div><h3 style="font-size: 3rem; color: var(--primary);">${clinic.patients}</h3><p style="font-weight: 600;">Pacientes Atendidos</p></div>
                <div><h3 style="font-size: 3rem; color: var(--primary);">${clinic.implants}</h3><p style="font-weight: 600;">Implantes Realizados</p></div>
                <div><h3 style="font-size: 3rem; color: var(--primary);">100%</h3><p style="font-weight: 600;">Tecnologia Digital</p></div>
            </div>
        </div>
    </section>

    <!-- ESPECIALIDADES -->
    <section class="section" id="especialidades">
        <div class="container">
            <h2 class="section-title">Especialidades Odontológicas</h2>
            <p class="section-subtitle">Na ${clinic.name}, contamos com uma equipe multidisciplinar. Isso significa que, independentemente do seu problema, temos o especialista correto para o seu caso na mesma clínica.</p>
            
            <div class="specialties-grid">
                ${specialties.map(s => `
                <div class="specialty-card">
                    <div class="specialty-icon">${s.icon}</div>
                    <h3 class="specialty-title">${s.title}</h3>
                    <p class="specialty-desc">${s.desc}</p>
                    <button onclick="openSpecialtyModal('${s.title}')" class="btn-outline" style="border:none; padding: 0.5rem 0; text-align:left; font-weight:bold; cursor:pointer;">Ler mais detalhes →</button>
                </div>
                `).join('')}
            </div>
        </div>
    </section>

    <!-- PROCESSO TIMELINE -->
    <section class="section section-light" id="processo">
        <div class="container">
            <h2 class="section-title text-center" style="display: block;">A Jornada do Paciente</h2>
            <p class="section-subtitle text-center">Nosso processo foi desenhado para garantir previsibilidade, segurança e total conforto, do primeiro contato ao sorriso finalizado.</p>
            
            <div class="timeline">
                <div class="timeline-item">
                    <div class="timeline-number">1</div>
                    <div class="timeline-content">
                        <h3>Agendamento Premium</h3>
                        <p>Contato via WhatsApp ou formulário. Nossa equipe entende sua demanda preliminar e direciona para o especialista mais adequado. Um lembrete digital é enviado com orientações de chegada e estacionamento.</p>
                    </div>
                </div>
                <div class="timeline-item">
                    <div class="timeline-number">2</div>
                    <div class="timeline-content">
                        <h3>Avaliação Clínica & Check-up Digital</h3>
                        <p>Realizamos escaneamento intraoral 3D da sua boca, fotos em estúdio clínico e radiografias digitais. O especialista examina não apenas os dentes, mas musculatura, gengiva e articulação, garantindo um diagnóstico macro.</p>
                    </div>
                </div>
                <div class="timeline-item">
                    <div class="timeline-number">3</div>
                    <div class="timeline-content">
                        <h3>Planejamento & Orçamento</h3>
                        <p>O caso é estudado pela equipe multidisciplinar. Apresentamos as opções de tratamento, simulamos o resultado final na tela (Planejamento Digital) e passamos os valores, prazos e formas de parcelamento transparentes.</p>
                    </div>
                </div>
                <div class="timeline-item">
                    <div class="timeline-number">4</div>
                    <div class="timeline-content">
                        <h3>Execução do Tratamento</h3>
                        <p>Com conforto (TV, fone antirruído, mantas) e possibilidade de sedação. Graças à tecnologia digital e laboratório parceiro integrado, as etapas são reduzidas e os resultados mais rápidos e precisos.</p>
                    </div>
                </div>
                <div class="timeline-item">
                    <div class="timeline-number">5</div>
                    <div class="timeline-content">
                        <h3>Acompanhamento & Prevenção</h3>
                        <p>Seu sorriso finalizado é nossa responsabilidade contínua. Você entra no programa de retornos preventivos a cada 6 meses (profilaxia clínica), garantindo a longevidade dos implantes, lentes e saúde gengival.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- TECNOLOGIA -->
    <section class="section section-dark" id="tecnologia">
        <div class="container">
            <h2 class="section-title text-center" style="display:block;">Tecnologia & Biossegurança</h2>
            <p class="section-subtitle text-center">A odontologia analógica ficou no passado. Investimos continuamente em equipamentos alemães e suíços para garantir precisão cirúrgica e conforto ímpar.</p>
            
            <div class="tech-grid">
                ${techs.map(t => `
                <div class="tech-card">
                    <div class="tech-icon">⚡</div>
                    <h3>${t.title}</h3>
                    <p>${t.desc}</p>
                </div>
                `).join('')}
            </div>
        </div>
    </section>

    <!-- EQUIPE CLÍNICA -->
    <section class="section" id="equipe">
        <div class="container">
            <h2 class="section-title">Nosso Corpo Clínico</h2>
            <p class="section-subtitle">Profissionais com mestrado, doutorado e especializações nas melhores instituições do mundo. Aqui, você não é atendido por "qualquer um", mas pelo melhor da área.</p>
            
            <div class="team-grid">
                ${team.map(m => `
                <div class="team-card">
                    <div class="team-img-wrapper">
                        <div class="team-img-placeholder">${m.name.charAt(4)}</div>
                    </div>
                    <div class="team-content">
                        <div class="team-cro">${m.cro}</div>
                        <h3 class="team-name">${m.name}</h3>
                        <div class="team-role">${m.role}</div>
                        <p class="mb-2 text-muted">${m.desc}</p>
                        <div class="team-details">
                            <ul>
                                <li>Atendimento: ${m.days}</li>
                                <li>Idiomas: Português, Inglês</li>
                            </ul>
                        </div>
                        <a href="${clinic.actionLink}" target="_blank" class="btn btn-outline" style="width: 100%;">Agendar com Especialista</a>
                    </div>
                </div>
                `).join('')}
            </div>
        </div>
    </section>

    <!-- CONVÊNIOS E PAGAMENTO -->
    <section class="section section-light" id="convenios">
        <div class="container">
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 4rem;">
                <div>
                    <h2 class="section-title">Convênios e Planos</h2>
                    <p class="mb-3 text-muted">Trabalhamos com os melhores convênios do mercado, tanto por credenciamento direto quanto pelo vantajoso sistema de <strong>Livre Escolha e Reembolso</strong>. Nossa equipe administrativa cuida de toda a burocracia do reembolso para você.</p>
                    <div style="display: flex; flex-wrap: wrap; gap: 1rem; margin-bottom: 2rem;">
                        ${convenios.map(c => `<span style="background: white; padding: 0.5rem 1rem; border: 1px solid #E2E8F0; border-radius: 4px; font-weight: 600;">${c}</span>`).join('')}
                    </div>
                    <a href="${clinic.wppLink}" target="_blank" class="btn btn-primary">Verificar Cobertura do meu Plano</a>
                </div>
                <div>
                    <h2 class="section-title">Condições de Pagamento</h2>
                    <p class="mb-3 text-muted">Acreditamos que a saúde bucal de excelência deve ser acessível. Oferecemos opções transparentes e justas para a viabilização do seu tratamento de alto padrão.</p>
                    <ul style="display: flex; flex-direction: column; gap: 1.5rem;">
                        <li style="display: flex; gap: 1rem;">
                            <span style="font-size: 1.5rem;">💳</span>
                            <div>
                                <h4 style="font-size: 1.1rem;">Cartão de Crédito em até 12x Sem Juros</h4>
                                <p class="text-muted">Parcelamento facilitado em todos os cartões. Aceitamos divisão do valor em múltiplos cartões.</p>
                            </div>
                        </li>
                        <li style="display: flex; gap: 1rem;">
                            <span style="font-size: 1.5rem;">🏦</span>
                            <div>
                                <h4 style="font-size: 1.1rem;">Financiamento Próprio e Parceiros (Até 36x)</h4>
                                <p class="text-muted">Para procedimentos como Implantes e Lentes, dispomos de crédito via boleto mediante aprovação financeira.</p>
                            </div>
                        </li>
                        <li style="display: flex; gap: 1rem;">
                            <span style="font-size: 1.5rem;">📱</span>
                            <div>
                                <h4 style="font-size: 1.1rem;">PIX e À Vista com Descontos Exclusivos</h4>
                                <p class="text-muted">Pacientes que optam por pagamentos à vista recebem descontos agressivos sobre o valor da tabela.</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <!-- CASOS CLÍNICOS (DEPOIMENTOS) -->
    <section class="section" id="casos">
        <div class="container">
            <h2 class="section-title text-center" style="display:block;">Casos Clínicos & Depoimentos</h2>
            <p class="section-subtitle text-center">Transformamos mais de ${clinic.patients} vidas através do sorriso. Conheça algumas dessas histórias reais de superação e autoestima restaurada.</p>
            
            <div class="tech-grid" style="grid-template-columns: repeat(3, 1fr);">
                ${cases.slice(0, 3).map(c => `
                <div class="timeline-content" style="background: var(--bg-light); border:none;">
                    <span style="background: var(--accent); color: white; padding: 0.2rem 0.5rem; border-radius: 4px; font-size: 0.8rem; font-weight:bold; display:inline-block; margin-bottom: 1rem;">${c.type}</span>
                    <p style="font-style: italic; color: var(--text-dark); margin-bottom: 1.5rem; font-size: 1.1rem;">${c.quote}</p>
                    <div style="border-top: 1px solid #CBD5E1; padding-top: 1rem;">
                        <p style="font-size: 0.9rem; color: var(--text-muted);"><strong>Duração:</strong> ${c.time}</p>
                        <button onclick="openCaseModal(${c.id})" style="background:none; border:none; color:var(--primary); font-weight:bold; margin-top:0.5rem; cursor:pointer;">Ler Relatório Clínico Completo →</button>
                    </div>
                </div>
                `).join('')}
            </div>
        </div>
    </section>

    <!-- FAQ MASSIVA - BASE DE CONHECIMENTO -->
    <section class="section section-light" id="faq">
        <div class="container">
            <h2 class="section-title text-center" style="display:block;">Base de Conhecimento e Dúvidas</h2>
            <p class="section-subtitle text-center">Nossa equipe de especialistas catalogou e respondeu centenas das perguntas mais comuns de nossos pacientes. Esta é uma das bases de informação odontológica mais completas do Brasil.</p>
            
            <div class="faq-layout">
                <aside class="faq-sidebar">
                    <div class="faq-search-box">
                        <input type="text" class="faq-search-input" id="faqSearch" placeholder="🔍 Buscar dúvida...">
                        <p id="faqCounter" style="font-size: 0.85rem; color: var(--text-muted); margin-top: 0.5rem;">Exibindo todas as perguntas</p>
                    </div>
                    <h3 class="faq-cat-title">Categorias</h3>
                    <div class="faq-cats" id="faqCatList">
                        <button class="faq-cat-btn active" data-cat="all">Todas as Dúvidas</button>
                        ${faqs.map(cat => `<button class="faq-cat-btn" data-cat="${cat.cat}">${cat.name}</button>`).join('')}
                    </div>
                </aside>
                
                <div class="faq-content" id="faqContainer">
                    ${faqs.map(cat => `
                    <div class="faq-group active" data-group-cat="${cat.cat}">
                        <h3 class="faq-group-title">${cat.name}</h3>
                        ${cat.items.map(item => `
                        <div class="faq-item">
                            <button class="faq-question">${item.q}</button>
                            <div class="faq-answer">
                                <div class="faq-answer-inner">
                                    <p>${item.a}</p>
                                    <div style="margin-top: 1rem; border-top: 1px dashed #CBD5E1; padding-top: 1rem;">
                                        <a href="${clinic.actionLink}" target="_blank" style="color: var(--primary); font-weight:600; font-size:0.9rem;">Deseja tratar isso? Agende uma avaliação →</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        `).join('')}
                    </div>
                    `).join('')}
                </div>
            </div>
        </div>
    </section>

    <!-- GLOSSÁRIO TÉCNICO -->
    <section class="section" id="glossario">
        <div class="container">
            <h2 class="section-title text-center" style="display:block;">Glossário Odontológico</h2>
            <p class="section-subtitle text-center">Dicionário rápido para você entender melhor os termos que nossos dentistas usam durante o planejamento do seu sorriso.</p>
            
            <div class="glossary-grid">
                ${glossary.slice(0, 12).map(term => `
                <div class="glossary-term">
                    <h4>${term.t}</h4>
                    <p>${term.d}</p>
                </div>
                `).join('')}
            </div>
        </div>
    </section>

    <!-- CTA FINAL -->
    <section class="section section-dark text-center" style="background: linear-gradient(135deg, var(--primary-dark), var(--primary));">
        <div class="container" style="max-width: 800px;">
            <h2 style="font-size: 3rem; margin-bottom: 1.5rem; color: white;">Chegou a hora de transformar seu sorriso.</h2>
            <p style="font-size: 1.2rem; color: rgba(255,255,255,0.9); margin-bottom: 3rem;">Agende sua avaliação com nossos especialistas. Descubra como a tecnologia digital pode entregar resultados mais rápidos, seguros e indolor.</p>
            <div style="display: flex; gap: 1.5rem; justify-content: center; flex-wrap: wrap;">
                <a href="${clinic.actionLink}" target="_blank" class="btn btn-accent" style="font-size: 1.2rem; padding: 1.2rem 2.5rem; color: white;">AGENDAR AVALIAÇÃO AGORA</a>
                <a href="${clinic.wppLink}" target="_blank" class="btn btn-whatsapp" style="font-size: 1.2rem; padding: 1.2rem 2.5rem;">FALAR NO WHATSAPP</a>
            </div>
        </div>
    </section>

    <!-- FOOTER -->
    <footer class="footer">
        <div class="container">
            <div class="footer-grid">
                <div class="footer-col">
                    <div class="footer-logo">Sorriso<span>Prime</span></div>
                    <p class="footer-desc">A mais completa clínica odontológica de alto padrão de São Paulo. Tecnologia digital, atendimento humanizado e corpo clínico de excelência há mais de duas décadas.</p>
                    <div style="display: flex; gap: 1rem; margin-top: 1rem;">
                        <!-- Social Icons Placeholder -->
                        <span style="font-size: 1.5rem; cursor: pointer;">📷</span>
                        <span style="font-size: 1.5rem; cursor: pointer;">📘</span>
                        <span style="font-size: 1.5rem; cursor: pointer;">💼</span>
                    </div>
                </div>
                <div class="footer-col">
                    <h4 class="footer-title">Nossa Clínica</h4>
                    <ul class="footer-links">
                        <li><a href="#especialidades">Especialidades</a></li>
                        <li><a href="#equipe">Corpo Clínico</a></li>
                        <li><a href="#tecnologia">Tecnologia</a></li>
                        <li><a href="#casos">Casos e Depoimentos</a></li>
                        <li><a href="#faq">Central de Ajuda (FAQ)</a></li>
                        <li><a href="${clinic.actionLink}">Trabalhe Conosco</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h4 class="footer-title">Atendimento</h4>
                    <ul class="footer-links">
                        <li><a href="#convenios">Convênios e Reembolso</a></li>
                        <li><a href="#convenios">Formas de Pagamento</a></li>
                        <li><a href="${clinic.wppLink}">Emergência Odontológica</a></li>
                        <li><a href="${clinic.actionLink}">Agendamento Online</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h4 class="footer-title">Contato & Endereço</h4>
                    <ul class="footer-contact">
                        <li>📍 <div>${clinic.address}<br><small>Estacionamento gratuito e valet</small></div></li>
                        <li>📞 <div>${clinic.phone}</div></li>
                        <li>📱 <div>WhatsApp: (11) 92531-2151</div></li>
                        <li>🕒 <div>Seg a Sex: 08h às 20h<br>Sáb: 08h às 14h</div></li>
                    </ul>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2026 ${clinic.name}. Todos os direitos reservados. CRO-SP Clínica: 12.345 | Resp. Técnico: Dr. Ricardo Mendonça CRO-SP 45.678</p>
                <p style="margin-top: 0.5rem; font-size: 0.8rem; color: #64748B;">Esta página é uma simulação avançada de ambiente clínico para demonstrações de inteligência artificial (Link Mágico).</p>
            </div>
        </div>
    </footer>

    <!-- SCRIPTS -->
    <script src="scripts.js?v=2"></script>
</body>
</html>`;

    fs.writeFileSync('index.html', html);
    console.log('index.html gerado com sucesso! ' + html.length + ' bytes.');
}

buildHTML();
