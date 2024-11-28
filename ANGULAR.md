# Estrutura do projeto Angular 🅰️

## Componentes

- aniversariantes - STRAPI
- button-balloon (modelo de botão cinza médio)
- calendario (componente para exibir a foto do calendário da 3ª seção)
- carousel (galeria de imagens com movimento automático) - STRAPI
- footer (parte inferior do site)
- header (parte superior do site)
- instagram (puxa <iframe> de página do instagram)
- menu (menu lateral esquerdo)
- modal-avisos (avisos em forma de modal) - STRAPI
- modal (modal de aniversariantes. se tem aniversariante, exibe o modal) - STRAPI
- news-detail (exibição de notícia ao clicar em uma notícia)
- news (aba de notícias) - STRAPI
- pop-up (exibido no início do site) - STRAPI
- qts-qtfm (usa o componente button-balloon)
- tab (tab acima do carrosel com links importantes)
- weather (exibe os dados do clima e tempo acima do carrosel)

## Rotas

```typescript
    {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
    },
    {
      path: 'home',
      component: HomeComponent,
    },
    { path: 'noticias', component: NoticiasComponent },
    { path: 'noticias/:id', component: NewsDetailComponent },
    {
      path: 'institucional',
      children: [
        { path: '', component: InstitucionalComponent },
        { path: 'visao', component: VisaoComponent },
        { path: 'subordinacao', component: SubordinacaoComponent },
        { path: 'endereco', component: EnderecoComponent },
        { path: 'comandante', component: ComandanteComponent },
        { path: 'adjunto-de-comando', component: AdjuntoComponent },
        { path: 'missao', component: MissaoComponent },
        { path: 'diretriz', component: DiretrizComponent },
      ]
    },
    {
      path: 'ramais',
      component: RamaisComponent,
    },
    {
      path: 's1',
      children: [
        { path: '', component: S1PageComponent },
        { path: 'boletins', component: BoletinsComponent },
        { path: 'avisos', component: AvisosComponent },
        { path: 'servico', component: ServicoPageComponent },
        { path: 'aditamentos', component: AditamentosComponent },
        { path: 'modelos', component: ModelosComponent },
        { path: 'os', component: OsComponent },
        { path: 'ass-jurd', component: AssJurdComponent },
        { path: 'secretaria', component: SecretariaComponent },
        { path: 'livro-viagem', component: LivroViagemComponent },
      ]
    },
    {
      path: 'spp',
      component: SPPComponent
    },
    {
      path: 'almox',
      component: AlmoxComponent
    },
    {
      path: 's2',
      children: [
        { path: 'avisos', component: AvisosS2Component },
      ]
    },
    {
      path: 's3',
      children: [
        { path: 'documentos', component: DocumentosS3Component },
        { path: 'pop', component: PopComponent },
        { path: 'pop/:id', component: PopDetalheComponent },
      ]
    },
    {
      path: 'operacoes',
      component: OperacoesComponent
    },
    { path: 'operacoes/:id', component: PostagemDetalheComponent },
    {
      path: 's4',
      children: [
        { path: 'legislacao', component: LegislacaoS4Compoent },
        { path: 'modelos', component: ModelosS4Compoent },
      ]
    },
    {
      path: 'salc',
      children: [
        { path: 'arquivos', component: ArquivosSalcComponent },
        { path: 'pregoes', component: PregoesSalcComponent },
      ]
    },
    {
      path: 'fiscalizacao',
      component: FiscalizacaoComponent
    },
    {
      path: 'egp',
      component: EgpComponent
    },
    { path: 'sti', component: StiComponent },
    { path: 'sti/chamado', component: ChamadoStiComponent },
    {
      path: 'links-uteis',
      component: LinksUteisComponent
    },
    {
      path: 'ciac2',
      component: Ciac2Component
    },
    { path: 'sistemas-externos', component: SistemasExternosComponent },
    { path: 'cartilhas-e-normas', component: CartilhasENormasComponent },
    { path: '**', redirectTo: 'home' }
```
