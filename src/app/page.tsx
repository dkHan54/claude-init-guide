import { SlidePresenter } from '@/components/slides';
import { slides } from '@/data/slides';

export default function Home() {
  return <SlidePresenter slides={slides} />;
}
