// Build "estatico": copia os arquivos do site para a pasta dist/
// (a esteira da Hostinger roda `npm run build` e serve o conteudo de dist/).
import { cpSync, rmSync, mkdirSync, existsSync } from 'node:fs';

rmSync('dist', { recursive: true, force: true });
mkdirSync('dist', { recursive: true });

for (const file of ['index.html', 'termos.html', 'privacidade.html']) {
  if (existsSync(file)) cpSync(file, `dist/${file}`);
}
cpSync('assets', 'dist/assets', { recursive: true });

console.log('Build OK: site copiado para dist/');
