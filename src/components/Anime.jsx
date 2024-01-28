import React from "react";
import anime2 from "../assets/anime2.jpg";
import { Accordion } from "react-bootstrap";

const Anime = () => {
  return (
    <>
      <div className="anime">
        <h1>Anime</h1>
        <div className="info_container">
          <div className="img_container">
            <img src={anime2} alt="" />
          </div>
          <div className="text_container">
            <p>
              I started watching anime back in 10th class and had Naruto as my
              first anime (that i hell of an anime) but my main anime watching
              time was in the lockdown in online classes. I just used binge
              watch any and every anime i could find. I have watched over 70+
              animes and my favourite anime is "Blue Lock" and "Summertime
              Rendering". I have watched all the mainstream anime and some of
              the underrated ones too. here is a list of all the animes that i
              have watched:
            </p>
          </div>
        </div>

        <Accordion className="accordian">
          <Accordion.Item eventKey="0" className="accordian_item">
            <Accordion.Header className="accordian_header">
              List of watched animes
            </Accordion.Header>
            <Accordion.Body className="accordian_body">
              <ol>
                <li> Naruto </li>
                <li> Naruto Shippuden </li>
                <li> Tokyo Ghoul </li>
                <li> Death Note </li>
                <li> Attack on Titan </li>
                <li> Fullmetal alchemist brotherhood </li>
                <li> My hero academia </li>
                <li> Hunter x hunter </li>
                <li> Demon slayer </li>
                <li> One punch man </li>
                <li> Stiens; gate </li>
                <li> Your name(kimi no na wa) </li>
                <li> I want to eat your pancreas </li>
                <li> Weathering with you </li>
                <li> A silent voice </li>
                <li> Code Geass </li>
                <li> Rascal does not dream of bunny girl senpai </li>
                <li> Your lie in april </li>
                <li> 7 deadly sins </li>
                <li> Rent a girlfriend </li>
                <li> Horimiya </li>
                <li> Kaguya sama </li>
                <li> Erased </li>
                <li> Inazuma eleven </li>
                <li> Science fell in love, so i tried to prove it </li>
                <li> Haikyuu </li>
                <li> Nisekoi </li>
                <li> Black clover </li>
                <li> Higehiro </li>
                <li> Prison school </li>
                <li> Assassination classroom </li>
                <li> Dr. Stone </li>
                <li> Mob Psycho 100 </li>
                <li> Domestic Girlfriend </li>
                <li> Shokugeki no souma(food wars) </li>
                <li> Mushoku tensei a jobless reincarnation </li>
                <li> Tonikawa </li>
                <li> Promise neverland </li>
                <li> Garden of words </li>
                <li> Blue exorcist </li>
                <li> Future diary </li>
                <li> Quintessential quintuplet </li>
                <li> Kaichou wa Maid sama </li>
                <li> Komi cant communicate </li>
                <li> Jojo's bizzare adventure </li>
                <li> Scissor seven </li>
                <li> Love is hard for otaku </li>
                <li> My dress up darling </li>
                <li> Classroom of elite </li>
                <li> Chainsaw man </li>
                <li> Spy family </li>
                <li> Ao ashi </li>
                <li> Kurokos basketball </li>
                <li> Eminence in shadow </li>
                <li> Tokyo revengers </li>
                <li> Inukai san dog </li>
                <li> Spy classroom </li>
                <li> Blue lock </li>
                <li> Bungo stray dog </li>
                <li> Lycoris recoil </li>
                <li> One piece </li>
                <li> Angel next door spoils me rotten </li>
                <li> Tokyo ward 24 </li>
                <li> Oshi no ko </li>
                <li> Mashle and magic </li>
                <li> Zom 100 </li>
                <li> my happy marriage </li>
                <li> Dark gathering </li>
                <li> kakegurui </li>
                <li> our dating story </li> <li> scums wish </li>
                <li> my romantic comedy </li>
                <li> more than a married couple but less than lovers </li>
                <li> my love story with yamada kun at lvl99 </li>
              </ol>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </>
  );
};

export default Anime;
