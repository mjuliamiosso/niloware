import "./styles/page.scss";
import Hero from './sections/Hero/Hero'
import ProcessButton from './components/ProcessButton/ProcessButton'
import ResourceCard from "./components/ResourceCard/ResourceCard";
import { faPlus } from '@fortawesome/free-solid-svg-icons'

export default function Home() {
  return (
    <main>
      <Hero></Hero>
      <ProcessButton></ProcessButton>
    </main>
  );
}
