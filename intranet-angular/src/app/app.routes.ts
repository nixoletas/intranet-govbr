import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ServicoPageComponent } from './pages/secoes/s1/servico/servico.component';
import { RamaisComponent } from './pages/ramais/ramais.component';
import { AdjuntoComponent } from './pages/institucional/adjunto/adjunto.component';
import { ComandanteComponent } from './pages/institucional/comandante/comandante.component';
import { DiretrizComponent } from './pages/institucional/diretriz/diretriz.component';
import { EnderecoComponent } from './pages/institucional/endereco/endereco.component';
import { InstitucionalComponent } from './pages/institucional/institucional.component';
import { MissaoComponent } from './pages/institucional/missao/missao.component';
import { SubordinacaoComponent } from './pages/institucional/subordinacao/subordinacao.component';
import { VisaoComponent } from './pages/institucional/visao/visao.component';
import { AditamentosComponent } from './pages/secoes/s1/aditamentos/aditamentos.component';
import { AssJurdComponent } from './pages/secoes/s1/ass-jurd/ass-jurd.component';
import { AvisosComponent } from './pages/secoes/s1/avisos/avisos.component';
import { BoletinsComponent } from './pages/secoes/s1/boletins/boletins.component';
import { ModelosComponent } from './pages/secoes/s1/modelos/modelos.component';
import { OsComponent } from './pages/secoes/s1/os/os.component';
import { S1PageComponent } from './pages/secoes/s1/s1.component';
import { SecretariaComponent } from './pages/secoes/s1/secretaria/secretaria.component';
import { AvisosS2Component } from './pages/secoes/s2/avisos/avisos.component';
import { DocumentosS3Component } from './pages/secoes/s3/documentos/documentos.component';
import { LegislacaoS4Compoent } from './pages/secoes/s4/legislacao/legislacao.component';
import { ModelosS4Compoent } from './pages/secoes/s4/modelos/modelos.component';
import { EgpComponent } from './pages/secoes/egp/egp.component';
import { FiscalizacaoComponent } from './pages/secoes/fiscalizacao/fiscalizacao.component';
import { ArquivosSalcComponent } from './pages/secoes/salc/arquivos/arquivos.component';
import { PregoesSalcComponent } from './pages/secoes/salc/pregoes/pregoes.component';
import { StiComponent } from './pages/secoes/sti/sti.component';
import { LinksUteisComponent } from './pages/links-uteis/links-uteis.component';
import { ChamadoStiComponent } from './pages/chamado-sti/chamado-sti.component';
import { SistemasExternosComponent } from './pages/sistemas-externos/sistemas-externos.component';
import { CartilhasENormasComponent } from './pages/cartilhas-e-normas/cartilhas-e-normas.component';
import { NewsDetailComponent } from './components/news-detail/news-detail.component';
import { NoticiasComponent } from './pages/noticias/noticias.component';
import { Ciac2Component } from './pages/ciac2/ciac2.component';
import { OperacoesComponent } from './pages/operacoes/operacoes.component';
import { PostagemDetalheComponent } from './pages/postagem-detalhe/postagem-detalhe.component';
import { PopComponent } from './pages/pop/pop.component';
import { PopDetalheComponent } from './pages/pop-detalhe/pop-detalhe.component';
import { LivroViagemComponent } from './pages/livro-viagem/livro-viagem.component';
import { SPPComponent } from './pages/secoes/spp/spp.component';
import { AlmoxComponent } from './pages/secoes/almox/almox.component';

export const routes: Routes = [
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

];