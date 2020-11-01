/* var typing_title = document.getElementById('typing_title');

var title_typewriter = new Typewriter(typing_title, {
  loop: false,
  cursor: ""
});

var title_text = "Shashikant Kulkarni"
title_typewriter.typeString(title_text)
  .callFunction(end_typing_title)
  .start();

function end_typing_title() {
  title_typewriter.stop();
  typing_title.innerHTML = title_text
}
 */
var typing_description = document.getElementById('typing_description');

var description_typewriter = new Typewriter(typing_description, {
  loop: true,
  delay: 80,
  autoStart: true,
  deleteSpeed: 5
});

description_typewriter.typeString('Hello!')
  .pauseFor(1000)
  .deleteAll()

  .typeString("I'm a software <strong>consultant/freelancer</strong>")
  .pauseFor(1500)
  .deleteChars(30)

  //.typeString("<strong>Global Data Science Ambassador @ HP</strong> & <strong>NVIDIA</strong>")
  .typeString("<strong>Big Data developer</strong>")
  .pauseFor(1500)
  .deleteAll()

  .typeString("I'm skilled in <strong>Kafka, Spark, Cassandra</strong>")
  .pauseFor(1500)
  .deleteChars(34)

  .typeString("an aspiring <strong>Machine Learner</strong>")
  .pauseFor(1500)
  .deleteChars(24)

  .typeString("<strong>AI</strong> enthusiast")
  .pauseFor(1500)
  .deleteAll()
  .start();