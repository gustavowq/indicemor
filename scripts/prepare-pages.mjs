import { copyFile, writeFile } from 'node:fs/promises';

const outputDirectory = new URL('../dist/indicemor-site/browser/', import.meta.url);

// O Pages usa 404.html para endereços desconhecidos; o Angular exibe a página de erro.
await copyFile(
  new URL('index.csr.html', outputDirectory),
  new URL('404.html', outputDirectory),
);

// Os arquivos já estão prontos e não precisam ser processados pelo Jekyll.
await writeFile(new URL('.nojekyll', outputDirectory), '');
