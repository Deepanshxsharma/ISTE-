/**
 * Adds JSON-LD structured data to index.html and emits llms.txt for AI crawlers.
 * Keep it in line with src/config/portfolioData.js — facts only.
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
                        description: 'B.Tech Computer Science and Engineering student at SRM University and aspiring full-stack app developer.',
                        affiliation: { '@type': 'EducationalOrganization', name: 'SRM University' },
                        knowsAbout: ['Flutter', 'Node.js', 'TypeScript', 'Python', 'OpenCV', 'YOLOv8', 'PaddleOCR', 'Gemini API', 'React', 'Three.js'],
                        sameAs: ['https://github.com/Deepanshxsharma']
                    },
                    {
                        '@type': 'WebSite',
                        '@id': '#website',
                        name: 'Deepansh Sharma — Beyond the Screen',
                        description: 'Interactive 3D portfolio of Deepansh Sharma',
                        publisher: { '@id': '#person' }
                    }
                ]
            };

            const jsonLdScript = `\n  <!-- Structured Data (JSON-LD) -->\n  <script type="application/ld+json">\n${JSON.stringify(jsonLd, null, 2)}\n  </script>\n`;
            return html.replace('</head>', `${jsonLdScript}</head>`);
        },

        async generateBundle() {
            const llmsContent = `# Deepansh Sharma
> B.Tech Computer Science and Engineering student at SRM University · aspiring full-stack app developer
> "I build things that connect code to the real world."

## Projects
1. TechXpert My Parking: parking module of the TechXpert Flutter app — lot search, slot and time selection, payment selection, QR ticket and an extendable live timer. Node.js + Express + TypeScript API. In development.
2. TechXPark ANPR: number-plate recognition prototype — OpenCV capture, YOLOv8 detection, PaddleOCR reading, result sent to the parking API.
3. Hi TechXPert: AI assistant prototype for employee-facing workflows on the Gemini API.
4. Jarvis: fork of isair/jarvis (local-first voice assistant) tuned for an M4 MacBook Air — https://github.com/Deepanshxsharma/jarvis
5. Attendance Calculator: Tesseract.js OCR web app — https://deepanshxsharma.github.io/attendance-calculator/

## Contact
- Email: deepanshsharma622@gmail.com
- GitHub: https://github.com/Deepanshxsharma
`;

            this.emitFile({
                type: 'asset',
                fileName: 'llms.txt',
                source: llmsContent
            });
        }
    };
}
