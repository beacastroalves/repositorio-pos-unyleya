<script setup>
import { ref } from 'vue';
import SobreMim from './SobreMim.vue';
import ExperienciasProfissionais from './ExperienciasProfissionais.vue';
import Habilidades from './Habilidades.vue';
import Educacao from './Educacao.vue';

const minhasHabilidadesTecnicas = ref([
  'HTML5', 'CSS3', 'JavaScript', 'Reactjs', 'Vue.js', 'Vite', 'Java basico', 'SQL', 'Git', 'Responsividade'
]);

const minhasHabilidadesPessoais = ref([
  'Comunicação', 'Trabalho em Equipe', 'Empatia', 'Resolução de Problemas', 'Proatividade', 'Adaptabilidade', 'Organização', 'Pensamento Crítico'
]);

const minhaEducacao = ref([
  {
    graduacao: 'Bacharelado em Sistemas de Informação',
    instituicao: 'Centro Universitário Estácio do Ceará',
    periodo: '2020 - 2025'
  },
  {
    graduacao: 'Pós-Graducação de Desenvolvimento Frontend (Cursando)',
    instituicao: 'Faculdade Unyleya',
    periodo: '2025',
    descricao: 'HTML, CSS, JavaScript, Vue.js.'
  }
]);

const minhasExperiencias = ref([
  {
    cargo: 'Analista de Implantação',
    nomeEmpresa: 'Grupo Boticário',
    periodo: 'Julho 2022 - Fevereiro 2024',
    atividades: [
      'Planejamento e execução das configurações da retaguarda dos softwares Varejofácil e SysPDV para lojas do Grupo Boticário.',
      'Implementação de atividades e revisão da documentação.',
      'Repasse de informações, demandas e organização dos franqueados para o time de configuração executar as atividades e efetuar as entregas.',
      'Capacitação e acompanhamento dos analistas dentro das suas demandas. Ponte no contato direto entre o time e o franqueado.',
      'Apoio ao time de migração de dados. Identificação de inconsistências e reporte junto ao desenvolvimento para a implementação de melhorias ou correção de bugs. Trabalhar com metodologias ágil na integração de sistemas.'
    ]
  },
  {
    cargo: 'Analista de Implantação',
    nomeEmpresa: 'Grupo Casa Magalhães',
    periodo: 'Maio 2021 - Junho 2022',
    atividades: [
      'Planejamento e execução das configurações da retaguarda dos softwares Varejofácil e SysPDV.',
      'Identificação de inconsistências e reporte junto ao desenvolvimento para a implementação de melhorias ou correção de bugs.',
      'Capacitação dos novos analistas da equipe para entendimento das rotinas iniciais.',
      'Trabalhar com metodologias ágil na integração de sistemas.'
    ]
  },
  {
    cargo: 'Estagiária de Implantação de Sistemas',
    nomeEmpresa: 'Grupo Casa Magalhães',
    periodo: 'Janeiro 2021 - Maio 2021',
    atividades: [
      'Instrutora do sistema SysPDV e VarejoFacil (ERP).',
      'Identificação de inconsistências e reporte junto ao desenvolvimento para a implementação de melhorias ou correção de bugs.',
      'Parametrização, e implantação em empresas contratantes de diversos ramos, varejo, atacadista, supermercados, etc.',
      'Domínio nas rotinas do sistema como: cadastro de produtos, emissão de documentos fiscais, análise de relatórios financeiros, estoque e venda.'
    ]
  },
]);
</script>

<template>
  <div class="curriculo-container">
    <SobreMim />
    <ExperienciasProfissionais :experiencias="minhasExperiencias" />
    <Educacao :educacao="minhaEducacao" />
    <Habilidades :habilidadeTecnica="minhasHabilidadesTecnicas" :habilidadePessoal="minhasHabilidadesPessoais" />
  </div>
</template>

<style scoped>
.curriculo-container {
  max-width: 960px;
  margin: 0 auto;
  padding: 15px;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  font-family: 'Arial', sans-serif;
}

@media (min-width: 768px) {
  .curriculo-container {
    margin: 40px auto;
    padding: 20px;
  }
}
</style>