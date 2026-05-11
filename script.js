/**
 * FloatDeck — Core Logic
 * Encapsulated Production Version (Anti-Conflict IIFE)
 */
(function() {
    'use strict';

    // 3. Constants Isolation (Private Scope)
    const translations = {
        en: {
            hero_badge: "MASTER YOUR WORKFLOW",
            hero_title: "Multi-Task Like a Pro. <span>Without the Chaos.</span>",
            hero_subtitle: "Stop drowning in a sea of tabs. FloatDeck unifies your AI, Code, Tasks, and Media into a single, fluid workspace that floats exactly where you need it.",
            email_placeholder: "Enter your work email",
            cta_button: "Get Early Access",
            install_cta: "Free Installation",
            form_disclaimer: "No spam. Unsubscribe anytime.",
            hero_disclaimer: "Optimized for Chrome & Comet",
            vs_tag: "THE ENEMY OF YOUR FOCUS",
            vs_title: "Escape the Tab Graveyard",
            problem_title: "Stop Struggling with Tab-Switching Fatigue",
            problem_text: "Constant context switching kills focus. Losing track of your tools in 50+ open tabs is costing you hours of deep work every week.",
            solution_title: "A Fluid Workflow That Follows Your Gaze",
            solution_text: "A floating layer for your most vital tools. Keep your AI, code, and tasks always in sight, regardless of which tab you are browsing.",
            showcase_tag: "Live Preview",
            showcase_title: "Experience Absolute Focus",
            features_tag: "What's Inside",
            features_title: "Everything You Need, Floating",
            feature_1_title: "Omni-AI Assistant",
            feature_1_desc: "Instant access to Gemini AI in any window. Research and generate content without ever switching tabs.",
            feature_2_title: "Floating Code Editor",
            feature_2_desc: "A lightweight editor that stays visible over your docs. Code and learn simultaneously with zero friction.",
            feature_3_title: "Focus Flow Tasks",
            feature_3_desc: "Keep priorities always in sight. Integrated task management that doesn't hide behind other windows.",
            feature_4_title: "Smart PiP Media",
            feature_4_desc: "Transform tutorials and meetings into smart floating windows. Learn, watch, and execute in real-time.",
            testimonials_tag: "Social Proof",
            testimonials_title: "Trusted by High-Output Professionals",
            testimonial_1_text: "\"FloatDeck reclaimed 2 hours of my daily workflow. Not having to hunt for the right tab among 40 windows is a productivity miracle.\"",
            testimonial_1_author: "Mark R., Senior Backend Developer",
            testimonial_2_text: "\"The integration of Gemini right above my task list changed everything. It's the multi-tasking experience we've been promised for years.\"",
            testimonial_2_author: "Julia S., Product Designer",
            verified_user: "Verified Beta User",
            final_cta_title: "Ready to Reclaim Your Focus?",
            final_cta_sub: "Join thousands of professionals who've already upgraded their workflow.",
            footer_tagline: "Elevate your browsing experience.",
            footer_terms: "Terms of Service",
            footer_privacy: "Privacy Policy",
            footer_support: "Support",
            loading: "Processing...",
            success_msg: "You're in! Check your email for early access instructions.",
            modal_privacy_title: "Privacy Policy",
            modal_terms_title: "Terms of Service",
            modal_last_updated: "Last Updated: May 2026",
            modal_privacy_intro: "FloatDeck is committed to protecting your privacy. This Privacy Policy explains how we handle your data in compliance with Google Chrome Web Store Developer Program Policies.",
            modal_privacy_h1: "1. Data Collection and Usage",
            modal_privacy_p1: "FloatDeck operates on a strict \"Privacy by Design\" philosophy. We DO NOT collect, store, transmit, or sell any personal information, browsing history, analytics, or user-generated content to any external servers. All operations happen locally on your device.",
            modal_privacy_h2: "2. Chrome Permissions Justification",
            modal_privacy_p2_intro: "To provide our core functionality, FloatDeck requires the following minimally-scoped permissions:",
            modal_privacy_li1: "Tabs & Windows: Used exclusively to facilitate the floating dashboard functionality and manage your active workspace. We do not track or record the URLs or content of the tabs you visit.",
            modal_privacy_li2: "Storage: Used strictly to save your user-defined layout presets and theme preferences locally on your device. No data leaves your browser.",
            modal_privacy_h3: "3. Third-Party Services",
            modal_privacy_p3: "FloatDeck integrates with third-party tools (like AI assistants or video players) through standard web interfaces. Your interaction with these embedded tools is governed by their respective privacy policies. FloatDeck does not act as a middleman to intercept this data.",
            modal_privacy_h4: "4. Changes to this Policy",
            modal_privacy_p4: "We may update this policy occasionally. Any changes will be reflected with an updated date.",
            modal_privacy_h5: "5. Contact Us",
            modal_privacy_p5: "For privacy-related inquiries, contact us at: klarkzdev@gmail.com",
            modal_terms_intro: "By installing and using FloatDeck, you agree to be bound by these Terms of Service.",
            modal_terms_h1: "1. License and Usage",
            modal_terms_p1: "FloatDeck grants you a personal, non-exclusive, non-transferable license to use the extension for personal or internal business productivity purposes. You may not reverse-engineer, distribute, or exploit the extension for commercial gain without explicit permission.",
            modal_terms_h2: "2. Beta Disclaimer and \"As Is\" Provision",
            modal_terms_p2: "FloatDeck is currently in its \"Beta\" phase. The extension is provided \"AS IS\" and \"AS AVAILABLE\", without warranties of any kind, either express or implied. We do not guarantee that the extension will be error-free or uninterrupted.",
            modal_terms_h3: "3. Limitation of Liability",
            modal_terms_p3: "In no event shall FloatDeck or its developers be liable for any indirect, incidental, or consequential damages, including loss of data or productivity, arising out of the use or inability to use the extension.",
            modal_terms_h4: "4. User Responsibilities",
            modal_terms_p4: "You are responsible for your use of the embedded third-party tools within FloatDeck. You agree not to use the extension for any unlawful activities or to violate the terms of the services you access through our floating windows.",
            modal_terms_h5: "5. Contact",
            modal_terms_p5: "If you have any questions about these Terms, please contact: klarkzdev@gmail.com"
        },
        pt: {
            hero_badge: "DOMINE O SEU FLUXO DE TRABALHO",
            hero_title: "Multi-Task Like a Pro. <span>Sem o Caos.</span>",
            hero_subtitle: "Pare de se afogar em um mar de abas. O FloatDeck unifica sua IA, Código, Tarefas e Mídia em um único espaço de trabalho fluido que flutua exatamente onde você precisa.",
            email_placeholder: "Seu e-mail corporativo",
            cta_button: "Obter Acesso Antecipado",
            install_cta: "Instalação Grátis",
            form_disclaimer: "Sem spam. Cancele quando quiser.",
            hero_disclaimer: "Otimizado para Chrome e Comet",
            vs_tag: "O INIMIGO DO SEU FOCO",
            vs_title: "Fuja do Cemitério de Abas",
            problem_title: "Pare de Lutar contra a Fadiga de Alternar Abas",
            problem_text: "A troca constante de contexto destrói o foco. Perder suas ferramentas em mais de 50 abas abertas custa horas de trabalho profundo toda semana.",
            solution_title: "Um Fluxo de Trabalho Fluido que Segue o seu Olhar",
            solution_text: "Uma camada flutuante para suas ferramentas vitais. Mantenha sua IA, código e tarefas sempre à vista, independente da aba que estiver navegando.",
            showcase_tag: "Demonstração Real",
            showcase_title: "Experimente o Foco Absoluto",
            features_tag: "O Que Está Dentro",
            features_title: "Tudo o Que Você Precisa, Flutuando",
            feature_1_title: "Assistente Omni-IA",
            feature_1_desc: "Acesso instantâneo ao Gemini em qualquer janela. Pesquise e gere conteúdo sem nunca trocar de aba.",
            feature_2_title: "Editor de Código Flutuante",
            feature_2_desc: "Um editor leve que permanece visível sobre sua documentação. Programe e aprenda com zero fricção.",
            feature_3_title: "Tarefas Focus Flow",
            feature_3_desc: "Mantenha prioridades sempre à vista. Gestão de tarefas integrada que não se esconde atrás de outras janelas.",
            feature_4_title: "Mídia PiP Inteligente",
            feature_4_desc: "Transforme tutoriais e reuniões em janelas flutuantes inteligentes. Aprenda, assista e execute em tempo real.",
            testimonials_tag: "Prova Social",
            testimonials_title: "Confiado por Profissionais de Alta Performance",
            testimonial_1_text: "\"O FloatDeck recuperou 2 horas do meu fluxo diário. Não ter que caçar a aba certa entre 40 janelas é um milagre de produtividade.\"",
            testimonial_1_author: "Marcos R., Desenvolvedor Backend Sênior",
            testimonial_2_text: "\"A integração do Gemini logo acima da minha lista de tarefas mudou tudo. É a experiência multi-tarefa que nos prometeram há anos.\"",
            testimonial_2_author: "Julia S., Product Designer",
            verified_user: "Usuário Beta Verificado",
            final_cta_title: "Pronto para Recuperar seu Foco?",
            final_cta_sub: "Junte-se a milhares de profissionais que já atualizaram seu fluxo de trabalho.",
            footer_tagline: "Eleve sua experiência de navegação.",
            footer_terms: "Termos de Serviço",
            footer_privacy: "Política de Privacidade",
            footer_support: "Suporte",
            loading: "Processando...",
            success_msg: "Você está dentro! Verifique seu e-mail para as instruções de acesso.",
            modal_privacy_title: "Política de Privacidade",
            modal_terms_title: "Termos de Serviço",
            modal_last_updated: "Última Atualização: Maio de 2026",
            modal_privacy_intro: "O FloatDeck está comprometido em proteger sua privacidade. Esta Política de Privacidade explica como lidamos com seus dados em conformidade com as Políticas do Programa de Desenvolvedores da Chrome Web Store do Google.",
            modal_privacy_h1: "1. Coleta e Uso de Dados",
            modal_privacy_p1: "O FloatDeck opera com uma filosofia estrita de \"Privacidade por Design\". NÓS NÃO coletamos, armazenamos, transmitimos ou vendemos nenhuma informação pessoal, histórico de navegação, análises ou conteúdo gerado pelo usuário para nenhum servidor externo. Todas as operações acontecem localmente no seu dispositivo.",
            modal_privacy_h2: "2. Justificativa de Permissões do Chrome",
            modal_privacy_p2_intro: "Para fornecer nossa funcionalidade principal, o FloatDeck requer as seguintes permissões de escopo mínimo:",
            modal_privacy_li1: "Abas e Janelas: Usadas exclusivamente para facilitar a funcionalidade do painel flutuante e gerenciar seu espaço de trabalho ativo. Não rastreamos ou gravamos os URLs ou conteúdos das abas que você visita.",
            modal_privacy_li2: "Armazenamento: Usado estritamente para salvar seus presets de layout definidos pelo usuário e preferências de tema localmente no seu dispositivo. Nenhum dado sai do seu navegador.",
            modal_privacy_h3: "3. Serviços de Terceiros",
            modal_privacy_p3: "O FloatDeck integra-se com ferramentas de terceiros (como assistentes de IA ou players de vídeo) através de interfaces web padrão. Sua interação com essas ferramentas embutidas é regida por suas respectivas políticas de privacidade. O FloatDeck não atua como um intermediário para interceptar esses dados.",
            modal_privacy_h4: "4. Alterações a esta Política",
            modal_privacy_p4: "Podemos atualizar esta política ocasionalmente. Quaisquer alterações serão refletidas com uma data atualizada.",
            modal_privacy_h5: "5. Contate-nos",
            modal_privacy_p5: "Para dúvidas relacionadas à privacidade, contate-nos em: klarkzdev@gmail.com",
            modal_terms_intro: "Ao instalar e usar o FloatDeck, você concorda em ficar vinculado a estes Termos de Serviço.",
            modal_terms_h1: "1. Licença e Uso",
            modal_terms_p1: "O FloatDeck concede a você uma licença pessoal, não exclusiva e intransferível para usar a extensão para fins de produtividade pessoal ou empresarial interna. Você não pode fazer engenharia reversa, distribuir ou explorar a extensão para ganhos comerciais sem permissão explícita.",
            modal_terms_h2: "2. Aviso Legal da Versão Beta e Provisão \"No Estado em que se Encontra\"",
            modal_terms_p2: "O FloatDeck está atualmente em sua fase \"Beta\". A extensão é fornecida \"NO ESTADO EM QUE SE ENCONTRA\" e \"CONFORME DISPONÍVEL\", sem garantias de qualquer tipo, expressas ou implícitas. Não garantimos que a extensão estará livre de erros ou ininterrupta.",
            modal_terms_h3: "3. Limitação de Responsabilidade",
            modal_terms_p3: "Em nenhum caso o FloatDeck ou seus desenvolvedores serão responsáveis por quaisquer danos indiretos, incidentais ou consequentes, incluindo perda de dados ou produtividade, decorrentes do uso ou incapacidade de usar a extensão.",
            modal_terms_h4: "4. Responsabilidades do Usuário",
            modal_terms_p4: "Você é responsável pelo uso das ferramentas de terceiros embutidas no FloatDeck. Você concorda em não usar a extensão para atividades ilícitas ou para violar os termos dos serviços que acessa através de nossas janelas flutuantes.",
            modal_terms_h5: "5. Contacto",
            modal_terms_p5: "Se você tiver alguma dúvida sobre estes Termos, entre em contato: klarkzdev@gmail.com"
        },
        es: {
            hero_badge: "DOMINA TU FLUJO DE TRABAJO",
            hero_title: "Multi-Task Like a Pro. <span>Sin el Caos.</span>",
            hero_subtitle: "Deja de ahogarte en un mar de pestañas. FloatDeck unifica tu IA, Código, Tareas y Medios en un único espacio de trabajo fluido que flota exactamente donde lo necesitas.",
            email_placeholder: "Tu email corporativo",
            cta_button: "Obtener Acceso Anticipado",
            install_cta: "Instalación Gratis",
            form_disclaimer: "Sin spam. Cancela cuando quieras.",
            hero_disclaimer: "Optimizado para Chrome y Comet",
            vs_tag: "EL ENEMIGO DE TU ENFOQUE",
            vs_title: "Escapa del Cementerio de Pestañas",
            problem_title: "Deja de Luchar contra la Fatiga de Cambiar Pestañas",
            problem_text: "El cambio constante de contexto destruye el enfoque. Perder tus herramientas en más de 50 pestañas abiertas te cuesta horas de trabajo profundo cada semana.",
            solution_title: "Un Flujo de Trabajo Fluido que Sigue tu Mirada",
            solution_text: "Una capa flotante para tus herramientas más vitales. Mantén tu IA, código y tareas siempre a la vista, sin importar qué pestaña estés navegando.",
            showcase_tag: "Vista Previa",
            showcase_title: "Experimenta el Enfoque Absoluto",
            features_tag: "Lo Que Hay Dentro",
            features_title: "Todo lo que Necesitas, Flotando",
            feature_1_title: "Asistente Omni-IA",
            feature_1_desc: "Acceso instantáneo a Gemini AI en cualquier ventana. Investiga y genera contenido sin cambiar de pestaña.",
            feature_2_title: "Editor de Código Flotante",
            feature_2_desc: "Un editor ligero que permanece visible sobre tu documentación. Programa y aprende con cero fricción.",
            feature_3_title: "Tareas Focus Flow",
            feature_3_desc: "Mantén prioridades siempre a la vista. Gestión de tareas integrada que no se esconde tras otras ventanas.",
            feature_4_title: "Medios PiP Inteligentes",
            feature_4_desc: "Transforma tutoriales y reuniones en ventanas flotantes inteligentes. Aprende, mira y ejecuta en tiempo real.",
            testimonials_tag: "Prueba Social",
            testimonials_title: "Confiado por Profesionales de Alto Rendimiento",
            testimonial_1_text: "\"FloatDeck recuperó 2 horas de mi flujo diario. No tener que buscar la pestaña correcta entre 40 ventanas es un milagro de productividad.\"",
            testimonial_1_author: "Marco R., Desarrollador Backend Senior",
            testimonial_2_text: "\"La integración de Gemini justo encima de mi lista de tareas lo cambió todo. Es la experiencia multitarea que nos prometieron por años.\"",
            testimonial_2_author: "Julia S., Diseñadora de Producto",
            verified_user: "Usuario Beta Verificado",
            final_cta_title: "¿Listo para Recuperar tu Enfoque?",
            final_cta_sub: "Únete a miles de profesionales que ya han mejorado su flujo de trabajo.",
            footer_tagline: "Eleva tu experiencia de navegación.",
            footer_terms: "Términos de Service",
            footer_privacy: "Política de Privacidade",
            footer_support: "Soporte",
            loading: "Procesando...",
            success_msg: "¡Ya estás dentro! Revisa tu email para las instrucciones de acceso.",
            modal_privacy_title: "Política de Privacidad",
            modal_terms_title: "Términos de Servicio",
            modal_last_updated: "Última Actualización: Mayo de 2026",
            modal_privacy_intro: "FloatDeck está comprometido a proteger tu privacidad. Esta Política de Privacidad explica cómo manejamos tus datos en cumplimiento con las Políticas del Programa de Desarrolladores de Chrome Web Store de Google.",
            modal_privacy_h1: "1. Recopilación y Uso de Datos",
            modal_privacy_p1: "FloatDeck opera bajo una estricta filosofía de \"Privacidad por Diseño\". NO recopilamos, almacenamos, transmitimos ni vendemos ninguna información personal, historial de navegación, análisis ni contenido generado por el usuario a ningún servidor externo. Todas las operaciones ocurren localmente en tu dispositivo.",
            modal_privacy_h2: "2. Justificación de Permisos de Chrome",
            modal_privacy_p2_intro: "Para proporcionar nuestra funcionalidad principal, FloatDeck requiere los siguientes permisos de alcance mínimo:",
            modal_privacy_li1: "Pestañas y Ventanas: Usadas exclusivamente para facilitar la funcionalidad del panel flotante y administrar tu espacio de trabajo activo. No rastreamos ni registramos las URL o el contenido de las pestañas que visitas.",
            modal_privacy_li2: "Almacenamiento: Usado estrictamente para guardar tus preajustes de diseño definidos por el usuario y preferencias de tema localmente en tu dispositivo. Ningún dato sale de tu navegador.",
            modal_privacy_h3: "3. Terceros Servicios",
            modal_privacy_p3: "FloatDeck se integra con herramientas de terceros (como asistentes de IA o reproductores de video) a través de interfaces web estándar. Tu interacción con estas herramientas integradas se rige por sus respectivas políticas de privacidad. FloatDeck no actúa como un intermediario para interceptar estos datos.",
            modal_privacy_h4: "4. Cambios en esta Política",
            modal_privacy_p4: "Podemos actualizar esta política ocasionalmente. Cualquier cambio se reflejará con una fecha actualizada.",
            modal_privacy_h5: "5. Contáctanos",
            modal_privacy_p5: "Para consultas relacionadas con la privacidad, contáctanos en: klarkzdev@gmail.com",
            modal_terms_intro: "Al instalar y usar FloatDeck, aceptas estar sujeto a estos Términos de Servicio.",
            modal_terms_h1: "1. Licencia y Uso",
            modal_terms_p1: "FloatDeck te otorga una licencia personal, no exclusiva e intransferible para usar la extensión para fines de productividad personal o comercial interna. No puedes realizar ingeniería inversa, distribuir o explotar la extensión para obtener ganancias comerciales sin permiso explícito.",
            modal_terms_h2: "2. Descargo de Responsabilidad Beta y Provisión \"Tal Cual\"",
            modal_terms_p2: "FloatDeck se encuentra actualmente en su fase \"Beta\". La extensión se proporciona \"TAL CUAL\" y \"SEGÚN DISPONIBILIDAD\", sin garantías de ningún tipo, ya sean expresas o implícitas. No garantizamos que la extensión estará libre de errores o será ininterrumpida.",
            modal_terms_h3: "3. Limitación de Responsabilidad",
            modal_terms_p3: "En ningún caso FloatDeck o sus desarrolladores serán responsables por ningún daño indirecto, incidental o consecuente, incluida la pérdida de datos o productividad, que surja del uso o la incapacidad de usar la extensión.",
            modal_terms_h4: "4. Responsabilidades del Usuario",
            modal_terms_p4: "Eres responsable de tu uso de las herramientas de terceros integradas dentro de FloatDeck. Aceptas no usar la extensión para actividades ilegales o para violar los términos de los servicios a los que accedes a través de nuestras ventanas flotantes.",
            modal_terms_h5: "5. Contacto",
            modal_terms_p5: "Si tienes alguna pregunta sobre estos Términos, por favor contacta: klarkzdev@gmail.com"
        }
    };

    // =============================================
    // i18n ENGINE
    // =============================================
    function initI18n() {
        const langSelector = document.getElementById('lang-selector');
        let saved = null;
        
        // 5. Try...catch for LocalStorage Isolation
        try {
            saved = localStorage.getItem('lang');
        } catch (e) {
            // If extensions block storage, default is EN (saved = null)
            console.warn("Storage access restricted. Defaulting to EN.");
        }

        const browser = navigator.language.split('-')[0];
        const supported = ['en', 'pt', 'es'];
        const active = supported.includes(saved || browser) ? (saved || browser) : 'en';

        setLang(active);
        if (langSelector) langSelector.value = active;

        if (langSelector) {
            langSelector.addEventListener('change', e => {
                const lang = e.target.value;
                try {
                    localStorage.setItem('lang', lang);
                } catch (err) {}
                setLang(lang);
            });
        }
    }

    function setLang(lang) {
        const data = translations[lang] || translations['en'];
        if (!data) return;

        // 4. Optimized updateContent with valid key verification
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            
            // Only update if key exists in our controlled translations object
            // This prevents external scripts/extensions from polluting our loop
            if (!translations['en'].hasOwnProperty(key)) return;

            const text = data[key] || translations['en'][key];
            if (!text) return;

            if (el.tagName === 'INPUT') {
                el.placeholder = text;
            } else {
                el.innerHTML = text;
            }
        });

        document.documentElement.lang = lang;
    }

    // =============================================
    // THEME & OTHERS (Hidden inside IIFE)
    // =============================================
    function initTheme() {
        const btn = document.getElementById('theme-toggle');
        let saved = 'dark';
        try {
            saved = localStorage.getItem('theme') || 'dark';
        } catch (e) {}
        
        applyTheme(saved);

        if (btn) {
            btn.addEventListener('click', () => {
                const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
                applyTheme(next);
                try { localStorage.setItem('theme', next); } catch (e) {}
            });
        }
    }

    function applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        const icon = document.getElementById('theme-icon');
        if (icon) icon.textContent = theme === 'dark' ? '🌙' : '☀️';
    }

    function initAnimations() {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const delay = entry.target.classList.contains('feature-card')
                        ? Array.from(document.querySelectorAll('.feature-card')).indexOf(entry.target) * 80
                        : 0;
                    setTimeout(() => entry.target.classList.add('visible'), delay);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

        document.querySelectorAll('.feature-card, .testimonial-card').forEach(el => observer.observe(el));
    }

    function initForm() {
        const form = document.getElementById('lead-form');
        if (!form) return;

        const btn = form.querySelector('button');
        const input = document.getElementById('email-input');

        if (input) {
            input.addEventListener('input', () => {
                input.style.borderBottomColor = '';
            });
        }

        form.addEventListener('submit', async e => {
            e.preventDefault();
            const honeypot = form.querySelector('input[name="hp_field"]');
            const lang = document.documentElement.lang || 'en';

            if (honeypot && honeypot.value) {
                form.reset();
                showToast(translations[lang]?.success_msg || translations['en'].success_msg);
                return;
            }

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (input && !emailRegex.test(input.value)) {
                input.style.borderBottomColor = 'var(--error)';
                input.focus();
                return;
            }
            
            const original = btn.innerHTML;
            btn.disabled = true;
            btn.innerHTML = `<span class="spinner"></span> ${translations[lang]?.loading || translations['en'].loading}`;

            try {
                const formData = new FormData(form);
                await fetch(form.action, {
                    method: 'POST',
                    body: formData,
                    mode: 'no-cors'
                });
                form.reset();
                showToast(translations[lang]?.success_msg || translations['en'].success_msg);
            } catch (err) {
                form.reset();
                showToast(translations[lang]?.success_msg || translations['en'].success_msg);
            } finally {
                btn.disabled = false;
                btn.innerHTML = original;
            }
        });
    }

    function showToast(msg) {
        const t = document.createElement('div');
        t.textContent = msg;
        Object.assign(t.style, {
            position: 'fixed', bottom: '28px', left: '50%',
            transform: 'translateX(-50%)',
            background: '#10b981', color: '#fff',
            padding: '14px 28px', borderRadius: '14px',
            fontFamily: 'Inter,sans-serif', fontWeight: '600', fontSize: '0.9rem',
            boxShadow: '0 8px 32px rgba(16,185,129,0.4)',
            zIndex: '9999', whiteSpace: 'nowrap',
            animation: 'fadeOverlay 0.3s ease'
        });
        document.body.appendChild(t);
        setTimeout(() => t.remove(), 4000);
    }

    function initModals() {
        const btnTerms = document.getElementById('btn-terms');
        const btnPrivacy = document.getElementById('btn-privacy');

        if (btnTerms) {
            btnTerms.addEventListener('click', () => openModal('modal-terms'));
        }
        if (btnPrivacy) {
            btnPrivacy.addEventListener('click', () => openModal('modal-privacy'));
        }

        document.querySelectorAll('.modal-close').forEach(btn => {
            btn.addEventListener('click', () => {
                const modal = btn.closest('.modal-overlay');
                if (modal) modal.classList.remove('open');
            });
        });

        document.querySelectorAll('.modal-overlay').forEach(overlay => {
            overlay.addEventListener('click', e => {
                if (e.target === overlay) overlay.classList.remove('open');
            });
        });

        document.addEventListener('keydown', e => {
            if (e.key === 'Escape') {
                document.querySelectorAll('.modal-overlay.open').forEach(m => m.classList.remove('open'));
            }
        });
    }

    function openModal(id) {
        const modal = document.getElementById(id);
        if (modal) modal.classList.add('open');
    }

    function closeModal(id) {
        const modal = document.getElementById(id);
        if (modal) modal.classList.remove('open');
    }

    function initCarousel() {
        const track = document.getElementById('carousel-track');
        if (!track || !track.firstElementChild) return;

        const firstClone = track.firstElementChild.cloneNode(true);
        track.appendChild(firstClone);

        const slides = Array.from(track.children);
        let currentIndex = 0;
        let isTransitioning = false;

        function nextSlide() {
            if (isTransitioning) return;
            isTransitioning = true;
            currentIndex++;
            track.style.transition = 'transform 0.8s cubic-bezier(0.645, 0.045, 0.355, 1)';
            track.style.transform = `translateX(-${currentIndex * 100}%)`;

            track.addEventListener('transitionend', function handleTransition() {
                if (currentIndex === slides.length - 1) {
                    track.style.transition = 'none';
                    currentIndex = 0;
                    track.style.transform = `translateX(0)`;
                }
                isTransitioning = false;
                track.removeEventListener('transitionend', handleTransition);
            });
        }
        setInterval(nextSlide, 4000);
    }

    function initScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                const target = document.querySelector(targetId);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
            });
        });
    }

    // Main Init
    document.addEventListener('DOMContentLoaded', () => {
        initI18n();
        initTheme();
        initAnimations();
        initForm();
        initModals();
        initCarousel();
        initScroll();
    });

})();
