<template>
        <HeadersHome></HeadersHome>
        <SectionsFeatureWithImage
        title="Conectando você consumidor"
        subtitle="Ao melhor da sua região"
        description="Experimente a facilidade de ter os melhores restaurantes e serviços ao seu alcance..."
        :features="userFeatures"
        imageSrc="https://tailwindui.com/img/component-images/full-width-with-sidebar.jpg"></SectionsFeatureWithImage>
        <SectionsFeature
        title="Conectando você empreendedor"
        subtitle="A toda sua região"
        description="Experimente a facilidade de aumentar o seu alcance e expandir o seu negócio"
        :features="restaurantFeatures"></SectionsFeature>
        <CommomFooter></CommomFooter>
</template>
<script setup lang="ts">
import { 
    ShoppingCartIcon,
    ClockIcon,
    HeartIcon,
    MegaphoneIcon,
    ClipboardIcon,
    CurrencyDollarIcon,
    ShareIcon,
    LifebuoyIcon,
    PhoneArrowUpRightIcon } from '@heroicons/vue/20/solid';

const userFeatures = [
  {
    name: 'Variedade de escolhas',
    description: 'Descubra uma ampla seleção de restaurantes e serviços, incluindo suas culinárias favoritas e muito mais.',
    icon: ShoppingCartIcon,
  },
  {
    name: 'Entregas rápidas',
    description: 'Aproveite entregas rápidas e confiáveis que garantem que seu pedido chegue fresco e no tempo prometido.',
    icon: ClockIcon,
  },
  {
    name: 'Favoritos à mão',
    description: 'Salve seus restaurantes e serviços favoritos para acessos rápidos e pedidos recorrentes com apenas um toque.',
    icon: HeartIcon,
  },
]

const restaurantFeatures = [
  {
    name: 'Visibilidade Ampliada',
    description: 'Aumente o alcance do seu restaurante com nossa plataforma, atraindo mais clientes em sua região através do nosso marketing especializado.',
    icon: MegaphoneIcon
  },
  {
    name: 'Gestão Simplificada',
    description: 'Gerencie pedidos, acompanhe o estoque e visualize insights importantes sobre seus clientes com nosso dashboard intuitivo e ferramentas analíticas.',
    icon: ClipboardIcon
  },
  {
    name: 'Custos Reduzidos',
    description: 'Aproveite nossa estrutura de taxas competitivas e aumente sua rentabilidade. Nós investimos em você, reduzindo custos operacionais e aumentando suas margens.',
    icon: CurrencyDollarIcon
  },
  {
    name: 'Integração com Redes Sociais',
    description: 'Promova seu restaurante nas redes sociais diretamente através de nossa plataforma, alcançando uma audiência maior e engajando clientes de maneira eficaz.',
    icon: ShareIcon
  },
  {
    name: 'Suporte Dedicado',
    description: 'Conte com o apoio de nossa equipe de suporte dedicada para resolver quaisquer dúvidas ou problemas, garantindo que sua operação nunca pare.',
    icon: LifebuoyIcon
  },
  {
    name: 'Personalização do Cardápio',
    description: 'Atualize seu cardápio digital a qualquer momento, incluindo fotos de alta qualidade, descrições detalhadas e preços atualizados para atrair mais clientes.',
    icon: PhoneArrowUpRightIcon
  },
]
</script>