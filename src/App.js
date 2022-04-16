import React from 'react';
import Question from './Question.js'

export default function App(){

  return(
    <div className="card">
      <h3 className="title">Frequently Asked Questions</h3>
      <div className="questions">
        <Question ques="Why do I need premium subscription ?" ans="Unicorn vinyl poutine brooklyn, next level direct trade iceland. Shaman copper mug church-key coloring book, whatever poutine normcore fixie cred kickstarter post-ironic street art."/>
        <Question ques="How to change the payment method ?" ans="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi nihil cum culpa maiores vitae aspernatur excepturi quos nemo adipisci assumenda. Dolorum officiis quia explicabo dignissimos cum labore eos, nesciunt asperiores?"/>
        <Question ques="How to cancel the subscription ?" ans="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi nihil cum culpa maiores vitae aspernatur excepturi quos nemo adipisci assumenda. Dolorum officiis quia explicabo dignissimos cum labore eos, nesciunt asperiores?"/>
        <Question ques="How to choose the right plan ?" ans="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi nihil cum culpa maiores vitae aspernatur excepturi quos nemo adipisci assumenda. Dolorum officiis quia explicabo dignissimos cum labore eos, nesciunt asperiores?"/>
        <Question ques="Do I have to allow the use of cookes ?" ans="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi nihil cum culpa maiores vitae aspernatur excepturi quos nemo adipisci assumenda. Dolorum officiis quia explicabo dignissimos cum labore eos, nesciunt asperiores?"/>
      </div>
    </div>
  )
}


