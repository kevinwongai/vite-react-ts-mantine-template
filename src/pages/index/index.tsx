import { FeaturesCards } from './FeaturesCards'
import { HeroContentLeft } from './HeroContentLeft'
import { ArticlesCardsGrid } from './ArticlesCardsGrid'
import { FaqWithImage } from '@/components/FaqWithImage/FaqWithImage'


export default function Index() {

  return (
    <div>
      <HeroContentLeft />
      <FeaturesCards />
      <ArticlesCardsGrid />
      <FaqWithImage />
    </div>
  );
}