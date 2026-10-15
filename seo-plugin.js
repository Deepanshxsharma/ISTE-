/**
 * SEO & LLMs Generator Plugin for Deepansh Sharma's 3D Portfolio
 * Generates JSON-LD Knowledge Graph and llms.txt for AI crawlers
 */

export function generateSeoHtml() {
    return {
        name: 'vite-seo-deepansh',
        
        transformIndexHtml(html) {
            const jsonLd = {
                '@context': 'https://schema.org',
                '@graph': [
                    {
                        '@type': 'Person',
                        '@id': '#person',
                        name: 'Deepansh Sharma',
                        alternateName: ['Deepansh', 'Deepansh SRM'],
                        jobTitle: 'Full-Stack Developer & Computer Vision Researcher',
                        alumniOf: {
                            '@type': 'EducationalOrganization',
                            name: 'SRM University'
                        },
                        description: 'B.Tech student in Computer Science and Engineering at SRM University, specializing in full-stack applications, computer vision ANPR pipelines, AI assistants, and IoT integrations.',
                        knowsAbout: ['React', 'React Three Fiber', 'Three.js', 'Python', 'OpenCV', 'YOLO', 'FastAPI', 'Node.js', 'IoT', 'ESP32'],
                        sameAs: [
                            'https://github.com/deepanshsharma',
                            'https://www.linkedin.com/in/deepansh-sharma/'
                        ]
                    },
                    {
                        '@type': 'WebSite',
                        '@id': '#website',
                        name: 'Deepansh Sharma | Beyond The Screen',
                        description: 'Interactive 3D developer portfolio by Deepansh Sharma',
                        publisher: { '@id': '#person' }
                    }
                ]
            };

            const jsonLdScript = `\n  <!-- Structured Data (JSON-LD) -->\n  <script type="application/ld+json">\n${JSON.stringify(jsonLd, null, 2)}\n  </script>\n`;
            return html.replace('</head>', `${jsonLdScript}</head>`);
        },

        async generateBundle() {
            const llmsContent = `# Deepansh Sharma
> Aspiring Full-Stack Application Developer & CSE Student at SRM University
> "I build things that connect code to the real world."

## Background
- Education: B.Tech in Computer Science and Engineering at SRM University.
- Domains: Interactive UI & 3D WebGL, Computer Vision (ANPR), Multimodal AI Assistants, Hardware & IoT Telemetry.

## Featured Engineering Projects
1. TechXpert My Parking: Real-time smart parking allocation system with bay reservations and payment processing.
2. TechXPark ANPR Pipeline: Computer vision vehicle license plate recognition pipeline with edge preprocessing and sub-100ms inference.
3. Hi TechXPert: Multimodal Gemini assistant for interactive diagnostic troubleshooting and visual reasoning.
4. Jarvis Personal AI Assistant: Local tool execution, speech synthesis, and contextual voice-guided workflow automation.
5. IoT Edge Node & Telemetry Hub: ESP32 microcontrollers streaming live telemetry over MQTT to a centralized analytics dashboard.

## Links & Contact
- Email: deepansh.sharma.dev@gmail.com
- GitHub: https://github.com/deepanshsharma
- LinkedIn: https://www.linkedin.com/in/deepansh-sharma/
`;

            this.emitFile({
                type: 'asset',
                fileName: 'llms.txt',
                source: llmsContent
            });
        }
    };
}
