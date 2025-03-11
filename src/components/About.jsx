import React from 'react'
import Image from 'next/image'

import aboutImg from "../../public/images/aboutImg.jpeg"

const About = () => {
  return (
    <div>
        <div className="container">
    <div className="header-bg">
        <div className="about-header">
            <div className="about-header__content">
                <h1>
                    nice to meet you!
                    <i className="twa twa-ribbon"></i>
                    <br />
                    i'm tithi, business analyst @ 
                    <a target="_blank" href="https://business.meta.com/">springer
                    </a>
                </h1>
                <p>
                    places i exist on the internet
                    <i className="twa twa-computer"></i>
                </p>
                <ul className="links links--stack links--body">
                    <li>
                        <a target="_blank" href="https://www.instagram.com/joanne.cho/">
                            <i className="twa twa-tulip"></i> instagram
                        </a>
                    </li>
                    <li>
                        <a target="_blank" href="https://twitch.tv/happiflower">
                            <i className="twa twa-video-game"></i> medium
                        </a>
                    </li>
                    <li>
                        <a target="_blank" href="https://open.spotify.com/user/joanne.cho?si=dae56d096c2f4aee">
                            <i className="twa twa-headphones"></i> spotify
                        </a>
                    </li>
                </ul>
                {/* <p>
                    <a target="_blank" href="mailto: joannecho.ux@gmail.com">
                        <i className="twa twa-star"></i> contact me
                    </a> for my resume!
                </p> */}
            </div>
            <div className="about-header__image">
                {/* <Image src={aboutImg} width={40} height={40} alt='tithi'/>  */}
                <img src={aboutImg.src} alt="joanne cho" />
            </div>
        </div>
        <div className="header-bg__pink"></div>
        <div className="header-bg__purple"></div>
    </div>
    <div className="divider">
    <i className="divider__icon twa twa-lg twa-sparkles"></i>
</div>
</div>

<div className="container">
    <div className="about-body">
        <h2>
            a lil about me
            <i className="twa twa-cherries"></i>
        </h2>
        <h3>
            i'm a pisces (ᴗ_ ᴗ。)ꕤ*.ﾟ
        </h3>
        <p>
            so i really value the compassion and empathy that comes with
            design thinking. i love collaborating with teams to help make people's lives easier
            through thoughtful design! ଘ(੭˃ᴗ˂)੭
        </p>
        <h3>
            i'm currently @ meta
        </h3>
        <p>
            designing experiences that connect businesses to their customers!
         i am currently crafting experiences at 
            <a target="_blank" href="https://business.meta.com/">Meta</a> 
            that empower businesses to meet their customers' needs!
            i love designing simple and delightful experiences to make things that may be overwhelming, 
            a bit less daunting.
            <i className="twa twa-cloud"></i>
        </p>
        <h3>
            when i'm not designing...
        </h3>
        <p>
            my interests include writing extremely honest yelp reviews (i'm yelp elite!), getting
            boba with 25% sugar & less ice, collecting sonny angels, and trying not to demote
            on valorant
            <i className="twa twa-smiling-face-with-halo"></i><i className="twa twa-cherry-blossom"></i>
            you can also find me watching kdramas/reality tv, going to concerts, obsessing over how cute <a
                href="https://instagram.com/misspeachygirly" target="_blank">peach</a> & <a
                href="https://instagram.com/mochi.cho" target="_blank">mochi</a> are,
            or planning my next trip!
            <i className="twa twa-heart-with-ribbon"></i> <a href="https://youtu.be/_u2MsLCAqEk" target="_blank">check out my
                korea vlog! ૮ ˶ᵔ ᵕ ᵔ˶ ა</a>
        </p>
        <h3>
            some fun facts ٩(⸝⸝ᵕᴗᵕ⸝⸝)و ✧*.ﾟ
        </h3>
        <p>
            <i className="twa twa-computer"></i>
            education — i majored in hci, double-minored in cs (<i className="twa twa-face-with-open-mouth"></i>) & design at uc san diego!
        </p>
        <p>
            <i className="twa twa-sun"></i>&nbsp;
            zodiac signs — pisces sun, cancer moon, cancer rising <i className="twa twa-ocean"></i> according to <a
            href="https://www.trulydivine.com/sun-moon/pisces-sun-with-cancer-moon-and-cancer-rising" target="_blank">this site</a>, my strengths are being
            "introspective, intuitive, versatile, ultra-sensitive, thoughtful and caring" <i className="twa twa-dizzy"></i>
        </p>
        <p>
            <i className="twa twa-cloud"></i>&nbsp;
            mbti/enneagram — 
            <a
            href="https://hubspot.crystalknows.com/personality-type/esfj" target="_blank">esfj-t</a> (but sometimes estj-t i guess?) / 
            <a
            href="https://enneagramuniverse.com/enneagram/learn/enneagram-wings/enneagram_6w7/" target="_blank">enneagram 6w7</a>
        </p>
        <p>
            <i className="twa twa-teacup-without-handle"></i>&nbsp;
            drinks of choice — strawberry matcha latte, jasmine milk tea, passion fruit green tea
        </p>
        <p>
            <i className="twa twa-peach"></i>&nbsp;
            recent concerts — twice, ive, fred again, olivia rodrigo, OSL, (g)i-dle, wave to earth, taylor swift, & ? <i className="twa twa-eyes"></i>
        </p>
        <p>
            <i className="twa twa-strawberry"></i>&nbsp;
            kdrama recs — a time called you, hometown cha cha cha, 20th century girl, youth of may, queen of tears, 
            25 21, lovely runner, and so many more tbh!!
        </p>
       <p>
            <i className="twa twa-musical-note"></i>&nbsp;
            go-to karaoke songs — 'ma boy' by sistar19, 'gee' by SNSD, 'gotta go my own way' from hsm 2, or anything by taylor swift!
        </p> 
    </div>
</div>
    </div>
  )
}

export default About