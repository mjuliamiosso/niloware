import "./styles/page.scss";
import Hero from './sections/Hero/Hero'
import ResourceCard from "./components/ResourceCard/ResourceCard";
import { faPlus } from '@fortawesome/free-solid-svg-icons'

export default function Home() {
  return (
    <main>
      <Hero></Hero>
    </main>
  );
}
