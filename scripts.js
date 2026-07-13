/* ==========================================================================
   SORRISO PRIME - MAIN JAVASCRIPT
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. HEADER SCROLL EFFECT ---
    const header = document.getElementById('header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    // --- 2. MOBILE NAVIGATION ---
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navMenu = document.getElementById('navMenu');
    
    // Ensure mobile toggle exists and works properly
    window.toggleNav = function() {
        if (navMenu) {
            navMenu.classList.toggle('active');
        }
    };
    
    // Close nav when clicking a link
    if (navMenu) {
        const navLinks = navMenu.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
            });
        });
    }

    // --- 3. FAQ ACCORDION ---
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        if (question) {
            question.addEventListener('click', () => {
                // Fechar outros (Opcional, no caso deixaremos abrir múltiplos)
                const isActive = item.classList.contains('active');
                
                // Fecha todos os outros do mesmo grupo (opcional)
                // const siblings = item.parentElement.querySelectorAll('.faq-item');
                // siblings.forEach(sib => sib.classList.remove('active'));

                // Toggle atual
                if (isActive) {
                    item.classList.remove('active');
                } else {
                    item.classList.add('active');
                }
            });
        }
    });

    // --- 4. FAQ CATEGORY FILTER ---
    const catBtns = document.querySelectorAll('.faq-cat-btn');
    const faqGroups = document.querySelectorAll('.faq-group');
    
    if (catBtns.length > 0) {
        catBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Update active button state
                catBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                
                const selectedCat = btn.getAttribute('data-cat');
                
                // Show/hide groups based on selection
                faqGroups.forEach(group => {
                    if (selectedCat === 'all' || group.getAttribute('data-group-cat') === selectedCat) {
                        group.style.display = 'block';
                    } else {
                        group.style.display = 'none';
                    }
                });
            });
        });
    }

    // --- 5. FAQ SEARCH ---
    const searchInput = document.getElementById('faqSearch');
    const faqCounter = document.getElementById('faqCounter');
    
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const term = e.target.value.toLowerCase();
            let visibleCount = 0;
            
            // Se estiver buscando, força todas as categorias a aparecerem
            if (term.length > 0) {
                catBtns.forEach(b => b.classList.remove('active'));
                document.querySelector('.faq-cat-btn[data-cat="all"]').classList.add('active');
                faqGroups.forEach(g => g.style.display = 'block');
            }
            
            faqItems.forEach(item => {
                const questionText = item.querySelector('.faq-question').textContent.toLowerCase();
                const answerText = item.querySelector('.faq-answer-inner').textContent.toLowerCase();
                
                if (questionText.includes(term) || answerText.includes(term)) {
                    item.style.display = 'block';
                    // Expande o item se houver termo de busca, para destacar a resposta
                    if (term.length > 2) {
                        item.classList.add('active');
                    } else {
                        item.classList.remove('active');
                    }
                    visibleCount++;
                } else {
                    item.style.display = 'none';
                    item.classList.remove('active');
                }
            });
            
            // Atualiza contador
            if (faqCounter) {
                if (term === '') {
                    faqCounter.textContent = "Exibindo todas as perguntas";
                } else {
                    faqCounter.textContent = `Encontradas ${visibleCount} perguntas`;
                }
            }
            
            // Oculta grupos vazios
            faqGroups.forEach(group => {
                const hasVisibleItems = Array.from(group.querySelectorAll('.faq-item')).some(i => i.style.display !== 'none');
                if (!hasVisibleItems && term !== '') {
                    group.style.display = 'none';
                }
            });
        });
    }
});

// --- 6. MODALS LOGIC (SAFE, NO RENDERING BLOCK) ---
// Defining globally so onclick in HTML works
window.openSpecialtyModal = function(title) {
    const modalTitle = document.getElementById('modalTitle');
    const modalContent = document.getElementById('modalContent');
    
    if (modalTitle && modalContent) {
        modalTitle.textContent = title;
        modalContent.innerHTML = `
            <h3>O que é e como funciona?</h3>
            <p>O tratamento de <strong>${title}</strong> em nossa clínica é conduzido por especialistas sêniores com auxílio de tecnologia digital. Nossos protocolos são desenhados para garantir o máximo de conforto, previsibilidade e resultados estéticos superiores.</p>
            
            <h3>Para quem é indicado?</h3>
            <p>Este procedimento é altamente indicado para pacientes que buscam reabilitar a função mastigatória e a estética do sorriso com materiais de alta performance (porcelana alemã e suíça).</p>
            
            <h3>Benefícios Exclusivos Sorriso Prime</h3>
            <ul>
                <li>Avaliação com escaneamento intraoral 3D (sem massas)</li>
                <li>Planejamento digital reverso do sorriso</li>
                <li>Possibilidade de Sedação Consciente com óxido nitroso</li>
                <li>Uso de materiais importados de alta durabilidade</li>
            </ul>
            
            <p><em>* As informações acima são ilustrativas. Um diagnóstico preciso exige avaliação clínica e radiográfica presencial.</em></p>
        `;
        
        openModal();
    }
};

window.openCaseModal = function(id) {
    const modalTitle = document.getElementById('modalTitle');
    const modalContent = document.getElementById('modalContent');
    
    if (modalTitle && modalContent) {
        modalTitle.textContent = `Relatório Clínico - Caso #${id}`;
        modalContent.innerHTML = `
            <h3>Diagnóstico Inicial</h3>
            <p>O paciente apresentava desgaste acentuado dos elementos dentários, perda de dimensão vertical de oclusão e comprometimento estético severo que afetava sua autoestima e vida social.</p>
            
            <h3>Planejamento Multidisciplinar</h3>
            <p>O caso foi conduzido em conjunto pelas equipes de Periodontia (para readequação do meio bucal e saúde gengival), Implantodontia e Prótese/Estética.</p>
            <ul>
                <li>Escaneamento 3D inicial</li>
                <li>Ensaio fotográfico (Protocolo Clínico)</li>
                <li>Mock-up (Teste do Sorriso em resina bisacrílica)</li>
            </ul>
            
            <h3>Execução e Resultados</h3>
            <p>O tratamento durou os meses previstos no planejamento, sem intercorrências. O paciente relatou total ausência de dor devido aos nossos protocolos de controle álgico e uso de sedação. O resultado final devolveu a função mastigatória 100% e uma estética harmônica, natural e jovial.</p>
        `;
        
        openModal();
    }
};

function openModal() {
    const overlay = document.getElementById('globalModalOverlay');
    if (overlay) {
        overlay.classList.add('active');
        document.body.classList.add('modal-open');
    }
}

window.closeModals = function() {
    const overlay = document.getElementById('globalModalOverlay');
    if (overlay) {
        overlay.classList.remove('active');
        document.body.classList.remove('modal-open');
    }
};

// Fechar modal clicando fora
document.addEventListener('click', (e) => {
    const overlay = document.getElementById('globalModalOverlay');
    const container = document.querySelector('.modal-container');
    if (overlay && overlay.classList.contains('active')) {
        if (e.target === overlay) {
            closeModals();
        }
    }
});

// Fechar com ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModals();
    }
});
