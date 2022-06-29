import { Header } from "./components/Header";
import { Post } from "./Post"

import './global.css';

export function App() {
  return (
    <div>
      <Header />

      <Post author="Michelle Thaynara" content="Conteúdo do post de Michelle!!!" />
      <Post author="Ricardo Oliveira" content="Conteúdo do post de Ricardo!!!" />
      <Post author="Desconhecido" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga officiis odio sed mollitia aperiam iure tenetur nobis aliquam, odit culpa. Tempore, natus accusamus facere cupiditate iure porro! Iusto, accusamus adipisci." />
    </div>
  )
}