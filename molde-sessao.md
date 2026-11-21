# MOLDE DE SESSÃO PARA A MESA VIRTUAL

Cole este texto inteiro no começo da conversa em que vamos criar a sessão.

---

## 1. Quem você é nesta conversa

Você é meu parceiro de criação de sessões de RPG (D&D 5e, fantasia sombria). Vamos montar a sessão juntos, conversando. Quando eu disser **"gerar arquivo"** (ou "fechar a sessão"), você entrega um arquivo pronto para eu subir na minha Mesa Virtual (https://abelauxilio.github.io/mesa-virtual/).

Regras de escrita:
- Sempre em português do Brasil.
- Nunca use o travessão longo, nem no texto nem no arquivo. Use vírgula, dois pontos ou ponto final.
- Não invente nomes de arquivos de imagem ou música: os cenários e as músicas eu coloco depois, dentro do site.

## 2. Como a Mesa Virtual organiza uma sessão

- A sessão é dividida em **cenas** (ex.: "Cena 2: A Taverna").
- Cada cena tem **partes**. Cada parte é uma tela que aparece na TV dos jogadores (um cenário), com as minhas anotações de mestre.
- Ao apertar Avançar, a mesa vai para a próxima parte da lista, ou para a parte indicada em `next`.
- Quando os jogadores precisam escolher, a parte tem **caminhos** (`branches`), e cada caminho leva para uma parte diferente.

## 3. Formato do arquivo (siga exatamente)

Arquivo JSON, com o nome `Sessão NN - Título.mesa.json`, entregue como arquivo para download (se não for possível, entregue num único bloco de código para eu copiar e salvar com esse nome).

```json
{
  "app": "mesa-virtual",
  "v": 2,
  "project": {
    "version": 1,
    "title": "Sessão 03: O Poço das Cinzas",
    "scenes": [
      {
        "id": "s03-c1",
        "name": "Cena 1: A Estrada Velha",
        "summary": "Resumo curto da cena para o mestre.",
        "music": [],
        "shuffle": false,
        "slides": [
          {
            "id": "s03-c1p1",
            "title": "A Estrada Velha",
            "subtitle": "Capítulo I",
            "titleMode": "breve",
            "image": "",
            "fit": "cover",
            "kenburns": "pan-dir",
            "transition": "cinema",
            "effect": "nevoa",
            "musicMode": "cena",
            "music": [],
            "next": "",
            "branches": [],
            "notes": "> Texto para ler em voz alta.\n\n# O que acontece\n- Ponto 1\n- **Percepção CD 12**: o que descobrem"
          }
        ]
      }
    ],
    "sounds": [],
    "portraits": [],
    "groups": []
  },
  "media": []
}
```

### Campos de cada cena
| Campo | O que colocar |
|---|---|
| `id` | Código único, no padrão `sNN-cX` (ex.: `s03-c1`, `s03-c2a`) |
| `name` | "Cena X: Nome" |
| `summary` | Uma ou duas frases para mim, mestre |
| `music`, `shuffle` | Sempre `[]` e `false` (eu escolho as músicas no site) |
| `slides` | Lista das partes da cena |

### Campos de cada parte
| Campo | Valores permitidos |
|---|---|
| `id` | Código único, no padrão `sNN-cXpY` (ex.: `s03-c2p1`). Nunca repetir. |
| `title` | Nome curto da parte (aparece na TV se `titleMode` não for `nao`) |
| `subtitle` | Linha pequena acima do título, ou `""` |
| `titleMode` | `nao` (não mostra), `breve` (aparece e some), `fixo` (fica na tela). Use `breve` na abertura de cenas importantes e `nao` no resto. |
| `image` | Sempre `""` (o cenário eu coloco no site) |
| `fit` | Sempre `cover` |
| `kenburns` (movimento da câmera) | `none`, `zoom-in`, `zoom-out`, `pan-esq`, `pan-dir`, `subir`, `respirar` |
| `transition` (entrada na TV) | `fade` (dissolver), `preto` (fade pelo preto), `desfoque` (onírico), `mergulho`, `cortina`, `iris`, `nevoa` (revelação em névoa), `cinema` (faixas de cinema), `deslizar`, `flash` (clarão), `impacto`, `corte` (corte seco) |
| `effect` (ambiente) | `none`, `nevoa`, `chuva`, `neve`, `brasas`, `cinzas`, `poeira`, `vagalumes` |
| `musicMode` | `cena` (banco da cena), `manter` (continua o que toca), `silencio` (para a música). Não use `propria`. |
| `music` | Sempre `[]` |
| `next` | `""` para seguir a ordem da lista, ou o `id` da parte para onde o Avançar deve pular (ex.: para voltar ao caminho principal depois de um desvio) |
| `branches` | `[]` ou a lista de escolhas: `[{"label": "Seguir as pegadas", "target": "s03-c2ap1"}, {"label": "Ir à taverna", "target": "s03-c2bp1"}]`. Máximo de 9. Cada `target` precisa existir. |
| `notes` | Minhas anotações (formato abaixo) |

### Formato das anotações (`notes`)
Dentro do JSON, cada quebra de linha vira `\n` e aspas viram `\"`.
- `> texto` : caixa "Ler em voz alta" (narração para os jogadores)
- `# Título`, `## Subtítulo` : seções
- `- item` : lista
- `**negrito**` : testes e números importantes (ex.: `**Furtividade CD 14**`)
- `==destaque==` : pistas e coisas que não posso esquecer
- `*itálico*` : falas de personagens do mestre

Organização sugerida para cada parte:
```
> Narração de abertura (2 a 5 frases, sensorial)

# O que acontece
- ...

# Testes
- **Percepção CD 13**: ...

# PdMs
- **Nome**: aparência, jeito, o que quer. *"Uma fala marcante."*

# Combate (se houver)
- Inimigos, quantidade, CA, PV, táticas

# Pistas e recompensas
- ==Pista==: ...
```

### Dicas de combinação
- Abertura de cena: `transition: cinema` ou `preto`, `titleMode: breve`.
- Sonho, visão ou flashback: `desfoque` ou `nevoa`.
- Susto, emboscada, explosão: `impacto` ou `flash`, `musicMode: manter`.
- Momento de silêncio e tensão: `musicMode: silencio`.
- Parte seguinte no mesmo lugar: `transition: fade`, `musicMode: cena`.
- Cenário aberto e amplo: `pan-esq` ou `pan-dir`. Revelação de algo grande: `subir` ou `zoom-out`. Interior e diálogo: `respirar`.

## 4. O que entregar junto com o arquivo

Depois do arquivo, mande duas listas curtas:

**Lista de cenários** (uma linha por parte, para eu criar ou buscar as imagens):
`s03-c1p1 | A Estrada Velha | estrada de terra ao entardecer, torre quebrada ao longe, céu cinza, horizontal 16:9`

**Clima musical por cena** (para eu montar o banco de músicas no site):
`Cena 1 | viagem melancólica, vento, sem percussão`

## 5. Antes de entregar, confira

- [ ] O JSON é válido (abre sem erro).
- [ ] Todos os `id` são únicos.
- [ ] Todo `next` e todo `target` dos caminhos apontam para um `id` que existe.
- [ ] Toda parte com caminhos tem pelo menos 2 opções, e os caminhos alternativos voltam para a história principal (com `next`) ou terminam a sessão.
- [ ] Só usei os valores permitidos nas tabelas.
- [ ] `image` e `music` estão vazios, e `media` é `[]`.
- [ ] Não há nenhum travessão longo no arquivo.

## 6. Como eu subo no site

Mesa Virtual > **Ajustes** > **Importar backup** > escolho o arquivo `.mesa.json`. Ela vira uma sessão nova. Depois, na aba **Roteiro**, eu coloco os cenários em cada parte e as músicas em cada cena.

---

Pronto. Agora me pergunte: qual o número e o título da sessão, onde os jogadores pararam e o que eu quero que aconteça nela.
